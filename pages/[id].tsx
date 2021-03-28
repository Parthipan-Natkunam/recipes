import Head from "next/head";
import { PageContainer, PageHeader } from "../components/primitives";

export default function RecipeDetails() {
  return (
    <PageContainer>
      <Head>
        <title>Recipe Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Recipe Detail" />
      <h2>Details page </h2>
    </PageContainer>
  );
}
