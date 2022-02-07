import React from "react";
import Button from "../ui/Button/Button";
import Flex from "../ui/flex/Flex";
import Classes from "./SideBar.module.css";
import { Link, NavLink } from "react-router-dom";
import { SignOut } from "../../Api/User";
function SideBar(props) {
  const Auth = { isUser: props.isUser, User: props.AuthUser };
  const handelLogout = () => {
    SignOut();
  };
  return (
    <Flex className={"column c-white s-btw " + Classes.SideBar}>
      <h1>Jodd App</h1>
      <Flex className={"column " + Classes.menu}>
        {" "}
        <NavLink to="/" className={"link " + Classes.item}>
          <i className="fas fa-home"></i> Home
        </NavLink>
        <NavLink
          to={"/Profile/" + Auth.User?.uid}
          className={"link " + Classes.item}
        >
          <i className="fas fa-user"></i> Profile
        </NavLink>
        <NavLink to="/" className={"link " + Classes.item}>
          <i className="fas fa-cog"></i> Settings
        </NavLink>
        {Auth.isUser && Auth.User && (
          <Button onClick={handelLogout}>LogOut</Button>
        )}
        {!Auth.User && (
          <Flex className={"s-eve " + Classes.BtnBox}>
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
