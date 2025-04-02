"use client";

import React, { useState } from "react";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Commerce (B.Com)",
      school: "Raja Peary Mohan College",
      mascot: "🎓",
      year: "2021-2024",
      achievements: ["Commerce Major", "Focus on Accounting & Finance"],
      skills: ["Accounting", "Finance", "Business Studies", "Economics"],
      description:
        "Developed a strong foundation in financial management, business strategy, and economic principles to support a career in commerce and technology.",
    },
    {
      degree: "Higher Secondary (H.S.)",
      school: "Raghunathpur Nafar Academy",
      mascot: "📚",
      year: "2009-2021",
      achievements: ["Completed with distinction"],
      skills: ["Mathematics", "Commerce", "English", "Business Studies"],
      description:
        "Gained a comprehensive understanding of business principles, mathematics, and communication skills to build a strong academic foundation.",
    },
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className='min-h-screen relative overflow-hidden py-40 bg-[#04081A]'
      id='education'
    >
      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6'>
            Educational Journey
          </h2>
          <p className='text-gray-300 max-w-2xl mx-auto text-lg'>
            A journey through academia that built a foundation for
            problem-solving and professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-xs ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className='space-y-6'>
                <div className='space-y-2'>
                  <div className='flex items-center gap-3'>
                    <span className='text-3xl'>{edu.mascot}</span>
                    <h3 className='text-2xl font-bold text-white'>
                      {edu.degree}
                    </h3>
                  </div>
                  <p className='text-lg text-gray-300 flex items-center gap-2'>
                    <BookOpen className='w-5 h-5 text-teal-500' />
                    {edu.school}
                  </p>
                  <p className='text-gray-400 flex items-center gap-2'>
                    <Calendar className='w-4 h-4' />
                    {edu.year}
                  </p>
                </div>

                <p className='text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3'>
                  {edu.description}
                </p>

                <div className='space-y-3'>
                  <h4 className='text-sm font-semibold text-white flex items-center gap-2'>
                    <Trophy className='w-4 h-4 text-yellow-500' />
                    Key Achievements
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className='px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm'
                      >
                        <Award className='w-4 h-4' />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className='px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
