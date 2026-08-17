import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="footer__copy">
          © 2026 Dell Technologies. Все права защищены.
        </span>
        <a href="https://www.dell.com/" className="footer__link">
          dell.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
