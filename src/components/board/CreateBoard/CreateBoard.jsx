import React, { useRef } from "react";
import Button from "../../ui/Button/Button";
import Flex from "../../ui/flex/Flex";
import Classes from "./CreateBoard.module.css";
function CreateBoard(props) {
  const name = useRef();
  return (
    <Flex className={Classes.CreateBoard + " column"}>
      <i
        className={Classes.Close + " fas fa-times"}
        onClick={() => {
          props.setShow(false);
        }}
      ></i>
      <h2>Create Board</h2>
      <img
        src="https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        alt="sample"
      />
      <label htmlFor="name">Board Name</label>
      <input type="text" id="name" placeholder="Enter Board name" ref={name} />
      <Button onClick={() => {}}>Create</Button>
    </Flex>
  );
}

export default CreateBoard;
