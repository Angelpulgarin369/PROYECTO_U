import React from "react";
import "./Proyectos.css";
import { useNavigate } from "react-router-dom";

const Proyectos = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/navbar");
  };

  const proyectos = [
    {
      titulo: "Evaluación Económica para la Expansión de QTDP Detroit en España",
      descripcion: "Durante el proyecto académico, QTDP Detroit evaluó la viabilidad de establecer una planta productiva en España, con el objetivo de capturar un mercado potencial de 100,000 unidades bajo estrictas limitaciones presupuestarias para publicidad. Se analizaron dos estructuras productivas con el fin de asegurar un margen de beneficio del 20% en los próximos 10 años. Tras un exhaustivo análisis de costos fijos y variables, se determinó que la estructura 1 ofrecía el mejor equilibrio, destacándose por su menor costo fijo inicial y un margen unitario más favorable. Este proyecto no solo amplió mis habilidades en análisis estratégico y gestión financiera, sino que también me preparó para enfrentar desafíos similares en futuros trabajos o proyectos.",
      imagen: "https://tse3.mm.bing.net/th?id=OIP.hkVqjknsAlfuVo2v75lp8QEaDd&pid=Api&P=0&h=180.jpg"
    },
    {
      titulo: "Análisis Estratégico de Recursos Humanos: Desarrollando Talento y Eficiencia",
      descripcion: "Este proyecto analiza en profundidad la gestión de Recursos Humanos en una empresa organizativa, destacando cómo la empresa puede transformar barreras en oportunidades. Nos enfocamos en los roles clave del Director de Desarrollo de Talento Humano y el Asistente de Producción, detallando sus funciones y competencias. Proponemos estrategias para optimizar la estructura organizativa y mejorar los métodos de reclutamiento, selección, formación y evaluación del personal. ¡Descubre cómo esta Empresa Organizativa puede fomentar un entorno laboral saludable y eficiente!",
      imagen: "https://tse1.mm.bing.net/th?id=OIP.GUrUdb9aRTKMYJ2GjRLUVwHaD4&pid=Api&P=0&h=180.jpg"
    },
    {
      titulo: "Potenciando la Motivación: Estrategias Clave para el Éxito Personal y Organizacional",
      descripcion: "Este proyecto explora la aplicación práctica de la Psicología de la Motivación en diversos contextos reales. He desarrollado estrategias efectivas para impulsar tanto la motivación intrínseca como extrínseca, convirtiendo desafíos en oportunidades significativas de crecimiento personal y profesional. Desde el deporte hasta la publicidad y la salud, he aplicado estos conceptos con éxito, asumiendo roles clave en la planificación estratégica, ejecución de tácticas motivacionales, y evaluación de resultados para mejorar el rendimiento individual y de equipo.",
      imagen: "https://tse4.mm.bing.net/th?id=OIP.TLVlqiry-FQWEFha_NPChgHaEj&pid=Api&P=0&h=180.jpg"
    },
    {
      titulo: "Exploración Práctica en Psicometría: Analizando Ítems y Propiedades Psicométricas",
      descripcion: "Este proyecto se enfoca en la aplicación práctica de la psicometría para evaluar constructos psicológicos. He desarrollado habilidades clave en el análisis de ítems, lo que es esencial para la fiabilidad de los instrumentos psicométricos. A través de varios ejercicios prácticos, he aprendido a calcular y evaluar el índice de dificultad y el índice de discriminación de los ítems, consolidando mis competencias analíticas en el campo. Estas habilidades me permiten mejorar la calidad de las pruebas psicométricas y garantizar resultados más precisos en la medición psicológica.",
      imagen: "https://tse4.mm.bing.net/th?id=OIP.4fkN35lNDQNmj4OaECFguQHaE7&pid=Api&P=0&h=180.jpg"
    }
  ];

  return (
    <div className="contenedor">
      <div className="descripcion">
        <div className="cont-des">
          <h1>𝕄𝕀𝕊 ℙℝ𝕆𝕐𝔼ℂ𝕋𝕆𝕊</h1>
        </div>
        <p>𝘿𝙚𝙨𝙘𝙪𝙗𝙧𝙚 𝙘ó𝙢𝙤 𝙖𝙥𝙡𝙞𝙘𝙤 𝙡𝙖 𝙋𝙨𝙞𝙘𝙤𝙡𝙤𝙜í𝙖 𝙚𝙣 𝙚𝙡 á𝙢𝙗𝙞𝙩𝙤 𝙤𝙧𝙜𝙖𝙣𝙞𝙯𝙖𝙘𝙞𝙤𝙣𝙖𝙡. ¡𝙈𝙞𝙧𝙖 𝙢𝙞𝙨 𝙥𝙧𝙤𝙮𝙚𝙘𝙩𝙤𝙨!</p>
      </div>
      <div className="proyectos">
        {proyectos.map((proyecto, index) => (
          <div className="card" key={index}>
            <img src={proyecto.imagen} alt={`Proyecto ${index + 1}`} className="imagen-proyecto" />
            <h2 className="titulo-proyecto">{proyecto.titulo}</h2>
            <p className="descripcion-proyecto">{proyecto.descripcion}</p>
            <a href={`/proyectos/${index + 1}`} className="ver-proyecto">
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>

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

export default Proyectos;








