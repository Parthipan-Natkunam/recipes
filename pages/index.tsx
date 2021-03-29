import Head from "next/head";

import { PageContainer, PageHeader } from "../components/primitives";
import Recipes from "../components/RecipeList";

export default function RecipesPage() {
  return (
    <PageContainer>
      <Head>
        <title>Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Recipes" hasUnderline />
      <Recipes />
    </PageContainer>
  );
}
