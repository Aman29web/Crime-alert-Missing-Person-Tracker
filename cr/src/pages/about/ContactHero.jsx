import React from "react";
import { motion } from "framer-motion";
import { MailCheck } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-6 md:px-16 py-20 bg-[var(--color-background)] relative overflow-hidden">
      
      {/* BG effect */}
      <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[var(--color-accent)] opacity-20 blur-3xl rounded-full z-0" />

      <motion.div
        className="z-10 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 text-[var(--color-accent-text)] bg-yellow-200 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
          <MailCheck className="w-4 h-4" />
          Contact Our Team
        </div>

        <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-[var(--color-primary)] mt-6 mb-4">
          We’d Love to Hear From You
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Whether you want to report a technical issue, give feedback, or partner with us — drop us a message.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
