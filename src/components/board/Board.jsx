import React, { useContext, useEffect, useState } from "react";
import { getData, getParticularData } from "../../Api/Database";
import Flex from "../ui/flex/Flex";
import Classes from "./Board.module.css";
import CreateBoard from "./CreateBoard/CreateBoard";
import Tab from "./tabBar/Tab";

function Board() {
  const [create, setCreate] = useState(false);
  return (
    <Flex className={Classes.Board + " column"}>
      <Flex className={Classes.Tabbar + " f-start"}>
        <Tab>Board 1</Tab>
        <Tab>Board 2</Tab>
        <Tab>Board 3</Tab>
        <Tab>Board 4</Tab>
        <Tab>Board 5</Tab>
        <Tab>Board 6</Tab>
        <Tab>Board 7</Tab>
        <Tab>Board 8</Tab>
        <Tab>Board 9</Tab>
        <Tab>Board 10</Tab>
      </Flex>
      <h1>Welcome to Jodd App... Get Started </h1>
      {create && <CreateBoard setShow={setCreate} />}
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
