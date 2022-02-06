import React, { useEffect } from "react";
import { useReducer } from "react";
import AuthContext from "./AuthContext";
const defaultState = {
  isUser: localStorage.getItem("isUser") || false,
  User: JSON.parse(localStorage.getItem("User")) || null,
};
const HandelReducer = (state, action) => {
  if (action.type === "LogIn") {
    return {
      isUser: true,
      User: action.User,
    };
  } else if (action.type === "Logout") {
    return {
      isUser: false,
      User: null,
    };
  }
  return defaultState;
};
function AuthProvider(props) {
  const [state, dispatch] = useReducer(HandelReducer, defaultState);
  /**
   * See Change In User
   * Set localStorage to store user data
   */
  useEffect(() => {
    localStorage.setItem("isUser", state.isUser);
    localStorage.setItem("User", JSON.stringify(state.User));
  }, [state.User, state.isUser]);

  const LogIn = (User) => {
    return dispatch({
      type: "LogIn",
      User: User,
    });
  };
  const Logout = () => {
    return dispatch({
      type: "Logout",
    });
  };
  const ContextValue = {
    isUser: state.isUser,
    User: state.User,
    LogIn: LogIn,
    Logout: Logout,
  };
  return (
    <AuthContext.Provider value={ContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
