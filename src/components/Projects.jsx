import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "React Tic-Tac-Toe",
      description:
        "My first real React project! Built this to understand how state actually works. Spent way too long figuring out the win condition logic, but learned a ton about managing state and component re-renders.",
      image: `${process.env.PUBLIC_URL}/images/projects/Tic-Tac-Toe.png`,
      tags: ["React", "JavaScript", "CSS", "Game Logic"],
      github: "https://github.com/Shivani2224/Tic-Tac-Toe-React/",
      live: "",
    },
    {
      id: 2,
      title: "To-Do List App",
      description:
        "Classic to-do app (because everyone builds one, right?). This was where I finally understood how localStorage works. Also learned the hard way why you need to validate user input before storing it!",
      image:
        "",
      tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
      github: "https://github.com/Shivani2224/To-Do-List",
      live: "",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description:
        "Shopping cart project where I dove into Redux for state management. Getting the cart logic right was challenging – handling quantities, totals, and keeping everything in sync. Still thinking about how I could improve the checkout flow.",
      image: "/images/projects/ecommerce.png",
      tags: ["React", "TailwindCSS", "Redux", "API Integration"],
      github: "",
      live: "",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "Weather app using a public API. This taught me about async/await and error handling (because APIs don't always play nice). Also spent time making the UI update smoothly without those awkward loading states.",
      image: "/images/projects/weather-dashboard.png",
      tags: ["React", "API", "Charts.js", "Geolocation"],
      github: "",
      live: "",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "You're looking at it! First time using Framer Motion – maybe went a bit overboard with animations at first. Learned a lot about responsive design and making things look good on all screen sizes. Always a work in progress.",
      image: "/images/projects/portfolio.png",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Responsive"],
      github: "",
      live: "",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-5 text-primary-dark font-bold">
            Things I've Built
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            A mix of learning projects and fun experiments
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer border-2 border-transparent hover:shadow-xl hover:border-primary-light group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title} - ${project.description.substring(0, 60)}...`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-4">
                    <h3 className="text-white text-xl font-bold text-center px-5">
                      {project.title}
                    </h3>
                  </div>
                  {(project.github || project.live) && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          whileHover={{ scale: 1.1 }}
                          className="text-white text-2xl p-3 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary"
                        >
                          <FaGithub />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live demo`}
                          whileHover={{ scale: 1.1 }}
                          className="text-white text-2xl p-3 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary"
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-teal-50 text-primary px-3 py-1 rounded-full text-sm font-medium border border-teal-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
