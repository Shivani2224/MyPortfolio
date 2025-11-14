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
              I'm Shivani, a front-end developer based in Ontario. My journey into
              coding wasn't exactly traditional – I started out in healthcare and
              tech support, but I kept finding myself drawn to the tech side of things.
              Eventually, I realized I'd rather be building the solutions than just
              supporting them.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 mb-5">
              What I love most about web development is that moment when you finally
              get something working after hours of debugging (we've all been there, right?).
              I'm big on clean code and intuitive design – probably because my healthcare
              background taught me to think from the user's perspective first.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 mb-5">
              These days, I'm focused on React and Tailwind CSS, always trying to
              learn something new. Currently exploring TypeScript and trying to get
              better at writing tests (it's a work in progress!).
            </p>

            <div className="mt-8">
              <h4 className="text-xl mb-4 text-primary-dark font-semibold">
                A bit more about me:
              </h4>
              <ul className="list-none p-0 space-y-3">
                <li className="text-base text-slate-600">
                  📍 Based in Ontario, Canada
                </li>
                <li className="text-base text-slate-600">
                  🎓 BCA grad (Bachelor of Computer Applications)
                </li>
                <li className="text-base text-slate-600">
                  💼 Former healthcare & tech support professional turned developer
                </li>
                <li className="text-base text-slate-600">
                  ☕ Fueled by coffee and Stack Overflow (let's be honest)
                </li>
                <li className="text-base text-slate-600">
                  🎯 Currently learning: TypeScript and testing best practices
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
