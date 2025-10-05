import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Testimonial from "../components/Testimonial";
import HeaderQuote from "../components/HeaderQuote";
import PhoneScreenHeader from "../components/PhoneScreenHeader";
import StoreButtons from "../components/StoreButtons";
import ResponsiveBackgroundImage from "../components/ResponsiveBackgroundImage";

import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const handleGetAppClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-sm z-50 p-4 flex justify-between items-center px-4 md:px-10">
      <div className="flex items-center gap-4">
        <img src="/icon.png" alt="Odyssey Logo" className="h-8 w-auto" />
        <span className="font-bold text-xl tracking-wider font-lexend-mega">ODYSSEY.</span>
      </div>
      <button
        onClick={handleGetAppClick}
        className="bg-white text-black text-sm md:text-md lg:text-lg font-bold py-2 px-8 rounded-full">
        Get App
      </button>
    </header>
  );
};

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`min-h-screen flex flex-col justify-center items-center relative w-full ${className}`}>
    {children}
  </section>
);

const Feature = ({
  title,
  description,
  imageSrc,
  layout = "default",
  imagePosition = "right",
  secondaryImageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
  layout?: "default" | "row" | "special";
  imagePosition?: "left" | "right";
  secondaryImageSrc?: string;
}) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  if (layout === "special") {
    const textContent = (
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold mb-2">{title}</h3>
        <p className="max-w-md mx-auto md:mx-0 text-white/80 text-[clamp(1rem,2.5vw,1.25rem)]">{description}</p>
        {secondaryImageSrc && (
          <img src={secondaryImageSrc} alt="Ranks" className="mx-auto md:mx-0 mt-4 h-24 object-contain" />
        )}
      </div>
    );
    const imageContent = (
      <div className="md:w-1/2">
        <img src={imageSrc} alt={title} className="mx-auto max-h-96 md:max-h-[450px] object-contain" />
      </div>
    );

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-8">
        {isDesktop ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </motion.div>
    );
  }

  if (layout === "row") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className={`flex flex-col md:flex-row items-center gap-8 ${
          imagePosition === "left" ? "md:flex-row-reverse" : ""
        }`}>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold mb-2">{title}</h3>
          <p className="max-w-md mx-auto md:mx-0 text-white/80 text-[clamp(1rem,2.5vw,1.25rem)]">{description}</p>
        </div>
        <div className="md:w-1/2">
          <img src={imageSrc} alt={title} className="mx-auto max-h-96 md:max-h-[450px] object-contain" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-center">
      <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold mb-2">{title}</h3>
      <p className="max-w-xs mx-auto text-white/80 text-[clamp(0.875rem,2vw,1rem)]">{description}</p>
      <img src={imageSrc} alt={title} className="mx-auto mt-4 max-h-96 md:max-h-[450px] object-contain" />
    </motion.div>
  );
};

