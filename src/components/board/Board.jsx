import React, { useContext, useEffect, useState } from "react";
import { getData, getParticularData } from "../../Api/Database";
import Flex from "../ui/flex/Flex";
import Classes from "./Board.module.css";
import CreateBoard from "./CreateBoard/CreateBoard";
import Tab from "./tabBar/Tab";

function Board(props) {
  const [create, setCreate] = useState(false);
  return (
    <Flex className={Classes.Board + " column"}>
      <Flex className={Classes.Tabbar + " f-start"}>
        <Tab>Sample Board</Tab>
        <Tab>Sample Board</Tab>
        <Tab>Sample Board</Tab>
        <Tab>Sample Board</Tab>
        <Tab>Sample Board</Tab>
        <Tab>Sample Board</Tab>
      </Flex>
      <h1>Welcome to Jodd App... Get Started </h1>
      {create && (
        <CreateBoard
          setShow={setCreate}
          AuthUser={props.AuthUser}
          isUser={props.isUser}
        />
      )}
      <Flex
        className={Classes.AddIcon + " c-white"}
        onClick={() => {
          setCreate(true);
        }}
      >
        +
      </Flex>
    </Flex>
  );
}

export default Board;
