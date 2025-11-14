import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaGitAlt, FaFigma, FaNodeJs
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss
} from 'react-icons/si';


const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: <FaHtml5 />,
      description: 'Semantic markup & accessibility',
      color: '#e34c26'
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt />,
      description: 'Responsive design & animations',
      color: '#1572b6'
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
      description: 'ES6+ & DOM manipulation',
      color: '#f7df1e'
    },
    {
      name: 'React',
      icon: <FaReact />,
      description: 'Component-based UI development',
      color: '#61dafb'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      description: 'Utility-first CSS framework',
      color: '#06b6d4'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      description: 'Type-safe JavaScript',
      color: '#3178c6'
    },
    {
      name: 'Git',
      icon: <FaGitAlt />,
      description: 'Version control',
      color: '#f05032'
    },
    {
      name: 'Figma',
      icon: <FaFigma />,
      description: 'UI/UX design & prototyping',
      color: '#f24e1e'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      description: 'Backend JavaScript runtime',
      color: '#339933'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
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
          <p className="text-center text-slate-600 mb-12 text-lg">
            Technologies I use to build stuff
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl p-7 text-center shadow-sm border-2 border-transparent cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-primary hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-teal-50"
              >
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="text-5xl mb-3 drop-shadow-md"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="font-semibold text-primary-dark mb-1 text-lg">
                  {skill.name}
                </h3>
                <p className="text-sm text-slate-500">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;