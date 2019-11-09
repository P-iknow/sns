import React from 'react';
import {
  NicknameEditForm,
  FollowingList,
  FollowerList,
} from '../components/Profile';

const Profile = () => {
  return (
    <div>
      <NicknameEditForm />
      <FollowingList />
      <FollowerList />
    </div>
  );
};
export default Profile;
