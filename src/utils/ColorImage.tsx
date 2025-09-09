import { useEffect, useRef } from "react";
// @ts-ignore
import ColorThief from "colorthief";

export const ColorImage = ({
  src,
  alt,
  onColorExtracted,
}: {
  src: string;
  alt: string;
  onColorExtracted: (gradient: string) => void;
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const colorThief = new ColorThief();

    const extractColor = () => {
      try {
        // 🎯 Color principal
        const mainColor = colorThief.getColor(img);
        // 🎨 Paleta de colores
        const palette = colorThief.getPalette(img, 5);
        // Si hay más colores, tomamos el segundo, si no usamos el principal
        const secondaryColor = palette?.[1] || mainColor;
        const gradient = `linear-gradient(135deg, rgb(${mainColor.join(
          ","
        )}), rgb(${secondaryColor.join(",")}))`;

        onColorExtracted(gradient);
      } catch (e) {
        console.error("Error extrayendo color:", e);
      }
    };

    if (img.complete) {
      extractColor();
    } else {
      img.onload = extractColor;
    }
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      crossOrigin="anonymous"
      className="proyectsImg"
    />
  );
};
