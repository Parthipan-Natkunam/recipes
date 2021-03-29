import * as React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { PageContainer, BackLink, Error } from "../components/primitives";
import RecipeDetail from "../components/RecipeDetail";
import { useApollo } from "../api/base";
import { GET_RECIPE_BY_ID } from "../api/queries";

export default function RecipeDetails({ recipe, error }) {
  const router = useRouter();

  const HeadAttributes = React.useMemo(
    () => (
      <Head>
        <title>Recipe Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    ),
    []
  );

  const componentSelector = React.useMemo(() => {
    return {
      errorComponent: (
        <Error
          title="Oops! Something Went Wrong"
          description="Something went wrong. Please try reloading this page"
          cta={{ text: "Reload page", action: router.reload }}
        />
      ),
      noDataComponent: (
        <Error
          title="Recipe Does Not Exist"
          description="Unable to load data for this recipe. Please go back to the recipe list"
          cta={{
            text: "Back to Recipe List",
            action: () => router.push("/", "/"),
          }}
        />
      ),
      detailComponent: (
        <>
          <BackLink link="/" as="/" text="<< Back to recipes list" />
          <RecipeDetail {...recipe} />
        </>
      ),
    };
  }, []);

  const innerComponent = React.useMemo(() => {
    switch (true) {
      case error:
        return "errorComponent";
      case recipe === null:
        return "noDataComponent";
      default:
        return "detailComponent";
    }
  }, [recipe, error]);

  return (
    <PageContainer bg="#fff">
      {HeadAttributes}
      {componentSelector[innerComponent]}
    </PageContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const client = useApollo();
  let error = false,
    recipe = null;
  try {
    const { data } = await client.query({
      query: GET_RECIPE_BY_ID,
      variables: { id },
    });
    recipe = data.recipe ?? null;
  } catch (err: unknown) {
    error = true;
  }
  return {
    props: {
      recipe,
      error,
    },
  };
};
