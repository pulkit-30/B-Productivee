import React from "react";
import Classes from "../../layout/Layout.module.css";
function Hamburger(props) {
  const show = props.show;
  return (
    <div
      className={Classes.hamburger}
      onClick={() => {
        if (show) {
          props.setshow(false);
        } else {
          props.setshow(true);
        }
      }}
    >
      <div
        className={Classes.line}
        style={{
          transform: show ? "rotate(45deg) translateY(8px)" : "rotate(0)",
        }}
      ></div>
      <div
        className={Classes.line}
        style={{
          transform: show ? "rotate(-45deg) translateY(-8px)" : "rotate(0)",
        }}
      ></div>
    </div>
  );
}

export default Hamburger;
