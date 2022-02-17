import React, { useContext } from 'react';
import MessageContext from '../../context/Message/MessageContext';
import Flex from '../ui/flex/Flex';
import Classes from './Message.module.css';
function Message() {
  const Message = useContext(MessageContext);
  Message.isMessage &&
    setTimeout(() => {
      Message.ClearMessage();
    }, 5000);
  return (
    <Flex
      className={Classes.MessageBox}
      style={{
        visibility: Message.isMessage ? 'visible' : 'hidden',
        transform: Message.isMessage ? 'translateX(0)' : 'translateX(800px)',
      }}
    >
      <i
        className={'fas fa-times ' + Classes.close}
        onClick={() => {
          Message.ClearMessage();
        }}
      ></i>
      <h2>{Message.Message}</h2>
    </Flex>
  );
}

export default Message;
