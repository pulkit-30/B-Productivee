import React, { useContext, useEffect, useState } from 'react';
import Profile from '../components/profile/Profile';
import { useParams } from 'react-router-dom';
import { getData } from '../Api/Database';
import ErrorContext from '../context/Error/ErrorContext';
import MessageContext from '../context/Message/MessageContext';
function ProfilePage(props) {
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
  return (
    <div>
      <Profile User={UserData} />
    </div>
  );
}

export default ProfilePage;
