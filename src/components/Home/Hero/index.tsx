import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 ">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
        “Learning that feels like play.”
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
        A <span className="text-orange-500 font-semibold">gamified</span> +{" "}
        <span className="text-orange-500 font-semibold">AI-powered</span> platform 
        to help kids grow beyond classrooms.
      </p>
      <div className="mt-8">
        <button className="px-8 py-4 rounded-full bg-orange-500 text-white font-bold text-lg shadow-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
            Join the Beta & Get Early Access!
          </button>
      </div>
    </section>
  );
};

export default Hero;
