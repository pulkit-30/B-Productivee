import React, { useContext, useEffect, useState } from "react";
import Profile from "../components/profile/Profile";
import { useParams } from "react-router-dom";
import { getData } from "../Api/Database";
import ErrorContext from "../context/Error/ErrorContext";
function ProfilePage() {
  const Error = useContext(ErrorContext);
  const [UserData, updateUserData] = useState(null);
  const params = useParams();
  useEffect(() => {
    const subscribe = async () => {
      getData(params)
        .then((res) => {
          updateUserData(res.data.fields);
        })
        .catch((err) => Error.ThrowError(err));
    };
    return subscribe();
  }, [params]);
  return (
    <div>
      <Profile User={UserData} />
    </div>
  );
}

export default ProfilePage;