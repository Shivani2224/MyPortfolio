import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tic-Tac-Toe (React)",
      description:
        "A classic Tic-Tac-Toe game built using React. Two players can take turns marking the grid, and the game automatically detects wins, draws, and invalid moves. It highlights the winning combination and allows players to restart the game. This project helped me practice React state, event handling, and conditional rendering.",
      image: `${process.env.PUBLIC_URL}/images/projects/Tic-Tac-Toe.png`,
      tags: ["React", "JavaScript", "CSS", "Responsive"],
      github: "https://github.com/Shivani2224/Tic-Tac-Toe-React/",
      live: "",
    },
    {
      id: 2,
      title: "HR Management System",
      description:
        "A simple HR management web app built with React that helps manage employee data and streamline everyday HR tasks. The system includes features for attendance tracking, leave management, payslips, and time correction requests. It's designed with a clean and intuitive interface to simulate real HR workflows. This project helped me strengthen skills in state management, form handling, and building functional dashboard components.",
      image: `${process.env.PUBLIC_URL}/images/projects/HR-management.png`,
      tags: ["React", "JavaScript", "TailWind CSS", "Responsive"],
      github: "https://github.com/Shivani2224/HR-management",
      live: "",
    },
    {
      id: 3,
      title: "E-commerce website showcase ",
      description:" A responsive e-commerce showcase built with React 19 and Vite that demonstrates a complete online shopping experience. Features include real-time product search, category filtering, multiple sorting options, and a persistent shopping cart with localStorage integration. Designed with Tailwind CSS for a clean, mobile-friendly interface. This project helped me strengthen skills in custom React hooks, state management, API integration, and component-based architecture.",
      image: `${process.env.PUBLIC_URL}/images/projects/ecommerce-showcase.png`,
      tags: ["React", "API", "Charts.js", "Geolocation"],
      github: "https://github.com/Shivani2224/ecommerce-showcase",
      live: "",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-5 text-primary-dark font-bold">
            Things I've Built
          </h2>
          <p className="text-center text-slate-600 text-lg">
            A mix of learning projects and fun experiments
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                index % 2 === 0 ? "" : "lg:grid-flow-dense"
              }`}
            >
              {/* Project Image */}
              <motion.div
                className={`lg:col-span-5 relative group ${
                  index % 2 !== 0 ? "" : "lg:col-start-8"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-teal-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-light/10 group-hover:opacity-0 transition-all duration-300 z-10"></div>
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-auto object-cover max-h-[300px]"
                  />
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on  GitHub`}
                      className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-primary hover:bg-primary-dark p-3 rounded-full shadow-lg"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Project Content */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 !== 0
                    ? "lg:text-right lg:col-start-6"
                    : "lg:text-left lg:col-start-1 lg:row-start-1"
                }`}
              >
                <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase"></p>
                <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                  {project.title}
                </h3>

                <div className="bg-teal-50 p-5 rounded-lg shadow-lg mb-4 border border-teal-100">
                  <p className="text-slate-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div
                  className={`lg:col-span-7 ${
                    index % 2 !== 0
                      ? "lg:text-left lg:col-start-6"
                      : "lg:text-right lg:col-start-1 lg:row-start-1"
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-slate-600 font-medium text-sm hover:text-primary transition-colors mr-3"
                    >
                      {tag}
                    </span>
                  ))}

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-slate-600 hover:text-primary text-xl transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
