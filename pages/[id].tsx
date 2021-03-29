import Head from "next/head";
import { GetServerSideProps } from "next";

import { PageContainer, BackLink } from "../components/primitives";
import RecipeDetail from "../components/RecipeDetail";

export default function RecipeDetails({ recipe }) {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      recipe: {
        title: "White Cheddar Grilled Cheese with Cherry Preserves & Basil",
        photo: {
          url:
            "https://images.ctfassets.net/kk2bw5ojx476/61XHcqOBFYAYCGsKugoMYK/0009ec560684b37f7f7abadd66680179/SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg",
        },
        description:
          "*Grilled Cheese 101*: Use delicious cheese and good quality bread; make crunchy on the outside and ooey gooey on the inside; add one or two ingredients for a flavor punch! In this case, cherry preserves serve as a sweet contrast to cheddar cheese, and basil adds a light, refreshing note. Use __mayonnaise__ on the outside of the bread to achieve the ultimate, crispy, golden-brown __grilled cheese__. Cook, relax, and enjoy!",
        chef: { name: "John Doe" },
        calories: 788,
        tagsCollection: {
          items: null,
        },
      },
    },
  };
};
