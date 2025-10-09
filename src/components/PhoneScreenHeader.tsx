import { motion } from "framer-motion";
import { useWindowWidth } from "../hooks/useWindowWidth";

const PhoneScreenHeader = () => {
  const width = useWindowWidth();
  const isMobile = width < 768;

  const getScale = () => {
    if (isMobile) {
      return 1 + (1 - width / 768) * 0.6;
    }
    return 1;
  };

  const getCenterScale = () => {
    if (isMobile) {
      return 1.05 + (1 - width / 768) * 0.55;
    }
    return 1.05;
  };

  return (
    <div className="relative w-full pt-8 md:pt-0 aspect-[1.5/1] flex items-center justify-center">
      {/* Left Image */}
      <motion.img
        initial={{ opacity: 0, x: "-50%", scale: 0.9 }}
        animate={{ opacity: 1, x: "-85%", scale: getScale() }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 50 }}
        src="/phone_screens/1.png"
        alt="App Screenshot 1"
        className="absolute  object-contain h-[95%]"
        style={{ zIndex: 10 }}
      />
      {/* Right Image */}
      <motion.img
        initial={{ opacity: 0, x: "50%", scale: 0.9 }}
        animate={{ opacity: 1, x: "85%", scale: getScale() }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 50 }}
        src="/phone_screens/3.png"
        alt="App Screenshot 3"
        className="absolute object-contain h-[95%]"
        style={{ zIndex: 10 }}
      />
      {/* Center Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: getCenterScale() }}
        transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 50 }}
        src="/phone_screens/2.png"
        alt="App Screenshot 2"
        className="absolute object-contain h-full"
        style={{ zIndex: 20 }}
      />
    </div>
  );
};

export default PhoneScreenHeader;
