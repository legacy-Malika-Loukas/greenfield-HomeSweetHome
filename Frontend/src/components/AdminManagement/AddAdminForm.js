import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddAdminForm() {
  const navigate = useNavigate();

  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");

  const addAdmin = async(e) =>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3636/admin/", {email, password})
      console.log(response.data)
      navigate("/admin-profile")
    } catch (error) {
      console.log({error:'Failed to create admin account'})
    }
  }

  return ( 
    <div>
      <form onSubmit={addAdmin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
      </form>

    </div>
   );
}

export default AddAdminForm;