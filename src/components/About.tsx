import cvFile from "../assets/CV-2025-RodrigoPamoDelgado.pdf";
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
              Frontend <i>Developer</i>
            </h5>
          </aside>
          <p>
            👋 ¡Hola! Soy Rodrigo, un apasionado Desarrollador Frontend que
            transforma ideas en aplicaciones móviles y web modernas.
            <br /> 💻 Domino Flutter, React.js y Webflow, y también trabajo con
            Android nativo (Java) y iOS nativo (Swift). <br />
            🌐 Me gusta conectar experiencias digitales con API REST/GraphQL y
            experimentar con tecnologías como Laravel, TypeScript y Node.js.{" "}
            <br />⚡ Trabajo con metodologías ágiles (Scrum/Kanban) y disfruto
            colaborar con equipos usando GitHub y JIRA. <br />
            🔧 Además, tengo experiencia en redes y servidores, lo que me da una
            visión más completa del ecosistema tecnológico. <br />
            🚀 Mi meta es seguir aprendiendo, crear proyectos innovadores y
            dejar huella con cada línea de código.
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
            <h3>React</h3>
            <h3>TypeScript</h3>
            <h3>Java</h3>
            <h3>JavaScript</h3>
            <h3>HTML5</h3>
            <h3>CSS3</h3>
            <h3>Webflow</h3>
          </div>
        </article>
      </div>
    </section>
  );
};
