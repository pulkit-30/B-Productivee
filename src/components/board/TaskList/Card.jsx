import React, { useState } from 'react';
import Flex from '../../ui/flex/Flex';
import Classes from './Card.module.css';
function Card(props) {
  const [show, setShow] = useState(false);
  return (
    <Flex className={Classes.Card}>
      <p>{props.data.name} </p>
      <i
        className={Classes.edit + ' fas fa-edit'}
        onClick={() => {
          if (show) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
      ></i>
      {show && (
        <Flex className={Classes.Menu + ' column'}>
          <Flex className={Classes.item}>Card Name</Flex>
          <Flex className={Classes.item}>Label Color</Flex>
          <Flex className={Classes.item}>Members</Flex>
          <Flex className={Classes.item}>Due Date</Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Card;
