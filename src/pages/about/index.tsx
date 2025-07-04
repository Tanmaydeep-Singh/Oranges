import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const AboutPage = () => {
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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold text-orange-600 mb-6 drop-shadow-md">
          About Orange.ed 🍊
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
          Orange.ed is a gamified and AI-powered learning platform designed to
          make education fun, interactive, and meaningful for kids. Our mission
          is to help children grow their skills through play, stories, and
          activities while keeping parents informed and involved.
        </p>
      </motion.section>

      {/* Marquee Section */}
      <section className="py-16 bg-white ">
        <Marquee gradient={false} speed={50} pauseOnHover className="py-4">
          {marqueeItems.map((item, index) => (
            <span
              key={index}
              className="mx-4 bg-orange-100 text-orange-700 px-8 py-4 rounded-3xl shadow-lg border border-orange-200 text-lg font-semibold hover:shadow-xl transition-shadow duration-300"
            >
              {item}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
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
      </section>
    </main>
  );
};

export default AboutPage;
