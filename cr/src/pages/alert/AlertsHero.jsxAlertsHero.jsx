import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const AlertsHero = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center px-6 md:px-16 py-20 bg-[var(--color-background)] text-center overflow-hidden">
      
      {/* Background Blob */}
      <div className="absolute top-[-80px] right-[-120px] w-[300px] h-[300px] bg-[var(--color-accent)] blur-3xl opacity-20 rounded-full z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex justify-center items-center gap-2 text-[var(--color-primary)]">
          <AlertCircle size={28} />
          <h2 className="text-xl font-semibold font-[var(--font-heading)]">
            Live Alerts from Across India
          </h2>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-[var(--color-primary)] leading-tight">
          Browse Reports. Stay Alert. Help Your Community.
        </h1>

        <p className="text-[var(--color-text-secondary)] text-base md:text-lg font-[var(--font-body)]">
          View real-time reports of crime, missing persons, and unsafe zones submitted by users like you. Knowledge is safety.
        </p>
      </motion.div>
    </section>
  );
};

export default AlertsHero;
