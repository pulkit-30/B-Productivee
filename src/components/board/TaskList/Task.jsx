import React, { useState } from 'react';
import Flex from '../../ui/flex/Flex';
import AddCard from './AddCard';
import Card from './Card';
import Classes from './Task.module.css';
function Task(props) {
  const [Cards, updateCards] = useState(props.data.cards);

  return (
    <Flex className={Classes.Task + ' column'}>
      <Flex className={Classes.Name + ' s-eve'}>
        <div>{props.data.title}</div>{' '}
        <div>
          <i className='fas fa-pen'></i>
          <i className='fas fa-trash-alt'></i>
        </div>
      </Flex>
      {Cards.map((card, index) => {
        return <Card data={card} key={index} AuthUser={props.AuthUser} />;
      })}
      <AddCard
        data={props.data}
        cards={Cards}
        updateCards={updateCards}
        AuthUser={props.AuthUser}
        callUpdate={props.callUpdate}
        backupData={props.backupData}
        index={props.index}
      />
    </Flex>
  );
}

export default Task;
