import { useEffect, useState } from "react";
import { UserDetail } from "./UserDetail";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      setUserList(users);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      <ul>
        {userList.map((user) => (
          <li
            key={user.id}
            onClick={() => setSelectedUser(user)}
            style={{
              cursor: "pointer",
              fontWeight: selectedUser?.id === user.id ? "bold" : "normal",
              textDecoration:
                selectedUser?.id === user.id ? "underline" : "none",
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>

      {/* Display user details if a user is selected */}
      {selectedUser && <UserDetail user={selectedUser} />}
    </div>
  );
};

export default App;
