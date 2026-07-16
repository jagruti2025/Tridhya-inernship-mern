import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import "./App.css";

function App() {
 
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState("");
  useEffect(() => {
    const defaultUsers = [
      { id: 1, name: "Aarav Sharma" },
      { id: 2, name: "Priya Patel" },
      { id: 3, name: "Rohan Mehta" },
    ];

    setUsers(defaultUsers); 
  }, []); 

  function handleAddUser() {
    
    if (newUserName.trim() === "") {
      alert("Please enter a name before adding.");
      return; 
    }

    const newUser = {
      id: Date.now(),
      name: newUserName,
    };

    setUsers([...users, newUser]);

    setNewUserName("");
  }

  function handleDeleteUser(id) {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <div className="app-container">
      <h1>User List App</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter user name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <p className="total-count">Total Users: {users.length}</p>
      <UserList users={users} onDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;
