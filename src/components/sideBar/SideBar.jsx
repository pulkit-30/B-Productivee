import React, { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import Button from "../ui/Button/Button";
import Flex from "../ui/flex/Flex";
import Classes from "./SideBar.module.css";
import { LogOut } from "../../Api/User";
import { Link, NavLink } from "react-router-dom";
function SideBar() {
  let Auth = useContext(AuthContext);
  const handelLogOut = () => {
    // LogOut({
    //   idToken: Auth.User.idToken,
    //   deleteProvider: ["password"],
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => {
    //     console.log(err);
    //   });
    Auth.Logout();
  };
  return (
    <Flex className={"column c-white s-btw " + Classes.SideBar}>
      <h1>Jodd App</h1>
      <Flex className={"column " + Classes.menu}>
        <NavLink to="/" className="link">
          <i className="fas fa-home"></i> Home
        </NavLink>

        <NavLink to={"/Profile/" + Auth.User?.localId} className="link">
          <i className="fas fa-user"></i> Profile
        </NavLink>
        <NavLink to="/" className="link">
          <i className="fas fa-cog"></i> Settings
        </NavLink>
        {Auth.isUser && Auth.User && (
          <Button onClick={handelLogOut}>LogOut</Button>
        )}
        {!Auth.User && (
          <Flex className="column">
            <Link to="/Auth/SignIn">
              <Button>SignIn</Button>
            </Link>
            <Link to="/Auth/SignUp">
              <Button className={Classes.Button__secondary}>SignUp</Button>
            </Link>
          </Flex>
        )}
      </Flex>
      <Flex className={Classes.right_foot}>
        Copyright © All rights reserved
      </Flex>
    </Flex>
  );
}

export default SideBar;
