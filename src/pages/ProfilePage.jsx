import React, { useContext, useEffect, useState } from "react";
import Profile from "../components/profile/Profile";
import { useParams } from "react-router-dom";
import { getData } from "../Api/Database";
import ErrorContext from "../context/Error/ErrorContext";
function ProfilePage(props) {
  const Error = useContext(ErrorContext);
  const [UserData, updateUserData] = useState(null);
  const params = useParams();
  useEffect(() => {
    const subscribe = async () => {
      getData({ collection: "users" })
        .then((res) => {
          res.forEach((doc) => {
            (doc.localId === params.id || doc.id === params.id) &&
              updateUserData(doc);
          });
        })
        .catch((err) => Error.ThrowError(err));
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
