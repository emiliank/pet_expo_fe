import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-section">
      <div className="info-section">
        <div className="info-item">
          <div className='contacticon'>
          <i class="fi fi-rs-marker"></i>
        </div>
          <div className="info-text">
            <h4>Location</h4>
            <p>123 Pet Street, Pet City, PC 12345</p>
          </div>
        </div>
        <div className="info-item">
        <div className='contacticon'>
        <i class="fi fi-rr-phone-flip"></i>        </div>
          <div className="info-text">
            <h4>Call Us</h4>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <div className="info-item">
        <div className='contacticon'>
        <i class="fi fi-br-envelope"></i>
                </div>
          <div className="info-text">
            <h4>Email</h4>
            <p>info@petexpo.com</p>
          </div>
        </div>
        <div className="info-item">
        <div className='contacticon'>
        <i class="fi fi-sr-site-alt"></i>
                </div>
          <div className="info-text">
            <h4>Website</h4>
            <p>www.petexpo.al</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className='sendbtn' type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
