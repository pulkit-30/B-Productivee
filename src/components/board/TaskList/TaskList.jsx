import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { setData } from '../../../Api/Database';
import Flex from '../../ui/flex/Flex';
import Task from './Task';
import Classes from './TaskList.module.css';
function TaskList(props) {
  const updateBoardData = (data) => {
    setData(data);
  };
  const params = useParams();
  const [newTaskList, updateTasklist] = useState([]);
  return (
    <Flex>
      {props.data.length !== 0 &&
        props.data.taskList.map((data, index) => {
          return (
            <Task
              data={data}
              key={index}
              AuthUser={props.AuthUser}
              callUpdate={updateBoardData}
              backupData={props.data}
              index={index}
            />
          );
        })}
      {newTaskList.length !== 0 &&
        newTaskList.map((data, index) => {
          return (
            <Task
              data={data}
              key={index}
              AuthUser={props.AuthUser}
              callUpdate={updateBoardData}
              backupData={props.data}
              index={index}
            />
          );
        })}
      <Flex
        className={Classes.AddTaskList}
        onClick={() => {
          var title = prompt('enter title');
          var newData = props.data;
          newData.taskList.push({
            title: title,
            createdBy: props.AuthUser.uid,
            cards: [],
          });
          updateBoardData({
            collection: 'boards',
            data: newData,
            id: params.id,
          });
          var new_TaskList = newTaskList;
          new_TaskList.push({
            title: title,
            createdBy: props.AuthUser.uid,
            cards: [],
          });
          updateTasklist(new_TaskList);
        }}
      >
        +
      </Flex>
    </Flex>
  );
}

export default TaskList;
