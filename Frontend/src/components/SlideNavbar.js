import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SlideNavbar = () => {
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

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3636/user/signup", {
        username,
        password,
      });

      // Handle successful signup response
      console.log("Signup:", response.data);
      navigate("/create");
    } catch (error) {
      // Handle signup error
      setErrorMessage("Please write a valid username");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3636/user/login", {
        username,
        password,
      });

      // Handle successful login response
      console.log("Login:", response.data);
      navigate("/create");
    } catch (error) {
      // Handle login error
      console.log(error);
      setErrorMessage("Incorrect password or username");
    }
  };

  return (
    <div className="main-slide-nav">
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleSignup}>

          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>

          <br />

          <input type="email"
           name="email"
           placeholder="Enter email"
           required=""
           value={username}
           onChange={handleUsernameChange}
          />

          <br />

          <input type="password"
           name="pswd"
           placeholder="Enter password"
           required=""
           value={password}
           onChange={handlePasswordChange}
          />

          <br />
          <button className='button-log'>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleLogin}>

          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>

          <br />

          <input
          type="email"
          name="email"
          placeholder="Enter email"
          required=""
          value={username}
          onChange={handleUsernameChange}
          />

          <br />

          <input
          type="password"
          name="pswd"
          placeholder="Enter password"
          required=""
          value={password}
          onChange={handlePasswordChange}
          />

          <br />

          <button className='button-log'>Login</button>

        </form>
      </div>
    </div>
  );
};

export default SlideNavbar;
