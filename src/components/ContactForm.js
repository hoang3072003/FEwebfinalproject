import React, { useState } from 'react';

const formStyle = {
  width: '100%',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
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
  cursor: 'pointer',
  display: 'block',
  width: '100%',
  textAlign: 'center'
};

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={formStyle}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full name" required style={inputStyle} />
        <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required style={inputStyle} />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required style={inputStyle} />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required style={inputStyle}></textarea>
        <button type="submit" style={buttonStyle}>SEND NOW</button>
      </form>
    </div>
  );
};

export default ContactForm;
