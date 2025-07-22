import { motion } from "framer-motion";
import { usePostHog } from "posthog-js/react";

export default function WaitlistPlaceholder() {
  const posthog = usePostHog();
  return (
    <div className="w-full max-w-sm mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4">
        <motion.button
          id="waitList"
          onClick={() => posthog.capture("waitlist_opened")}
          className="px-6 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Join Waitlist Now
        </motion.button>
      </motion.div>
    </div>
  );
}
