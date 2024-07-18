import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProyectosDetalle.css";

const proyectos = [
  {
    id: 1,
    titulo: "Evaluación Económica para la Expansión de QTDP Detroit en España",
    descripcion: "𝐏𝐫𝐢𝐦𝐞𝐫𝐨 𝐭𝗲 𝗶𝗻𝘃𝗶𝘁𝗼 𝗮 𝗼𝗯𝘀𝗲𝗿𝘃𝗮𝗿 𝗹𝗮𝘀 𝗶𝗺𝗮𝗴𝗲𝗻𝗲𝘀 𝗱𝗲 𝗰𝗼𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁𝗼 𝗾𝘂𝗲 𝘀𝗲 𝗲𝗻𝗰𝘂𝗲𝗻𝘁𝗿𝗮 𝗲𝗻 𝗲𝗹 𝗰𝗮𝗿𝗼𝘂𝘀𝗲𝗹 𝐝𝐞 𝐢𝐦𝐚𝐠𝐞𝐧𝐞𝐬. Este proyecto evalúa la viabilidad de establecer una planta productiva en España, abordando desafíos como las limitaciones presupuestarias para publicidad y capturando un mercado potencial de 100,000 unidades. Te invitamos a leer y analizar el PDF donde esta el proyecto completo, como así mismo estos puntos clave como el Público Objetivo, Objetivos, Problemas Abordados, Metodología, Resultados, Análisis de Resultados, Conclusiones, Habilidades Desarrolladas y Reflexiones Personales. 𝗛𝗮𝘇 𝗰𝗹𝗶𝗰 𝗲𝗻 𝗩𝗘𝗥 𝗣𝗗𝗙 𝗽𝗮𝗿𝗮 𝘂𝗻𝗮 𝘃𝗶𝘀𝗶ó𝗻 𝗺á𝘀 𝗱𝗲𝘁𝗮𝗹𝗹𝗮𝗱𝗮 𝗱𝗲𝗹 𝗽𝗿𝗼𝘆𝗲𝗰𝘁𝗼",
    imagen: "https://tse3.mm.bing.net/th?id=OIP.hkVqjknsAlfuVo2v75lp8QEaDd&pid=Api&P=0&h=180.jpg",
    
    pdf: "https://smallpdf.com/es/file#s=92f965e7-c839-41d2-a747-1a20b7daec38",
    calificacion: 9.75,
    descripcionCalificacion: "Excelente trabajo con una evaluación detallada y precisa.",
    imagenesCarrusel: [
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721166095/image_13_emc0xj.png",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721167482/imagen_2_proyecto_1_a_ydbxkc.png",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721168268/imagen_3_proyecto_1a_dvah38.jpg",
      
    ],
    publicoObjetivo: "Este trabajo práctico está dirigido principalmente a potenciales empleadores que buscan evaluar las capacidades y conocimientos del autor en el análisis económico y la toma de decisiones estratégicas. Además, el público en general interesado en entender el proceso de expansión empresarial y las evaluaciones económicas también puede beneficiarse de este informe.",
    objetivo: "El objetivo principal del proyecto es evaluar la viabilidad de establecer una planta productiva de la multinacional QTDP Detroit en España.",
    problemasAbordados: [
      "Determinar la estructura productiva más conveniente basada en los criterios del beneficio y del margen unitario.",
      "Calcular el umbral de rentabilidad para cada estructura productiva.",
      "Evaluar la rentabilidad de la inversión total requerida para la puesta en marcha."
    ],
    metodologia: [
      "Trabajo de investigación: Se recopiló y analizó información relevante para la evaluación económica.",
      "Análisis de acierto y error: Se utilizaron pruebas y simulaciones para validar las decisiones estratégicas.",
      "Herramientas y técnicas: Se emplearon fórmulas económicas y técnicas de análisis financiero para evaluar la viabilidad del proyecto.",
      "Recursos utilizados: Datos de costos, precios de venta unitarios y rentabilidad de los mercados financieros."
    ],
    resultados: [
      "La Estructura 1 es más conveniente en términos de beneficio y margen unitario.",
      "El umbral de rentabilidad para ambas estructuras se ha calculado, proporcionando una base sólida para decisiones estratégicas.",
      "La rentabilidad de la inversión de 4,000,000 ha sido evaluada, demostrando que la empresa sería rentable con un beneficio neto esperado positivo."
    ],
    analisisResultados: "A pesar de ser un trabajo práctico académico, el aprendizaje obtenido a través de este análisis se puede aplicar en proyectos reales. Los resultados obtenidos demuestran que:",
    conclusiones: [
      "La Estructura 1 es la opción más favorable debido a su menor costo fijo y mayor margen unitario.",
      "El umbral de rentabilidad y la rentabilidad de la inversión total muestran que la expansión es económicamente viable.",
      "Las limitaciones en recursos publicitarios deben ser consideradas al planificar la estrategia de marketing."
    ],
    habilidadesDesarrolladas: [
      "Técnicas: Análisis financiero, cálculos de umbral de rentabilidad y evaluación de estructuras productivas.",
      "No técnicas: Investigación, toma de decisiones estratégicas y presentación de resultados de manera interactiva."
    ],
    reflexionesPersonales: "La realización de este trabajo práctico ha sido una experiencia enriquecedora que ha implicado enfrentar desafíos como la limitación de recursos publicitarios y la necesidad de ajustar estrategias de producción. Este proceso ha permitido un aprendizaje profundo y la adquisición de habilidades prácticas que serán útiles en futuros proyectos profesionales.",
    agradecimientos: "Agradezco a los profesores y la Universidad por proporcionar un entorno académico que permite la realización de trabajos prácticos semi-reales, facilitando el aprendizaje y la aplicación de conocimientos en situaciones cercanas a la realidad empresarial."
  },
  {
    id: 2,
    titulo: "Análisis Estratégico de Recursos Humanos: Desarrollando Talento y Eficiencia",
    descripcion: "𝐏𝐫𝐢𝐦𝐞𝐫𝐨 𝐭𝗲 𝗶𝗻𝘃𝗶𝘁𝗼 𝗮 𝗼𝗯𝘀𝗲𝗿𝘃𝗮𝗿 𝗹𝗮𝘀 𝗶𝗺𝗮𝗴𝗲𝗻𝗲𝘀 𝗱𝗲 𝗰𝗼𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁𝗼 𝗾𝘂𝗲 𝘀𝗲 𝗲𝗻𝗰𝘂𝗲𝗻𝘁𝗿𝗮 𝗲𝗻 𝗲𝗹 𝗰𝗮𝗿𝗼𝘂𝘀𝗲𝗹 𝐝𝐞 𝐢𝐦𝐚𝐠𝐞𝐧𝐞𝐬. Este proyecto evalúa la gestión estratégica de recursos humanos en Grupo Nutresa, explorando mejoras en reclutamiento, desarrollo y evaluación del personal. Te invitamos a revisar el PDF completo, como así mismo estos puntos clave como el Público Objetivo, Objetivos, Problemas Abordados, Metodología, Resultados, Análisis de Resultados, Conclusiones, Habilidades Desarrolladas y Reflexiones Personales. 𝗛𝗮𝘇 𝗰𝗹𝗶𝗰 𝗲𝗻 𝗩𝗘𝗥 𝗣𝗗𝗙 𝗽𝗮𝗿𝗮 𝘂𝗻𝗮 𝘃𝗶𝘀𝗶ó𝗻 𝗺á𝘀 𝗱𝗲𝘁𝗮𝗹𝗹𝗮𝗱𝗮 𝗱𝗲𝗹 𝗽𝗿𝗼𝘆𝗲𝗰𝘁𝗼",
    imagen: "https://tse1.mm.bing.net/th?id=OIP.GUrUdb9aRTKMYJ2GjRLUVwHaD4&pid=Api&P=0&h=180.jpg",
    pdf: "https://smallpdf.com/es/file#s=c300f46d-a835-4b4d-b669-2f6b48fe8b24",
    calificacion: 8.97,
    descripcionCalificacion: "Muy buen análisis y presentación general.",
    imagenesCarrusel: [
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721172313/imagen_1_proyecto_2_srl8od.webp",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721172924/imagen_2_proyecto_2_fhu0zw.png",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721176125/un-infograf-ia_64598308_hei7ch.png",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721177896/una-ilustraci-o_64598446_nb48cs.png",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721178376/imagen_de_desarrollo_de_Nutresa_vgr9wp.png"

    ],
    publicoObjetivo: "Este trabajo práctico está dirigido principalmente a potenciales empleadores que buscan evaluar las capacidades y conocimientos del autor en la gestión estratégica de recursos humanos. Además, el público en general interesado en entender cómo se desarrollan y optimizan los recursos humanos en una organización también puede beneficiarse de este informe.",
    objetivo: "El objetivo principal del proyecto es analizar estratégicamente los recursos humanos en Grupo Nutresa, enfocándose en el desarrollo de talento y la eficiencia operativa. El análisis incluye la evaluación de puestos de trabajo estratégicos y operativos, propuestas de mejoras y la implementación de prácticas innovadoras.",
    problemasAbordados: [
      "Ineficiencia en el Desarrollo de Talento: La falta de un enfoque estructurado y estratégico para el desarrollo del talento humano, lo que resulta en una menor retención de empleados y una brecha en las habilidades necesarias para cumplir con los objetivos organizacionales.",
      "Falta de Eficiencia Operativa: La necesidad de mejorar la eficiencia operativa mediante la evaluación y mejora de los puestos de trabajo estratégicos y operativos, lo que incluye la implementación de prácticas innovadoras que optimicen el desempeño y aumenten la productividad en Grupo Nutresa."
    ],
    metodologia: [
      "Investigación Cualitativa y Análisis Documental: Se realizó una investigación cualitativa a través de entrevistas con empleados y análisis de documentos internos de la empresa. Esta metodología permitió recopilar información detallada sobre las experiencias y percepciones de los empleados, así como evaluar las políticas y prácticas actuales de recursos humanos.",
      "Estudios Comparativos y Evaluación de Programas: Se llevaron a cabo estudios comparativos con otras organizaciones y evaluaciones de los programas de formación y desarrollo de Grupo Nutresa. Esta metodología incluyó la comparación de estrategias de reclutamiento y selección, así como la identificación de mejores prácticas y áreas de mejora para optimizar el desarrollo de talento y la eficiencia operativa."
    ],
    resultados: [
      "Uno de los resultados obtenidos es la mejora significativa del bienestar laboral dentro de las organizaciones. Los estudios revisados muestran que implementar prácticas saludables de gestión y desarrollo de recursos humanos no solo beneficia el bienestar físico y mental de los empleados, sino que también contribuye a un ambiente laboral más positivo y productivo.",
      "El trabajo analizado destaca que las estrategias efectivas de gestión de la diversidad cultural pueden mejorar significativamente la integración y la cohesión en equipos multiculturales. Esto incluye el uso de herramientas y recursos específicos para facilitar la comprensión intercultural y promover un ambiente de trabajo inclusivo."
    ],
    analisisResultados: "Aunque es un trabajo práctico académico, el aprendizaje y la investigación realizados tienen aplicaciones prácticas en entornos laborales reales. Este análisis ha proporcionado una comprensión profunda de las estrategias de recursos humanos y su impacto en el desarrollo del talento y la eficiencia organizacional.",
    conclusiones: [
      "Alineación Estratégica y Mejora Continua: El proyecto subraya la necesidad crucial de alinear las estrategias de recursos humanos con los objetivos organizacionales. Las propuestas de mejora, como la introducción de nuevos roles estratégicos y la optimización de procesos de reclutamiento y capacitación, son fundamentales para fortalecer la gestión del talento en Nutresa. Este enfoque no solo busca mejorar la eficiencia operativa, sino también cultivar un entorno laboral más productivo y satisfactorio para los empleados.",
      "Preparación y Demonstración de Competencias: El trabajo realizado refleja mis capacidades y conocimientos en la gestión estratégica de recursos humanos. A través de este proyecto, demuestro mi preparación para implementar prácticas innovadoras y efectivas que impacten positivamente en las organizaciones. Estas conclusiones no solo validan mis habilidades ante posibles empleadores, sino que también evidencian mi compromiso con el desarrollo continuo y la excelencia en el campo de los recursos humanos."
    ],
    habilidadesDesarrolladas: [
      "Análisis de Perfiles de Puestos: Durante este proyecto, he fortalecido mi capacidad para analizar detalladamente los perfiles de puestos dentro de una organización. Esto incluye la habilidad para identificar competencias clave, responsabilidades específicas y requisitos necesarios para cada puesto, facilitando así una mejor alineación entre las necesidades organizacionales y las habilidades de los empleados.",
      "Diseño de Estrategias de Recursos Humanos: He adquirido habilidades en la formulación y diseño de estrategias efectivas de recursos humanos. Esto implica la capacidad de desarrollar iniciativas y programas que promuevan el desarrollo del talento, mejoren la retención de empleados y optimicen los procesos de reclutamiento y selección, contribuyendo así al cumplimiento de los objetivos estratégicos de la organización."
    ],
    reflexionesPersonales: "La realización de este trabajo práctico ha sido una experiencia enriquecedora que me ha permitido enfrentar diversos desafíos, como la recopilación de datos precisos y la adaptación de estrategias a las necesidades específicas de la organización. Este proceso ha fortalecido mi capacidad para realizar análisis profundos y desarrollar soluciones efectivas en el ámbito de recursos humanos.",
    agradecimientos: "Agradezco a los profesores y a la Universidad por proporcionar un entorno académico que permite la realización de trabajos prácticos semi-reales, facilitando el aprendizaje y la aplicación de conocimientos en situaciones cercanas a la realidad empresarial. También agradezco a Grupo Nutresa por permitir el acceso a su información y colaborar en este análisis."
  },
  {
    id: 3,
    titulo: "Potenciando la Motivación: Estrategias Clave para el Éxito Personal y Organizacional",
    descripcion: "𝐏𝐫𝐢𝐦𝐞𝐫𝐨 𝐭𝗲 𝗶𝗻𝘃𝗶𝘁𝗼 𝗮 𝗼𝗯𝘀𝗲𝗿𝘃𝗮𝗿 𝗹𝗮𝘀 𝗶𝗺𝗮𝗴𝗲𝗻𝗲𝘀 𝗱𝗲 𝗰𝗼𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁𝗼 𝗾𝘂𝗲 𝘀𝗲 𝗲𝗻𝗰𝘂𝗲𝗻𝘁𝗿𝗮 𝗲𝗻 𝗲𝗹 𝗰𝗮𝗿𝗼𝘂𝘀𝗲𝗹 𝐝𝐞 𝐢𝐦𝐚𝐠𝐞𝐧𝐞𝐬. Este proyecto explora la aplicación práctica de la Psicología de la Motivación en tres contextos diferentes: motivación de equipos deportivos utilizando la Teoría de la Autodeterminación, estrategias publicitarias emocionales y sensoriales para promover alimentos saludables, y entrevistas para tratar la adicción a la cocaína. Te invitamos a leer y analizar el PDF donde esta el proyecto completo, como así mismo estos puntos clave como el Público Objetivo, Objetivos, Problemas Abordados, Metodología, Resultados, Análisis de Resultados, Conclusiones, Habilidades Desarrolladas y Reflexiones Personales. 𝗛𝗮𝘇 𝗰𝗹𝗶𝗰 𝗲𝗻 𝗩𝗘𝗥 𝗣𝗗𝗙 𝗽𝗮𝗿𝗮 𝘂𝗻𝗮 𝘃𝗶𝘀𝗶ó𝗻 𝗺á𝘀 𝗱𝗲𝘁𝗮𝗹𝗹𝗮𝗱𝗮 𝗱𝗲𝗹 𝗽𝗿𝗼𝘆𝗲𝗰𝘁𝗼",
    imagen: "https://tse3.mm.bing.net/th?id=OIP.hkVqjknsAlfuVo2v75lp8QEaDd&pid=Api&P=0&h=180.jpg",
    
    pdf: "https://smallpdf.com/es/file#s=dba3b777-85fe-4266-96bb-a9ee391c5ada",
    calificacion: 9.47,
    descripcionCalificacion: "Excelente trabajo con una evaluación detallada y precisa.",
    imagenesCarrusel: [
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721180905/1_imagen_proyecto_3_hg1pip.png",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721232327/Infograf%C3%ADa_Relaciones_Sociales_Ilustrado_Morado_u9gjht.jpg",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721234671/Tr%C3%ADptico_Autoestima_Ilustrado_Azul_mwyyfp.jpg",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721236828/Cartel_de_concienciaci%C3%B3n_sobre_las_drogas_educaci%C3%B3n_y_concienciaci%C3%B3n_sobre_las_drogas_y_el_alcohol_estilo_con_ilustraci%C3%B3n_agradable_en_azul_claro_azul_oscuro_crema_jgvqdf.jpg",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721239433/crecimiento_y_%C3%A9xito_1_cucywb.png",
    ],
    publicoObjetivo: "Este trabajo práctico está dirigido principalmente a potenciales empleadores interesados en la psicología organizacional y la motivación. También puede ser útil para el público en general que desea comprender cómo se puede aplicar la motivación en diversos contextos, desde el deporte hasta la salud y el marketing.",
    objetivo: "El objetivo principal de este proyecto es explorar y aplicar diversas teorías de la motivación en tres casos prácticos: un equipo de fútbol, una empresa de marketing y un paciente con adicción. ",
    problemasAbordados: [
      "Analizar cómo la falta de motivación afecta negativamente el rendimiento deportivo, las estrategias de marketing y el proceso de tratamiento de adicciones, identificando métodos efectivos para aumentar y mantener la motivación en cada uno de estos ámbitos.",
      "Explorar cómo niveles bajos de motivación pueden contribuir al estrés, la ansiedad y la falta de satisfacción personal en diferentes contextos, como el deporte, el trabajo y la vida cotidiana.",
      "Investigar cómo los estados motivacionales pueden afectar las decisiones individuales y organizacionales, destacando cómo una motivación adecuada puede llevar a decisiones más informadas y satisfactorias tanto a nivel personal como profesional."
    ],
    metodologia: [
      "Investigación teórica: Se realizó una revisión exhaustiva de la literatura académica sobre teorías de la motivación, incluyendo estudios y modelos relevantes que proporcionaron el marco conceptual para entender cómo la motivación influye en diferentes contextos.",
      "Entrevistas estructuradas: Se llevaron a cabo entrevistas estructuradas con diferentes grupos de interés, como entrenadores de fútbol, expertos en marketing y pacientes con adicciones, para obtener información cualitativa sobre cómo perciben y experimentan la motivación en sus respectivos campos.",
      "Análisis de casos: Se analizaron estudios de caso específicos para explorar cómo se aplican las teorías de la motivación en situaciones reales. Esto incluyó examinar estrategias exitosas y desafíos enfrentados al implementar intervenciones motivacionales en diferentes entornos.",
      "Pruebas y estrategias específicas: Se diseñaron y probaron estrategias específicas basadas en las teorías de la motivación identificadas en la investigación teórica. Estas estrategias fueron adaptadas para cada contexto (equipo de fútbol, empresa de marketing, tratamiento de adicciones) con el fin de evaluar su efectividad y ajustarlas según los resultados obtenidos."
    ],
    resultados: [
      "Efectividad de las estrategias de motivación: Los resultados destacan la efectividad de las estrategias de motivación aplicadas en cada uno de los casos estudiados (equipo de fútbol, empresa de marketing, tratamiento de adicciones). Se evidencia cómo estas estrategias contribuyeron al aumento del rendimiento, influencia en la conducta del consumidor y mejoría en el tratamiento de adicciones, según corresponda a cada contexto específico.",
      "Validación de hipótesis y conclusiones: A través de los datos recopilados y los gráficos presentados, se valida la hipótesis inicial de que las teorías de la motivación aplicadas de manera estratégica pueden impactar positivamente en diferentes áreas. Se presentan conclusiones basadas en los resultados obtenidos, proporcionando insights relevantes para futuras investigaciones y aplicaciones prácticas en el campo de la motivación."
    ],
    analisisResultados: "El análisis de los resultados revela que la aplicación de teorías de la motivación puede tener un impacto significativo en diversas áreas. En el deporte, se observó una mejora en la cohesión y el rendimiento del equipo. En marketing, las estrategias recomendadas influenciaron positivamente la percepción del producto. En el tratamiento de adicciones, se identificaron puntos clave para motivar al paciente hacia el cambio. Estos hallazgos se comparan favorablemente con investigaciones previas, demostrando la relevancia y aplicabilidad de la motivación en contextos diversos.",
    conclusiones: [
      "Importancia crucial de la motivación: Este proyecto destaca la relevancia fundamental de la motivación tanto a nivel individual como organizacional. Las estrategias aplicadas demostraron ser efectivas no solo en mejorar el rendimiento y la eficiencia en los casos estudiados (equipo de fútbol, empresa de marketing, tratamiento de adicciones), sino también en promover un ambiente de trabajo positivo y colaborativo.",
      "Demostración de competencias: Los resultados obtenidos reflejan no solo la efectividad de las estrategias de motivación aplicadas, sino también las capacidades y conocimientos que tuve en el manejo práctico de teorías motivacionales. Esto me posiciona como un futuro profesional preparado para implementar prácticas exitosas en entornos organizacionales, lo cual es relevante para potenciales empleadores interesados en mejorar el desempeño y el clima laboral dentro de sus empresas.",
      "Impacto potencial en futuras aplicaciones: Las conclusiones derivadas de este proyecto sugieren que las estrategias de motivación estudiadas tienen un potencial significativo para ser aplicadas en diversas áreas y contextos. Este conocimiento adquirido puede guiar futuras investigaciones y prácticas en psicología organizacional, marketing y salud, ofreciendo oportunidades para innovar y mejorar resultados en múltiples campos profesionales."
    ],
    habilidadesDesarrolladas: [
      "Aplicación de teorías de la motivación: Este proyecto me ha permitido desarrollar habilidades técnicas en la aplicación práctica de diversas teorías de la motivación en contextos reales. He aprendido a identificar las teorías más adecuadas para cada situación y a diseñar estrategias efectivas basadas en estas teorías para motivar tanto a equipos deportivos como a consumidores y pacientes en tratamiento.",
      "Habilidades de comunicación efectiva y trabajo en equipo: Además de habilidades técnicas, he mejorado significativamente mis habilidades blandas, como la comunicación efectiva y el trabajo en equipo. La interacción con diferentes grupos de interés, desde deportistas hasta profesionales de marketing y pacientes, me ha permitido desarrollar la capacidad de comunicar ideas complejas de manera clara y persuasiva, y de colaborar efectivamente en entornos multidisciplinarios para alcanzar objetivos comunes."
    ],
    reflexionesPersonales: "La realización de este trabajo práctico ha sido una experiencia enriquecedora que me ha permitido enfrentar diversos desafíos, como adaptar estrategias a diferentes contextos y obtener datos precisos. Este proceso ha fortalecido mi capacidad para realizar análisis profundos y desarrollar soluciones efectivas en el ámbito de la motivación. La interacción con distintos escenarios me ha permitido entender mejor cómo la motivación puede ser un motor poderoso para el cambio y el desarrollo personal.",
    agradecimientos: "Agradezco a los profesores y a la Universidad por proporcionar un entorno académico que permite la realización de trabajos prácticos semi-reales, facilitando el aprendizaje y la aplicación de conocimientos en situaciones cercanas a la realidad empresarial. También agradezco a los participantes en los casos prácticos por su colaboración y valiosa contribución a este análisis."
  },
  {
    id: 4,
    titulo: "Exploración Práctica en Psicometría: Analizando Ítems y Propiedades Psicométricas",
    descripcion: "𝐏𝐫𝐢𝐦𝐞𝐫𝐨 𝐭𝗲 𝗶𝗻𝘃𝗶𝘁𝗼 𝗮 𝗼𝗯𝘀𝗲𝗿𝘃𝗮𝗿 𝗹𝗮𝘀 𝗶𝗺𝗮𝗴𝗲𝗻𝗲𝘀 𝗱𝗲 𝗰𝗼𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁𝗼 𝗾𝘂𝗲 𝘀𝗲 𝗲𝗻𝗰𝘂𝗲𝗻𝘁𝗿𝗮 𝗲𝗻 𝗲𝗹 𝗰𝗮𝗿𝗼𝘂𝘀𝗲𝗹 𝐝𝐞 𝐢𝐦𝐚𝐠𝐞𝐧𝐞𝐬. El trabajo práctico Exploración Práctica de Propiedades Psicométricas: Análisis de Ítems en Psicometría se centra en desarrollar habilidades prácticas fundamentales para analizar ítems en pruebas psicométricas. Te invitamos a leer y analizar el PDF donde esta el proyecto completo, como así mismo estos puntos clave como el Público Objetivo, Objetivos, Problemas Abordados, Metodología, Resultados, Análisis de Resultados, Conclusiones, Habilidades Desarrolladas y Reflexiones Personales. 𝗛𝗮𝘇 𝗰𝗹𝗶𝗰 𝗲𝗻 𝗩𝗘𝗥 𝗣𝗗𝗙 𝗽𝗮𝗿𝗮 𝘂𝗻𝗮 𝘃𝗶𝘀𝗶ó𝗻 𝗺á𝘀 𝗱𝗲𝘁𝗮𝗹𝗹𝗮𝗱𝗮 𝗱𝗲𝗹 𝗽𝗿𝗼𝘆𝗲𝗰𝘁𝗼",
    imagen: "https://tse1.mm.bing.net/th?id=OIP.GUrUdb9aRTKMYJ2GjRLUVwHaD4&pid=Api&P=0&h=180.jpg",
    pdf: "https://smallpdf.com/es/file#s=4e4e64a9-16d3-4abb-8ddf-9821c24b1e07",
    calificacion: 9.22,
    descripcionCalificacion: "Muy buen trabajo con analisis y conceptos detallados y bien definidos",
    imagenesCarrusel: [
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721243571/items_xzkizb.png",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721246022/items2_1_rq9035.png",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721247947/items3_b8qqqc.png",
      "https://res.cloudinary.com/dah8tj4ry/image/upload/v1721250590/items4_atohdn.png"
    ],
    publicoObjetivo: "Este trabajo práctico está dirigido principalmente a potenciales empleadores interesados en evaluar mis capacidades y conocimientos en el campo de la psicometría. Además, puede ser útil para el público en general que desee comprender cómo se analizan y evalúan los ítems en los instrumentos psicométricos.",
    objetivo: "El objetivo principal del proyecto es proporcionar una experiencia práctica en el análisis de ítems y las propiedades psicométricas, especialmente en relación con la fiabilidad de los instrumentos.",
    problemasAbordados: [
      "Identificación de la Dificultad y Discriminación de los Ítems: Este proyecto aborda el desafío de identificar la dificultad y la discriminación de los ítems en pruebas psicométricas. La identificación de la dificultad de un ítem ayuda a determinar qué tan difícil es para los evaluados, mientras que la discriminación se refiere a la capacidad del ítem para distinguir entre individuos con diferentes niveles de habilidad.",
      "Optimización de las Alternativas de Respuesta: Otro problema abordado es la optimización de las alternativas de respuesta en los ítems de las pruebas. Esto implica asegurar que las opciones de respuesta sean efectivas y relevantes, garantizando que la prueba sea válida y confiable para medir las habilidades o características específicas que se están evaluando."
    ],
    metodologia: [
      "Para la realización de este trabajo se llevó a cabo una investigación exhaustiva y un enfoque de prueba y error. ",
      "Se utilizaron diversas herramientas y técnicas, incluyendo el análisis de datos de pruebas psicométricas, cálculos del índice de dificultad y discriminación, y la aplicación de fórmulas estadísticas para optimizar las alternativas de respuesta. La metodología también incluyó ejercicios prácticos que consolidaron los fundamentos teóricos revisados en la asignatura de psicometría."
    ],
    resultados: [
      "En el estudio de Exploración Práctica de Propiedades Psicométricas: Análisis de Ítems en Psicometría, se encontró que los índices de dificultad de los ítems evaluados variaron considerablemente. Los ítems A y C mostraron los índices de dificultad más altos (1.2 cada uno), indicando que la mayoría de los sujetos evaluados respondieron correctamente a estos ítems. En contraste, el ítem E demostró ser el más difícil, con un índice de dificultad de 0.6. Este análisis destaca la importancia de ajustar la dificultad de los ítems para garantizar una evaluación precisa de las habilidades evaluadas.",
      "Análisis Detallado y Cálculos Psicométricos: Los resultados incluyen un análisis exhaustivo y cálculos precisos de diversas pruebas psicométricas. Se han aplicado técnicas estadísticas para evaluar la dificultad y discriminación de los ítems, así como para optimizar las alternativas de respuesta en los instrumentos evaluados. Este enfoque ha proporcionado una comprensión profunda de las propiedades psicométricas de los ítems analizados, fundamentando los resultados presentados en el estudio."
    ],
    analisisResultados: "Aunque es un trabajo práctico académico, el aprendizaje y la investigación realizados tienen aplicaciones prácticas en entornos laborales reales. Este análisis ha proporcionado una comprensión profunda de las propiedades psicométricas de los ítems y su impacto en la fiabilidad de los instrumentos de medición.",
    conclusiones: [
      " Importancia de Evaluar con Precisión las Propiedades de los Ítems: Este proyecto resalta la importancia crítica de evaluar con precisión las propiedades de los ítems en los instrumentos psicométricos. La adecuada identificación de la dificultad y discriminación de los ítems es fundamental para garantizar la fiabilidad y validez de las pruebas. Este análisis riguroso permite optimizar las alternativas de respuesta, asegurando que los instrumentos sean efectivos y precisos en la medición de las variables psicológicas evaluadas.",
      "Preparación Demostrada en Psicometría y Valor para los Empleadores: Este trabajo no solo demuestra mis habilidades y conocimientos en el campo de la psicometría, sino que también subraya mi capacidad para aplicar estos principios en entornos prácticos y profesionales. Al mostrar una comprensión profunda de las propiedades de los ítems y su impacto en la calidad de las pruebas, este proyecto evidencia mi preparación para contribuir de manera significativa en el desarrollo y la implementación de evaluaciones psicométricas eficaces en cualquier organización."
    ],
    habilidadesDesarrolladas: [
      "Habilidades Desarrolladas en Análisis Psicométrico: Este proyecto ha fortalecido mis habilidades técnicas en el análisis de ítems y la evaluación de pruebas psicométricas. He adquirido competencias en el cálculo preciso de índices de dificultad y discriminación, así como en la optimización de las alternativas de respuesta para mejorar la calidad de los instrumentos de evaluación. Estas habilidades técnicas son fundamentales para realizar evaluaciones precisas y confiables en contextos psicológicos y educativos.",
      "Habilidades Mejoradas en Investigación y Comunicación de Resultados: Además, he mejorado mis habilidades no técnicas, incluyendo la capacidad de realizar investigaciones exhaustivas y la toma de decisiones analíticas basadas en datos. A través de este proyecto, he aprendido a presentar resultados de manera clara y efectiva, utilizando explicaciones detalladas que facilitan la interpretación de los hallazgos psicométricos. Estas habilidades son esenciales para comunicar eficazmente los resultados de las evaluaciones a diferentes audiencias y para contribuir al desarrollo de políticas y decisiones informadas en el ámbito profesional."
    ],
    reflexionesPersonales: "La realización de este trabajo práctico ha sido una experiencia enriquecedora que me ha permitido enfrentar diversos desafíos, como la recopilación de datos precisos y la aplicación de fórmulas estadísticas en situaciones prácticas. Este proceso ha fortalecido mi capacidad para realizar análisis profundos y desarrollar soluciones efectivas en el ámbito de la psicometría.",
    agradecimientos: "Agradezco a los profesores y a la Universidad por proporcionar un entorno académico que permite la realización de trabajos prácticos semi-reales, facilitando el aprendizaje y la aplicación de conocimientos en situaciones cercanas a la realidad profesional. También agradezco a los compañeros de clase y tutores por su apoyo y colaboración en este proyecto."
  },

  // aqui se puede añadir mas proyectos a futuro
];


const ProyectosDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const proyecto = proyectos.find((proyecto) => proyecto.id === parseInt(id));

  const handleBackClick = () => {
    navigate("/proyectos");
  };

  if (!proyecto) {
    return <div>Proyecto no encontrado</div>
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === proyecto.imagenesCarrusel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? proyecto.imagenesCarrusel.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="detalle-contenedor">
      <div className="detalle-proyecto">
        <div className="carrusel">
          <button className="carrusel-boton" onClick={prevImage}>{"<"}</button>
          <img
            src={proyecto.imagenesCarrusel[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            className="carrusel-imagen"
          />
          <button className="carrusel-boton" onClick={nextImage}>{">"}</button>
        </div>
        <h1 className="detalle-titulo">{proyecto.titulo}</h1>
        <p className="detalle-descripcion">{proyecto.descripcion}</p>
        <p className="detalle-detalles">{proyecto.detalles}</p>
        <a href={proyecto.pdf} className="ver-pdf" target="_blank" rel="noopener noreferrer">VER PDF</a>
        <div className="calificacion">
          <span className="nota-calificacion">Calificación: {proyecto.calificacion}</span>
          <p className="descripcion-calificacion">{proyecto.descripcionCalificacion}</p>
        </div>
        <div className="proyecto-detalles">
          <h2>Público Objetivo</h2>
          <p>{proyecto.publicoObjetivo}</p>
          <h2>Objetivo</h2>
          <p>{proyecto.objetivo}</p>
          <h2>Problemas Abordados</h2>
          <ul>
            {proyecto.problemasAbordados.map((problema, index) => (
              <li key={index}>{problema}</li>
            ))}
          </ul>
          <h2>Metodología</h2>
          <ul>
            {proyecto.metodologia.map((metodo, index) => (
              <li key={index}>{metodo}</li>
            ))}
          </ul>
          <h2>Resultados</h2>
          <ul>
            {proyecto.resultados.map((resultado, index) => (
              <li key={index}>{resultado}</li>
            ))}
          </ul>
          <h2>Análisis de Resultados</h2>
          <p>{proyecto.analisisResultados}</p>
          <h2>Conclusiones</h2>
          <ul>
            {proyecto.conclusiones.map((conclusion, index) => (
              <li key={index}>{conclusion}</li>
            ))}
          </ul>
          <h2>Habilidades Desarrolladas</h2>
          <ul>
            {proyecto.habilidadesDesarrolladas.map((habilidad, index) => (
              <li key={index}>{habilidad}</li>
            ))}
          </ul>
          <h2>Reflexiones Personales</h2>
          <p>{proyecto.reflexionesPersonales}</p>
          <h2>Agradecimientos</h2>
          <p>{proyecto.agradecimientos}</p>
        </div>
        <button className="volver-boton" onClick={handleBackClick}>VOLVER</button>
      </div>
    </div>
  );
};

export default ProyectosDetalle;

