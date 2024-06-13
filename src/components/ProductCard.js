import React from 'react';
import { Link } from 'react-router-dom';

const cardStyle = {
  width: '300px',
  margin: '15px',
  padding: '15px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  textAlign: 'center'
};

const imgStyle = {
  width: '100%',
  height: 'auto'
};

const ProductCard = ({ product }) => {
  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.name} style={imgStyle} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
