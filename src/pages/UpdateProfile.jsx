import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Update from '../components/auth/Update';
import MessageContext from '../context/Message/MessageContext';

function UpdateProfile(props) {
  const Message = useContext(MessageContext);
  const params = useParams();
  const navigate = useNavigate();
  if (props.AuthUser && params.id !== props.AuthUser?.uid) {
    Message.ThrowMessage('You can only update your profile!!!');
    navigate('/');
  }
  return <Update AuthUser={props.AuthUser} isUser={props.isUser} />;
}

export default UpdateProfile;
