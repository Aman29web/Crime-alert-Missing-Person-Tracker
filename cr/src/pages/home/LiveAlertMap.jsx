import React from "react";
import { MapPin, AlertCircle, UserSearch } from "lucide-react";
import { motion } from "framer-motion";
import mapImg from "../../assets/map.jpeg";

const mockPins = [
  { id: 1, label: "Theft", top: "20%", left: "40%", icon: <AlertCircle className="w-5 h-5 text-red-600" /> },
  { id: 2, label: "Missing Person", top: "35%", left: "60%", icon: <UserSearch className="w-5 h-5 text-yellow-500" /> },
  { id: 3, label: "Unsafe Zone", top: "55%", left: "30%", icon: <MapPin className="w-5 h-5 text-purple-600" /> },
];

const LiveAlertMap = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[var(--color-background)]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] font-[var(--font-heading)]">
          Live Alert Map
        </h2>
        <p className="mt-2 text-[var(--color-text-secondary)] max-w-2xl mx-auto font-[var(--font-body)]">
          Visualize real-time safety alerts submitted by the community across India.
        </p>
      </div>

      <div className="relative w-full max-w-4xl h-[400px] mx-auto bg-gray-200 rounded-xl overflow-hidden border border-[var(--color-border)] shadow-lg">
        {/* Map Image */}
        <img
          src={mapImg}
          alt="India Map"
          className="w-full h-full object-cover opacity-90"
        />

        {/* Map Pins */}
        {mockPins.map((pin, index) => (
          <motion.div
            key={pin.id}
            className="absolute flex items-center space-x-1 bg-white shadow-sm px-2 py-1 rounded-full text-sm font-medium"
            style={{ top: pin.top, left: pin.left }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {pin.icon}
            <span className="text-gray-800">{pin.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LiveAlertMap;
