import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import Board from "./components/board/Board";
import Error from "./pages/Error";
function App_Routes(props) {
  const AuthUser = props.AuthUser;
  const isUser = props.isUser;
  return (
    <Routes>
      <Route
        path="/"
        element={
          isUser && AuthUser ? (
            <Board AuthUser={AuthUser} isUser={isUser} />
          ) : (
            <HomePage />
          )
        }
      />
      <Route path="/Auth/:type" element={<AuthPage />} />
      <Route
        path="/Profile/:id"
        element={<ProfilePage AuthUser={AuthUser} isUser={isUser} />}
      />
      <Route path="*" element={<Error AuthUser={AuthUser} isUser={isUser} />} />
    </Routes>
  );
}

export default App_Routes;
