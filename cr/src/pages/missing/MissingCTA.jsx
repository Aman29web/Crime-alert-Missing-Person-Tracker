import React from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const MissingCTA = () => {
  return (
    <section className="bg-yellow-50 border-t border-b border-yellow-200 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center gap-2 text-yellow-800 text-sm font-medium uppercase tracking-wide bg-yellow-200 px-4 py-1 rounded-full">
          <AlertCircle className="w-4 h-4" />
          Help Bring Them Back
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] font-[var(--font-heading)]">
          Know Someone Who's Missing?
        </h2>

        <p className="text-lg text-[var(--color-text-secondary)] font-[var(--font-body)] max-w-2xl mx-auto">
          Time is critical. Report a missing person today and let the network work for you. We’re here to amplify your reach.
        </p>

        <Link to="/report">
          <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-3 rounded-full font-semibold shadow-md transition">
            Report Missing Person
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MissingCTA;
