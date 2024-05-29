import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './CounterSection.css';

const CounterSection = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [professionalsCount, setProfessionalsCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [petsHostedCount, setPetsHostedCount] = useState(0);

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const duration = 3500; // duration in ms
      const incrementTime = duration / 100;

      let startCustomer = 0;
      let startProfessionals = 0;
      let startProducts = 0;
      let startPets = 0;

      const interval = setInterval(() => {
        setCustomerCount(prev => {
          if (prev < 50) {
            startCustomer += 1;
            return prev + 1;
          }
          return prev;
        });

        setProfessionalsCount(prev => {
          if (prev < 8500) {
            startProfessionals += 85;
            return prev + 85;
          }
          return prev;
        });

        setProductsCount(prev => {
          if (prev < 20) {
            startProducts += 1;
            return prev + 1;
          }
          return prev;
        });

        setPetsHostedCount(prev => {
          if (prev < 50) {
            startPets += 1;
            return prev + 1;
          }
          return prev;
        });

        if (startCustomer >= 50 && startProfessionals >= 8500 && startProducts >= 20 && startPets >= 50) {
          clearInterval(interval);
        }
      }, incrementTime);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section className="ftco-counter" id="section-counter" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
            <div className="block-18 text-center">
              <div className="text">
                <strong className="number">{customerCount}</strong>
              </div>
              <div className="text">
                <span>Visitors</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
            <div className="block-18 text-center">
              <div className="text">
                <strong className="number">{professionalsCount}</strong>
              </div>
              <div className="text">
                <span>Types of Pets</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
            <div className="block-18 text-center">
              <div className="text">
                <strong className="number">{productsCount}</strong>
              </div>
              <div className="text">
                <span>Products</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
            <div className="block-18 text-center">
              <div className="text">
                <strong className="number">{petsHostedCount}</strong>
              </div>
              <div className="text">
                <span>Pets Hosted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;



