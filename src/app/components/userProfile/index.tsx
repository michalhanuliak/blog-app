import React from 'react';

import defaultProfilePicUrl from '../../../assets/images/profilepic.jpg';
import {
  UserProfilePic,
  UserFullName,
  UserNickName,
  UserProfileContainer,
} from './userProfile';

const UserProfile = ({ ...props }) => {
  const {name, username, profilePicUrl } = props;

  return (
    <UserProfileContainer>
      <UserProfilePic>
        <img src={profilePicUrl} alt="User profile" />
      </UserProfilePic>
      <UserFullName>
        {name}
      </UserFullName>
      <UserNickName>
        {`( ${username} )`}
      </UserNickName>
    </UserProfileContainer>
  );
};

UserProfile.defaultProps = {
  profilePicUrl: defaultProfilePicUrl,
};

export default UserProfile;
