import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";
import Flex from "../components/ui/flex/Flex";
import Classes from "./Layout.module.css";
// import your route components too
function Layout(props) {
  return (
    <main>
      <BrowserRouter>
        <Flex className="f-start">
          <section className={Classes.Right_Layout}>
            <SideBar />
          </section>
          <section className={Classes.Left_Layout}>
            <Routes>{props.children}</Routes>
          </section>
        </Flex>
      </BrowserRouter>
    </main>
  );
}

export default Layout;
