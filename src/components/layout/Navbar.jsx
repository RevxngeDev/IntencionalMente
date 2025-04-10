
import React from 'react';
import '../../assets/styles/Navbar.css'
import logo from '../../assets/images/logo.png'


const Navbar = () => {
    return (
      <header className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
  
        <nav className="navbar-center">
          <a href="#home" className="nav-link">Home</a>
        </nav>
  
        <div className="navbar-right">
          <a 
          href="https://wa.me/573008655458?text=Hola%2C%20estoy%20interesado%20en%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="try-btn"
          >Contactanos</a>
        </div>
      </header>
    );
  };
  
  export default Navbar;