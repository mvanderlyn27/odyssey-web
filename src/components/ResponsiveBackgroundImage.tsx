import { useMediaQuery } from "react-responsive";

type BackgroundImageProps = {
  mobileSrc: string;
  desktopSrc: string;
  className?: string;
  alt?: string;
};

export default function ResponsiveBackgroundImage({
  mobileSrc,
  desktopSrc,
  className,
  alt = "",
}: BackgroundImageProps) {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const getSources = (src: string) => {
    const dir = src.substring(0, src.lastIndexOf("/"));
    const filename = src.substring(src.lastIndexOf("/") + 1).replace(".png", "");
    const size = isDesktop ? "desktop" : "mobile";
    return {
      webp: `/images${dir}/${size}/${filename}.webp`,
      png: `/images${dir}/${size}/${filename}.png`,
    };
  };

  const sources = getSources(isDesktop ? desktopSrc : mobileSrc);

  return (
    <picture className={`absolute -z-10 ${className}`}>
      <source srcSet={sources.webp} type="image/webp" />
      <source srcSet={sources.png} type="image/png" />
      <img src={sources.png} alt={alt} className="w-full h-full object-contain" loading="eager" />
    </picture>
  );
}
