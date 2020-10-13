import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
// import the client
import client from "./client";
import App from "./components/App";
import "./index.css";

const Root = () => (
  <BrowserRouter>
    {/* Wrap the app in the Apollo Client using ApolloProvider and pass in the client */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
