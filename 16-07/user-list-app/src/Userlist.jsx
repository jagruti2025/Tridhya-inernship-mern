import React from "react";
function UserList({ users, onDeleteUser }) {
  if (users.length === 0) {
    return <p className="empty-message">No users found. Add someone!</p>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <span>{user.name}</span>
          <button
            className="delete-btn"
            onClick={() => onDeleteUser(user.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
