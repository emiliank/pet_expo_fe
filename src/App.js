import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import DogsPage from './pages/DogsGallery';
import CatsGallery from './pages/CatsGallery';
import BirdsGallery from './pages/BirdsGallery';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
 import PromoSection from './components/PromoSection';
import CounterSection from './components/CounterSection';




function App() {
  return (
    <Router>
      <div className="app-container">
      <Header />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/cats" element={<CatsGallery />} />
        <Route path="/birds" element={<BirdsGallery />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      
      </main>
      <Footer /> 
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      
      <HeroSection />
      <PromoSection />
      <CounterSection/>
    </div>
    
  );
};

const AboutPage = () => { 
  return (
    <div>
      <AboutSection /> 
      <PromoSection/>
      <CounterSection/>
    </div>
  );
};


export default App;











