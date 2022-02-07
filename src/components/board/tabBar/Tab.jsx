import React from "react";
import Flex from "../../ui/flex/Flex";
import Classes from "./Tab.module.css";
function Tab(props) {
  return (
    <Flex className={Classes.Tab + " s-eve"}>
      {props.children}
      <i className="fas fa-trash-alt"></i>
    </Flex>
  );
}

export default Tab;
