import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { PageContainer, BackLink, Error } from "../components/primitives";
import RecipeDetail from "../components/RecipeDetail";
import { useApollo } from "../api/base";
import { GET_RECIPE_BY_ID } from "../api/queries";

export default function RecipeDetails({ recipe, error }) {
  const router = useRouter();

  if (error) {
    return (
      <Error
        title="Oops! Something Went Wrong"
        description="Something went wrong. Please try reloading this page"
        cta={{ text: "Reload page", action: router.reload }}
      />
    );
  }

  if (recipe === null) {
    return (
      <Error
        title="Recipe Does Not Exist"
        description="Unable to load data for this recipe. Please go back to the recipe list"
        cta={{
          text: "Back to Recipe List",
          action: () => router.push("/", "/"),
        }}
      />
    );
  }

  return (
    <PageContainer bg="#fff">
      <Head>
        <title>Recipe Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackLink link="/" />
      <RecipeDetail {...recipe} />
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
