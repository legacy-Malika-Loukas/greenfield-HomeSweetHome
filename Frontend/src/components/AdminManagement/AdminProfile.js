// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import UsersList from "./AdminUserList";

function AdminProfile() {
  const navigate = useNavigate();

  function createAdmin(id) {
    navigate("admin/create")
  }


  return ( 
    <div>
      <h1>This is the admin profile page.</h1>
      
      .<br/>
      Click on Create button below for creating new admin:
      &nbsp;&nbsp;<button onClick={() => createAdmin("")}>Add Admin</button>
      <br />
      <hr />
      <h3>You can view all users here</h3>
      <UsersList/>
      <br />
      <br />
    </div>
   );
}

export default AdminProfile;

// import in App.js
// Add route in app.js to /admin-profile
// edit login/signup slidenav to /account and admin-account
// changed admin form to div