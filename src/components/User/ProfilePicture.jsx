import React from "react";
import Flex from "../ui/flex/Flex";
import Classes from "./User.module.css";
function ProfilePicture(props) {
  return (
    <React.Fragment>
      <Flex className={Classes.ProfilePicture_Box} style={props.style}>
        <img
          src={
            props.image ||
            "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
          }
          alt="user-profilePicture"
          srcSet=""
          style={props.style}
        />
      </Flex>
    </React.Fragment>
  );
}

export default ProfilePicture;
