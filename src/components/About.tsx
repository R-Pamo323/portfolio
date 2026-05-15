import cvFile from "../assets/CV-2026-RodrigoPamoDelgado.pdf";
import Foto from "../assets/Foto.jpg";

export const About = () => {
  return (
    <section id="acerca" className="about section container full-lg-screen">
      <div className="about-div">
        <article className="text-lg-right">
          <aside className="text-center text-lg-right">
            <h1>Rodrigo Pamo Delgado</h1>
            <br />
            <h5>
              <i>Mobile & Frontend Developer</i>{" "}
              <i>- Software Engineer Developer</i>
            </h5>
          </aside>
          <p>
            👋 ¡Hola! Soy Rodrigo, Desarrollador de Software con especialidad
            principal en el mundo móvil y sólida experiencia en Frontend web.
            <br />
            📱 Mi enfoque es crear aplicaciones multiplataforma escalables con
            Flutter (dominando BLoC y GetX), respaldado por mi conocimiento en
            desarrollo nativo para Android (Java) e iOS (Swift).
            <br />
            💻 En la web, construyo interfaces modernas y responsivas con
            React.js y TypeScript, utilizando herramientas como Tailwind CSS y
            Bootstrap. <br />
            🌐 Complemento mi perfil integrando experiencias digitales con APIs
            REST y GraphQL, bases en Node.js, y un fuerte conocimiento en redes
            y servidores que me da una visión integral del ecosistema. <br />
            ⚡ Trabajo bajo metodologías ágiles (Scrum/Kanban) y disfruto
            colaborar con equipos usando GitHub y JIRA. <br />
            🚀 Mi meta es seguir aprendiendo, crear proyectos innovadores y
            aportar valor en cada etapa del ciclo de vida del software con cada
            línea de código.
          </p>
          <div className="text-center text-lg-right">
            <a
              className="about-btn"
              href={cvFile}
              target="_blank"
              rel="noopener"
            >
              DESCARGA MI CV
            </a>
          </div>
        </article>
        <article>
          <img className="imagen-foto" src={Foto} alt="rodrigopamo" />
        </article>
        <article>
          <h1 className="text-center text-lg-left">Mis Habilidades</h1>
          <br />
          <div className="skills-container">
            <h3>Flutter</h3>
            <h3>Dart</h3>
            <h3>BLoC</h3>
            <h3>GetX</h3>
            <h3>ReactJS</h3>
            <h3>TypeScript</h3>
            <h3>Tailwind CSS</h3>
            <h3>JavaScript</h3>
            <h3>HTML5</h3>
            <h3>CSS3</h3>
            <h3>Java</h3>
          </div>
        </article>
      </div>
    </section>
  );
};
