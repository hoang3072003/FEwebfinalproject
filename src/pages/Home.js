import React from 'react';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';

const homeStyle = {
  padding: '20px',
  background: 'url("https://images.template.net/75381/Free-Pastel-Iphone-Background-01-1.jpg") no-repeat center center/cover',
  minHeight: '100vh'
};

const Home = () => {
  return (
    <div style={homeStyle}>
      <Banner />
      <h2>Our Products</h2>
      <ProductList />
    </div>
  );
};

export default Home;
