import React from "react";
import Classes from "./Flex.module.css";
function Flex(props) {
  return (
    <div className={props.className + " " + Classes.Flex} style={props.style}>
      {props.children}
    </div>
  );
}

export default Flex;
