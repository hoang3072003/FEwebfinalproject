import React from 'react';

const bannerStyle = {
  background: 'url(https://static.vecteezy.com/system/resources/previews/006/227/054/original/car-shop-logo-design-template-element-usable-for-business-and-automotive-logos-vector.jpg) no-repeat center center/cover',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center'
};

const bannerContentStyle = {
  fontSize: '3rem'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  cursor: 'pointer'
};

const Banner = () => {
  return (
    <div style={bannerStyle}>
      <div style={bannerContentStyle}>
        <button style={buttonStyle}>Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
