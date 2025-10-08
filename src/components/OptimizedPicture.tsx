import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import blurhashes from "../blurhashes.json";

type Blurhashes = {
  [key: string]: string;
};

type OptimizedPictureProps = {
  src: string;
  alt: string;
  className?: string;
};

const OptimizedPicture = ({ src, alt, className }: OptimizedPictureProps) => {
  const [loaded, setLoaded] = useState(false);
  const hash = (blurhashes as Blurhashes)[src];

  const dir = src.substring(0, src.lastIndexOf("/"));
  const filename = src.substring(src.lastIndexOf("/") + 1).replace(".png", "");

  const webpSrcMobile = `/images${dir}/mobile/${filename}.webp`;
  const webpSrcDesktop = `/images${dir}/desktop/${filename}.webp`;
  // We need a PNG fallback for browsers that don't support WebP
  const pngSrcMobile = `/images${dir}/mobile/${filename}.png`;
  const pngSrcDesktop = `/images${dir}/desktop/${filename}.png`;

  useEffect(() => {
    const img = new Image();
    // Use the desktop PNG for preloading as it's a fallback
    img.src = pngSrcDesktop;
    img.onload = () => setLoaded(true);
  }, [pngSrcDesktop]);

  return (
    <div className={`relative ${className}`}>
      {!loaded && hash && (
        <Blurhash hash={hash} width="100%" height="100%" className="absolute top-0 left-0 w-full h-full" />
      )}
      <picture>
        <source srcSet={webpSrcDesktop} media="(min-width: 768px)" type="image/webp" />
        <source srcSet={webpSrcMobile} type="image/webp" />
        <source srcSet={pngSrcDesktop} media="(min-width: 768px)" type="image/png" />
        <source srcSet={pngSrcMobile} type="image/png" />
        <img
          src={pngSrcMobile} // Fallback to the mobile-optimized PNG
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${className || ""}`}
        />
      </picture>
    </div>
  );
};

export default OptimizedPicture;
