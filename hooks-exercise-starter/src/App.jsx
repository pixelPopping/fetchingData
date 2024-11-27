import { useEffect, useState } from "react";
import UserDetail from "./UserDetail"; // Ensure the path is correct

const App = () => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      setUserList(users);
    }
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      <ul>
        {userList.map((user) => (
          <li
            key={user.id}
            onClick={() => setSelectedUser(user)}
            style={{ cursor: "pointer" }}
          >
            {user.name}
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div>
          <h2>Selected User</h2>
          <UserDetail user={selectedUser} />
        </div>
      )}
    </div>
  );
};

export default App;
