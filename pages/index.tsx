import Head from "next/head";
import { GetStaticProps } from "next";

import {
  PageContainer,
  Image as CardImage,
  Title as CardTitile,
  Card,
} from "../components/primitives";

export default function Home({ recipes }) {
  return (
    <PageContainer>
      <Head>
        <title>Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {recipes.map(({ id, title, image }) => {
        return (
          <Card key={id}>
            <CardImage src={image} alt={`picture of ${title}`} />
            <CardTitile text={title} />
          </Card>
        );
      })}
    </PageContainer>
  );
}

//TODO: Replace with actual contentful data
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      recipes: [
        {
          id: "r001",
          title: "Recipe 1",
          image: "https://picsum.photos/200",
        },
        {
          id: "r002",
          title: "Recipe 2",
          image: "https://picsum.photos/200",
        },
      ],
    },
  };
};
