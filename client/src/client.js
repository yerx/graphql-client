import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

/**
 * Create a new apollo client and export as default
 */
// point Apollo to your API/server
const link = new HttpLink({ uri: "https://rickandmortyapi.com/graphql" });
// set up a cache
const cache = new InMemoryCache();

// initialize a client and pass in the link and the cache
const client = new ApolloClient({
  link,
  cache,
});
// run a test query
// declare const query and use gql template tags to define a query
const query = gql`
  {
    characters {
      results {
        id
        name
      }
    }
  }
`;
// use the client to run the query
client.query({ query }).then((result) => console.log(result));

// export the client
export default client;

// go to index.js and import the client
