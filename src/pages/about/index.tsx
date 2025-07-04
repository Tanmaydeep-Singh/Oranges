"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  // Framer Motion variants for animated sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };
  
  // Define the marquee animation via CSS
  const marqueeItems = [
    "Gamified Lessons 🎮",
    "Interactive Stories 📖",
    "AI-Powered Learning ✨",
    "Creative Challenges 🎨",
    "Parent Dashboard 👨‍👩‍👧",
    "Safe & Fun Environment 🛡️",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-gray-50  font-sans">
      {/* Hero Section */}
      <motion.section
        className="py-20 px-6 text-center max-w-4xl mx-auto h-[100vh] flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariants}
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-orange-600 mb-6 drop-shadow-md"
          variants={textVariants}
        >
          About Orange.ed 🍊
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl"
          variants={textVariants}
        >
          Orange.ed is a gamified and AI-powered learning platform designed to
          make education fun, interactive, and meaningful for kids. Our mission
          is to help children grow their skills through play, stories, and
          activities while keeping parents informed and involved.
        </motion.p>
      </motion.section>

      {/* Marquee Section */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-content {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        .marquee-content > * {
          display: inline-block;
          padding-left: 2.5rem; /* Equivalent to gap-10 in Tailwind */
          padding-right: 2.5rem; /* To ensure spacing on both sides */
        }
      `}</style>
      <section className="py-12">
        <div className="marquee-container">
          <div className="marquee-content flex gap-10 text-xl font-bold text-gray-700">
            {/* Duplicate content to create the continuous loop effect */}
            {marqueeItems.map((item, index) => (
              <span key={`item-1-${index}`} className="bg-white px-8 py-4 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                {item}
              </span>
            ))}
            {marqueeItems.map((item, index) => (
              <span key={`item-2-${index}`} className="bg-white px-8 py-4 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <motion.section
        className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We envision a world where learning is as fun as play. Orange.ed
            empowers kids with tools and activities that nurture creativity,
            problem-solving, and curiosity while connecting them to their roots.
          </p>
        </div>
        <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To create a safe, engaging, and gamified environment where children
            learn new skills and languages, parents stay informed, and every
            child’s growth is celebrated.
          </p>
        </div>
      </motion.section>
    </main>
  );
};

export default AboutPage;
