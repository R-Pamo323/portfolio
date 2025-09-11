import { ReactTyped } from "react-typed";

export const HeroImage = () => {
  const typedStrings = [
    "欢迎光临",
    "Welcome",
    "Bienvenidos a mi<br/>espacio web",
  ];

  return (
    <section id="inicio" className="home full-lg-screen">
      <article className="hero-image">
        <aside className="hero-image-opacity">
          <div className="hero-image-content">
            <h2 className="hero-image-title">
              <ReactTyped
                strings={typedStrings}
                typeSpeed={80}
                backSpeed={50}
              />
            </h2>
            <br />
            <br />
            <br />
            <br />
            <a href="#contacto" className="hero-image-btn">
              CONTÁCTAME
            </a>
          </div>
        </aside>
      </article>
    </section>
  );
};
