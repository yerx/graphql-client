import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { ApolloLink } from "apollo-link";
import gql from "graphql-tag";

/**
 * Create a new apollo client and export as default
 */
// point Apollo to your API/server
const http = new HttpLink({ uri: "https://localhost:4000" });

const delay = setContext(
  (request) =>
    new Promise((success, fail) => {
      setTimeout(() => {
        success();
      }, 800);
    })
);

const link = ApolloLink.from([delay, http]);

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
