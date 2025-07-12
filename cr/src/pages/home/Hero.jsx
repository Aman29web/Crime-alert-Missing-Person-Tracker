import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ShieldCheck, UserSearch, MapPin } from "lucide-react";
import heroAnim from "../../assets/Animation1.json";

// NEW: Framer Motion variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-6 md:px-16 py-20 overflow-hidden bg-[var(--color-background)]">
      
      {/* UPDATED: Animated Background Blob */}
      <div className="absolute top-[-10%] right-[-15%] w-[500px] h-[500px] bg-[var(--color-accent)] opacity-20 blur-3xl rounded-full z-0 animate-blob" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[400px] h-[400px] bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full z-0 animate-blob animation-delay-4000" />


      {/* UPDATED: LEFT TEXT BLOCK with Staggered Animation */}
      <motion.div
        className="z-10 flex-1 text-center lg:text-left space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.div 
          className="inline-block px-4 py-1 bg-red-100 text-red-700 font-semibold rounded-full text-sm uppercase tracking-wide"
          variants={itemVariants}
        >
          🚨 Your Community's Shield
        </motion.div>

        {/* Heading */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] leading-tight"
          variants={itemVariants}
        >
          United for Safety: <br className="hidden md:block" /> India’s Vigilant Network
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto lg:mx-0"
          variants={itemVariants}
        >
          A decentralized platform empowering citizens to instantly report crimes, amplify searches for missing persons, and identify unsafe areas.
        </motion.p>

        {/* UPDATED: Features Row with Hover Animation */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 pt-4 text-[var(--color-text-primary)]"
          variants={itemVariants}
        >
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            <span className="font-semibold">Real-Time Crime Reporting</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <UserSearch className="w-6 h-6 text-[var(--color-primary)]" />
            <span className="font-semibold">Missing Persons Alerts</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            <span className="font-semibold">Unsafe Zone Mapping</span>
          </motion.div>
        </motion.div>

        {/* Motivation or Mission */}
        <motion.p 
          className="pt-6 italic text-[var(--color-text-secondary)] max-w-xl mx-auto lg:mx-0"
          variants={itemVariants}
        >
          “This isn't just an app — it's a mission. Where your voice becomes visibility, and awareness becomes action.”
        </motion.p>
      </motion.div>

      {/* RIGHT ANIMATION */}
      <motion.div
        className="flex-1 z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }} // Added a small delay
      >
        <Lottie animationData={heroAnim} loop className="w-full max-w-lg mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;