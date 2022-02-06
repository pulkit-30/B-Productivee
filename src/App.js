import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import Error from "./pages/Error";
import AuthContext from "./context/Auth/AuthContext";
import Board from "./pages/Board";
import ProfilePage from "./pages/ProfilePage";
function App() {
  const Auth = useContext(AuthContext);
  return (
    <Layout>
      <Route
        path="/"
        element={Auth.isUser && Auth.User ? <Board /> : <HomePage />}
      />
      <Route path="/Auth/:type" element={<AuthPage />} />
      <Route path="/Profile/:id" element={<ProfilePage />} />
      <Route path="*" element={<Error />} />
    </Layout>
  );
}

export default App;
