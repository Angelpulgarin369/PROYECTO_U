import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';
import ImageComponent from '../imageComponent/ImageComponent';

const LandingPage = () => {
  const imageURL = 'https://panal.funiber.org/public/storage/photos/profiles/4571899/61c2206bd6ab8.jpg'; // URL de la imagen externa

  return (
    <div className='landing-container'>
      <ImageComponent src={imageURL} alt="Psicología" className="background-image" />
      <div className='landing-content'>
        <div className='landing-title landing-title-circle'>
          𝕀𝕟𝕟𝕠𝕧𝕒𝕔𝕚ó𝕟 𝕪 ℙ𝕣𝕠𝕪𝕖𝕔𝕥𝕠𝕤 𝔸𝕔𝕥𝕦𝕒𝕝𝕖𝕤 𝕖𝕟 ℙ𝕤𝕚𝕔𝕠𝕝𝕠𝕘í𝕒 𝕆𝕣𝕘𝕒𝕟𝕚𝕫𝕒𝕔𝕚𝕠𝕟𝕒𝕝
        </div>

        <div className='landing-title-line'>
          <span className='landing-title-part'>
            𝗖𝗼𝗻𝗲𝗰𝘁𝗮𝗻𝗱𝗼 𝗮 𝗧𝗿𝗮𝘃é𝘀 𝗱𝗲 𝗣𝗿𝗼𝘆𝗲𝗰𝘁𝗼𝘀
          </span>
        </div>
        <div className='landing-title-line'>
          <span className='landing-title-part'>
            𝗲𝗻 𝗣𝘀𝗶𝗰𝗼𝗹𝗼𝗴í𝗮 𝗢𝗿𝗴𝗮𝗻𝗶𝘇𝗮𝗰𝗶𝗼𝗻𝗮𝗹
          </span>
        </div>

        {/* Enlace hacia la nueva página */}
        <Link to="/navbar">
          <button className='landing-button'>
            𝙚𝙭𝙥𝙡𝙤𝙧𝙖 𝙢𝙞𝙨 𝙥𝙧𝙤𝙮𝙚𝙘𝙩𝙤𝙨 𝙮 𝙘𝙤𝙣𝙤𝙘𝙞𝙢𝙞𝙚𝙣𝙩𝙤𝙨 𝙙𝙚𝙨𝙩𝙖𝙘𝙖𝙙𝙤𝙨
          </button>
        </Link>

        {/* Mensaje y enlaces a redes sociales */}
        <div className="social-section">
          <p className="social-message">conectate conmigo a traves de mis contactos de redes sociales</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/angel-pulgarin-aaa047305/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" />
            </a>
            <a href="https://profile.magneto365.com/reference/freelancer.12eficaz-7452501?lng=es-CO" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" className="social-icon" />
            </a>
            <a href="https://wa.me/573225709501" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="social-icon" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=freelancer.12eficaz@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;















