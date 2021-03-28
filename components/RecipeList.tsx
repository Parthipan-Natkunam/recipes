import * as React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { Card, Image as CardImage, Title as CardTitile } from "./primitives";
import { GET_ALL_RECIPES } from "../api/queries";

const Recipes: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_RECIPES, {
    variables: { preview: false },
  });

  const router = useRouter();

  const navigateToDetailsPage = (id: string) => {
    router.push("/[id]", `/${id}`);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Errored...</h1>;

  const {
    recipeCollection: { items: recipes },
  } = data;

  return (
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
  );
};

export default Recipes;
