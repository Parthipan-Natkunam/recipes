import * as React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import {
  Card,
  Image as CardImage,
  Title as CardTitile,
  Loader,
  PageWideLoader,
  Error,
} from "./primitives";
import { GET_ALL_RECIPES } from "../api/queries";

const Recipes: React.FC = () => {
  const [showTransition, setShowTransition] = React.useState<Boolean>(false);

  const { loading, error, data } = useQuery(GET_ALL_RECIPES, {
    variables: { preview: false },
  });

  const router = useRouter();

  const navigateToDetailsPage = (id: string) => {
    setShowTransition(true);
    router.push("/[id]", `/${id}`);
  };

  if (loading) return <Loader />;

  if (error)
    return (
      <Error
        title="Oops! Something Went Wrong"
        description="Something went wrong. Please try reloading this page"
        cta={{ text: "Reload page", action: router.reload }}
      />
    );

  let {
    recipeCollection: { items: recipes },
  } = data;

  const hasData = recipes && recipes.length > 0;

  if (hasData) {
    return (
      <>
        <h1>
          {recipes.map(({ sys: { id }, title, photo: { url: image } }) => {
            return (
              <Card key={id} clickHandler={() => navigateToDetailsPage(id)}>
                <CardImage src={image} alt={`picture of ${title}`} />
                <CardTitile text={title} />
              </Card>
            );
          })}
        </h1>
        {showTransition && <PageWideLoader />}
      </>
    );
  }

  return (
    <Error title=" No Data" description="No recipes available to display" />
  );
};

export default Recipes;
