import React from 'react';
import '../../assets/styles/Hero.css';
import principito from '../../assets/images/Principito.png'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
       <div className="hero-text">
        <h1>"Es una locura odiar a todas las rosas porque una te pinchó. Renunciar a todos tus sueños porque uno de ellos no se realizó"</h1>
        <p>
          -El Principito, Antoine de Saint Exupéry.
        </p>
        <button 
          className="hero-cta"
          a href="#about">
  Nuestro equipo
</button>

      </div>

        <div className="hero-image">
          <img src={principito} alt="El Principito" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
