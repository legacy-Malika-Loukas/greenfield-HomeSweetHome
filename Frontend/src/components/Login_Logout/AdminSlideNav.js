import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminSlideNav() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    axios.post("http://localhost:3636/admin/login", {email, password}).then(({data}) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/admin-profile")
      } else {
        alert(data.msg)
        setErrorMessage("Incorrect password or email");
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  function toSignUp() {
    navigate("/signup-login")
  }

  return ( 
    <div className="main-slide-nav">
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <div>
        <div>
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          />

          <br />

          <input
          type="password"
          name="pswd"
          placeholder="Password"
          required=""
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
          />

          <br />

          <button onClick={() => {handleLogin()}} className="button-log" type="submit">Login</button>

          <p className="admin-p">Not an admin? <span
          onClick={() => {toSignUp()}}
          >Go to signup/login</span></p>
        </div>
      </div>
    </div>
   );
}

export default AdminSlideNav;