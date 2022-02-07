import React from "react";
import Flex from "../ui/flex/Flex";
import HomeImage from "../../assets/login_screen_image.png";
import Classes from "./Home.module.css";
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
        <h1>Jodd App</h1>
        <h1>Lets get Started</h1>
        <Flex className="column">
          <p>
            Collaborate and plan together across multiple devices on JodWork's
            minimalist Interface
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
