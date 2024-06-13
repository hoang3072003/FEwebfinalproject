import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const productDetailStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px'
};

const imgStyle = {
  width: '300px',
  height: 'auto',
  marginBottom: '20px'
};

const detailStyle = {
  textAlign: 'center'
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

const ProductDetail = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    content: '',
    rating: ''
  });

  const product = {
    id: id,
    name: `Product ${id}`,
    description: `Description of Product ${id}`,
    image: 'https://via.placeholder.com/300' // Replace with your actual image URL
  };

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
    setForm({ name: '', email: '', content: '', rating: '' });
  };

  return (
    <div style={productDetailStyle}>
      <img src={product.image} alt={product.name} style={imgStyle} />
      <div style={detailStyle}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <div style={commentFormStyle}>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <p><strong>{comment.name} ({comment.email}):</strong> {comment.content} - Rating: {comment.rating}</p>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            style={inputStyle}
          />
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
    </div>
  );
};

export default ProductDetail;
