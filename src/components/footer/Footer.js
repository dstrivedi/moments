import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        &#169; This site belongs to{' '}
        <a className="owner" href="">
          Drashti Trivedi
        </a>
      </div>
    </div>
  );
};

export default Footer;
