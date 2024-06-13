import React, { useState } from 'react';

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
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
