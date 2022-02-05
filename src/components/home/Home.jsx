import React from "react";
import Flex from "../ui/flex/Flex";
import HomeImage from "../../assets/login_screen_image.png";
import Classes from "./Home.module.css";
import Button from "../ui/Button/Button";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Flex className={Classes.HomePage}>
      <div className={Classes.HomePage_Left}>
        <img
          src={HomeImage}
          alt="LoginImage"
          className={Classes.HomePage_Image}
        />
      </div>
      <Flex className={"column s-eve " + Classes.HomePage_Right}>
        <h1>Jodd Work</h1>
        <h1>Lets get Started</h1>
        <Flex className="column">
          <p>
            Collaborate and plan together across multiple devices on JodWork's
            minimalist Interface
          </p>
          <Flex className={"s-eve " + Classes.Btn_Box}>
            <Link to="/Auth/SignIn">
              <Button className={Classes.Btn}>SignIn</Button>
            </Link>
            <Link to="/Auth/SignUp">
              <Button className={Classes.Button__secondary}>SignUp</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
