"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePostHog } from "posthog-js/react";

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const posthog = usePostHog();

  useEffect(() => {
    if (localStorage.getItem("waitlist_joined")) {
      setStatus("success");
      setMessage("You're already on the waitlist!");
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formBody = `email=${encodeURIComponent(email)}&userGroup=app_waitlist`;
    const response = await fetch("https://app.loops.so/api/newsletter-form/cmc6lfhli392fz60if1d80zbu", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    console.log("reponse", response);
    if (response.ok) {
      setStatus("success");
      setEmail("");
      setMessage("Thanks for joining the waitlist!");
      localStorage.setItem("waitlist_joined", "true");
      posthog.capture("waitlist_joined", { email });
      console.log("posthog", posthog);
    } else {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      posthog.capture("waitlist_join_error", { email });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="email@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-6 py-4 border rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <motion.button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black disabled:bg-gray-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-green-500">
            {message}
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-red-500">
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
