import React, { useState } from "react";
import { AlertTriangle, UserSearch, MapPin } from "lucide-react";

const types = [
  { label: "Crime", value: "crime", icon: <AlertTriangle className="w-5 h-5" /> },
  { label: "Missing Person", value: "missing", icon: <UserSearch className="w-5 h-5" /> },
  { label: "Unsafe Zone", value: "unsafe", icon: <MapPin className="w-5 h-5" /> },
];

const ReportTypeSelector = ({ selected, setSelected }) => {
  return (
    <section className="px-6 md:px-16 py-12 bg-[var(--color-background)]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] font-[var(--font-heading)] mb-4">
          What are you reporting?
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Select a category to begin. Each report helps others stay safe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {types.map((type) => (
            <button
              key={type.value}
              onClick={() => setSelected(type.value)}
              className={`
                flex flex-col items-center justify-center p-6 rounded-xl border shadow-sm
                transition-all duration-200
                ${
                  selected === type.value
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-white text-[var(--color-text-primary)] hover:bg-gray-50"
                }
              `}
            >
              {type.icon}
              <span className="mt-2 font-semibold">{type.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportTypeSelector;
