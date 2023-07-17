import React, { useState, useEffect } from 'react';
import axios from "axios";

function UsersList() {

  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?")
    if (confirmDelete) {
      try {
        axios.delete(`http://localhost:3636/admin/user/${id}`).then((response) =>{
          console.log(response.data)
        getUsers(users._id)
        })
      } catch (error) {
        console.log({error: "Error deleting user"})
      }
    }
  }

  const getUsers = async () =>{
    try {
      const response = await axios.get("http://localhost:3636/admin/users")
      setUsers(response.data)
    } catch (error) {
      console.log({error: "Error fetching user"})
    }
  }

  useEffect(() =>{  
    getUsers();
  },[])

  return ( 
    <div>
      <h2>This is the users list:</h2>
      {users.map((user) =>(
        <div key={user._id}>
          <p>{user.email}</p>
          <button onClick={()=> deleteUser()}>Delete User</button>
        </div>
      ))}

    </div>
   );
}

export default UsersList;