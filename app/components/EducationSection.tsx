'use client';

import { motion } from 'framer-motion';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  achievements?: string[];
  coursework?: string[];
  gpa?: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
}

export default function EducationSection() {
  const education: Education[] = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'University of Puerto Rico, Mayagüez',
      location: 'Mayagüez, PR',
      period: 'Expected Fall 2028',
      description: 'Comprehensive software engineering program with focus on full-stack development, embedded systems, and modern software practices.',
      achievements: [
        'Technical Lead at Roadeo Inc. while pursuing degree',
        'Active Embedded/Full Stack Software Engineer at Loxodon-1 Rocket Project',
        'Developed industry-standard CI/CD pipelines and testing frameworks',
        'Applied DevOps and OWASP security principles in real-world projects'
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Software Engineering Principles',
        'Embedded Systems Programming',
        'Database Systems & Analytics',
        'Web Development & Design',
        'API Development & Integration',
        'DevOps & CI/CD Practices',
        'Computer Architecture',
        'Digital Systems Design',
        'Software Testing & Quality Assurance'
      ]
    }
  ];

  const certifications: Certification[] = [
    {
      name: 'Google Cloud Digital Leader',
      issuer: 'Google Cloud',
      date: 'In Progress',
      skills: ['Cloud Computing', 'Google Cloud Platform', 'Digital Transformation']
    },
    {
      name: 'Google Data Analytics Professional Certificate',
      issuer: 'Google Career Certificates',
      date: 'In Progress',
      skills: ['Data Analysis', 'SQL', 'Tableau', 'R Programming', 'Data Visualization']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="education" className="section-padding bg-surface-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Education & Certifications
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Academic foundation and continuous learning through formal education 
            and professional certifications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Education */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-primary-800 mb-8 text-center"
            >
              🎓 Education
            </motion.h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card p-8 mb-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-primary-800 mb-2">{edu.degree}</h4>
                      <p className="text-accent-blue font-semibold">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-primary-500 mt-1">
                        <span>📍 {edu.location}</span>
                        <span>📅 {edu.period}</span>
                        {edu.gpa && <span>🎯 GPA: {edu.gpa}</span>}
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-primary-600 mb-6">{edu.description}</p>
                    )}

                    {edu.achievements && (
                      <div className="mb-6">
                        <h5 className="font-semibold text-primary-800 mb-3">Achievements</h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-primary-600">
                              <span className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Coursework */}
                  {edu.coursework && (
                    <div>
                      <h5 className="font-semibold text-primary-800 mb-4">Relevant Degree-Aligned Experience</h5>
                      <div className="space-y-2">
                        {edu.coursework.map((course, i) => (
                          <div
                            key={i}
                            className="px-3 py-2 bg-surface-100 rounded-lg text-sm text-primary-700"
                          >
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-primary-800 mb-8 text-center"
            >
              🏆 Certifications
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card p-6"
                >
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-primary-800 mb-1">{cert.name}</h4>
                    <p className="text-accent-blue font-medium">{cert.issuer}</p>
                    <p className="text-sm text-primary-500">📅 {cert.date}</p>
                    {cert.credentialId && (
                      <p className="text-xs text-primary-400 mt-1">ID: {cert.credentialId}</p>
                    )}
                  </div>

                  <div>
                    <h5 className="font-semibold text-primary-800 mb-2 text-sm">Skills Validated</h5>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-accent-blue/10 text-accent-blue rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note about certifications */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-8"
            >
              <p className="text-primary-500 text-sm italic">
                Additional certifications and continuous learning initiatives in progress
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
