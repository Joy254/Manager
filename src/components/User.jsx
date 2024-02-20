import React from 'react';

const User = ({ user }) => (
  <div>
    <h2>{user.username}</h2>
    <p>Email: {user.email}</p>
    <p>Bio: {user.bio}</p>
  </div>
);

export default User;