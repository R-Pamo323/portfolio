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
          }
        });
      },
      { threshold: 0.6 } // considera "visible" si 60% de la sección se ve
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      observer.disconnect();
    };
  }, []);

  return null;
};
