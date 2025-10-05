import { motion } from "framer-motion";

const PhoneScreenHeader = () => {
  return (
    <div className="relative w-full aspect-[1.5/1] flex items-center justify-center">
      {/* Left Image */}
      <motion.img
        initial={{ x: "-50%", scale: 0.9 }}
        animate={{ x: "-85%", scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
        src="/phone_screens/1.png"
        alt="App Screenshot 1"
        className="absolute  object-contain h-[95%]"
        style={{ zIndex: 10 }}
      />
      {/* Right Image */}
      <motion.img
        initial={{ x: "50%", scale: 0.9 }}
        animate={{ x: "85%", scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
        src="/phone_screens/3.png"
        alt="App Screenshot 3"
        className="absolute object-contain h-[95%]"
        style={{ zIndex: 10 }}
      />
      {/* Center Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 100 }}
        src="/phone_screens/2.png"
        alt="App Screenshot 2"
        className="absolute object-contain h-full"
        style={{ zIndex: 20 }}
      />
    </div>
  );
};

export default PhoneScreenHeader;
