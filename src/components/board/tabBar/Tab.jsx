import React from 'react';
import { deleteDoc } from '../../../Api/Database';
import Flex from '../../ui/flex/Flex';
import Classes from './Tab.module.css';
function Tab(props) {
  return (
    <Flex className={Classes.Tab + ' s-eve'}>
      {props.children}
      <i
        className='fas fa-trash-alt'
        onClick={() => {
          deleteDoc({ collection: 'boards', id: props.id });
          props.removeTab(props.id);
        }}
      ></i>
    </Flex>
  );
}

export default Tab;
