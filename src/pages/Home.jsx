import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/common/Hero';
import AboutUs from '../components/common/AboutUs';
import '../assets/styles/Home.css';

const Home = () => {
  return (
    <div className="page-container">
      <Navbar/>
      <main className="main-content">
      <Hero/>
      <AboutUs/>
      <Hero/>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
