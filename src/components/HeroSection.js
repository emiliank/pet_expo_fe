import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelector('.hero-background').style.transform = `translateY(${scrolled * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1>Welcome to the Pet Expo</h1>
        <p>Join us for a day of fun and excitement with your pets!</p>
        <Link to="/about" className="btn">Learn More</Link>
      </div>
    </div>
  );
}

export default HeroSection;
