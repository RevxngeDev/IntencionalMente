// src/components/common/AboutUs.jsx
import React from 'react';
import '../../assets/styles/AboutUs.css';
import img1 from '../../assets/images/nada.jpg';
import img2 from '../../assets/images/nada.jpg';
import img3 from '../../assets/images/nada.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <p className="about-pretitle">Un poco</p>
          <h2 className="about-title">Sobre Nosotros</h2>
          <div className="about-content">
            <p>
              En Consultas Psicológicas creemos en la fuerza transformadora de la palabra
              y la escucha activa. Desde hace años acompañamos a cada persona
              en su proceso de crecimiento emocional, ofreciendo un espacio de
              respeto y comprensión.
            </p>
            <p>
              Nuestro equipo multidisciplinar está formado por profesionales apasionados
              de la salud mental, comprometidos con cada historia que llega a nuestra
              consulta. Valoramos la calidad y la cercanía en cada interacción.
            </p>
            <p>
              Ofrecemos atención personalizada tanto presencial como online,
              adaptándonos a las necesidades y ritmos de cada paciente. Nuestro
              objetivo es empoderarte para que descubras tus recursos internos.
            </p>
            <p>
              Trabajamos con técnicas basadas en la evidencia y enfoques humanistas,
              siempre fomentando la autoexploración y el autocuidado. Creemos que
              cada paso, por pequeño que parezca, es un avance hacia tu bienestar.
            </p>
            <p>
              Te invitamos a dar el primer paso hoy mismo. Estamos aquí para
              escucharte y guiarte en el camino de tu bienestar emocional.
            </p>
          </div>
          <button
            className="about-cta"
            onClick={() =>
              window.open(
                "https://wa.me/573008655458?text=Hola%2C%20estoy%20interesado%20en%20una%20consulta",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Contáctanos
          </button>
        </div>

        <div className="about-images">
        {[img1, img2, img3].map((src, i) => (
    <div className="image-card" key={i}>
      <img src={src} alt="" className="about-image" />
      {i === 2 && (
        <div className="image-badge">
          10+ Fotos
        </div>
      )}
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default AboutUs;
