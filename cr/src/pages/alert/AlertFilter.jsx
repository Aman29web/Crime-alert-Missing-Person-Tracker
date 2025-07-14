import React from "react";

const filters = ["All", "Crime", "Missing", "Unsafe"];

const AlertFilter = ({ selectedFilter, onSelectFilter }) => {
  return (
    <div className="w-full flex justify-center flex-wrap gap-3 py-8">
      {filters.map((type) => (
        <button
          key={type}
          onClick={() => onSelectFilter(type)}
          className={`px-5 py-2 rounded-full border font-medium text-sm transition 
            ${
              selectedFilter === type
                ? "bg-[var(--color-primary)] text-white"
                : "bg-white text-[var(--color-text-secondary)] border-[var(--color-border)]"
            }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default AlertFilter;
