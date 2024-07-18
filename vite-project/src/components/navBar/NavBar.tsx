import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import './navBar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      return; // Evitar búsquedas vacías
    }

    // Convertir el término de búsqueda a minúsculas
    const searchTermLower = searchTerm.toLowerCase();

    // Definir las rutas correspondientes en minúsculas
    const routes = {
      'inicio': '/',
      'acerca de mi': '/acercaDeMi',
      'experiencias': '/experiencias',
      'proyectos': '/proyectos',
      'contactos': '/contactos'
    };

    // Rutas específicas de proyectos (en minúsculas)
    const projectRoutes = {
      'análisis estratégico de recursos humanos: desarrollando talento y eficiencia': '/proyectos/analisisEstrategico',
      // Puedes agregar más proyectos según sea necesario
    };

    // Buscar en rutas generales
    let route = routes[searchTermLower];

    // Si no se encuentra en rutas generales, buscar en rutas de proyectos específicos
    if (!route) {
      route = projectRoutes[searchTermLower];
    }

    if (route) {
      navigate(route); // Redirigir a la ruta correspondiente usando navigate
    } else {
      console.log(`No se encontró ninguna coincidencia para "${searchTerm}"`);
      setErrorModalOpen(true); // Abrir el modal de error
    }
  };

  const handleCloseModal = () => {
    setErrorModalOpen(false); // Cerrar el modal de error
  };

  return (
    <div>
      <div className="top-section">
        {/* Imagen en el rectángulo superior */}
        <img 
          src="https://tse3.mm.bing.net/th?id=OIP.cdrMmfyoyV1Rnt6IVZliOQHaE7&pid=Api&P=0&h=180" 
          alt="Imagen de ejemplo" 
          className="app-image" 
        />

        {/* Rectángulo superior con el nombre de la aplicación y la barra de navegación */}
        <div className="app-info">
          {/* Rectángulo superior con el nombre de la aplicación */}
          <div className="app-name">
            𝑷𝒓𝒐𝒚𝒆𝒄𝒕𝒐𝒔 𝑬𝒔𝒕𝒓𝒂𝒕é𝒈𝒊𝒄𝒐𝒔: 𝑴𝒊 𝑷𝒐𝒓𝒕𝒂𝒇𝒐𝒍𝒊𝒐 𝒆𝒏 𝑷𝒔𝒊𝒄𝒐𝒍𝒐𝒈í𝒂 𝑶𝒓𝒈𝒂𝒏𝒊𝒛𝒂𝒄𝒊𝒐𝒏𝒂𝒍
          </div>
        
          {/* Barra de navegación */}
          <div className='navbar-container'>
            <ul>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/acercaDeMi'>Acerca De Mi</Link>
              </li>
              <li>
                <Link to='/experiencias'>Experiencias</Link>
              </li>
              <li>
                <Link to='/proyectos'>Proyectos</Link>
              </li>
              <li>
                <Link to='/contactos'>Contactos</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mensaje informativo sobre las opciones */}
      <div className="search-info">
        Puedes ir directamente a <strong>Acerca De Mi</strong>, <strong>Experiencias</strong>, <strong>Proyectos</strong> o <strong>Contactos</strong>.
      </div>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Buscar..." 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          onClick={handleSearch} 
          className="search-button"
        >
          Buscar
        </button>
      </div>

      {/* Modal de error */}
      <Modal
        isOpen={errorModalOpen}
        onClose={handleCloseModal}
        title="Error de Búsqueda"
      >
        No se encontró ninguna coincidencia para "{searchTerm}". Por favor, intenta nuevamente.
      </Modal>
    </div>
  );
};

export default Navbar;








