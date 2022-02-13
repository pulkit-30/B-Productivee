import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Flex from '../../ui/flex/Flex';
import Classes from '../Board.module.css';
import CreateBoard from '../CreateBoard/CreateBoard';
import Tab from './Tab';
function TabBar(props) {
  const [create, setCreate] = useState(false);
  const removeTab = (id) => {
    const tabs = props.tabs.filter((tab) => tab.id !== id);
    props.updateTabs(tabs);
  };
  const CreateTab = (tab) => {
    const tabs = [...props.tabs, tab];
    props.updateTabs(tabs);
  };
  return (
    <Flex className={Classes.Tabbar + ' f-start'}>
      {props.tabs.map((tab, index) => {
        return (
          <Link to={'/' + tab.id} key={index}>
            <Tab removeTab={removeTab} id={tab.id}>
              <img src={tab.image} />
              {tab.name}
            </Tab>
          </Link>
        );
      })}
      {create && (
        <CreateBoard
          setShow={setCreate}
          AuthUser={props.AuthUser}
          isUser={props.isUser}
          CreateTab={CreateTab}
        />
      )}
      <Flex
        className={Classes.AddIcon + ' c-white'}
        onClick={() => {
          setCreate(true);
        }}
      >
        +
      </Flex>
    </Flex>
  );
}

export default TabBar;
