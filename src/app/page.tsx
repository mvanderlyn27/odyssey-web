"use client";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
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
            <p style={{ fontSize: "24px", lineHeight: "1.5" }}>The #1 Workout Tracking & Ranking App</p>
            <h1 className="text-6xl font-bold my-2" style={{ fontFamily: "Lexend Mega, sans-serif" }}>
              ODYSSEY.
            </h1>
            <p style={{ fontSize: "25px", lineHeight: "1.5" }}>Lift. Sweat. Repeat—Become Legend</p>
            <div className="mt-8 w-full">
              <WaitlistForm />
            </div>
          </motion.div>
        </main>
        <footer className="py-4">
          <div className="container mx-auto flex justify-center space-x-4 text-gray-400">
            <Link href="/eula" className="underline">
              User Agreement
            </Link>
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            <Link href="/support" className="underline">
              Contact Us
            </Link>
          </div>
        </footer>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex min-h-screen text-white desktop-background">
        <div className="min-w-[60%] flex flex-col px-8">
          <div className="flex-grow flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center px-8">
              <p style={{ fontSize: "30px", lineHeight: "1.5", letterSpacing: "11px" }}>
                The #1 Workout Tracking & Ranking App
              </p>
              <h1 className="text-9xl font-bold my-4" style={{ fontFamily: "Lexend Mega, sans-serif" }}>
                ODYSSEY.
              </h1>
              <p style={{ fontSize: "50px", lineHeight: "1.5" }}>Lift. Sweat. Repeat—Become Legend</p>
              <div className="mt-8 w-full">
                <WaitlistForm />
              </div>
            </motion.div>
          </div>
          <div className="py-4">
            <div className="container text-xl mx-auto flex justify-center space-x-4 text-[#616161]">
              <Link href="/eula" className="underline">
                User Agreement
              </Link>
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              <Link href="/support" className="underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
