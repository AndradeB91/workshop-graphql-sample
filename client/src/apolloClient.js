import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  link: new HttpLink(), //default aponta pra /graphql
  cache: new InMemoryCache()
});

export default client;
