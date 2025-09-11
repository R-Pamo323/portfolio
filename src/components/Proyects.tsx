import Portfolio1 from "../assets/IphoneNursePro.png";
import Portfolio2 from "../assets/IphoneBoostNew.png";
import Portfolio3 from "../assets/IphoneSanFernandoNew.png";
import Portfolio4 from "../assets/IphoneXaggo.png";
import Portfolio5 from "../assets/IphoneCatholicNew.png";
import Portfolio6 from "../assets/ProyectoLaptop.png";
import { useState } from "react";
import { ColorImage } from "../utils/ColorImage";

export const Proyects = () => {
  const [colors, setColors] = useState<{ [key: string]: string }>({});

  const handleColor = (id: string, color: string) => {
    setColors((prev) => ({ ...prev, [id]: color }));
  };

  return (
    <section id="proyectos" className="portfolio section full-lg-screen">
      <div className="container">
        <h1 className="section-title">PROYECTOS</h1>
        <a
          href="#trabajo-1"
          className="portfolio-card"
          style={{
            background: colors["trabajo-1"] || "#eee",
          }}
        >
          <ColorImage
            src={Portfolio1}
            alt="Trabajo 1"
            onColorExtracted={(c) => handleColor("trabajo-1", c)}
          />
          <aside className="portfolio-card-info">
            <div>
              <h3>Nurse Pro</h3>
              <p>
                Aplicativo para estudiantes de enfermería, proporcionando
                información sobre problemas médicos frecuentes, permitiendo
                gestionar apuntes en texto y audio para cada tema.
              </p>
            </div>
          </aside>
        </a>
        <a
          href="#trabajo-2"
          className="portfolio-card"
          style={{
            background: colors["trabajo-2"] || "#eee",
          }}
        >
          <ColorImage
            src={Portfolio2}
            alt="Trabajo 2"
            onColorExtracted={(c) => handleColor("trabajo-2", c)}
          />
          <aside className="portfolio-card-info">
            <div>
              <h3>Boost</h3>
              <p>
                Aplicación Móvil para facilitar el alquiler de canchas de tenis
                y de instructores, tanto para prácticas como para reservas
                específicas. También puedes inscribirte como local o como
                profesor y tener estadisticas de acuerdo a tu perfil.
              </p>
            </div>
          </aside>
        </a>
        <a
          href="#trabajo-3"
          className="portfolio-card"
          style={{
            background: colors["trabajo-3"] || "#eee",
          }}
        >
          <ColorImage
            src={Portfolio3}
            alt="Trabajo 3"
            onColorExtracted={(c) => handleColor("trabajo-3", c)}
          />
          <aside className="portfolio-card-info">
            <div>
              <h3>San Fernando Vales</h3>
              <p>
                Aplicativo de San Fernando para gestionar, transferir vales de
                pavos y cerdos, también permite ver recetas de los productos,
                ubicación de los locales y mostrar locales donde podras canjear
                tus respectivos vales.
              </p>
            </div>
          </aside>
        </a>
        <a
          href="#trabajo-4"
          className="portfolio-card"
          style={{
            background: colors["trabajo-4"] || "#eee",
          }}
        >
          <ColorImage
            src={Portfolio4}
            alt="Trabajo 4"
            onColorExtracted={(c) => handleColor("trabajo-4", c)}
          />
          <aside className="portfolio-card-info">
            <div>
              <h3>Xaggo</h3>
              <p>
                Aplicativo para realizar pagos de servicios(teléfono, cable,
                luz, agua, etc) desde USA de forma económica, rápida y segura.
                Con la posibilidad de agregar pagos frecuentes, grupos de pagos,
                recargas de saldo y transferencia de dinero.
              </p>
            </div>
          </aside>
        </a>
        <a
          href="#trabajo-5"
          className="portfolio-card"
          style={{
            background: colors["trabajo-5"] || "#eee",
          }}
        >
          <ColorImage
            src={Portfolio5}
            alt="Trabajo 5"
            onColorExtracted={(c) => handleColor("trabajo-5", c)}
          />
          <aside className="portfolio-card-info">
            <div>
              <h3>Catholic Shorts</h3>
              <p>
                Aplicativo donde puedes acceder a diferentes categorias de
                libros católicos con la funcionalidad de leer, escuchar, crear
                tu lista de reproducción, agregar a favoritos y descargar los
                audios.
              </p>
            </div>
          </aside>
        </a>
        <a
          href="#trabajo-6"
          className="portfolio-card"
          style={{
            background: colors["trabajo-6"] || "#eee",
          }}
        >
          <ColorImage
            src={Portfolio6}
            alt="Trabajo 6"
            onColorExtracted={(c) => handleColor("trabajo-6", c)}
          />
          <aside className="portfolio-card-info">
            <div>
              <h3>Fan Page - Leones del Sur</h3>
              <p>
                Página web de los Leones del Sur. <br />
                Un equipo arequipeño de Clubes Pro donde se podrá visualizar los
                próximos partidos, plantilla, trofeos, galería de fotos y
                noticias.
              </p>
            </div>
          </aside>
        </a>
      </div>

      <article className="modal" id="trabajo-1">
        <div className="modal-content">
          <a href="#cerrar" className="modal-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
            </svg>
          </a>
          <article className="portfolio-modal">
            <img src={Portfolio1} alt="Trabajo 1" />
            <div className="portfolio-info">
              <h2>Nurse Pro</h2>
              <p>
                Aplicativo para estudiantes de enfermería, proporcionando
                información sobre problemas médicos frecuentes, permitiendo
                gestionar apuntes en texto y audio para cada tema.
              </p>

              <aside className="portfolio-details">
                <b>TIPO:</b>
                <span>App Móvil</span>
                <b>HERRAMIENTAS:</b>
                <span>Dart - Flutter - Figma</span>
                <b>ENLACE:</b>
                <a
                  href="https://play.google.com/store/apps/details?id=com.masuno.nursepro&hl=es_419"
                  target="_blank"
                  rel="noopener"
                >
                  Nurse Pro
                </a>
              </aside>
            </div>
          </article>
        </div>
      </article>
      <article className="modal" id="trabajo-2">
        <div className="modal-content">
          <a href="#cerrar" className="modal-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
            </svg>
          </a>
          <article className="portfolio-modal">
            <img src={Portfolio2} alt="Trabajo 2" />
            <div className="portfolio-info">
              <h2>Boost</h2>
              <p>
                Aplicación Móvil para facilitar el alquiler de canchas de tenis
                y de instructores, tanto para prácticas como para reservas
                específicas. También puedes inscribirte como local o como
                profesor y tener estadisticas de acuerdo a tu perfil.
              </p>

              <aside className="portfolio-details">
                <b>TIPO:</b>
                <span>App Móvil</span>
                <b>HERRAMIENTAS:</b>
                <span>Dart - Flutter - Figma</span>
                <b>ENLACE:</b>
                <a
                  href="https://play.google.com/store/apps/details?id=com.masuno.boostusuario&hl=es_PE"
                  target="_blank"
                  rel="noopener"
                >
                  Boost
                </a>
              </aside>
            </div>
          </article>
        </div>
      </article>
      <article className="modal" id="trabajo-3">
        <div className="modal-content">
          <a href="#cerrar" className="modal-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
            </svg>
          </a>
          <article className="portfolio-modal">
            <img src={Portfolio3} alt="Trabajo 3" />
            <div className="portfolio-info">
              <h2>San Fernando Vales</h2>
              <p>
                Aplicativo de San Fernando para gestionar, transferir vales de
                pavos y cerdos, también permite ver recetas de los productos,
                ubicación de los locales y mostrar locales donde podras canjear
                tus respectivos vales.
              </p>

              <aside className="portfolio-details">
                <b>TIPO:</b>
                <span>App Móvil</span>
                <b>HERRAMIENTAS:</b>
                <span>Dart - Flutter - Figma</span>
                <b>ENLACE:</b>
                <a
                  href="https://play.google.com/store/search?q=san%20fernando&c=apps&hl=es_PE"
                  target="_blank"
                  rel="noopener"
                >
                  San Fernando
                </a>
              </aside>
            </div>
          </article>
        </div>
      </article>
      <article className="modal" id="trabajo-4">
        <div className="modal-content">
          <a href="#cerrar" className="modal-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
            </svg>
          </a>
          <article className="portfolio-modal">
            <img src={Portfolio4} alt="Trabajo 4" />
            <div className="portfolio-info">
              <h2>Xaggo</h2>
              <p>
                Aplicativo para realizar pagos de servicios(teléfono, cable,
                luz, agua, etc) desde USA de forma económica, rápida y segura.
                Con la posibilidad de agregar pagos frecuentes, grupos de pagos,
                recargas de saldo y transferencia de dinero.
              </p>

              <aside className="portfolio-details">
                <b>TIPO:</b>
                <span>App Móvil</span>
                <b>HERRAMIENTAS:</b>
                <span>Dart - Flutter - Figma</span>
                <b>ENLACE:</b>
                <a
                  href="https://play.google.com/store/apps/details/Xaggo?id=com.masuno.xaggo&hl=es"
                  target="_blank"
                  rel="noopener"
                >
                  Xaggo
                </a>
              </aside>
            </div>
          </article>
        </div>
      </article>
      <article className="modal" id="trabajo-5">
        <div className="modal-content">
          <a href="#cerrar" className="modal-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
            </svg>
          </a>
          <article className="portfolio-modal">
            <img src={Portfolio5} alt="Trabajo 5" />
            <div className="portfolio-info">
              <h2>Catholic Shorts</h2>
              <p>
                Aplicativo donde puedes acceder a diferentes categorias de
                libros católicos con la funcionalidad de leer, escuchar, crear
                tu lista de reproducción, agregar a favoritos y descargar los
                audios.
              </p>

              <aside className="portfolio-details">
                <b>TIPO:</b>
                <span>App Móvil</span>
                <b>HERRAMIENTAS:</b>
                <span>Dart - Flutter - Figma</span>
                <b>ENLACE:</b>
                <a
                  href="https://play.google.com/store/apps/details?id=com.masuno.catholicshorts&hl=es"
                  target="_blank"
                  rel="noopener"
                >
                  Catholic Shorts
                </a>
              </aside>
            </div>
          </article>
        </div>
      </article>
      <article className="modal" id="trabajo-6">
        <div className="modal-content">
          <a href="#cerrar" className="modal-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
            </svg>
          </a>
          <article className="portfolio-modal">
            <img src={Portfolio6} alt="Trabajo 6" />
            <div className="portfolio-info">
              <h2>Fan Page-Leones del Sur</h2>
              <p>
                Equipo arequipeño de Clubes Pro donde se podrá visualizar los
                próximos partidos, plantilla, trofeos, galería de fotos y
                noticias.
              </p>

              <aside className="portfolio-details">
                <b>TIPO:</b>
                <span>Página Web Responsive</span>
                <b>HERRAMIENTAS:</b>
                <span>React - TypeScript</span>
                <b>ENLACE:</b>
                <a
                  href="https://r-pamo323.github.io/Leones-del-Sur/"
                  target="_blank"
                  rel="noopener"
                >
                  Leones del Sur AQP
                </a>
              </aside>
            </div>
          </article>
        </div>
      </article>
    </section>
  );
};
