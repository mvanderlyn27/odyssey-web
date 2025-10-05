import { motion } from "framer-motion";

const HeaderQuote = ({ quote, author }: { quote: string; author: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}
    className="text-center max-w-4xl mx-auto mb-16">
    <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold">{`"${quote}"`}</h2>
    <p className="text-white/70 mt-4 text-xl">{`- ${author}`}</p>
  </motion.div>
);

export default HeaderQuote;
