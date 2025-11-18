import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-teal-50">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-5 bg-gradient-teal bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-light to-primary mx-auto flex items-center justify-center text-white text-5xl font-bold">
              SP
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl mb-5 text-primary-dark">
              Hey there! 👋
            </h3>

            <p className="text-lg leading-relaxed text-slate-600 mb-5">
              Hi! I'm Shivani, a front-end developer based in Ontario, Canada. I started my career in healthcare and tech support, but discovered my passion for building user-friendly digital experiences. That curiosity led me into web development, where I now focus on creating clean, responsive interfaces.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 mb-5">
              I work mainly with React and Tailwind CSS, and I'm currently learning TypeScript and improving my testing skills. My background helps me approach every project with a strong user-first mindset—and I love that "finally fixed it" moment after a tricky debug session.
            </p>

            <div className="mt-8">
              <ul className="list-none p-0 space-y-3">
                <li className="text-lg text-slate-600">
                  📍 Ontario, Canada
                </li>
                <li className="text-lg text-slate-600">
                  🎓 BCA Graduate
                </li>
                <li className="text-lg text-slate-600">
                  ☕ Fueled by coffee & curiosity
                </li>
              </ul>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all duration-300 mt-6"
            >
              Grab my resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
