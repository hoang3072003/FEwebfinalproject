import React, { useState } from 'react';

const CommentForm = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    content: '',
    rating: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, form]);
    setForm({ name: '', email: '', content: '', rating: '' });
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.name} ({comment.email}): {comment.content} - Rating: {comment.rating}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Your comment" required></textarea>
        <input type="number" name="rating" value={form.rating} onChange={handleChange} placeholder="Rating" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
