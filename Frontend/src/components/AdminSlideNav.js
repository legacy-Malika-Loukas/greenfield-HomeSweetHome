import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminSlideNav() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  function handleLogin(e) {
    e.preventDefault();
    axios.post("http://localhost:3636/admin/login", {email, password}).then((response) => {
      console.log(response.data)
      if(response.data) {
        localStorage.setItem('token', response.data);
        console.log('Token saved in local storage.');
        navigate("/homes")
      } else {
        console.log(`Error ${response.status}: ${response.message}`);
        setErrorMessage("Incorrect password or email");
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return ( 
    <div className="main-slide-nav">
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <div>
        <form onSubmit={handleLogin}>
          <label>
            Login
          </label>

          <br />

          <input
          type="email"
          name="email"
          placeholder="Email"
          required=""
          value={email}
          onChange={handleEmailChange}
          />

          <br />

          <input
          type="password"
          name="pswd"
          placeholder="Password"
          required=""
          value={password}
          onChange={handlePasswordChange}
          />

          <br />

          <button className="button-log" type="submit">Login</button>
        </form>
      </div>
    </div>
   );
}

export default AdminSlideNav;