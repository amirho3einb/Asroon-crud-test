import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store";
import Layout from "./components/Layout";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <App tab="home" />
      </Layout>
    </BrowserRouter>
  </Provider>
);
