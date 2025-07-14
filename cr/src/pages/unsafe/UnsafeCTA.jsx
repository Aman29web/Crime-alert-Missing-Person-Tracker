import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

const UnsafeCTA = () => {
  return (
    <section className="bg-red-50 border-t border-b border-red-200 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center gap-2 text-red-800 text-sm font-medium uppercase tracking-wide bg-red-200 px-4 py-1 rounded-full">
          <ShieldAlert className="w-4 h-4" />
          Be the First Line of Defense
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] font-[var(--font-heading)]">
          Know a Risky Spot? Report It Now.
        </h2>

        <p className="text-lg text-[var(--color-text-secondary)] font-[var(--font-body)] max-w-2xl mx-auto">
          If you've encountered unsafe zones, let others know. Your alert might prevent an incident. Together, we’re building safer neighborhoods.
        </p>

        <Link to="/report">
          <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-3 rounded-full font-semibold shadow-md transition">
            Report Unsafe Location
          </button>
        </Link>
      </div>
    </section>
  );
};

export default UnsafeCTA;
