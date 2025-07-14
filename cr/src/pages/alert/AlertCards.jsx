import React from "react";
import { AlertCircle, UserSearch, MapPin } from "lucide-react";

// Mock alert data
const alerts = [
  {
    id: 1,
    type: "Crime",
    title: "Phone Snatching",
    description: "Incident near metro station exit.",
    location: "Delhi, CP",
    time: "2h ago",
  },
  {
    id: 2,
    type: "Missing",
    title: "Lost Child",
    description: "Boy missing since morning.",
    location: "Bangalore, Jayanagar",
    time: "5h ago",
  },
  {
    id: 3,
    type: "Unsafe",
    title: "Dark Street",
    description: "No lighting and no CCTV near this lane.",
    location: "Kolkata, Park Street",
    time: "Yesterday",
  },
  {
    id: 4,
    type: "Crime",
    title: "Chain Snatching",
    description: "Happened outside the temple area.",
    location: "Mumbai, Andheri",
    time: "1h ago",
  },
];

const AlertCards = ({ selectedFilter }) => {
  const filtered =
    selectedFilter === "All"
      ? alerts
      : alerts.filter((alert) => alert.type === selectedFilter);

  const getIcon = (type) => {
    switch (type) {
      case "Crime":
        return <AlertCircle className="text-red-600 w-5 h-5" />;
      case "Missing":
        return <UserSearch className="text-yellow-500 w-5 h-5" />;
      case "Unsafe":
        return <MapPin className="text-purple-600 w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="px-6 md:px-16 pb-20">
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[var(--color-text-secondary)]">
          <p className="text-lg font-semibold">
            No alerts found for "{selectedFilter}"
          </p>
          <p className="text-sm mt-2">
            Try selecting a different category or check back later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((alert) => (
            <div
              key={alert.id}
              className="bg-white border border-[var(--color-border)] rounded-xl p-5 shadow-sm space-y-2 transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium text-sm text-[var(--color-text-primary)]">
                  {getIcon(alert.type)} {alert.type}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  {alert.time}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                {alert.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {alert.description}
              </p>
              <p className="text-xs text-[var(--color-accent-text)] font-medium mt-1">
                📍 {alert.location}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AlertCards;
