import React from "react";
import { Link } from "react-router-dom";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-secondary)] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold font-[var(--font-heading)]">Rakshak</h2>
          <p className="mt-2 text-sm text-gray-400 font-[var(--font-body)]">
            A community-powered safety network to report, alert, and protect.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/report" className="hover:text-white">Report</Link></li>
            <li><Link to="/alerts" className="hover:text-white">Alerts</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300">
            <Mail size={16} /> support@rakshak.in
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="text-gray-300 hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="text-gray-300 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Rakshak. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
