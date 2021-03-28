import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import {
  PageContainer,
  PageHeader,
  Image as CardImage,
  Title as CardTitile,
  Card,
} from "../components/primitives";

export default function Recipes({ recipes }) {
  const router = useRouter();

  //Could have used the Next Link component but doing this for semantic and  accessibility reasons
  const navigateToDetailsPage = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <PageContainer>
      <Head>
        <title>Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Recipes" />
      {recipes.map(({ id, title, image }) => {
        return (
          <Card key={id} clickHandler={() => navigateToDetailsPage(id)}>
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
