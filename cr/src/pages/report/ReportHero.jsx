import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, UserPlus } from "lucide-react";
import reportAnim from "../../assets/Animation2.json"; // Replace with relevant Lottie
import Lottie from "lottie-react";

const ReportHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 overflow-hidden bg-[var(--color-background)]">
      
      {/* Background Accent */}
      <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] bg-[var(--color-accent)] opacity-20 blur-3xl rounded-full z-0" />

      {/* LEFT: Text Block */}
      <motion.div
        className="z-10 flex-1 text-center lg:text-left space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-1 bg-green-100 text-green-700 font-semibold rounded-full text-sm uppercase tracking-wide animate-pulse">
          ✍️ Submit a Report
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] font-[var(--font-heading)] leading-tight">
          Your Voice Matters.<br />
          Report Incidents Securely.
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] font-[var(--font-body)] max-w-xl mx-auto lg:mx-0">
          Report crime, missing persons, or unsafe areas anonymously or with your identity. Verified alerts help the entire community stay aware and safe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 text-[var(--color-text-primary)] font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-[var(--color-primary)] w-5 h-5" />
            Verified by Admin
          </div>
          <div className="flex items-center gap-2">
            <UserPlus className="text-[var(--color-primary)] w-5 h-5" />
            Anonymous Option
          </div>
        </div>
      </motion.div>

      {/* RIGHT: Animation */}
      <motion.div
        className="flex-1 z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie animationData={reportAnim} loop className="w-full max-w-lg mx-auto" />
      </motion.div>
    </section>
  );
};

export default ReportHero;
