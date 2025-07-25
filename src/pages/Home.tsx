import { Link } from "react-router-dom";
import WaitlistPlaceholder from "../components/WaitlistPlaceholder";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden flex flex-col min-h-screen text-white mobile-background">
        <main className="flex-grow flex flex-col justify-center items-center p-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center">
            <p
              className="font-inter font-normal text-center tracking-[11px] leading-relaxed"
              style={{ fontSize: "clamp(0.75rem, 4vw, 1.25rem)" }}>
              The #1 Workout Tracking & Ranking App
            </p>
            <div className="flex-col gap-2 mb-8 my-12 md:my-18 lg:my-24 px-12">
              <h1
                className=" my-2 font-lexend-mega"
                style={{
                  fontSize: "clamp(2.5rem, 12vw, 5rem)",
                }}>
                ODYSSEY.
              </h1>
              <p className="font-inter font-light text-center" style={{ fontSize: "clamp(0.875rem, 7vw, 1.5rem)" }}>
                Lift. Sweat. Repeat—Become Legend
              </p>
            </div>
            <div className="mt-8 w-full">
              <WaitlistPlaceholder />
            </div>
          </motion.div>
        </main>
        <footer className="py-4">
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
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex min-h-screen text-white desktop-background">
        <div className="w-[60%] flex flex-col px-8">
          <div className="flex-grow flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center px-8">
              <p
                className="font-inter font-normal text-center tracking-[11px] leading-relaxed"
                style={{ fontSize: "clamp(.5rem, 5vw, 1.25rem)" }}>
                The #1 Workout Tracking & Ranking App
              </p>
              <div className="flex-col gap-2 mb-8  md:my-6 lg:my-8 px-24">
                <h1
                  className="font-lexend-mega"
                  style={{
                    fontSize: "clamp(5rem, 5vw, 10rem)",
                  }}>
                  ODYSSEY.
                </h1>
                <p className="font-inter font-light text-center" style={{ fontSize: "clamp(1rem, 5vw, 1.5rem)" }}>
                  Lift. Sweat. Repeat—Become Legend
                </p>
              </div>
              <div className="w-full">
                <WaitlistPlaceholder />
              </div>
            </motion.div>
          </div>
          <div className="py-4">
            <div className="container text-md mx-auto flex justify-center space-x-4 text-[#616161]">
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
          </div>
        </div>
      </div>
    </>
  );
}
