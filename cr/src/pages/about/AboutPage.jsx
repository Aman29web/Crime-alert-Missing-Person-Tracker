import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Target } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-[var(--color-background)] text-[var(--color-text-primary)] font-[var(--font-body)]">
      
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-[var(--color-primary)] mb-4">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto text-[var(--color-text-secondary)]">
          A platform built by citizens, for citizens — to make safety and vigilance a collective responsibility.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <ShieldCheck className="w-10 h-10 text-[var(--color-primary)]" />
          <h3 className="text-xl font-semibold">Trust & Transparency</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Every report is reviewed for accuracy. We ensure the platform remains safe and reliable.
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <Users className="w-10 h-10 text-[var(--color-primary)]" />
          <h3 className="text-xl font-semibold">Community First</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Our strength lies in people power. Thousands contribute to build a safer, more aware India.
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <Target className="w-10 h-10 text-[var(--color-primary)]" />
          <h3 className="text-xl font-semibold">Mission-Driven</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Our goal: to make safety accessible and reporting effortless — from metros to villages.
          </p>
        </div>
      </motion.div>

      {/* Team Philosophy / Vision */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-[var(--color-primary)]">
          Why We Started This
        </h2>
        <p className="text-[var(--color-text-secondary)]">
          India faces countless safety challenges — from street crimes to disappearances. We realized there was no central, transparent, and citizen-powered system to track these. That’s why this platform was built — to crowdsource vigilance and empower every individual with the tools to make a difference.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutPage;
