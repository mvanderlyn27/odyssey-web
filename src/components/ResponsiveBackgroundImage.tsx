import { useMediaQuery } from "react-responsive";

type BackgroundImageProps = {
  mobileSrc: string;
  desktopSrc: string;
  className?: string;
};

export default function ResponsiveBackgroundImage({ mobileSrc, desktopSrc, className }: BackgroundImageProps) {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div
      className={`absolute bg-contain bg-no-repeat bg-center -z-10 ${className}`}
      style={{
        backgroundImage: `url(${isDesktop ? desktopSrc : mobileSrc})`,
      }}
    />
  );
}
