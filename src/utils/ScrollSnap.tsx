import { useEffect } from "react";

export const ScrollSnap = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let index = 0;
    let isScrolling = false;

    const scrollToSection = (i: number) => {
      isScrolling = true;
      sections[i].scrollIntoView({ behavior: "smooth" });
      setTimeout(() => (isScrolling = false), 800);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      if (e.deltaY > 0 && index < sections.length - 1) {
        index++;
        scrollToSection(index);
      } else if (e.deltaY < 0 && index > 0) {
        index--;
        scrollToSection(index);
      }
    };

    // 🔥 Actualizar el index cuando una sección esté en viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newIndex = Array.from(sections).indexOf(
              entry.target as HTMLElement
            );
            if (newIndex !== -1) index = newIndex;
            if (entry.target.id === "proyectos") {
              const cards = entry.target.querySelectorAll(".portfolio-card");

              if (entry.isIntersecting) {
                // 🔥 Reiniciar animación en cada card
                cards.forEach((card, i) => {
                  card.classList.remove("slide-in-fwd-center");
                  void (card as HTMLElement).offsetWidth; // 👈 fuerza reflow
                  //card.classList.add("slide-in-fwd-center");
                  setTimeout(() => {
                    card.classList.add("slide-in-fwd-center");
                  }, i * 250); // animación escalonada*/
                });
              }
            }
          }
        });
      },
      { threshold: 0.6 } // considera "visible" si 60% de la sección se ve
    );

    const proyectosSection = document.querySelector("#proyectos");
    if (proyectosSection) observer.observe(proyectosSection);

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      observer.disconnect();
    };
  }, []);

  return null;
};
