import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import mapAnim from "../../assets/AnimationMap.json"; // Replace with relevant map Lottie

const UnsafeHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 overflow-hidden bg-[var(--color-background)]">
      
      {/* BACKGROUND ACCENT */}
      <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[var(--color-accent)] opacity-20 blur-3xl rounded-full z-0" />

      {/* LEFT TEXT SECTION */}
      <motion.div
        className="z-10 flex-1 text-center lg:text-left space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-1 bg-red-100 text-red-700 font-semibold rounded-full text-sm uppercase tracking-wide animate-pulse">
          ⚠️ Crowd-Mapped Danger Zones
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] font-[var(--font-heading)] leading-tight">
          Know Where It’s Unsafe
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] font-[var(--font-body)] max-w-xl mx-auto lg:mx-0">
          Explore real-time maps of areas reported as unsafe by the community. Stay aware, stay safe, and help others by contributing.
        </p>
      </motion.div>

      {/* RIGHT ANIMATION SECTION */}
      <motion.div
        className="flex-1 z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie animationData={mapAnim} loop className="w-full max-w-lg mx-auto" />
      </motion.div>
    </section>
  );
};

export default UnsafeHero;
