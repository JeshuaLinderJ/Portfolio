'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'work' | 'project' | 'education';
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: 'Technical Lead',
      company: 'Roadeo Inc.',
      location: 'San Juan, PR',
      period: 'May 2024 – Ongoing',
      description: 'Leading development and maintenance of mobile and web applications with focus on performance optimization and infrastructure cost reduction.',
      achievements: [
        'Optimized backend API requests by 90% and reduced cloud infrastructure costs by hundreds of dollars',
        'Designed and implemented CI/CD pipelines across Android, iOS, and web platforms via GitHub Actions',
        'Achieved 96% reduction in app startup time (from 4.69s to 118ms)',
        'Contributed to 50% user base growth in 60 days through quality improvements',
        'Developed multiple APIs for payment services and custom locally hosted server solutions',
        'Established 4-tier testing framework and distinct development environments'
      ],
      technologies: ['Dart', 'TypeScript', 'JavaScript', 'Node.js', 'APIs', 'GitHub Actions', 'DevOps', 'OWASP'],
      type: 'work'
    },
    {
      title: 'Embedded/Full Stack Software Engineer',
      company: 'Loxodon-1 Bi-Propellant Liquid Engine Rocket Project',
      location: 'Mayagüez, PR',
      period: 'Jan 2024 - Ongoing',
      description: 'Designed, developed, and deployed Docker-mounted Rocket Engine Control/Monitoring Hub for the first Bi-Propellant Liquid Engine Rocket in Puerto Rico.',
      achievements: [
        'Developed wireless capability for dozen+ microcontroller-fed sensors and valves',
        'Created complete data pipeline: sensors → InfluxDB backend → MQTT broker → TypeScript/CSS website',
        'Achieved sub-second remote data telemetry display on front-end',
        'Designed and implemented system data representation within front-end website',
        'Individually coded wireless service integration for complex embedded systems'
      ],
      technologies: ['C++', 'C', 'Assembly', 'Python', 'TypeScript', 'JavaScript', 'Embedded Systems', 'InfluxDB', 'MQTT', 'Docker'],
      type: 'work'
    },
    {
      title: 'Automated YouTube/Spotify Playlist',
      company: 'Personal Project',
      location: 'Remote',
      period: 'Jan 2025',
      description: 'Developed series of Python scripts to parse contents of iPod Classic and automatically create online music playlists.',
      achievements: [
        'Applied knowledge of APIs via Google & Spotify tools to solve personal dilemma',
        'Created solution for Apple product that lacked online alternatives',
        'Delivered consumable solution within a single day',
        'Documented unrecognized songs within Spotify database for comprehensive coverage',
        'Used knowledge from Google Data Analytics course for data processing'
      ],
      technologies: ['Python', 'Spotify API', 'Google APIs', 'Data Analytics', 'JSON'],
      type: 'project'
    },
    {
      title: 'Automated Dice via Microcontroller',
      company: 'Personal Project',
      location: 'Remote',
      period: 'Dec 2024',
      description: 'Created tool to automate physical dice of multiple sides with intuitive custom menu GUI and vector animated "rolling".',
      achievements: [
        'Automated dice for 2, 4, 6, 8, 10, 12, 20, & 100 sides',
        'Developed intuitive custom menu GUI with vector animations',
        'Strengthened proficiency with microcontrollers through passionate project',
        'Demonstrated ability to initiate and produce results without external incentives',
        'Showcased product development and presentation skills'
      ],
      technologies: ['C++', 'Arduino', 'Microcontrollers', 'GUI Development', 'Vector Graphics'],
      type: 'project'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Experience & Projects
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            A journey through innovative projects and professional experiences,
            from embedded systems to full-stack development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-teal transform md:-translate-x-0.5" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-accent-blue rounded-full transform -translate-x-2 md:-translate-x-2 z-10" />

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card p-8"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        experience.type === 'work'
                          ? 'bg-accent-blue/10 text-accent-blue'
                          : experience.type === 'project'
                          ? 'bg-accent-green/10 text-accent-green'
                          : 'bg-accent-purple/10 text-accent-purple'
                      }`}>
                        {experience.type === 'work' ? '💼 Work' : experience.type === 'project' ? '🚀 Project' : '🎓 Education'}
                      </span>
                      <span className="text-sm text-primary-500 font-medium">{experience.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-800 mb-2">{experience.title}</h3>
                    <p className="text-accent-blue font-medium">{experience.company}</p>
                    <p className="text-sm text-primary-500">{experience.location}</p>
                  </div>

                  {/* Description */}
                  <p className="text-primary-600 mb-6">{experience.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary-800 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-primary-600">
                          <span className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-surface-100 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}