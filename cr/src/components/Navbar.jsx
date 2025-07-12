import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, AlertTriangle, LocateFixed, Users, FileText } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const navElement = document.getElementById('navbar');
      if (navElement && navElement.contains(e.target)) {
        const rect = navElement.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { name: 'HOME', icon: <ShieldCheck size={20} />, href: '#' },
    { name: 'ALERTS', icon: <AlertTriangle size={20} />, href: '#alerts' },
    { name: 'REPORT', icon: <FileText size={20} />, href: '#report' },
    { name: 'ABOUT', icon: <Users size={20} />, href: '#about' },
  ];

  const navbarClasses = `
    fixed top-4 left-1/2 -translate-x-1/2
    w-[95%] max-w-6xl mx-auto
    z-50 rounded-2xl
    transition-all duration-300 ease-in-out
    border border-white/10
    ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl' : 'bg-white/30 backdrop-blur-md'}
  `;

  return (
    <nav id="navbar" className={navbarClasses}>
      {/* Aurora Glow */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(252, 211, 77, 0.15), transparent 80%)`,
          opacity: isScrolled ? 1 : 0,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2 text-[var(--color-primary)]">
              <ShieldCheck className="h-8 w-8 text-[var(--color-primary)]" />
              <span className="text-2xl font-bold font-[var(--font-heading)]">CrimeAlert</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#report"
              className="px-5 py-3 rounded-xl text-white font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-md shadow-red-400/20 hover:shadow-red-400/40 transition-all duration-300"
            >
              Report Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Toggle Menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`
          md:hidden transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-screen' : 'max-h-0'}
        `}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 border-t border-gray-200 bg-white rounded-b-2xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
          <a
            href="#report"
            className="block w-full text-center px-5 py-3 rounded-xl text-white font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-md shadow-red-400/20 hover:shadow-red-400/40 transition-all duration-300"
          >
            Report Now
          </a>
        </div>
      </div>
    </nav>
  );
}
