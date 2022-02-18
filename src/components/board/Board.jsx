import React, { useEffect, useState } from 'react';
import { getData } from '../../Api/Database';
import Flex from '../ui/flex/Flex';
import Classes from './Board.module.css';
import TabBar from './tabBar/TabBar';
import TaskList from './TaskList/TaskList';
function Board(props) {
  const [tabs, updateTabs] = useState([]);
  useEffect(() => {
    getData({ collection: 'boards' }).then((res) => {
      res = res.filter(
        (data) => data.assignedTo.includes(props.AuthUser?.uid) && data
      );
      updateTabs(res);
    });
  }, []);

  return (
    <Flex className={Classes.Board + ' column'}>
      <TabBar
        tabs={tabs}
        updateTabs={updateTabs}
        AuthUser={props.AuthUser}
        isUser={props.isUser}
      />
      {props.data === null && (
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            left: '20%',
          }}
        >
          Welcome to B-Productivee App... Get Started{' '}
        </h1>
      )}
      {props.data && <TaskList data={props.data} AuthUser={props.AuthUser} />}
    </Flex>
  );
}

export default Board;
