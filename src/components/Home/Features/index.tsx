import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your own custom, colorful SVG or PNG illustrations
const customIcons = {
  Gamepad2: '',
  Sparkles: '/path/to/your/ai-illustration.png',
  BookOpen: '/path/to/your/story-illustration.png',
  ShieldCheck: '/path/to/your/safety-illustration.png',
};

const features = [
  {
    title: "Gamified Learning",
    description: "Points, levels, and rewards make every lesson a fun adventure, keeping kids motivated and engaged.",
    iconKey: "Gamepad2",
  },
  {
    title: "AI-Powered Tutor",
    description: "Our smart AI provides personalized hints and adaptive learning paths for every child, ensuring they learn at their own pace.",
    iconKey: "Sparkles",
  },
  {
    title: "Storytelling Adventures",
    description: "Engage with interactive stories that bring learning concepts to life and spark a lifelong love for knowledge.",
    iconKey: "BookOpen",
  },
  {
    title: "Safe & Parent-Friendly",
    description: "Track your child’s progress and set boundaries in a secure, parent-friendly environment. Your peace of mind is our priority.",
    iconKey: "ShieldCheck",
  },
];

const Features = () => {
  // Framer Motion variants for the fade-in and pop-up animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This controls the delay between each feature card's animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-12">
          Why Oranged.ed?
        </h2>

        {/* Animated Grid Container */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-500"
            >
              <div className="mb-4">
                {/* Use a colorful image instead of a monochrome icon */}
                {/* <img
                  src={customIcons[feature.iconKey]}
                  alt={`${feature.title} icon`}
                  className="w-20 h-20 mx-auto"
                /> */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Features;