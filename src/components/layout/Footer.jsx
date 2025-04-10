import React from 'react';
import '../../assets/styles/Footer.css';

import iconPhone from '../../assets/images/phone.png';
import iconEmail from '../../assets/images/mail.png';
import iconLocation from '../../assets/images/map.png';

import iconFacebook from '../../assets/images/facebook.png';
import iconWhatsapp from '../../assets/images/whatsapp.png';
import iconInstagram from '../../assets/images/instagram.png';
import iconTiktok from '../../assets/images/tiktok.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-item">
          <img src={iconPhone} alt="Telefono" className="footer-icon"/>
          Teléfono: +57 300 865 54 58
        </p>
        <p className="footer-item">
          <img src={iconEmail} alt="Email" className="footer-icon"/>
          Email: intencional.mente4419@gmail.com
          </p>
        <p className="footer-item">
          <img src={iconLocation} alt="Ubicacion" className="footer-icon"/>
          Ubicación: Cr 33 47A 16, Barrio Caudal, Villavicencio, Meta
        </p>
      </div>
      <div className="footer-right">
        <a
          href="https://www.facebook.com/profile.php?id=61573988360702"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={iconFacebook} alt="Facebook" className="social-icon" />
        </a>
        <a
           href="https://wa.me/573008655458?text=Hola%2C%20estoy%20interesado%20en%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={iconWhatsapp} alt="Whatsapp" className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/intencional_mente_cde/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={iconInstagram} alt="Instagram" className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/intencional_mente_cde/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={iconTiktok} alt="Tiktok" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
