import React, { useEffect, useState } from 'react';
import { getData } from '../../Api/Database';
import Flex from '../ui/flex/Flex';
import Classes from './Board.module.css';
import TabBar from './tabBar/TabBar';
import TaskList from './TaskList/TaskList';
function Board(props) {
  const [tabs, updateTabs] = useState([
    {
      name: 'Sample',
      image:
        'https://images.unsplash.com/photo-1640622308205-8ad9478c2386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
  ]);
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
            left: '30%',
          }}
        >
          Welcome to Jodd App... Get Started{' '}
        </h1>
      )}
      {props.data && <TaskList data={props.data} AuthUser={props.AuthUser} />}
    </Flex>
  );
}

export default Board;
