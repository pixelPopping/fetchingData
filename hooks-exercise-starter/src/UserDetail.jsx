import React from "react";

const UserDetail = ({ user }) => {
  if (!user) {
    return null; // Do not render anything if user is not provided
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      {user.age && (
        <p>
          <strong>Age:</strong> {user.age}
        </p>
      )}
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      {user.website && (
        <p>
          <strong>Website:</strong> <a href={user.website}>{user.website}</a>
        </p>
      )}
      {user.company && (
        <p>
          <strong>Company:</strong> {user.company}
        </p>
      )}
    </div>
  );
};

export default UserDetail;
