import React from "react";
import Classes from "./Flex.module.css";
function Flex(props) {
  return (
    <div
      className={props.className + " " + Classes.Flex}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default Flex;
