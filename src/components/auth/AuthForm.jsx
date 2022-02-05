import React from "react";
import Flex from "../ui/flex/Flex";
import Button from "../ui/Button/Button";
import Classes from "./AuthForm.module.css";
function AuthForm(props) {
  const HandelSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Flex className={Classes.Form + " f-center column"}>
      <Flex className={"column " + Classes.Form_Top}>
        <h1>{props.isSignUp ? "SignUp" : "Sign In"}</h1>
        <p>
          {props.isSignUp
            ? "Enter your name,Email-id, and Password to register with us"
            : "Enter your name,Email-id, and Password to register with us"}
        </p>
      </Flex>
      <form onSubmit={HandelSubmit} className={Classes.Form_Box}>
        <Flex className="column">
          {props.isSignUp && <input type="text" />}
          <input type="email" />
          <input type="text" />
          <Button>{props.isSignUp ? "SignUp" : "Sign In"}</Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default AuthForm;
