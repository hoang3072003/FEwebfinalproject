import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: 0
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <p>© 2024 Earth Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
