import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const productDetailContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f7f7f7',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const imgContainerStyle = {
  flex: '1',
  textAlign: 'center'
};

const imgStyle = {
  width: '300px',
  height: 'auto',
  marginBottom: '20px'
};

const detailContainerStyle = {
  flex: '2',
  paddingLeft: '20px'
};

const commentFormStyle = {
  width: '100%',
  maxWidth: '600px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  cursor: 'pointer'
};

const commentListStyle = {
  width: '100%',
  maxWidth: '600px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9'
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({
    content: '',
    rating: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.rating < 1 || form.rating > 5) {
      alert('Rating must be between 1 and 5');
      return;
    }
    setComments([...comments, form]);
    setForm({ content: '', rating: '' });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={productDetailContainerStyle}>
        <div style={imgContainerStyle}>
          <img src={product.image} alt={product.name} style={imgStyle} />
        </div>
        <div style={detailContainerStyle}>
          <h2>{product.name}</h2>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={commentFormStyle}>
        <h3>Leave a Comment</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Your comment"
            required
            style={inputStyle}
          />
          <input
            type="number"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            placeholder="Rating (1-5)"
            required
            min="1"
            max="5"
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
      <div style={commentListStyle}>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <p><strong>Rating:</strong> {comment.rating} - {comment.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
