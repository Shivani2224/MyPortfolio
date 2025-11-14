import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

const Home = () => {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-teal relative overflow-hidden"
    >
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-[300px] h-[300px] bg-white opacity-10 rounded-full top-[10%] left-[10%] animate-float"></div>
        <div
          className="absolute w-[200px] h-[200px] bg-white opacity-10 rounded-full top-[60%] right-[10%] animate-float"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute w-[400px] h-[400px] bg-white opacity-10 rounded-full bottom-[-10%] left-[50%] animate-float"
          style={{ animationDelay: "10s" }}
        ></div>
      </div>

      <div className="w-full px-8 relative z-10 flex justify-center items-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm{" "}
            <span className="text-primary-dark font-black">Shivani</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/95 leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I build websites that people actually enjoy using.
            <br />
            <span className="font-semibold text-gray-800 bg-white/90 px-2 py-1 rounded">
              Front-end developer
            </span>{" "}
            who loves turning design ideas into real, working code with React & Tailwind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center items-center gap-6 mt-8 w-full flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-lg font-semibold bg-white/95 text-primary-dark border-none rounded-full cursor-pointer transition-all duration-300 inline-flex items-center hover:bg-white hover:-translate-y-0.5 hover:shadow-xl"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
            >
              Check out my projects
              <span className="ml-2">→</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-lg font-semibold bg-transparent text-white border-2 border-white rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:text-primary-dark hover:-translate-y-0.5"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              Let's chat
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-6 justify-center mt-12"
          >
            <motion.a
              href="https://github.com/Shivani2224"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white text-xl transition-all duration-300 hover:bg-white hover:text-primary no-underline"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shivani-patel-aa2846178"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white text-xl transition-all duration-300 hover:bg-white hover:text-primary no-underline"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:patelshivani1410@gmail.com"
              aria-label="Send me an email"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white text-xl transition-all duration-300 hover:bg-white hover:text-primary no-underline"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2 text-white animate-bounce-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span>Scroll Down</span>
        <FaArrowDown className="text-xl" />
      </motion.div>
    </section>
  );
};

export default Home;
