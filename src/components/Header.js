import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center'
};

const navStyle = {
  listStyle: 'none',
  padding: 0
};

const navItemStyle = {
  display: 'inline',
  margin: '0 10px'
};

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none'
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="container">
        <h1>Car Shop</h1>
        <nav>
          <ul style={navStyle}>
            <li style={navItemStyle}><Link to="/" style={navLinkStyle}>Home</Link></li>
            <li style={navItemStyle}><Link to="/about" style={navLinkStyle}>About</Link></li>
            <li style={navItemStyle}><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
