import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const calculateStrokeOffset = (percentage, radius = 40) => {
  const circumference = 2 * Math.PI * radius;
  return circumference - (percentage / 100) * circumference;
};

const SkillChart = ({ skillName, percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  // Ref for the circular chart
  const ref = useRef(null);
  // Framer Motion's useInView hook to track if the chart is in view
  const isInView = useInView(ref, { once: false }); // Will trigger each time it comes into view

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-4 bg-[#232323] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] rounded-lg w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mx-auto"
    >
      <svg width="100" height="100" className="transform rotate-[-90deg]">
        {/* Background circle */}
        <circle cx="50" cy="50" r={radius} stroke="#333" strokeWidth="8" fill="none" />

        {/* Animated progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#ff014f"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{
            strokeDashoffset: isInView ? calculateStrokeOffset(percentage, radius) : circumference,
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        {/* Percentage text inside the circle */}
        <motion.text
          x="50"
          y="50"
          textAnchor="middle"
          dy="0.35em"
          fontSize="18"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {percentage}%
        </motion.text>
      </svg>

      {/* Skill name */}
      <p className="text-white mt-4 text-center">{skillName}</p>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: 'Team Work', percentage: 70 },
    { name: 'Creativity', percentage: 75 },
    { name: 'Communication', percentage: 60 },
    { name: 'Problem Solving', percentage: 80 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {skills.map((skill, index) => (
        <SkillChart key={index} skillName={skill.name} percentage={skill.percentage} />
      ))}
    </div>
  );
};

export default SkillsSection;
