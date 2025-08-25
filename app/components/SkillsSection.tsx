'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedIcon, { 
  ReactIcon, 
  TypeScriptIcon, 
  PythonIcon, 
  JavaScriptIcon, 
  DockerIcon, 
  GitIcon 
} from './AnimatedIcon';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'devops' | 'embedded' | 'tools';
}

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const skills: Skill[] = [
    // Frontend Technologies
    { name: 'React', level: 90, icon: <ReactIcon />, category: 'frontend' },
    { name: 'TypeScript', level: 95, icon: <TypeScriptIcon />, category: 'frontend' },
    { name: 'JavaScript', level: 95, icon: <JavaScriptIcon />, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, icon: <AnimatedIcon color="orange">🎨</AnimatedIcon>, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, icon: <AnimatedIcon color="teal">💨</AnimatedIcon>, category: 'frontend' },
    { name: 'Dart/Flutter', level: 85, icon: <AnimatedIcon color="blue">📱</AnimatedIcon>, category: 'frontend' },
    { name: 'Swift', level: 70, icon: <AnimatedIcon color="orange">🍎</AnimatedIcon>, category: 'frontend' },

    // Backend & Languages
    { name: 'Python', level: 95, icon: <PythonIcon />, category: 'backend' },
    { name: 'C++', level: 90, icon: <AnimatedIcon color="blue">⚙️</AnimatedIcon>, category: 'backend' },
    { name: 'C', level: 85, icon: <AnimatedIcon color="gray">🔧</AnimatedIcon>, category: 'backend' },
    { name: 'Java', level: 85, icon: <AnimatedIcon color="red">☕</AnimatedIcon>, category: 'backend' },
    { name: 'Node.js', level: 85, icon: <AnimatedIcon color="green">🟢</AnimatedIcon>, category: 'backend' },
    { name: 'Assembly', level: 75, icon: <AnimatedIcon color="purple">⚡</AnimatedIcon>, category: 'backend' },
    { name: 'SQL', level: 80, icon: <AnimatedIcon color="blue">🗄️</AnimatedIcon>, category: 'backend' },
    { name: 'Lua', level: 70, icon: <AnimatedIcon color="blue">🌙</AnimatedIcon>, category: 'backend' },

    // DevOps & Cloud
    { name: 'Docker', level: 90, icon: <DockerIcon />, category: 'devops' },
    { name: 'GitHub Actions', level: 90, icon: <AnimatedIcon color="gray">🔄</AnimatedIcon>, category: 'devops' },
    { name: 'Firebase', level: 85, icon: <AnimatedIcon color="orange">🔥</AnimatedIcon>, category: 'devops' },
    { name: 'Vercel', level: 85, icon: <AnimatedIcon color="gray">▲</AnimatedIcon>, category: 'devops' },
    { name: 'Linux', level: 85, icon: <AnimatedIcon color="gray">🐧</AnimatedIcon>, category: 'devops' },
    { name: 'Virtual Machines', level: 80, icon: <AnimatedIcon color="purple">💻</AnimatedIcon>, category: 'devops' },

    // Embedded Systems
    { name: 'Arduino/C++', level: 95, icon: <AnimatedIcon color="teal">🔧</AnimatedIcon>, category: 'embedded' },
    { name: 'Microcontrollers', level: 90, icon: <AnimatedIcon color="purple">🔌</AnimatedIcon>, category: 'embedded' },
    { name: 'Embedded Software', level: 90, icon: <AnimatedIcon color="blue">📡</AnimatedIcon>, category: 'embedded' },
    { name: 'MQTT', level: 85, icon: <AnimatedIcon color="green">📨</AnimatedIcon>, category: 'embedded' },
    { name: 'InfluxDB', level: 80, icon: <AnimatedIcon color="blue">📊</AnimatedIcon>, category: 'embedded' },

    // Tools & APIs
    { name: 'Git', level: 95, icon: <GitIcon />, category: 'tools' },
    { name: 'REST APIs', level: 90, icon: <AnimatedIcon color="green">🔗</AnimatedIcon>, category: 'tools' },
    { name: 'Stripe API', level: 85, icon: <AnimatedIcon color="purple">💳</AnimatedIcon>, category: 'tools' },
    { name: 'Google APIs', level: 85, icon: <AnimatedIcon color="blue">🔍</AnimatedIcon>, category: 'tools' },
    { name: 'Twilio', level: 75, icon: <AnimatedIcon color="red">📞</AnimatedIcon>, category: 'tools' },
    { name: 'Xcode', level: 75, icon: <AnimatedIcon color="blue">🛠️</AnimatedIcon>, category: 'tools' },
    { name: 'Android Studio', level: 80, icon: <AnimatedIcon color="green">🤖</AnimatedIcon>, category: 'tools' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills', color: 'primary' },
    { id: 'frontend', name: 'Frontend', color: 'blue' },
    { id: 'backend', name: 'Backend', color: 'green' },
    { id: 'devops', name: 'DevOps', color: 'purple' },
    { id: 'embedded', name: 'Embedded', color: 'orange' },
    { id: 'tools', name: 'Tools', color: 'teal' },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="section-padding bg-surface-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, embedded systems, 
            and modern DevOps practices. Always learning, always building.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-accent-blue text-white shadow-soft'
                  : 'bg-white text-primary-600 hover:bg-primary-50 border border-surface-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="card p-6 text-center group hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-primary-800 mb-2 group-hover:text-accent-blue transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-primary-800 mb-2">Full-Stack Development</h3>
            <p className="text-primary-600">
              End-to-end web applications with modern frameworks and best practices
            </p>
          </div>

          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-green to-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-primary-800 mb-2">Embedded Systems</h3>
            <p className="text-primary-600">
              Microcontroller programming and IoT solutions for real-world applications
            </p>
          </div>

          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-red rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">☁️</span>
            </div>
            <h3 className="text-xl font-bold text-primary-800 mb-2">DevOps & Cloud</h3>
            <p className="text-primary-600">
              Scalable infrastructure and deployment pipelines for modern applications
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
