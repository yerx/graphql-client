import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

/**
 * Create a new apollo client and export as default
 */
// point Apollo to your API/server
const link = new HttpLink({ uri: "https://localhost:4000" });
// set up a cache
const cache = new InMemoryCache();

// initialize a client and pass in the link and the cache
const client = new ApolloClient({
  link,
  cache,
});

// export the client
export default client;

// go to index.js and import the client
