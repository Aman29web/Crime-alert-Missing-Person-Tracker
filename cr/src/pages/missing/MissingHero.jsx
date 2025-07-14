import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import missingAnim from "../../assets/AnimationMissing.json"; // Replace with your Lottie

const MissingHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 overflow-hidden bg-[var(--color-background)]">
      
      {/* BACKGROUND EFFECT */}
      <div className="absolute bottom-[-100px] left-[-150px] w-[400px] h-[400px] bg-[var(--color-accent)] opacity-20 blur-3xl rounded-full z-0" />

      {/* LEFT: TEXT */}
      <motion.div
        className="z-10 flex-1 text-center lg:text-left space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 font-semibold rounded-full text-sm uppercase tracking-wide animate-pulse">
          🕵️‍♂️ Help Find the Missing
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] font-[var(--font-heading)] leading-tight">
          Together We Can Bring Them Home
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] font-[var(--font-body)] max-w-xl mx-auto lg:mx-0">
          Browse or report missing person cases. Every share, view, or report increases the chances of reunion.
        </p>
      </motion.div>

      {/* RIGHT: ANIMATION */}
      <motion.div
        className="flex-1 z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie animationData={missingAnim} loop className="w-full max-w-lg mx-auto" />
      </motion.div>
    </section>
  );
};

export default MissingHero;
