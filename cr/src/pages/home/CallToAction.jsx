import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="w-full bg-[var(--color-accent)] text-[var(--color-accent-text)] py-16 px-6 md:px-16">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)]">
          Be the Voice. Be the Change.
        </h2>
        <p className="text-md md:text-lg font-[var(--font-body)] text-[var(--color-text-primary)]">
          Help make your city safer by reporting incidents or helping find missing persons.
          It only takes a minute, but it can save lives.
        </p>
        <Link to="/report">
          <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
            Report an Incident
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;
