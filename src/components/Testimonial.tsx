import Flickity from "react-flickity-component";
import LogoLeones from "../assets/leonessurlogo.png";
import NursePro from "../assets/logo-nursepro.png";
import Xaggo from "../assets/xaggologo.png";

const flickityOptions = {
  wrapAround: true,
  autoPlay: 3000,
  initialIndex: 1, // bucle infinito
  contain: true, // mantiene las celdas dentro
  cellAlign: "center", // centra las celdas
  pageDots: true,
};

export const Testimonials = () => {
  return (
    <section id="testimonios" className="testimonial full-lg-screen">
      <article className="hero-image-testimonial">
        <aside className="hero-image-opacity-testimonial">
          <h1 className="section-title-testimonial">MIS CLIENTES</h1>
          <div className="testimonial-container">
            <Flickity options={flickityOptions}>
              <div className="carousel-cell-cliente">
                <div className="cliente-foto">
                  <img className="avatar" src={LogoLeones} alt="Cliente 1" />
                  <blockquote>
                    Muy agradecidos con la Fan Page, ya que nos permitió llegar
                    a más personas y a tener un lugar donde las personas puedan
                    estar más al pendiente del club y de sus logros.
                  </blockquote>
                  <h2 className="text-first-color">Leones Del Sur</h2>
                  <h5>Gerente de Marketing</h5>
                </div>
              </div>
              <div className="carousel-cell-cliente">
                <div className="cliente-foto">
                  <img className="avatar" src={Xaggo} alt="Cliente 3" />
                  <blockquote>
                    Agradecido con el aplicativo que está funcionando de manera
                    optima y se sigue expandiendo el uso al rededor del mundo,
                    los cambios que se piden se hacen de manera rapida y con el
                    diseño adecuado.
                  </blockquote>
                  <h2 className="text-first-color">Xaggo</h2>
                  <h5>Gerente General</h5>
                </div>
              </div>
              <div className="carousel-cell-cliente">
                <div className="cliente-foto">
                  <img className="avatar" src={NursePro} alt="Cliente 2" />
                  <blockquote>
                    La aplicación es exactamente lo que pedí, estoy a gusto de
                    poder seguir actualizando y agregando contenido al
                    aplicativo, recibiendo buenas reseñas de las personas que
                    utilizan el app.
                  </blockquote>
                  <h2 className="text-first-color">Nurse Pro</h2>
                  <h5>Recursos Humanos</h5>
                </div>
              </div>
            </Flickity>
          </div>
        </aside>
      </article>
    </section>
  );
};
