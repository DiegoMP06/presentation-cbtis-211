import type { SpecialtyType } from '../types/index';
import ADRH from '../assets/specialties/adrh.svg';
import Contabilidad from '../assets/specialties/contabilidad.svg';
import PAB from '../assets/specialties/pab.svg';
import PIA from '../assets/specialties/pia.svg';
import Programacion from '../assets/specialties/programacion.svg';
import Ventas from '../assets/specialties/ventas.svg';

const specialties : SpecialtyType[] = [
    {
        id: 1,
        specialty: 'Administración de Recursos Humanos',
        icon: ADRH,
        main_paragraphs: [
            `Si te interesa la gestión de personas y organizaciones, esta especialidad es para ti.`,
            `Aprenderás sobre reclutamiento, capacitación, evaluación del desempeño y legislación laboral.`
        ],
        description: [
            {
                type: 'paragraph',
                paragraph: `En el contexto (regional / nacional) la formación de Técnicos en: Administración de Recursos Humanos es relevante porque:`,
            },
            {
                type: 'paragraph',
                paragraph: `La carrera de Técnico en Administración de Recursos Humanos se desarrolla como vertiente de la carrera de Administración y ofrece las competencias profesionales que permiten al estudiante plantear actividades del área de recursos humanos en función de las que se realizan en cada área de la organización, integrar, al personal a la organización, asistir en actividades de capacitación, desarrollo y evaluación del personal, así como determinar las remuneraciones al personal.`,
            },
            {
                type: 'paragraph',
                paragraph: `Así mismo podrá desarrollar competencias genéricas relacionadas principalmente con la participación en los procesos de comunicación en distintos contextos, la integración efectiva a los equipos de trabajo y la intervención consciente, desde su comunidad en particular, en el país y el mundo en general, todo con apego al cuidado del medio ambiente.`,
            },
            {
                type: 'paragraph',
                paragraph: `La formación profesional se inicia en el segundo semestre y se concluye en el sexto semestre, desarrollando en este lapso de tiempo las competencias para plantear actividades del área de recursos humanos en función de las que se realizan en cada área de la organización, integrar el capital humano a la organización, asistir en el control y evaluación del desempeño del capital humano de la organización, controlar los procesos y servicios de higiene y seguridad el capital humano en la organización, determinar las remuneraciones al capital humano de la organización.`,
            },
            {
                type: 'paragraph',
                paragraph: `Todas estas competencias posibilitan al egresado su incorporación al mundo laboral o desarrollar procesos productivos independientes, de acuerdo con sus intereses profesionales o las necesidades en su entorno social.`,
            },
            {
                type: 'paragraph',
                paragraph: `La carrera de Técnico en Administración de Recursos Humanos desarrolla en el estudiante las siguientes:`,
            },
            {
                type: 'list',
                paragraph: `Competencias profesionales:`,
                items: [
                    `Plantea actividades del área de recursos humanos en función de las que se realizan en otras áreas de la organización.  `,
                    `Integra el capital humano a la organización `,
                    `Asiste en el control y evaluación del desempeño del capital humano de la organización`,
                    `Controla los procesos y servicios de higiene y seguridad del capital humano en la organización`,
                    `Determina las remuneraciones al capital humano de la organización.`,
                ],
            },
            {
                type: 'list',
                paragraph: ` Competencias genéricas:`,
                items: [
                    `Se conoce y valora a sí mismo y aborda problemas y retos teniendo en cuenta los objetivos que persigue.`,
                    `Es sensible al arte y participa en la apreciación e interpretación de sus expresiones en distintos géneros.`,
                    `Elige y practica estilos de vida saludables.`,
                    `Escucha, interpreta y emite mensajes pertinentes en distintos contextos mediante la utilización de medios, códigos y herramientas apropiados.`,
                    `Desarrolla innovaciones y propone soluciones a problemas a partir de métodos establecidos.`,
                    `Sustenta una postura personal sobre temas de interés y relevancia general, considerando otros puntos de vista de manera crítica y reflexiva.`,
                    `Aprende por iniciativa e interés propio a lo largo de la vida.`,
                    `Participa y colabora de manera efectiva en equipos diversos.`,
                    `Participa con una conciencia cívica y ética en la vida de su comunidad, región, México y el mundo.`,
                    `Mantiene una actitud respetuosa hacia la interculturalidad y la diversidad de creencias, valores, ideas y prácticas sociales.`,
                    `Contribuye al desarrollo sustentable de manera crítica, con acciones responsables.`
                ],
            },
            {
                type: 'list',
                paragraph: `Competencia disciplinares:`,
                items: [
                    `Identifica, ordena e interpreta las ideas, datos y conceptos explícitos e implícitos en un texto, considerando el contexto en el que se generó y en el que se recibe.`,
                    `Produce textos con base en el uso normativo de la lengua, considerando la intención y situación comunicativa.`,
                    `Analiza con visión emprendedora los factores y elementos fundamentales que intervienen en la productividad y competitividad de una organización y su relación con el entorno socioeconómico.`,
                    `Identifica el conocimiento social y humanista como una construcción en constante transformación.`,
                    `Aplica normas de seguridad en el manejo de sustancias, instrumentos y equipo en la realización de actividades de su vida cotidiana.`,
                    `Utiliza las tecnologías de la información y comunicación para investigar, resolver problemas, producir materiales y transmitir información.`,
                ],
            },
            {
                type: 'list',
                paragraph: `Competencias de Productividad y empleabilidad:`,
                items: [
                    `Precisar el mensaje escrito a la vez que escribe ideas con lenguaje claro y preciso.`,
                    `Modificar su conducta para adecuarse a nuevas estrategias.`,
                    `Expresa sus ideas de forma verbal o escrita teniendo en cuenta las características de sus interlocutores y la situación dada.`,
                    `Registrar y revisar información para asegurar que sea correcta.`,
                    `Aceptar y aplicar los cambios de los procedimientos y de las herramientas de trabajo`,
                    `Evaluar mediante seguimiento el cumplimiento de los objetivos y corregir las desviaciones si fuera necesario.`,
                    `Observar permanentemente y reportar los cambios presentes en los procesos, infraestructura e insumos.`,
                    `Revisar las acciones llevadas a cabo con el fin de realizar mejoras y adaptarlas a los procedimientos`,
                    `Cuidar y manejar los recursos y bienes ajenos siguiendo normas y disposiciones definidas.`,
                ],
            },
            {
                type: 'paragraph',
                paragraph: `Facilitando al egresado su incorporación al mundo laboral en: Servicios de Administración de Negocios como: Administradores y especialistas en Recursos Humanos y Sistemas de Gestión, y Auxiliares en administración, mercadotecnia, comercialización y comercio exterior o en el desarrollo de procesos productivos independientes, de acuerdo con sus intereses profesionales y necesidades de su entorno social.`
            },
            {
                type: 'paragraph',
                paragraph: `Para lograr las competencias el estudiante inicia la formación profesional, en el segundo semestre y la concluye en el sexto. Los primeros tres módulos de la carrera técnica tienen una duración de 272 horas cada uno, y los dos últimos de 192, un total de 1200 horas de formación profesional.`
            },
            {
                type: 'paragraph',
                paragraph: `Cabe destacar que los módulos de formación profesional tienen carácter transdisciplinario, por cuanto corresponden con objetos y procesos de transformación que implica la integración de saberes de distintas disciplinas.`
            },
        ],
        egress_perfil: [
            {
                type: 'paragraph',
                paragraph: `La formación que ofrece la carrera de Técnico en Administración de Recursos Humanos permite al egresado, a través de la articulación de saberes de diversos campos, realizar actividades dirigidas a la planeación de actividades, a la incorporación de capital humano en la organización, a la asistencia en el control y evaluación del desempeño del capital humano, al control de los procesos y servicios de higiene y seguridad y a la determinación de remuneraciones al capital humano de la organización.`
            },
            {
                type: 'list',
                paragraph: `Durante el proceso de formación de los cinco módulos, el estudiante desarrollará o reforzará las siguientes competencias profesionales:`,
                items: [
                    `Plantea actividades del área de recursos humanos en función de las que se realizan en otras áreas de la organización.  `,
                    `Integra el capital humano a la organización `,
                    `Asiste en el control y evaluación del desempeño del capital humano de la organización`,
                    `Controla los procesos y servicios de higiene y seguridad del capital humano en la organización`,
                    `Determina las remuneraciones al capital humano de la organización.`,
                ],
            },
            {
                type: 'paragraph',
                paragraph: `Además se presentan las 11 competencias genéricas, para que usted intervenga en su desarrollo o reforzamiento y con ello enriquezca el perfil de egreso del bachiller. Como resultado del análisis realizado por los docentes elaboradores de este programa de estudios, se considera que el egresado de la carrera de Técnico en Administración de Recursos Humanos está en posibilidades de demostrar las:`
            },
            {
                type: 'list',
                paragraph: ` Competencias genéricas:`,
                items: [
                    `Se conoce y valora a sí mismo y aborda problemas y retos teniendo en cuenta los objetivos que persigue.`,
                    `Es sensible al arte y participa en la apreciación e interpretación de sus expresiones en distintos géneros.`,
                    `Elige y practica estilos de vida saludables.`,
                    `Escucha, interpreta y emite mensajes pertinentes en distintos contextos mediante la utilización de medios, códigos y herramientas apropiados.`,
                    `Desarrolla innovaciones y propone soluciones a problemas a partir de métodos establecidos.`,
                    `Sustenta una postura personal sobre temas de interés y relevancia general, considerando otros puntos de vista de manera crítica y reflexiva.`,
                    `Aprende por iniciativa e interés propio a lo largo de la vida.`,
                    `Participa y colabora de manera efectiva en equipos diversos.`,
                    `Participa con una conciencia cívica y ética en la vida de su comunidad, región, México y el mundo.`,
                    `Mantiene una actitud respetuosa hacia la interculturalidad y la diversidad de creencias, valores, ideas y prácticas sociales.`,
                    `Contribuye al desarrollo sustentable de manera crítica, con acciones responsables.`,
                ],
            },
            {
                type: 'list',
                paragraph: `Competencia disciplinares:`,
                items: [
                    `Identifica, ordena e interpreta las ideas, datos y conceptos explícitos e implícitos en un texto, considerando el contexto en el que se generó y en el que se recibe.`,
                    `Produce textos con base en el uso normativo de la lengua, considerando la intención y situación comunicativa.`,
                    `Analiza con visión emprendedora los factores y elementos fundamentales que intervienen en la productividad y competitividad de una organización y su relación con el entorno socioeconómico.`,
                    `Identifica el conocimiento social y humanista como una construcción en constante transformación. `,
                    `Aplica normas de seguridad en el manejo de sustancias, instrumentos y equipo en la realización de actividades de su vida cotidiana.`,
                    `Utiliza las tecnologías de la información y comunicación para investigar, resolver problemas, producir materiales y transmitir información.`,
                ],
            },
            {
                type: 'list',
                paragraph: `Competencias de Productividad y empleabilidad:`,
                items: [
                    `Precisar el mensaje escrito a la vez que escribe ideas con lenguaje claro y preciso.`,
                    `Modificar su conducta para adecuarse a nuevas estrategias.`,
                    `Expresa sus ideas de forma verbal o escrita teniendo en cuenta las características de sus interlocutores y la situación dada.`,
                    `Registrar y revisar información para asegurar que sea correcta.`,
                    `Aceptar y aplicar los cambios de los procedimientos y de las herramientas de trabajo`,
                    `Evaluar mediante seguimiento el cumplimiento de los objetivos y corregir las desviaciones si fuera necesario.`,
                    `Observar permanentemente y reportar los cambios presentes en los procesos, infraestructura e insumos.`,
                    `Revisar las acciones llevadas a cabo con el fin de realizar mejoras y adaptarlas a los procedimientos`,
                    `Cuidar y manejar los recursos y bienes ajenos siguiendo normas y disposiciones definidas.`,
                ],
            },
            {
                type: 'paragraph',
                paragraph: `Es importante recordar que, en este modelo educativo, el egresado de la educación media superior desarrolla las competencias genéricas a partir de la contribución de las competencias profesionales al componente de formación profesional, y no en forma aislada e individual, sino a través de una propuesta de formación integral, en un marco de diversidad.`
            },
        ],
    }, 
    {
        id: 2,
        specialty: 'Contabilidad',
        icon: Contabilidad,
        main_paragraphs: [
            `La contabilidad es el lenguaje de los negocios. Aquí dominarás los principios contables, la elaboración de estados financieros y la auditoría.`,
            `Serás un aliado estratégico para las empresas en su toma de decisiones financieras.`
        ],
        description: [
            {
                type: 'paragraph',
                paragraph: `La carrera de Técnico en contabilidad ofrece las competencias profesionales que permiten al estudiante registrar operaciones contables de empresas comerciales y de servicios operando los procesos contables a través  de un sistema electrónico, así como registrar operaciones contables de una entidad fabril, determinar contribuciones y asistir en actividades  de auditoría.`,
            },
            {
                type: 'paragraph',
                paragraph: `Asimismo podrá desarrollar competencias genéricas relacionadas principalmente con la participación en los procesos de comunicación en distintos contextos, la integración efectiva a los equipos de trabajo y la intervención consciente, desde su comunidad en particular, en el país y el mundo en general, todo con apego al cuidado del medio ambiente.`,
            },
            {
                type: 'paragraph',
                paragraph: `La formación profesional se inicia en el segundo semestre y se concluye en el sexto semestre, desarrollando en este lapso de tiempo las competencias para registrar operaciones  contables de empresas comerciales y de servicios, operar los procesos contables dentro de un sistema electrónico, registrar operaciones contables de una entidad fabril, determinar las contribuciones fiscales de personas físicas y morales y asistir en actividades de auditoría de una entidad`,
            },
            {
                type: 'paragraph',
                paragraph: `Todas estas competencias posibilitan al egresado su incorporación al mundo laboral o desarrollar procesos productivos independientes, de acuerdo con sus intereses profesionales o las necesidades en su entorno social.`,
            },
            {
                type: 'paragraph',
                paragraph: `Los primeros tres módulos de la carrera técnica tienen una duración de 272 horas cada uno, y los dos últimos de 192, un total de 1200 horas de formación profesional.`,
            },
        ],
        egress_perfil: [
            {
                type: 'paragraph',
                paragraph: `Durante el proceso de formación de los cinco módulos, el estudiante desarrollará o reforzará las siguientes competencias profesionales, correspondientes al Técnico en contabilidad:`,
            },
            {
                type: 'paragraph',
                paragraph: `Registra operaciones contables de empresas comerciales y de servicios, opera los procesos contables dentro de un sistema electrónico, registra operaciones contables de una entidad fabril, determina las contribuciones fiscales de personas físicas y morales y asiste en actividades de auditoría de una entidad.`,
            },
            {
                type: 'list',
                paragraph: `Además se presentan las 11 competencias genéricas, para que usted intervenga en su o reforzamiento, y con ello enriquezca el perfil de egreso del bachiller. Como resultado del análisis realizado por los docentes elaboradores de este programa de estudios, se considera que el egresado de la carrera de Técnico en contabilidad está en posibilidades de desarrollar las competencias genéricas antes mencionadas. Sin embargo se deja abierta la posibilidad de que usted contribuya a la adquisición de otras que considere pertinentes, de acuerdo con el contexto regional, laboral y académico:`,
                items: [
                    `Se conoce y valora a sí mismo y aborda problemas y retos teniendo en cuenta los objetivos que persigue.`,
                    `Es sensible al arte y participa en la apreciación e interpretación de sus expresiones en distintos géneros.`,
                    `Elige y practica estilos de vida saludables.`,
                    `Escucha, interpreta y emite mensajes pertinentes en distintos contextos mediante la utilización de medios, códigos y herramientas apropiados.`,
                    `Desarrolla innovaciones y propone soluciones a problemas a partir de métodos establecidos.`,
                    `Sustenta una postura personal sobre temas de interés y relevancia general, considerando otros puntos de vista de manera crítica y reflexiva.`,
                    `Aprende por iniciativa e interés propio a lo largo de la vida.`,
                    `Participa y colabora de manera efectiva en equipos diversos.`,
                    `Participa con una conciencia cívica y ética en la vida de su comunidad, región, México y el mundo.`,
                    `Mantiene una actitud respetuosa hacia la interculturalidad y la diversidad de creencias, valores, ideas y prácticas sociales.`,
                    `Contribuye al desarrollo sustentable de manera crítica, con acciones responsables.`,
                ],
            },
            {
                type: 'paragraph',
                paragraph: `Es importante recordar que, en este modelo educativo, el egresado de la educación media superior desarrolla las competencias genéricas a partir de la contribución de las competencias profesionales al componente de formación profesional, y no en forma aislada e individual, sino a través de una propuesta de formación integral, en un marco de diversidad`,
            },
        ],
    },
    {
        id: 3,
        specialty: 'Preparación de alimentos y bebidas',
        icon: PAB,
        main_paragraphs: [
            `¿Eres un apasionado de la gastronomía? En esta especialidad, aprenderás técnicas culinarias, manejo de ingredientes y presentación de platillos.`,
            `Desde restaurantes hasta hoteles, serás parte fundamental de la industria alimentaria.`,
        ],
        description: [
            {
                type: 'paragraph',
                paragraph: `La carrera de Técnico en preparación de alimentos y bebidas surge como una vertiente de la carrera de Servicios Turísticos. Esta nueva vertiente ofrece las competencias profesionales que permiten al estudiante preparar alimentos, bebidas, productos de panadería y repostería, así como servir al comensal.`
            },
            {
                type: 'paragraph',
                paragraph: `Asimismo podrá desarrollar competencias genéricas relacionadas principalmente con la participación en los procesos de comunicación en distintos contextos, la integración efectiva a los equipos de trabajo y la intervención consciente, desde su comunidad en particular, en el país y el mundo en general, todo con apego al cuidado del medio ambiente.`,
            },
            {
                type: 'paragraph',
                paragraph: `La formación profesional se inicia en el segundo semestre y se concluye en el sexto semestre, desarrollando en este lapso de tiempo las competencias para preparar bases culinarias, preparar alimentos de acuerdo al recetario base, servir al comensal según estándares de la empresa, preparar bebidas y cocteles; y preparar productos de panadería y repostería.`,
            },
            {
                type: 'paragraph',
                paragraph: `Todas estas competencias posibilitan al egresado su incorporación al mundo laboral o desarrollar procesos productivos independientes, de acuerdo con sus intereses profesionales o las necesidades en su entorno social.`,
            },
            {
                type: 'paragraph',
                paragraph: ` Los primeros tres módulos de la carrera técnica tienen una duración de 272 horas cada uno, y los dos últimos de 192, un total de 1200 horas de formación profesional.`,
            },
        ],
        egress_perfil: [
            {
                type: 'list',
                paragraph: ` Durante el proceso de formación de los cinco módulos, el estudiante desarrollará o reforzará las siguientes competencias profesionales, correspondientes al Técnico en preparación de alimentos y bebidas:`,
                items: [
                    `Prepara bases culinarias`,
                    `Prepara alimentos de acuerdo a recetario base`,
                    `Sirve al comensal según estándares de la empresa`,
                    `Prepara bebidas y cocteles`,
                    `Prepara productos de panadería y repostería`,
                ],
            },
            {
                type: `list`,
                paragraph: `Además se presentan las 11 competencias genéricas, para que usted intervenga en su desarrollo o reforzamiento, y con ello enriquezca el perfil de egreso del bachiller. Como resultado del análisis realizado por los docentes elaboradores de este programa de estudios, se considera que el egresado de la carrera de Técnico en preparación de alimentos y bebidas está en posibilidades de desarrollar las competencias genéricas antes mencionadas. Sin embargo se deja abierta la posibilidad de que usted contribuya a la adquisición de otras que considere pertinentes, de acuerdo con el contexto regional, laboral y académico:`,
                items: [
                    `Se conoce y valora a sí mismo y aborda problemas y retos teniendo en cuenta los objetivos que persigue.`,
                    `Es sensible al arte y participa en la apreciación e interpretación de sus expresiones en distintos géneros.`,
                    `Elige y practica estilos de vida saludables.`,
                    `Escucha, interpreta y emite mensajes pertinentes en distintos contextos mediante la utilización de medios, códigos y herramientas apropiados.`,
                    `Desarrolla innovaciones y propone soluciones a problemas a partir de métodos establecidos.`,
                    `Sustenta una postura personal sobre temas de interés y relevancia general, considerando otros puntos de vista de manera crítica y reflexiva.`,
                    `Aprende por iniciativa e interés propio a lo largo de la vida.`,
                    `Participa y colabora de manera efectiva en equipos diversos.`,
                    `Participa con una conciencia cívica y ética en la vida de su comunidad, región, México y el mundo.`,
                    `Mantiene una actitud respetuosa hacia la interculturalidad y la diversidad de creencias, valores, ideas y prácticas sociales.`,
                    `Contribuye al desarrollo sustentable de manera crítica, con acciones responsables.`,
                ],
            },
            {
                type: `paragraph`,
                paragraph: `Es importante recordar que, en este modelo educativo, el egresado de la educación media superior desarrolla las competencias genéricas a partir de la contribución de las competencias profesionales al componente de formación profesional, y no en forma aislada e individual, sino a través de una propuesta de formación integral, en un marco de diversidad.`,
            },
        ],
    },
    {
        id: 4,
        specialty: 'Producción industrial de alimentos',
        icon: PIA,
        main_paragraphs: [
            `Aquí explorarás la producción a gran escala. Desde procesos de conservación hasta normativas de calidad, serás un profesional en la cadena alimentaria.`,
            `Contribuirás a la seguridad y eficiencia en la producción de alimentos.`
        ],
        description: [
            {
                type: 'paragraph',
                paragraph: `Las tendencias globalizadoras, actualmente exigen mayor competitividad y profesionalismo del recurso humano, como pieza clave en el desarrollo nacional. Los altos índices de desnutrición, la escasez de alimentos y la pobreza en aumento de los suelos, son problemas que alertan hacia la búsqueda de un mayor y mejor aprovechamiento de los recursos naturales. En México se produce gran diversidad de éstos y su optimización depende en gran medida de las alternativas de conservación y procesamiento que ofrezca la industria alimentaria, a través de sus distintas aplicaciones tecnológicas.`
            },
            {
                type: 'paragraph',
                paragraph: `La carrera de Técnico en producción industrial de alimentos ofrece las competencias profesionales que permiten al estudiante conservar y procesar las distintas materias primas de origen primario, como las frutas, hortalizas, cereales, carnes, aves, pescados, mariscos y derivados lácteos, en productos y subproductos, que demandan la aplicación de conocimiento para su aprovechamiento.`,
            },
            {
                type: 'paragraph',
                paragraph: `Asimismo podrá desarrollar competencias genéricas relacionadas principalmente con la participación en los procesos de comunicación en distintos contextos, la integración efectiva a los equipos de trabajo y la intervención consciente, desde su comunidad en particular, en el país y el mundo en general, todo con apego al cuidado del medio ambiente.`,
            },
            {
                type: 'paragraph',
                paragraph: ` La formación profesional se inicia en el segundo semestre y se concluye en el sexto semestre desarrollando en este lapso de tiempo las competencias: ejecutar procesos de conservación y transformación de alimentos, aplicando la reglamentación, legislación y normatividad vigente, hacia el cumplimiento de estándares establecidos de calidad e inocuidad; al mismo tiempo que pueda evaluar los resultados obtenidos, que le permitan realizar ajustes de mejora continua en la producción y optimización de recursos, hasta el sexto semestre de la carrera técnica.`,
            },
            {
                type: 'paragraph',
                paragraph: `Todas estas competencias posibilitan al egresado su incorporación al mundo laboral o desarrollar procesos productivos independientes, de acuerdo con sus intereses profesionales o las necesidades en su entorno social.`,
            },
            {
                type: 'paragraph',
                paragraph: ` Los primeros tres módulos de la carrera técnica tienen una duración de 272 horas cada uno, y los dos últimos de 192, un total de 1200 horas de formación profesional.`,
            },
        ],
        egress_perfil: [
            {
                type: 'paragraph',
                paragraph: `La formación que ofrece la Carrera de técnico en producción industrial de alimentos permite al egresado, a través de la articulación de saberes de diversos campos, realizar el acondicionamiento de las materias primas, las áreas de proceso, operación de equipo, maquinaria y herramientas de trabajo necesarias, entre otros, estableciendo relaciones entre ellos y su vida cotidiana para integrarse a la industria alimentaria en las diferentes plazas.`,
            },
            {
                type: 'list',
                paragraph: `Durante el proceso de formación de los cinco módulos, el estudiante desarrollará o reforzará las siguientes competencias profesionales:`,
                items: [
                    ` Realiza análisis físicos, químicos y microbiológicos a insumos, productos y áreas de proceso de acuerdo a la normativa vigente.`,
                    `Procesa alimentos lácteos y sus derivados con calidad e inocuidad.`,
                    `Procesa alimentos cárnicos con calidad e inocuidad.`,
                    `Procesa alimentos a partir de frutas y hortalizas con calidad e inocuidad.`,
                    `Procesa alimentos a partir de cereales u oleaginosas con calidad e inocuidad.`
                ],
            },
            {
                type: 'list',
                paragraph: `Además se presentan las 11 competencias genéricas, para que usted intervenga en su desarrollo o reforzamiento, y con ello enriquezca el perfil de egreso del bachiller. Como resultado del análisis realizado por los docentes partiicipantes en este programa de estudios, se considera que el egresado de la carrera de Técnico en producción industrial de alimentos está en posibilidades de desarrollar las competencias genéricas antes mencionadas. Sin embargo se deja abierta la posibilidad de que usted contribuya a la adquisición de otras que considere pertinentes, de acuerdo con el contexto regional, laboral y académico:`,
                items: [
                    `Se conoce y valora a sí mismo y aborda problemas y retos teniendo en cuenta los objetivos que persigue.`,
                    `Es sensible al arte y participa en la apreciación e interpretación de sus expresiones en distintos géneros.`,
                    `Elige y practica estilos de vida saludables.`,
                    `Escucha, interpreta y emite mensajes pertinentes en distintos contextos mediante la utilización de medios, códigos y herramientas apropiados.`,
                    `Desarrolla innovaciones y propone soluciones a problemas a partir de métodos establecidos.`,
                    `Sustenta una postura personal sobre temas de interés y relevancia general, considerando otros puntos de vista de manera crítica y reflexiva.`,
                    `Aprende por iniciativa e interés propio a lo largo de la vida.`,
                    `Participa y colabora de manera efectiva en equipos diversos.`,
                    `Participa con una conciencia cívica y ética en la vida de su comunidad, región, México y el mundo.`,
                    `Mantiene una actitud respetuosa hacia la interculturalidad y la diversidad de creencias, valores, ideas y prácticas sociales.`,
                    `Contribuye al desarrollo sustentable de manera crítica, con acciones responsables.`,
                ],
            },
            {
                type: 'paragraph',
                paragraph: ` Es importante recordar que, en este modelo educativo, el egresado de la educación media superior desarrolla las competencias genéricas a partir de la contribución de las competencias profesionales al componente de formación profesional, y no en forma aislada e individual, sino a través de una propuesta de formación integral, en un marco de diversidad.`,
            },
        ],
    },
    {
        id: 5,
        specialty: 'Programación',
        icon: Programacion,
        main_paragraphs: [
            `¿Te apasiona la tecnología? En esta especialidad, aprenderás a desarrollar software, crear aplicaciones y resolver problemas de programación.`,
            `Desde lenguajes como Python y Java hasta diseño web y bases de datos, te convertirás en un experto en el mundo digital.`,
        ],
        description: [
            {
                type: 'paragraph',
                paragraph: `En el contexto nacional la formación de Técnicos en: Programación es relevante porque: contribuye a la formación de personas capaces de integrarse a un mercado laboral dinámico y de alta demanda, que esta a la vanguardia en el uso de la tecnología y que contribuye a la transformación digital de los sectores productivos en el país`
            },
            {
                type: 'list',
                paragraph: ` La carrera de Técnico en Programación desarrolla en el estudiante las siguientes competencias profesionales:`,
                items: [
                    `Desarrolla software de aplicación con programación estructurada`,
                    `Aplica metodologías de desarrollo de software utilizando herramientas de programación visual`,
                    `Desarrolla aplicaciones Web`,
                    `Desarrolla software de aplicación Web con almacenamiento persistente de datos`,
                    `Desarrolla aplicaciones para dispositivos móviles`,
                ],
            },
            {
                type: 'paragraph',
                paragraph: `Facilitando al egresado su incorporación al mundo laboral en: diversos sitios de inserción como: empresas de desarrollo de software, Instituciones bancarias, Sector gubernamental, así como en los sectores productivos donde se requiera automatizar procesos mediante la implementación de software hecho a la medida o en el desarrollo de procesos productivos independientes, de acuerdo con sus intereses profesionales y necesidades de su entorno social.`,
            },
            {
                type: 'paragraph',
                paragraph: `Para lograr las competencias el estudiante inicia la formación profesional, en el segundo semestre y la concluye en el sexto. Los primeros tres módulos de la carrera técnica tienen una duración de 272 horas cada uno, y los dos últimos de 192, un total de 1200 horas de formación profesional. Cabe destacar que los módulos de formación profesional tienen carácter transdisciplinario, por cuanto corresponden con objetos y procesos de transformación que implica la integración de saberes de distintas disciplinas.`,
            },
            {
                type: 'list',
                paragraph: ` Además de lo anterior, se identifican los estándares de competencia del CONOCER que tienen una relación directa con la carrera:`,
                items: [
                    `Desarrollo de código de software`,
                    `Desarrollo de aplicaciones web y móviles`,
                    `Configuración de sistemas operativos de aplicaciones y servicios`,
                    `Administración de soluciones de e-learnnig y comercio electrónico`,
                ]
            },
        ],
        egress_perfil: [
            {
                type: 'paragraph',
                paragraph: ` La formación que ofrece la carrera de Técnico en Programación permite al egresado, a través de la articulación de saberes de diversos campos, realizar actividades dirigidas al desarrollo de software de aplicación en plataformas de escritorio, Web y móviles, utilizando los paradigmas de programación estructurada, programación orientada a objetos y programación orientada a eventos, aplicando metodologías de la Ingeniería de Software.`,
            },
            {
                type: 'list',
                paragraph: ` Durante el proceso de formación de los cinco módulos, el estudiante desarrollará o reforzará las siguientes competencias profesionales:`,
                items: [
                    `Desarrolla software de aplicación con programación estructurada`,
                    `Aplica metodologías de desarrollo de software utilizando herramientas de programación visual`,
                    `Desarrolla aplicaciones Web`,
                    `Desarrolla software de aplicación Web con almacenamiento persistente de datos`,
                    `Desarrolla aplicaciones para dispositivos móviles`,
                ],
            },
            {
                type: 'paragraph',
                paragraph: `El egresado de la carrera de Técnico en Programación está en posibilidades de demostrar las:`,
            },
            {
                type: 'list',
                paragraph: `Competencias genéricas:`,
                items: [
                    `Escucha, interpreta y emite mensajes pertinentes en distintos contextos mediante la utilización de medios, códigos y herramientas apropiados.`,
                    `Desarrolla innovaciones y propone soluciones a problemas a partir de métodos establecidos.`,
                    `Sustenta una postura personal sobre temas de interés y relevancia general, considerando otros puntos de vista de manera crítica y reflexiva.`,
                    `Aprende por iniciativa e interés propio a lo largo de la vida.`,
                    `Participa y colabora de manera efectiva en equipos diversos.`,
                ],
            },
            {
                type: 'list',
                paragraph: ` Competencias disciplinares:`,
                items: [
                    `Identifica, ordena e interpreta las ideas, datos y conceptos explícitos e implícitos en un texto, considerando el contexto en el que se generó y en el que se recibe.`,
                    `Utiliza las tecnologías de la información y comunicación para investigar, resolver problemas, producir materiales y transmitir información.`,
                    `Diseña modelos o prototipos para resolver problemas, satisfacer necesidades o demostrar principios científicos.`,
                    `Distingue la importancia de la ciencia y la tecnología y su trascendencia en el desarrollo de su comunidad con fundamentos filosóficos.`,
                    `Construye e interpreta modelos matemáticos deterministas o aleatorios mediante la aplicación de procedimientos aritméticos, algebraicos, geométricos y variacionales, para la comprensión y análisis de situaciones reales o formales.`,
                    `Argumenta la solución obtenida de un problema, con métodos numéricos, gráficos, analíticos o variacionales, mediante el lenguaje verbal, matemático y el uso de las tecnologías de la información y la comunicación.`,
                    `Interpreta tablas, gráficas, mapas, diagramas y textos con símbolos matemáticos y científicos.`,
                ],
            },
            {
                type: 'list',
                paragraph: ` Competencias de Productividad y empleabilidad:`,
                items: [
                    `Utilizar la comunicación efectiva para identificar las necesidades del cliente.`,
                    `Se adapta para un cambio positivo.`,
                    `Aceptar y aplicar los cambios de los procedimientos y de las herramientas de trabajo.`,
                    `Registrar y revisar información para asegurar que sea correcta.`,
                    `Sustentar sus ideas y puntos de vista con argumentos, basados en evidencia, hechos y datos.`,
                    `Actuar responsablemente de acuerdo con las normas y disposiciones definidas en un espacio dado.`,
                    `Diseñar y utilizar indicadores para medir y comprobar los resultados obtenidos.`,
                    `Trabajar hasta alcanzar las metas o retos propuestos`,
                    `Revisar las acciones llevadas a cabo con el fin de realizar mejoras y adaptarlas a los procedimientos.`,
                    `Definir sistemas y esquemas de trabajo.`,
                    `Establecer prioridades y tiempos.`,
                    `Organizar y distribuir adecuadamente el cumplimiento de los objetivos y corregir las desviaciones si fuera necesario.`,
                    `Mantener informados a sus colaboradores de los objetivos, responsabilidades y avances de las tareas asignadas.`,
                    `Cumplir compromisos de trabajo en equipo.`,
                    `Valorar las fortalezas de cada integrante del equipo.`,
                ],
            },
            {
                type: 'paragraph',
                paragraph: ` Es importante recordar que, en este modelo educativo, el egresado de la educación media superior desarrolla las competencias genéricas a partir de la contribución de las competencias profesionales al componente de formación profesional, y no en forma aislada e individual, sino a través de una propuesta de formación integral, en un marco de diversidad.`,
            },
        ],
    },
    {
        id: 6,
        specialty: `Ventas`,
        icon: Ventas,
        main_paragraphs: [
            `¿Tienes habilidades comunicativas y te gusta el contacto con las personas? En esta especialidad, aprenderás técnicas de venta, negociación y marketing.`,
            `Serás un agente de cambio en el mundo comercial.`
        ],
        description: [
            {
                type: 'paragraph',
                paragraph: `En el contexto regional y nacional, la formación de Técnicos en Ventas, es relevante porque los requerimientos de la empresa para comercializar sus productos y servicios se han modificado para responder al impacto de las tecnologías de la información y la comunicación, la creciente competitividad, globalización y las preferencias de los clientes reales y potenciales . La carrera de Técnico en Ventas desarrolla en el estudiante las siguientes competencias profesionales dirigidas a posicionar un producto o servicio de una empresa en el mercado, auxilia en el proceso de administración del área de ventas, auxilia en la elaboración del estudio de mercado, auxilia en la comercialización, con estrategias de comunicación, asesora al cliente, posiciona el producto y/o servicio en el mercado.`,
            },
            {
                type: 'paragraph',
                paragraph: `El desarrollo de las competencias se logra desde una perspectiva inter y transdisciplinaria, a través de las actividades de aprendizaje diseñadas de manera intencionada por el docente en la planeación didáctica de los módulos, las promovidas desde la relación vertical y transversal con las asignaturas de los componentes Básico y Propedéutico, y complementadas por las actividades de los programas de apoyo sicosocial para los estudiantes, dirigidas al desarrollo de las habilidades socioemocionales, relativas a la autoconciencia, autorregulación y toma de decisiones.`,
            },
            {
                type: 'paragraph',
                paragraph: `Para lograr las competencias en el estudiante, el campo profesional dispone de 1,200 horas de formación distribuidas en cinco módulos que van del segundo al sexto semestre: los primeros tres módulos de la carrera técnica tienen una duración de 272 horas cada uno y los dos últimos de 192. Se sugiere que el docente aplique el 80% para actividades prácticas y el 20% en actividades teórico-conceptuales, aunque la proporción puede ser ajustada considerando las características del entorno y las condiciones de cada plantel, pero sin que la práctica sea menor al 20% del total.`,
            },
            {
                type: 'paragraph',
                paragraph: `De igual manera, la administración escolar del Componente Profesional es flexible y la atención de un módulo puede ser asignada a un solo docente o más, según el número de submódulos; sin embargo, la asignación de submódulos a varios docentes y su atención en forma paralela, interfiere en el proceso de aprendizaje y desarrollo de las competencias, ya que estos demandan su atención en forma escalonada y secuencial, razón por la cual se sugiere que el módulo se asigne a un solo docente, o bien, si la distribución se hace con más de un docente, es necesario terminar un submódulo para luego iniciar el siguiente, promoviendo con ello la conexión, continuidad y coherencia entre los submódulos y la adquisición de las competencias.`,
            },
        ],
        egress_perfil: [
            {
                type: 'paragraph',
                paragraph: `La carrera de Técnico en Ventas, permite a los estudiantes, a lo largo del bachillerato, la adquisición de competencias desde distintos ámbitos que promueven la formación integral, sustentada en las genéricas, disciplinares y profesionales, complementadas con las de productividad y empleabilidad, y las habilidades socioemocionales que influyen en la personalidad.`,
            },
            {
                type: 'paragraph',
                paragraph: `Las competencias genéricas permiten a los estudiantes desarrollar la comprensión del mundo, el aprendizaje autónomo a lo largo de la vida y la relación armónica con quienes les rodean; por otra parte las disciplinares posibilitan la adquisición de las nociones mínimas necesarias de cada campo para desempeñarse de manera eficaz en distintos contextos y situaciones de la vida cotidiana.`,
            },
            {
                type: 'paragraph',
                paragraph: ` Las competencias profesionales preparan al egresado de la carrera para desempeñarse en la vida laboral con mayores probabilidades de éxito y dan sustento a las genéricas. Estas se logran, a través de cinco módulos articulados de saberes de diversos campos, dirigidos al auxilio en el proceso de administración del área de ventas y en la elaboración del estudio de mercado, así como la comercialización de un servicio y/o producto aplicando las estrategias de comunicación, el asesoramiento al cliente y el posicionamiento de un producto o servicio de una empresa en el mercado. Las competencias profesionales se ven enriquecidas por aquellas competencias en el mercado laboral, enfocadas a la atención al cliente, comunicación efectiva, planeación y organización, orientación a la mejora continua, orientación al logro, adaptabilidad, ética profesional, trabajo en equipo. El complemento de éstas, permite acceder a los puestos de trabajo reconocidos en los sectores laborales relacionados con las funciones productivas del sector Servicios 2.`,
            },
            {
                type: 'list',
                paragraph: `El logro del perfil de egreso está determinado en gran medida por las competencias genéricas, puesto que son transversales y transferibles parareforzar la capacidad para adquirir las demás competencias, mismas que están categorizadas de la siguiente manera:`,
                items: [
                    `Se conoce y se valora a si mismo y aborda problemas y retos teniendo en cuenta los objetivos que persigue.`,
                    `Es sensible al arte y participa en la apreciación e interpretación de sus expresiones en distintos géneros.`,
                    `Elige y práctica estilos de vida saludable.`,
                    `Escucha, interpreta y emite mensajes pertinentes en distintos contextos mediante la utilización de medios, códigos y herramientas apropiados.`,
                    `Desarrolla innovaciones y propone soluciones a problemas a partir de métodos establecidos.`,
                    `Sustenta una postura personal sobre temas de interés y relevancia general, considerando otros puntos de vista de manera crítica y reflexiva.`,
                    `Aprende por iniciativa e interés propio a lo largo de la vida.`,
                    `Participa y colabora de manera efectiva en equipos diversos.`,
                    `Participa con una conciencia cívica y ética en la vida de su comunidad, región, México y el mundo.`,
                    `Mantiene una actitud respetuosa hacia la interculturalidad y la diversidad de creencias, valores, ideas y prácticas sociales.`,
                    `Contribuye al desarrollo sustentable de manera crítica, con acciones responsables.`,
                ],
            },
            {
                type: 'list',
                paragraph: `Por su parte, el egresado en Ventas, desarrolla las siguientes competencias disciplinares:`,
                items: [
                    `Identifica el conocimiento social y humanista como una construcción en constante transformación.`,
                    `Analiza con visión emprendedora los factores y elementos fundamentales que intervienen en la productividad y competitividad de una organización y su relación con el entorno socioeconómico.`,
                    `Evalúa las funciones de las leyes y su transformación en el tiempo`,
                    `Valora distintas prácticas sociales mediante el reconocimiento de sus significados dentro de un sistema cultural, con una actitud de respeto.`,
                    `Identifica, ordena e interpreta las ideas, datos y conceptos explícitos e implícitos en un texto, considerando el contexto en el que se generó y en el que se recibe.`,
                    `Expresa ideas y conceptos en composiciones coherentes y creativas, con introducciones, desarrollo y conclusiones claras.`,
                    `Argumenta un punto de vista en publico de manera precisa, coherente y creativa.`,
                    `Analiza y compara el origen, desarrollo y diversidad de los sistemas y medios de comunicación.`,
                    `Utiliza las tecnologías de la información y la comunicación para investigar, resolver problemas, producir materiales y trasmitir información.`,
                ],
            },
            {
                type: 'list',
                paragraph: `Desarrolla las siguientes competencias de productividad y empleabilidad:`,
                items: [
                    `Realizar actividades para la concreción de objetivos y metas`,
                    `Expresar sus ideas de forma verbal o escrita, teniendo en cuenta las características de su (s) interlocutore (s) y la situación dada.`,
                    `Manifiesta sus ideas y puntos de vista de manera que los otros lo comprendan.`,
                    `Orientar las acciones llevadas a cabo a lograr y superar los estándares de desempeño y los plazos establecidos.`,
                    `Diseñar y utilizar indicadores para medir y comprobar los resultados obtenidos.`,
                    `Trabajar hasta alcanzar las metas o retos propuestos.`,
                    `Mejorar la relación entre objetivos logrados y los recursos invertidos en términos de calidad, costos y oportunidad.`,
                    `Se adapta para un cambio positivo.`,
                    `Aceptar y aplicar los cambios de los procedimientos y de las herramientas de trabajo.`,
                    `Tener claras las metas y objetivos de su área y de su puesto.`,
                    `Organizar y distribuir adecuadamente el cumplimiento de los objetivos y corregir las desviaciones si fuera necesario.`,
                    `Revisar las acciones llevadas a cabo con el fin de realizar mejoras y adaptarlas a los procedimientos.`,
                    `Explorar nuevas necesidades y carencias que surgen en el cliente, al buscar la forma de satisfacerlo.`,
                    `Solucionar oportunamente los problemas que encuentran los clientes en los productos o servicios.`,
                    `Realizar seguimiento de las necesidades del cliente, para darle una respuesta.`,
                    `Actuar responsablemente de acuerdo con las normas y disposiciones definidas en un espacio dado.`,  
                ],
            },
            {
                type: 'paragraph',
                paragraph: `Es importante recordar que, en este modelo educativo, el egresado de la educación media superior desarrolla las competencias genéricas a partir de la contribución de las competencias profesionales al componente de formación profesional, y no en forma aislada e individual, sino a través de una propuesta de formación integral, en un marco de diversidad.`,
            },
            {
                type: 'list',
                paragraph: `Facilitando al egresado su incorporación al mundo laboral en:`,
                items: [
                    `Corporativos`,
                    `Intermediación del comercio al por mayor de productos para la industria, el comercio y los servicios excepto, a través de Internet y otros medios electrónicos`,
                    `Intermediación de comercio al por mayor para productos de uso doméstico y persona, excepto a través de internet y otros medios electrónicos`,
                    `Servicios de investigación de mercado y encuestas de opinión pública`,
                    `Comercio al por menor exclusivamente, a través de Internet, y catálogos impresos, televisión y similares`,
                    `Agencias de Publicidad`,
                    `Agencias de Relaciones Públicas`,
                    `Agencias de representación de medios`,
                    `Servicios de investigación de mercado y encuesta de opinión pública`,
                ],
            },
            {
                type: 'list',
                paragraph: `Como:`,
                items: [
                    `Auxiliar en administración, mercadotecnia, comercialización y comercio exterior`,
                    `Comerciantes en establecimientos`,
                    `Encuestadoras`,
                    `Codificadores`,
                    `Especialistas y consultores en mercadotecnia, publicidad comunicación  y comercio exterior`,
                    `Vendedores por teléfono `,
                    `Demostradores y promotores`,
                    `Encargados y supervisores de servicios de venta de productos y servicios financieros y alquiler`,
                    `Agentes y representantes de ventas y consignatarios`,
                ],
            },
            {
                type: 'paragraph',
                paragraph: `La carrera de Técnico en Ventas, está asociada a los siguientes estándares de competencias establecidas por el Consejo Nacional de Normalización y Certificación de Competencias Laborales:`,
            },
            {
                type: 'paragraph',
                paragraph: ` Es importante recordar que, en este modelo educativo, el egresado de la educación media superior desarrolla las competencias genéricas a partir de la contribución de las competencias profesionales al componente de formación profesional, y no en forma aislada e individual, sino a través de una propuesta de formación integral, en un marco de diversidad.`,
            },
            {
                type: 'paragraph',
                paragraph: `Cabe destacar que los módulos de formación profesional tienen carácter transdisciplinario, por cuanto corresponden con objetos y procesos de transformación que implica la integración de saberes de distintas disciplinas.`,
            },
        ],
    },
];

export default specialties;