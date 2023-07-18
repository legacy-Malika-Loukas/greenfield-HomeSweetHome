import logo from '../images/sweet.png'; 
import { useNavigate } from 'react-router';

const Navbar = () => {
  let navigate=useNavigate();
  const loggedIn = !!localStorage.getItem("token");

  function logOut() {
    const confirmation = window.confirm("Are you sure you want to log out?");
    if (confirmation) {
      localStorage.removeItem("token");
    navigate("/")
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img 
          src={logo}
          alt="Logo"
          className="logo"
        />
        <a href="/" className="navbar-link">Home</a>
        <a href="/homes" className="navbar-link">Explore</a>
      </div>
      <div className="navbar-right">
        {loggedIn ? (
          <>
          <a href='/user-profile' className='navbar-link'>User-Profile</a>
          <span onClick={() =>{
          logOut();
          }}
          className="navbar-link nav-span">Logout</span>
          </>
        ) : (
          <>
          <a href="/admin" className="navbar-link">Admin-Login</a>
          <a href="/signup-login" className="navbar-link">SignUp/Login</a>
          </>
        )}       
      </div>
    </nav>
  );
};

export default Navbar;
