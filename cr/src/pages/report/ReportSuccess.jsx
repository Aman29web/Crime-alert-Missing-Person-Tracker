import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ReportSuccess = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50 text-center border-t border-[var(--color-border)]">
      <div className="max-w-xl mx-auto space-y-6">
        <CheckCircle className="mx-auto text-green-500 w-12 h-12" />

        <h2 className="text-3xl font-bold text-[var(--color-primary)] font-[var(--font-heading)]">
          Report Submitted Successfully
        </h2>

        <p className="text-[var(--color-text-secondary)] text-lg font-[var(--font-body)]">
          Thank you for helping make your community safer. Our admin team will verify your report shortly.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link to="/alerts">
            <button className="bg-[var(--color-accent)] text-[var(--color-accent-text)] font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition">
              View Alerts
            </button>
          </Link>
          <Link to="/">
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold px-6 py-3 rounded-full shadow transition">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReportSuccess;
