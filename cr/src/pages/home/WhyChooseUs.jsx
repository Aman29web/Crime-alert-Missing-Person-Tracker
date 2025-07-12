import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, UserPlus, Globe, BellRing } from "lucide-react";

const features = [
  {
    title: "Verified & Trusted Reports",
    icon: <ShieldCheck className="w-8 h-8 text-[var(--color-primary)]" />,
    description:
      "Every submission goes through admin verification to ensure accuracy and reliability.",
  },
  {
    title: "Citizen-Powered Network",
    icon: <UserPlus className="w-8 h-8 text-[var(--color-primary)]" />,
    description:
      "Built on the strength of community — you report, you protect, you participate.",
  },
  {
    title: "Pan-India Coverage",
    icon: <Globe className="w-8 h-8 text-[var(--color-primary)]" />,
    description:
      "Designed for scale. From metros to small towns — anyone, anywhere can contribute.",
  },
  {
    title: "Real-Time Notifications",
    icon: <BellRing className="w-8 h-8 text-[var(--color-primary)]" />,
    description:
      "Users near an incident get notified instantly so they can avoid danger or act fast.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[var(--color-background)]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] font-[var(--font-heading)]">
          Why Choose Us
        </h2>
        <p className="mt-2 text-[var(--color-text-secondary)] max-w-2xl mx-auto font-[var(--font-body)]">
          Our platform is designed to make every citizen feel safer and more empowered.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md border border-[var(--color-border)] text-center space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
              {feature.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
