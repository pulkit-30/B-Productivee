import React from "react";
const AuthContext = React.createContext({
  isUser: false,
  User: null,
  LogIn: (email, password) => {},
  LogOut: () => {},
});
export default AuthContext;
