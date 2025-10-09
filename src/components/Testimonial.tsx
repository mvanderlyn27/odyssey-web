import { motion } from "framer-motion";

const Testimonial = ({
  quote,
  author,
  imageSrc,
  bold = false,
  hideAuthor = false,
  imageLeft = true,
}: {
  quote: string;
  author: string;
  imageSrc: string;
  bold?: boolean;
  hideAuthor?: boolean;
  imageLeft?: boolean;
}) => (
  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`flex justify-center items-center w-full md:w-1/2 ${imageLeft ? "md:order-1" : "md:order-2"}`}>
      <img
        src={imageSrc}
        alt={`Testimonial from ${author}`}
        className="rounded-lg shadow-lg object-contain w-1/4 md:w-2/3 max-h-32"
      />
    </motion.div>
    <div className={`text-center md:text-left w-full md:w-1/2 ${imageLeft ? "md:order-2" : "md:order-1"}`}>
      <h2
        className={`text-[clamp(1.1rem,2vw,1.5rem)] font-inter font-normal text-white/80 ${
          bold ? "font-bold" : ""
        }`}>{`"${quote}"`}</h2>
      {!hideAuthor && <p className="text-white/60 mt-4 text-[clamp(0.875rem,2vw,1rem)] md:text-right">{`${author}`}</p>}
    </div>
  </div>
);

export default Testimonial;
