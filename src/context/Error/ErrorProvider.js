import React from "react";
import { useReducer } from "react";
import ErrorContext from "./ErrorContext";
const defaultState = {
  isError: false,
  Error: undefined,
};
const HandelReducer = (state, action) => {
  if (action.type === "Throw") {
    return {
      isError: true,
      Error: action.Error,
    };
  } else if (action.type === "Clear") {
    return {
      isError: false,
      Error: undefined,
    };
  }
  return defaultState;
};
function ErrorProvider(props) {
  const [state, dispatch] = useReducer(HandelReducer, defaultState);
  const ThrowError = (error) => {
    return dispatch({
      type: "Throw",
      Error: error,
    });
  };
  const ClearError = () => {
    return dispatch({
      type: "Clear",
    });
  };
  const ContextValue = {
    isError: state.isError,
    Error: state.Error,
    ThrowError: ThrowError,
    ClearError: ClearError,
  };
  return (
    <ErrorContext.Provider value={ContextValue}>
      {props.children}
    </ErrorContext.Provider>
  );
}

export default ErrorProvider;
