import axios from "axios";
import config from "../config.json";
/**
 * All Requests related to User
 * @SignUp
 * @SignIn
 * @UserUpdate
 * @UserDelete
 */

const Auth = async (data) => {
  const target = data.isSignUp
    ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`
    : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`;
  const subscribe = await axios(target, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    },
  });
  return subscribe;
};

export { Auth };
