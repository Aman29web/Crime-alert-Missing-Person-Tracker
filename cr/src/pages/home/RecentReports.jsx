import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, UserSearch, MapPin } from "lucide-react";

const mockReports = [
  {
    id: 1,
    type: "Crime",
    icon: <AlertCircle className="text-red-600 w-5 h-5" />,
    title: "Mobile Snatching",
    location: "Connaught Place, Delhi",
    time: "2 hours ago",
    description: "A man was reported snatching mobile phones near gate 4. Alert police instantly.",
  },
  {
    id: 2,
    type: "Missing",
    icon: <UserSearch className="text-yellow-500 w-5 h-5" />,
    title: "Missing Child",
    location: "Jayanagar, Bangalore",
    time: "5 hours ago",
    description: "10-year-old boy missing since morning. Last seen near metro station.",
  },
  {
    id: 3,
    type: "Unsafe Zone",
    icon: <MapPin className="text-purple-600 w-5 h-5" />,
    title: "Poor Lighting",
    location: "Park Street, Kolkata",
    time: "Yesterday",
    description: "Area around the lane has no street lights, unsafe for pedestrians at night.",
  },
];

const RecentReports = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] font-[var(--font-heading)]">
          Recent Reports
        </h2>
        <p className="mt-2 text-[var(--color-text-secondary)] max-w-2xl mx-auto font-[var(--font-body)]">
          Stay updated with the most recent alerts and user reports from across India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockReports.map((report, index) => (
          <motion.div
            key={report.id}
            className="bg-gray-50 border border-[var(--color-border)] rounded-xl p-6 shadow-sm space-y-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)]">
              {report.icon}
              <span>{report.type}</span>
              <span className="ml-auto text-[var(--color-text-secondary)]">{report.time}</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
              {report.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">{report.description}</p>
            <p className="text-xs text-[var(--color-accent-text)] font-medium mt-2">
              📍 {report.location}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentReports;
