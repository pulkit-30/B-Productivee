import React, { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import Flex from "../ui/flex/Flex";
import ProfilePicture from "../User/ProfilePicture";
import Classes from "./Profile.module.css";
function Profile(props) {
  const User = props.User;
  const Auth = useContext(AuthContext);
  return (
    <Flex>
      {!User && "Loging..."}
      {User && (
        <Flex className={"s-eve " + Classes.ProfileBox}>
          <Flex className={Classes.ProfileImage}>
            <ProfilePicture image={User.image?.stringValue} />
            {Auth.User?.localId === User.id?.stringValue && (
              <div className={Classes.EditIcon}>
                <i className="fas fa-edit"></i>
              </div>
            )}
          </Flex>
          <Flex className={"column s-eve f-start " + Classes.ProfileInfo}>
            <div>Name: {User.name?.stringValue}</div>
            <div>Email: {User.email?.stringValue}</div>
            <div>Mobile: {User.mobile?.integerValue}</div>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Profile;
