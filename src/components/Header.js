import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const navStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex'
};

const navItemStyle = {
  margin: '0 10px'
};

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none'
};

const logoStyle = {
  height: '40px' // Bạn có thể điều chỉnh kích thước này cho phù hợp
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Car Shop Logo" style={logoStyle} />
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}><Link to="/" style={navLinkStyle}>Home</Link></li>
          <li style={navItemStyle}><Link to="/about" style={navLinkStyle}>About</Link></li>
          <li style={navItemStyle}><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
