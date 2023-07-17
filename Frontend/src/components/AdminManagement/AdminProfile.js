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
    <div className="admin-profile-container">
      <h1 className="admin-profile-heading">This is the admin profile page.</h1>

      <br/>
      Click on the Create button below to create a new admin:
      &nbsp;&nbsp;<button className="create-admin-button" onClick={() => createAdmin("")}>Add Admin</button>
      <br />
      <hr />
      <h3 className="users-list-heading">You can view all users here</h3>
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