import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { useMediaQuery } from "react-responsive";
import blurhashes from "../blurhashes.json";

type OptimizedPictureProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function OptimizedPicture({ src, alt, className }: OptimizedPictureProps) {
  const [loaded, setLoaded] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const hash = (blurhashes as Record<string, string>)[src];
  const dir = src.substring(0, src.lastIndexOf("/"));
  const filename = src.substring(src.lastIndexOf("/") + 1).replace(".png", "");
  const size = isDesktop ? "desktop" : "mobile";

  const sources = {
    webp: `/images${dir}/${size}/${filename}.webp`,
    png: `/images${dir}/${size}/${filename}.png`,
  };

  useEffect(() => {
    const img = new Image();
    img.src = sources.webp;
    img.onload = () => setLoaded(true);
  }, [sources.webp]);

  return (
    <div className="relative">
      {!loaded && hash && <Blurhash hash={hash} width="100%" height="100%" className="absolute inset-0" />}
      <picture>
        <source srcSet={sources.webp} type="image/webp" />
        <source srcSet={sources.png} type="image/png" />
        <img
          src={sources.png}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
        />
      </picture>
    </div>
  );
}
