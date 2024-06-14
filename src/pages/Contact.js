import React from 'react';
import ContactForm from '../components/ContactForm';

const contactContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '40px',
  maxWidth: '1200px',
  margin: '0 auto'
};

const contactInfoStyle = {
  width: '40%',
  textAlign: 'left'
};

const infoItemStyle = {
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center'
};

const infoIconStyle = {
  marginRight: '10px',
  fontSize: '24px'
};

const Contact = () => {
  return (
    <div style={contactContainerStyle}>
      <div style={{ width: '50%' }}>
        <h1>Get In Touch</h1>
        <ContactForm />
      </div>
      <div style={contactInfoStyle}>
        <h1>Talk To Us</h1>
        <div style={infoItemStyle}>
          <i className="fas fa-envelope" style={infoIconStyle}></i>
          <div>
            <h4>EMAIL</h4>
            <p>Carshop@gmail.com</p>
          </div>
        </div>
        <div style={infoItemStyle}>
          <i className="fas fa-phone" style={infoIconStyle}></i>
          <div>
            <h4>PHONE NUMBER</h4>
            <p>+84948887916</p>
          </div>
        </div>
        <div style={infoItemStyle}>
          <i className="fas fa-map-marker-alt" style={infoIconStyle}></i>
          <div>
            <h4>ADDRESS</h4>
            <p>HaNoi City</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
