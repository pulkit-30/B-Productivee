import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
// import your route components too
function Layout(props) {
  return (
    <BrowserRouter>
      <Routes>{props.children}</Routes>
    </BrowserRouter>
  );
}

export default Layout;
