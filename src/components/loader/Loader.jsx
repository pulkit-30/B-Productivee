import React from "react";
import Flex from "../ui/flex/Flex";
import Classes from "./Loader.module.css";
function Loader() {
  return (
    <Flex className={Classes.LoaderBox}>
      <div className={Classes.Loader}></div>
    </Flex>
  );
}

export default Loader;
