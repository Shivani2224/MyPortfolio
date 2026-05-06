import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About" },
    { id: "skills", icon: <FaCode />, label: "Skills" },
    { id: "projects", icon: <FaBriefcase />, label: "Projects" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  const resumeUrl = `${process.env.PUBLIC_URL}/Shivani patel junior front end developer.pdf`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // 20% band in middle of viewport
        threshold: 0,
      },
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* DESKTOP — vertical side dock */}
      <motion.aside
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-lg p-2"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            aria-label={`Go to ${item.label}`}
            className="group relative w-11 h-11 flex items-center justify-center rounded-full transition-colors"
          >
            <span
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                active === item.id
                  ? "bg-primary scale-100"
                  : "bg-transparent group-hover:bg-teal-50 scale-90 group-hover:scale-100"
              }`}
            />
            <span
              className={`relative z-10 text-base transition-colors ${
                active === item.id
                  ? "text-white"
                  : "text-slate-600 group-hover:text-primary"
              }`}
            >
              {item.icon}
            </span>
            <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg">
              {item.label}
            </span>
          </button>
        ))}

        <div className="w-7 h-px bg-slate-200 mx-auto my-1" />

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume"
          className="group relative w-11 h-11 flex items-center justify-center rounded-full bg-teal-50 hover:bg-primary transition-colors"
        >
          <FaFileAlt className="text-primary group-hover:text-white text-base transition-colors" />
          <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg">
            Resume
          </span>
        </a>
      </motion.aside>

      {/* MOBILE — minimal top bar with hamburger */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-5 py-3 flex justify-between items-center"
      >
        <span className="text-xl font-bold text-primary-dark">Shivani</span>
        <button
          onClick={() => setIsMobileOpen((v) => !v)}
          className="text-2xl text-primary-dark"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-200"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="w-full flex items-center gap-3 px-5 py-3 text-left text-slate-700 hover:bg-teal-50 hover:text-primary transition-colors border-b border-slate-100"
              >
                <span className="text-primary">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 px-5 py-3 bg-primary text-white font-semibold no-underline"
            >
              <FaFileAlt />
              Resume
            </a>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};

export default Header;
