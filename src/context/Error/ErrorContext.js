import React from "react";
const ErrorContext = React.createContext({
  isError: false,
  Error: undefined,
  ThrowError: (error) => {},
  ClearError: () => {},
});
export default ErrorContext;
