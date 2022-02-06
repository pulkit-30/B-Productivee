import React, { useContext, useRef } from "react";
import Flex from "../ui/flex/Flex";
import Button from "../ui/Button/Button";
import Classes from "./AuthForm.module.css";
import { Auth } from "../../Api/User";
import AuthContext from "../../context/Auth/AuthContext";
import ErrorContext from "../../context/Error/ErrorContext";
import { useNavigate } from "react-router-dom";
function AuthForm(props) {
  const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);
  const Error = useContext(ErrorContext);
  const email = useRef();
  const password = useRef();
  const HandelSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
      isSignUp: props.isSignUp,
    };

    Auth(data)
      .then((res) => {
        console.log(res.data);
        AuthCtx.LogIn(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        Error.ThrowError(err);
        navigate("/error");
      });
  };
  return (
    <Flex className={Classes.Form + " f-center column"}>
      <Flex className={"column " + Classes.Form_Top}>
        <h1>{props.isSignUp ? "SignUp" : "Sign In"}</h1>
        <p>
          {props.isSignUp
            ? "Enter your name,Email-id, and Password to register with us"
            : "Enter your Email-id, and Password to LogIn with us"}
        </p>
      </Flex>
      <form onSubmit={HandelSubmit} className={Classes.Form_Box}>
        <Flex className="column f-start">
          <React.Fragment>
            <label htmlFor="email">Email</label>
            <input type="email" ref={email} placeholder="Email" id="email" />
          </React.Fragment>
          <React.Fragment>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              ref={password}
              placeholder="Password"
              id="password"
            />
          </React.Fragment>
          <Button>{props.isSignUp ? "SignUp" : "Sign In"}</Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default AuthForm;
