import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaGitAlt, FaFigma, FaNodeJs, FaBookOpen,
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, color: '#e34c26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <FaReact />, color: '#61dafb' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4' },
      ],
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Figma', icon: <FaFigma />, color: '#f24e1e' },
      ],
    },
  ];

  const learning = ['Next.js', 'Jest & Testing Library', 'REST APIs'];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-teal-50">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-5 text-primary-dark font-bold">
            My Toolkit
          </h2>
          <p className="text-center text-slate-600 mb-14 text-lg">
            Technologies I use to build stuff
          </p>

          {skillCategories.map((category) => (
            <div key={category.title} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary whitespace-nowrap">
                  {category.title}
                </span>
                <span className="flex-1 h-px bg-primary/20"></span>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                      transition: { duration: 0.3 },
                    }}
                    className="bg-white rounded-xl p-5 text-center shadow-sm border-2 border-transparent cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-xl"
                  >
                    <motion.div
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 },
                      }}
                      className="text-4xl mb-2 drop-shadow-sm flex justify-center"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h4 className="font-semibold text-primary-dark text-base">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 pt-8 border-t border-primary/20"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaBookOpen className="text-primary" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary whitespace-nowrap">
                Currently Learning
              </span>
              <span className="flex-1 h-px bg-primary/20"></span>
            </div>
            <div className="flex flex-wrap gap-3">
              {learning.map((name) => (
                <span
                  key={name}
                  className="bg-white text-primary-dark px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
