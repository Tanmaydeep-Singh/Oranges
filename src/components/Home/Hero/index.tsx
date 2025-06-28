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
        <button className="px-6 py-3 rounded-2xl bg-orange-500 text-white font-semibold text-lg shadow-md hover:bg-orange-600 transition-all duration-300">
          Join the Beta
        </button>
      </div>
    </section>
  );
};

export default Hero;
