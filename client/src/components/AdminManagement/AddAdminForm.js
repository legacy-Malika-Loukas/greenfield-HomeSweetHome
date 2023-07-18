import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function AddAdminForm() {
  const navigate = useNavigate();

  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const [admins, setAdmins] = useState([]);

  const deleteAdmin = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this admin?")
    if (confirmDelete) {
      try {
        axios.delete(`http://localhost:3636/admin/admins/${id}`).then((response) =>{
          console.log(response.data);
          getAdmin(); // Fetch updated list of users after deleting
        });
      } catch (error) {
        console.log({error: "Error deleting admin"});
      }
    }
  };

  const getAdmin = async () => {
    try {
      const response = await axios.get("http://localhost:3636/admin/admins");
      setAdmins(response.data);
    } catch (error) {
      console.log({error: "Error fetching user"});
    }
  };

  useEffect(() => {  
    getAdmin();
  }, []);


  const addAdmin = async() =>{
    
    try {
      const response = await axios.post("http://localhost:3636/admin/", {email, password})
      console.log(response.data)
      navigate("/admin-profile/admin/create")
    } catch (error) {
      console.log({error:'Failed to create admin account'})
    }
  }

  function adminAccount(){
    navigate("/admin-profile")
  }

  return ( 
    <div className='admin-add'>
      <h2>Add a new admin account. <span onClick={adminAccount} >Go Back. </span></h2>
      <br /><br />
      <Form onSubmit={addAdmin}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
         />
      </Form.Group>
      <button type='submit' className="btn btn-success" >Add account</button>
    </Form>

    <br /><br />
    <hr />
    <div className="users-list-container">
      <h2>This is the admins list:</h2>
      {admins.length > 0 ? (
        admins.map((admin) => (
          <div key={admin._id} className="user-card">
            <p className="user-email">{admin.email}</p>
            <button className="delete-button" onClick={() => deleteAdmin(admin._id)}>
              Delete User
            </button>
          </div>
        ))
      ) : (
        <p className="no-users-message">No Admin found.</p>
      )}
    </div>

    </div>
   );
}

export default AddAdminForm;