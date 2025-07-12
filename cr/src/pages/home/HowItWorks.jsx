import React from "react";
import { motion } from "framer-motion";
import { Megaphone, ShieldCheck, BellRing } from "lucide-react";

const steps = [
  {
    title: "1. Report an Incident",
    icon: <Megaphone className="w-8 h-8 text-[var(--color-primary)]" />,
    description:
      "Witnessed something unusual or unsafe? Submit a report anonymously or with your ID to notify the community.",
  },
  {
    title: "2. Admin Verification",
    icon: <ShieldCheck className="w-8 h-8 text-[var(--color-primary)]" />,
    description:
      "Our team reviews the report, checks for authenticity, and marks it for community visibility.",
  },
  {
    title: "3. Alert Nearby Users",
    icon: <BellRing className="w-8 h-8 text-[var(--color-primary)]" />,
    description:
      "Users near the reported location get real-time alerts so they can stay aware or help if needed.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-20 bg-[var(--color-background)] px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] font-[var(--font-heading)]">
          How It Works
        </h2>
        <p className="mt-2 text-[var(--color-text-secondary)] max-w-2xl mx-auto font-[var(--font-body)]">
          A simple 3-step process to make your community safer.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center space-y-4 border border-[var(--color-border)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
              {step.title}
            </h3>
            <p className="text-[var(--color-text-secondary)] font-[var(--font-body)] text-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
