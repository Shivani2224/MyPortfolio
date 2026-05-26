import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";

const Projects = () => {
  const [expanded, setExpanded] = useState({});
  const toggleExpanded = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  const projects = [
    {
      id: 1,
      title: "E-commerce Website Showcase",
      description:
        "A responsive e-commerce demo built with React 19 and Vite. Features real-time product search, category filters, sorting, and a persistent shopping cart backed by localStorage. Custom React hooks handle cart and filter state, with Tailwind CSS driving the mobile-first UI. The project that took me from 'I know React' to 'I can architect a small app from scratch' — splitting state into focused hooks and keeping components purely for rendering.",
      image: `${process.env.PUBLIC_URL}/images/projects/ecommerce-showcase.png`,
      tags: ["React", "Vite", "Tailwind CSS", "Responsive"],
      github: "https://github.com/Shivani2224/ecommerce-showcase",
      live: "https://shivani2224.github.io/ecommerce-showcase/",
    },
    {
      id: 2,
      title: "HR Management System",
      description:
        "An HR dashboard built with React that simulates real HR workflows — attendance tracking, leave management, payslips, and time correction requests. Each module is a focused component with its own state, communicating via props and callbacks. Forms are controlled inputs with validation, and the layout is responsive through Tailwind CSS. The project that taught me how to break a 'big app' into manageable pieces, each doing one thing well.",
      image: `${process.env.PUBLIC_URL}/images/projects/HR-management.png`,
      tags: ["React", "JavaScript", "Tailwind CSS", "Responsive"],
      github: "https://github.com/Shivani2224/HR-management",
      live: "https://shivani2224.github.io/HR-management/",
    },
    {
      id: 3,
      title: "Focus Timer",
      description:
        "A Pomodoro-style focus timer built with React. Lets you set custom work and break intervals, then runs a clean countdown with start, pause, and reset controls. The timer logic lives in a custom hook that handles the interval lifecycle with useEffect — starting on play, clearing on pause or unmount — so the UI stays in sync without leaking timers across renders. Session state, progress, and the active mode (focus vs. break) all flow through React state, with conditional rendering swapping the controls and color theme as the session progresses. I also wrote unit tests with React Testing Library and Jest — using fake timers to advance the clock and assert on countdown behavior, mode transitions, and the start/pause/reset flow — which is where I really started to appreciate how testable code and clean state design go hand in hand. The project that pushed me past basic state into thinking about side effects, cleanup, and how to package timer behavior into a reusable, well-tested hook.",
      image: `${process.env.PUBLIC_URL}/images/projects/focus-timer.png`,
      tags: ["React", "Jest", "Testing Library", "Tailwind CSS", "Custom Hooks"],
      github: "https://github.com/Shivani2224/Timer-app",
      live: "https://timer-app-three-red.vercel.app/",
    },
  ];

  const getDisplayUrl = (project) => {
    const url = project.live || project.github;
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  };

  return (
    <section id="projects" className="bg-white">
      <div className="max-w-7xl mx-auto px-5 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-5 text-primary-dark font-bold">
            Things I've Built
          </h2>
          <p className="text-center text-slate-600 text-lg">
            A mix of learning projects and fun experiments
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="group min-h-[calc(100vh-6rem)] flex items-center py-10 border-b border-slate-100 last:border-b-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl border border-slate-200 bg-white transition-shadow duration-300">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#28c941]"></span>
                    <div className="flex-1 mx-4 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white rounded-md border border-slate-200 text-xs text-slate-500 font-mono truncate">
                      <FaLock className="text-[10px] text-slate-400 flex-shrink-0" />
                      <span className="truncate">{getDisplayUrl(project)}</span>
                    </div>
                  </div>

                  <div className="overflow-hidden bg-teal-50">
                    <motion.img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="w-full h-auto object-cover max-h-[55vh]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>

              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-2xl md:text-3xl font-bold text-slate-300 tabular-nums">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-dark">
                    {project.title}
                  </h3>
                </div>

                <p
                  className={`text-slate-600 leading-relaxed text-base mb-2 ${
                    expanded[project.id] ? "" : "line-clamp-4"
                  }`}
                >
                  {project.description}
                </p>
                <button
                  type="button"
                  onClick={() => toggleExpanded(project.id)}
                  className="mb-5 text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
                >
                  {expanded[project.id] ? "Show less ▲" : "Show more ▼"}
                </button>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-teal-50 text-primary-dark px-3 py-1.5 rounded-full text-xs font-semibold border border-teal-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary text-primary rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-colors duration-300 no-underline"
                    >
                      <FaGithub className="text-base" />
                      View Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors duration-300 no-underline"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
