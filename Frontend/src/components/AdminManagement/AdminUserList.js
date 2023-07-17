import React, { useState, useEffect } from 'react';
import axios from "axios";

function UsersList() {

  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?")
    if (confirmDelete) {
      try {
        axios.delete(`http://localhost:3636/admin/user/${id}`).then((response) =>{
          console.log(response.data);
          getUsers(); // Fetch updated list of users after deleting
        });
      } catch (error) {
        console.log({error: "Error deleting user"});
      }
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3636/admin/users");
      setUsers(response.data);
    } catch (error) {
      console.log({error: "Error fetching user"});
    }
  };

  useEffect(() => {  
    getUsers();
  }, []);

  return (
    <div className="users-list-container">
      <h2>This is the users list:</h2>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user._id} className="user-card">
            <p className="user-email">{user.email}</p>
            <button className="delete-button" onClick={() => deleteUser(user._id)}>
              Delete User
            </button>
          </div>
        ))
      ) : (
        <p className="no-users-message">No users found.</p>
      )}
    </div>
  );
}

export default UsersList;
