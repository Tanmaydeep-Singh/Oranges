
import React from "react";

const FomoBanner = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-red-400 text-white py-12 px-6 text-center rounded-2xl shadow-lg my-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Don’t Miss Out on Smarter Learning 🚀
      </h2>
      <p className="text-lg md:text-xl mb-6">
        Join thousands of students already growing with <span className="font-semibold">Oranged</span>.  
        Seats for early access are filling fast — secure your spot today!
      </p>
      <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 text-lg font-medium rounded-full">
        Get Early Access Now
      </button>
    </section>
  );
};

export default FomoBanner;
