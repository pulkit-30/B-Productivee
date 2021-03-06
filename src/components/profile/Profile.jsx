import React from "react";
import Loader from "../loader/Loader";
import Flex from "../ui/flex/Flex";
import ProfilePicture from "../User/ProfilePicture";
import Classes from "./Profile.module.css";
import {Link} from "react-router-dom"
function Profile(props) {
  const User = props.User;
  return (
    <Flex className={"Section f-start "+Classes.Container}>
      {!User && <Loader />}
      {User && (
        <Flex className={Classes.ProfileBox}>
          <Flex className={Classes.ProfileImage}>
            <ProfilePicture image={User?.image} />
            <Link to={"/update/"+User?.id} className={Classes.EditIcon}>
              <i className="fas fa-edit"></i>
            </Link>
          </Flex>
          <Flex className={"column s-eve f-start " + Classes.ProfileInfo}>
            <div>Name: {User?.name}</div>
            <div>Email: {User?.email}</div>
            <div>Mobile: {User?.mobile}</div>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Profile;
