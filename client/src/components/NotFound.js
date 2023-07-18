import React from "react";
import cat from "../images/oops.gif";

function NotFound() {
  return ( 
    <div className="error">
      <div>
        <h1>404</h1>
        <h2>Oops! You were not supposed to see this..</h2>
        <p>Sorry, the page you are looking for does not exist or the link is broken.</p>
        <a href="/">Go back to Homepage</a>
      </div>

      <div>
        <img src={cat} alt="cat" />
      </div>
      
      
    </div>
   );
}

export default NotFound;