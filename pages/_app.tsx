import { ApolloProvider } from "@apollo/client";

import { GlobalStyle } from "../GlobalStyleReset";
import { useApollo } from "../api/base";

function MyApp({ Component, pageProps }) {
  const client = useApollo();

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
