import { Routes, Route } from "react-router-dom";
// ? -----------------------------------------------------COMPONENTS

import LandingPage from "./components/landingPage/LandingPage";
import NavBar from "./components/navBar/NavBar";
import AcercaDeMi from "./components/acercaDeMi/AcercaDeMi";
import Experiencias from "./components/experiencias/Experiencias";
import Contactos from "./components/contactos/Contactos";
import ImageComponent from "./components/imageComponent/ImageComponent";
import Proyectos from "./components/proyectos/Proyectos";
import ProyectosDetalle from "./components/proyectosDetalle/ProyectosDetalle";
import Modal from "./components/modal/Modal";
// ? -----------------------------------------------------STYLES
import "./App.css";


function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/acercaDeMi" element={<AcercaDeMi />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/imageComponent" element={<ImageComponent />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyectos/:id" element={<ProyectosDetalle />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/contactos" element={<Contactos data={[]} />} />
      </Routes>
     </> 
  );
}

export default App;
