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

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return null;
};
