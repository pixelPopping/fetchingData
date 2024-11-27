// In UserDetail.js

const UserDetail = ({ user }) => {
  if (!user) {
    return <p>No user selected</p>; // Optionally render a message if no user is selected
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name || "No name provided"}
      </p>
      {user.age && (
        <p>
          <strong>Age:</strong> {user.age}
        </p>
      )}
      <p>
        <strong>Email:</strong> {user.email || "No email provided"}
      </p>
      {user.website && (
        <p>
          <strong>Website:</strong>{" "}
          <a href={user.website} target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
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
