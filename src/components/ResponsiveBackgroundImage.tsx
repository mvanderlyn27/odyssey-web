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
  const src = isDesktop ? desktopSrc : mobileSrc;

  return <img src={src} alt={alt} className={`absolute -z-10 ${className}`} />;
}
