import React from 'react';
import './PromoSection.css';
import petsImage from '../assets/images/nobpet.png';

const PromoSection = () => {
  return (
    <div className="promo-section">
      <div className="promo-content">
      <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0">
      <img src={petsImage} alt="Pug" className="pug-image" />           
       </div>
        <div className="promo-details">
          <h2>Why Choose Us?</h2>
          <div className="service-grid">
          <div className="service-point">
            <i className="fas fa-stethoscope icon-care"></i>
            <h3>Care Advice</h3>
            <p>Far far away, behind the <br /> 
               word mountains,<br />
               far from the countries.</p>    
        </div>
          <div className="service-point">
          <i class="fi fi-br-map-marker-question"></i>       
                    <h3>Customer 
                      Supports</h3>
            <p>Far far away, behind the <br /> 
               word mountains,<br />
               far from the countries.</p>
          </div> 
          <div className="service-point">
          <i class="fi fi-sr-light-emergency-on"></i>
                      <h3>Emergency 
                      Services</h3>
                      <p>Far far away, behind the <br /> 
               word mountains,<br />
               far from the countries.</p>
          </div>
          <div className="service-point">
          <i class="fi fi-rs-hands-heart"></i>   
                         <h3>Veterinary Help</h3>
                         <p>Far far away, behind the <br /> 
               word mountains,<br />
               far from the countries.</p>          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
