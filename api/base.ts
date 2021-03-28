import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const CONTENTFUL_GQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENV}`;

const httpLink = createHttpLink({
  uri: CONTENTFUL_GQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN}`,
    },
  };
});

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

const initializeApolloClient = () => {
  let _apolloClient = apolloClient ?? createApolloClient();

  if (typeof window === "undefined") {
    return _apolloClient;
  }

  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
};

export const useApollo = () => {
  return initializeApolloClient();
};