const features: {
  title: string;
  description: string;
  imageSrc: string;
  layout?: "default" | "row" | "special";
  imagePosition?: "left" | "right";
  secondaryImageSrc?: string;
}[] = [
  {
    title: "Get your rank",
    description: "See where you stack up against friends and the community.",
    imageSrc: "/phone_screens/8.png",
    layout: "special",
    secondaryImageSrc: "/ranks.png",
  },
  {
    title: "Effortlessly log your lifts",
    description: "A streamlined and intuitive interface for easy tracking.",
    imageSrc: "/phone_screens/4.png",
    layout: "row",
    imagePosition: "right",
  },
  {
    title: "Climb the global leaderboard",
    description: "Compete with users from around the world for the top spot.",
    imageSrc: "/phone_screens/5.png",
    layout: "row",
    imagePosition: "left",
  },
  {
    title: "Grow together",
    description: "View friends' activities, team up, and motivate each other.",
    imageSrc: "/phone_screens/6.png",
    layout: "row",
    imagePosition: "right",
  },
  {
    title: "Build your own",
    description: "Create custom exercises and workout templates with ease.",
    imageSrc: "/phone_screens/7.png",
    layout: "row",
    imagePosition: "left",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-white max-w-[100vw] overflow-clip">
        {/* Hero Section */}
        <Section className="pt-24">
          <ResponsiveBackgroundImage
            mobileSrc="/greek_background_photos/1.png"
            desktopSrc="/greek_background_photos/1.png"
            className="w-full h-full top-0 left-0 transform scale-160 md:scale-120 lg:scale-100 object-contain z-0"
          />
          <div className="relative z-10 w-full px-4 md:px-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center w-full px-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <img src="/5_star.png" alt="5 Stars" className="h-12 w-auto mb-4" />
                <h1 className="text-[clamp(1.5rem,5vw,4rem)] leading-tight font-bold tracking-wider font-lexend-mega">
                  LIFT. RANK.
                  <br /> PROGRESS.
                </h1>
                <p className="text-[clamp(0.8rem,2.5vw,1.25rem)] mt-2 text-white/80">
                  The #1 workout ranking app to grow stronger
                </p>
                <StoreButtons />
              </motion.div>
              <div className="w-full lg:w-1/2">
                <PhoneScreenHeader />
              </div>
            </div>
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section className="pt-16">
          <div className="relative z-10 w-full px-4 md:px-10">
            <HeaderQuote quote="The best tracking app I've ever used." author="—Sander, 3-year gym goer" />
            <div className="max-w-5xl mx-auto space-y-24">
              <Testimonial
                quote="I have used all sorts of ways of tracking but none worked out for me. This app is the only one I’ve been able to stay consistent with."
                author="—Sander, 3-year gym goer"
                imageSrc="/reviews/image-2.png"
                hideAuthor
              />
              <Testimonial
                quote="I was barely improving before, but this app keeps me motivated. I’ve moved up in every lift since."
                author="— Connor, 2-month lifter"
                imageSrc="/reviews/image-1.png"
              />
              <Testimonial
                quote="“Since using the app I’ve been way more consistent. I’m seeing progress and Odyssey keeps me in check. Highly recommend.”"
                author="— Kris, 2.5-year lifter"
                imageSrc="/reviews/image.png"
              />
            </div>
          </div>
        </Section>

        {/* Features Section */}
        <Section>
          <ResponsiveBackgroundImage
            mobileSrc="/greek_background_photos/2.png"
            desktopSrc="/greek_background_photos/2.png"
            className="scale-300 lg:scale-130 w-1/2 h-1/2 left-1/2 transform -translate-x-1/2  -translate-y-[70%] md:-translate-y-1/2 object-contain"
          />
          <ResponsiveBackgroundImage
            mobileSrc="/greek_background_photos/3.png"
            desktopSrc="/greek_background_photos/3.png"
            className="w-full md:w-1/5 h-1/2 top-[90%] left-0 object-contain transform   "
          />
          <ResponsiveBackgroundImage
            mobileSrc="/greek_background_photos/4.png"
            desktopSrc="/greek_background_photos/4.png"
            className="block w-full h-1/2 md:w-1/7 md:h-2/5 object-contain  top-1/3 lg:top-3/5 md:right-1/8"
          />
          <div className="relative z-10 w-full px-4 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative text-center max-w-6xl mx-auto">
              <h2 className="relative z-10 text-[clamp(2rem,4vw,3rem)] mt-32 mb-16 font-lexend-mega">
                TRACK.
                <br />
                COMPETE.
                <br />
                ASCEND.
              </h2>
              <div className="flex flex-col gap-y-32">
                {features.map((feature, index) => (
                  <Feature {...feature} key={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section>
          {/* <ResponsiveBackgroundImage
            mobileSrc="/greek_background_photos/4.png"
            desktopSrc="/greek_background_photos/4.png"
            className="w-3/4 h-3/4 top-1/5 left-1/2 md:hidden"
          /> */}
          <div className="relative z-10 w-full px-4 md:px-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center flex flex-col items-center">
              <img src="/ranks.png" alt="Ranks" className="h-20 w-full mb-4 object-contain" />
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold font-lexend-mega">START YOUR LEGEND.</h2>
              <p className="text-[clamp(1rem,2.5vw,1.5rem)] mt-2 text-white/80">
                Join Odyssey now and unlock your true potential.
              </p>
              <div className="mt-8 w-full max-w-md mx-auto">
                <StoreButtons />
              </div>
            </motion.div>
          </div>
        </Section>
      </main>

      <footer className="py-4 w-full">
        <div className="container text-sm mx-auto flex justify-center space-x-4 text-white/70">
          <Link to="/eula" className="underline">
            User Agreement
          </Link>
          <Link to="/privacy" className="underline">
            Privacy Policy
          </Link>
          <Link to="/support" className="underline">
            Contact Us
          </Link>
        </div>
      </footer>
    </>
  );
}
