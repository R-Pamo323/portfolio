import "flickity/css/flickity.css";
import "./App.css";
import { About } from "./components/About";
import { Cabecera } from "./components/Cabecera";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { HeroImage } from "./components/HeroImage";
import { Proyects } from "./components/Proyects";
import { Testimonials } from "./components/Testimonial";
import { ScrollSnap } from "./utils/ScrollSnap";

function App() {
  return (
    <>
      <Cabecera />
      <HeroImage />
      <About />
      <Proyects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollSnap />
    </>
  );
}

export default App;
