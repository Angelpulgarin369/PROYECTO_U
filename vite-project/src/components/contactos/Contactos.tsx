import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faExternalLinkAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import './Contactos.css';
import { validateForm } from './ContacValidation';
import emailjs from 'emailjs-com';
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";

interface FormData {
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
}

const Contactos = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/navbar");
  };

  const initialFormData: FormData = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar en vivo
    const newErrors = validateForm({ ...formData, [name]: value });
    setFormErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      const templateParams = {
        nombre: formData.nombre,
        correo: formData.correo,
        asunto: formData.asunto,
        mensaje: formData.mensaje,
      };

      emailjs.send(
        'service_oqo5zek', // Service ID
        'template_nz4e9oj', // Template ID
        templateParams,
        'EtmyBEES0icZQKd6I' // User ID (Llave pública)
      ).then((response) => {
        setModalTitle('Éxito');
        setModalMessage('Mensaje enviado con éxito');
        setShowModal(true);
        setFormData(initialFormData); // Reiniciar el formulario después del envío exitoso
      }).catch((error) => {
        setModalTitle('Error');
        setModalMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        setShowModal(true);
      });
    } else {
      setFormErrors(errors);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const pdfURL = 'https://www.dropbox.com/scl/fi/3tr6nhzb8z74ns47fxoye/CV-de-Psicologia-Organizacional-Miguel-Angel-Rodriguez.pdf?rlkey=d2v5nkxstc3dre3id8aotz3eo&st=ayrwvhd0&dl=0';

  return (
    <div className='contactos-container'>
      <h2>✨ 𝕄𝕚𝕤 ℂ𝕠𝕟𝕥𝕒𝕔𝕥𝕠𝕤 ✨</h2>
      <div className='cards-container'>
        <div className='card-contact'>
          <p>Explora mi Linkedin donde hay varios artículos, infografías y gráficos de Psicología Organizacional y Recursos Humanos. ¡Conéctate conmigo!</p>
          <a href="https://www.linkedin.com/in/angel-pulgarin-aaa047305/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon linkedin" />
          </a>
        </div>
        <div className='card-contact'>
          <p>¡Hola, me gustaría pedirte una referencia laboral o referencia personal para mi hoja de vida en Magneto!</p>
          <a href="https://profile.magneto365.com/reference/freelancer.12eficaz-7452501?lng=es-CO" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" className="social-icon magneto" />
          </a>
        </div>
        <div className='card-contact'>
          <p>Puedes enviar mensajes de Whatsapp a mi número y también abrir una relación de amistad.</p>
          <a href="https://wa.me/573212431644" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="social-icon whatsapp" />
          </a>
        </div>
        <div className='card-contact'>
          <p>Envía un mensaje de correo si necesitas alguna información.</p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=freelancer.12eficaz@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="social-icon email" />
          </a>
        </div>
      </div>

      <h2>¡𝙀𝙨𝙩𝙖𝙧é 𝙚𝙣𝙘𝙖𝙣𝙩𝙖𝙙𝙤 𝙙𝙚 𝙧𝙚𝙘𝙞𝙗𝙞𝙧 𝙩𝙪𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙞𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩𝙚𝙨!</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre:</label>
          <input
            type='text'
            id='nombre'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          {formErrors.nombre && <p className="error">{formErrors.nombre}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='correo'>Correo electrónico:</label>
          <input
            type='email'
            id='correo'
            name='correo'
            value={formData.correo}
            onChange={handleChange}
            required
          />
          {formErrors.correo && <p className="error">{formErrors.correo}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='asunto'>Asunto:</label>
          <input
            type='text'
            id='asunto'
            name='asunto'
            value={formData.asunto}
            onChange={handleChange}
            required
          />
          {formErrors.asunto && <p className="error">{formErrors.asunto}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='mensaje'>Mensaje:</label>
          <textarea
            id='mensaje'
            name='mensaje'
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
          {formErrors.mensaje && <p className="error">{formErrors.mensaje}</p>}
        </div>
        <button type='submit'>Enviar</button>
      </form>

      <div>
        <p>📝 ¡𝐄𝐱𝐩𝐥𝐨𝐫𝐚 𝐦𝐢 𝐂𝐕 𝐞𝐧 𝐃𝐫𝐨𝐩𝐛𝐨𝐱! 𝐏𝐮𝐞𝐝𝐞𝐬 𝐯𝐞𝐫 𝐦𝐢 𝐂𝐕 𝐞𝐧 𝐬𝐮 𝐯𝐞𝐫𝐬𝐢ó𝐧 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐯𝐚 𝐩𝐚𝐫𝐚 𝐚𝐜𝐜𝐞𝐝𝐞𝐫 𝐚 𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐞𝐬 𝐜𝐨𝐦𝐨 𝐠𝐮𝐚𝐫𝐝𝐚𝐫 𝐜𝐨𝐦𝐨 𝐢𝐦𝐚𝐠𝐞𝐧, 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐞𝐥 𝐏𝐃𝐅, 𝐢𝐦𝐩𝐫𝐢𝐦𝐢𝐫 𝐲 𝐦á𝐬. ¡𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐩𝐨𝐫 𝐭𝐮 𝐢𝐧𝐭𝐞𝐫é𝐬! 📝</p>
        <button className="btn-cv" onClick={() => window.open(pdfURL, '_blank')}>
          <FontAwesomeIcon icon={faEye} /> Ver mi CV
        </button>
      </div>

      <Modal isOpen={showModal} onClose={handleCloseModal} title={modalTitle}>
        <p>{modalMessage}</p>
      </Modal>

      <section className="section boton-navbar">
        <div className="container">
          <div className="content">
            <button className="btn-navbar" onClick={handleButtonClick}>
              𝐈𝐫 𝐚 𝐥𝐚 𝐩𝐚𝐠𝐢𝐧𝐚 𝐢𝐧𝐢𝐜𝐢𝐚𝐥
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactos;