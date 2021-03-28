import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageContainer } from "../components/primitives";

export default function RecipeDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageContainer>
      <Head>
        <title>Recipe Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <a>{"<< Back to recipes list"}</a>
      </Link>
      <h2>{`Details page for ${id} `}</h2>
    </PageContainer>
  );
}
