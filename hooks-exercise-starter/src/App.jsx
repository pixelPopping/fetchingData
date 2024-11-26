import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [userList, setUserList] = useState([]);
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
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
