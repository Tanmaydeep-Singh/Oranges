import React from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden">
      {/* Left side (Heading & Benefits) - Animated */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          A Smarter Way to <br />
          <span className="relative inline-block">
            Help Kids Grow
            {/* Animated underline */}
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-2 left-0 h-2 bg-orange-500 rounded-full -z-10"
            ></motion.span>
          </span>
        </motion.h2>

        {/* Benefits list */}
        <motion.ul variants={containerVariants} className="mt-8 space-y-4 text-gray-600 text-lg leading-relaxed">
          <motion.li variants={itemVariants} className="flex items-start">
            <span className="text-orange-500 text-2xl mr-3">🚀</span>
            <span>**Gamified Learning:** We turn screen time into a fun and productive adventure.</span>
          </motion.li>
          <motion.li variants={itemVariants} className="flex items-start">
            <span className="text-orange-500 text-2xl mr-3">🧠</span>
            <span>**AI Personalization:** Every lesson adapts to your childs unique pace and needs.</span>
          </motion.li>
          <motion.li variants={itemVariants} className="flex items-start">
            <span className="text-orange-500 text-2xl mr-3">✨</span>
            <span>**Beyond Classrooms:** Build key skills like critical thinking and creativity.</span>
          </motion.li>
        </motion.ul>
      </motion.div>

      {/* Right side (Image/Illustration) - Animated */}
      <motion.div
        className="md:w-1/2 relative flex justify-center p-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        // variants={imageVariants}
      >
        {/* Replace with your image or illustration */}
        <img
          src="/path/to/your/intro-illustration.png"
          alt="A child playing with a tablet, showing gamified learning"
          className="rounded-3xl shadow-2xl w-full max-w-lg h-auto"
        />
      </motion.div>
    </section>
  );
};

export default IntroSection;