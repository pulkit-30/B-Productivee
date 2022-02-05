import React from "react";
import Classes from "./Button.module.css";
function Button(props) {
  return (
    <button className={props.className + " " + Classes.Button}>
      {props.children}
    </button>
  );
}

export default Button;
