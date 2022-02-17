import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getData } from '../Api/Database';
import Update from '../components/auth/Update';
import MessageContext from '../context/Message/MessageContext';

function UpdateProfile(props) {
  const Message = useContext(MessageContext);
  const [UserData, updateUserData] = useState(null);
  const params = useParams();
  useEffect(() => {
    const subscribe = async () => {
      getData({ collection: 'users' })
        .then((res) => {
          res.forEach((doc) => {
            (doc.localId === params.id || doc.id === params.id) &&
              updateUserData(doc);
          });
        })
        .catch((err) => Message.ThrowMessage(err));
    };
    return subscribe();
  }, [params.id]);
  const navigate = useNavigate();
  if (props.AuthUser && params.id !== props.AuthUser?.uid) {
    Message.ThrowMessage('You can only update your profile!!!');
    navigate('/');
  }
  return <React.Fragment>{UserData && <Update AuthUser={UserData} isUser={props.isUser} />}</React.Fragment>;
}

export default UpdateProfile;
