import React from "react";
import { Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import "./App.css";
import AuthPage from "./pages/AuthPage";
function App() {
  return (
    <Layout>
      <Route path="/" element={<HomePage />} />
      <Route path="/Auth/:type" element={<AuthPage />} />
    </Layout>
  );
}

export default App;
