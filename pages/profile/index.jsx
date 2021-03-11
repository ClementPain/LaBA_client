import React from 'react';

const Profile = ({logged_in_status, user}) => (
  <>
    <h1>Profile</h1>
    <p>{ logged_in_status }</p>
    <p>{ JSON.stringify(user) }</p>
  </>
)

export default Profile;