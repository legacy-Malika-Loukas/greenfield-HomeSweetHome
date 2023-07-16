import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SlideNavbar = () => {
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

  function handleSignup(event) {
    event.preventDefault(); // Prevent default form submission
    axios.post("http://localhost:3636/user/signup", { email, password })
      .then(({ data }) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/profile");
        } else {
          setErrorMessage("Please write a valid username");
        }
      });
  }

  function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission
    axios.post("http://localhost:3636/user/login", { email, password })
      .then(({ data }) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/profile");
        } else {
          alert(data.msg);
        }
      });
  }

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
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required=""
            value={email}
            onChange={handleEmailChange}
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
            value={email}
            onChange={handleEmailChange}
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
