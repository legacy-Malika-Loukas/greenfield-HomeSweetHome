import React from 'react';
import './Footer.css'; // Create a CSS file for styling (Footer.css)

const Footer = () => {
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} Home Sweet Home. All rights reserved.</p>
          </div>
          <div className="footer-gototop">
            <button onClick={handleGoToTop}>Go to Top</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
