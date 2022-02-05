import React from "react";
import { useParams } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
function AuthPage() {
  const params = useParams();
  console.log();
  return (
    <div>
      {(params.type === "SignUp" || params.type === "SignIn") && (
        <AuthForm isSignUp={params.type === "SignUp"} />
      )}
    </div>
  );
}

export default AuthPage;
