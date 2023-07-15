import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminSlideNav() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3636/user/admin", {
        username,
        password,
      });

      // Handle successful login response
      console.log("Login:", response.data);
      navigate("/homes");
    } catch (error) {
      // Handle login error
      console.log(error);
      setErrorMessage("Incorrect password or username");
    }
  };

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
          value={username}
          onChange={handleUsernameChange}
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