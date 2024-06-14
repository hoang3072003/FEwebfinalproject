import React from 'react';

const bannerStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/banner.png)`,
  backgroundSize: 'cover', // Thay đổi contain thành cover để hình ảnh bao phủ toàn bộ banner
  backgroundPosition: 'center', // Căn giữa hình ảnh
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

const Banner = () => {
  return (
    <div style={bannerStyle}>
      <div style={bannerContentStyle}>
        {/* No button here */}
      </div>
    </div>
  );
};

export default Banner;
