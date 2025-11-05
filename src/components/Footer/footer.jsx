import React from "react";
import "./styles.css";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        {/* 123 Fifth Avenue, NY 10160, New York, USA | Phone: 800-123-456 | Email: contact@example.com */}
      </p>
      <p className="footer-copyright">
        COPYRIGHT © {currentYear} DORA PRODUCTIONS
      </p>
    </footer>
  );
};

export default Footer;
