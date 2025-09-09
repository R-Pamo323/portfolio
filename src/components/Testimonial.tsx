import Flickity from "react-flickity-component";
import PrimerLogo from "../assets/PrimerLogo.png";
import Customer1 from "../assets/customer-1.jpg";
import Customer2 from "../assets/customer-2.jpg";

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
    <section id="testimonios" className="testimonial  full-lg-screen">
      <article className="hero-image-testimonial">
        <aside className="hero-image-opacity_2">
          <div className="hero-image-content">
            <section className="container">
              <br />
              <br />
              <br />
              <br />
              <h2 className="section-title">MIS CLIENTES</h2>
              <br />
              <br />
              <br />
              <Flickity options={flickityOptions}>
                <div className="carousel-cell-cliente">
                  <div className="cliente-foto">
                    <img className="avatar" src={PrimerLogo} alt="Cliente 1" />
                    <blockquote>
                      Muy agradecidos con la Fan Page, ya que nos permitió
                      llegar a más personas...
                    </blockquote>
                    <h3 className="text-first-color">LEONES DEL SUR</h3>
                    <h6>Gerente de Marketing</h6>
                  </div>
                </div>

                <div className="carousel-cell-cliente">
                  <div className="cliente-foto">
                    <img className="avatar" src={Customer2} alt="Cliente 2" />
                    <blockquote>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </blockquote>
                    <h3 className="text-first-color">NOMBRE DEL CLIENTE</h3>
                    <h6>PUESTO DEL CLIENTE</h6>
                  </div>
                </div>

                <div className="carousel-cell-cliente">
                  <div className="cliente-foto">
                    <img className="avatar" src={Customer1} alt="Cliente 3" />
                    <blockquote>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </blockquote>
                    <h3 className="text-first-color">NOMBRE DEL CLIENTE</h3>
                    <h6>PUESTO DEL CLIENTE</h6>
                  </div>
                </div>
              </Flickity>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </section>
          </div>
        </aside>
      </article>
    </section>
  );
};
