
import React from "react";

const FomoBanner = () => {
  return (
    <section className=" py-12 px-6 text-center  my-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Don’t Miss Out on Smarter Learning 🚀
      </h2>
      <p className="text-lg md:text-xl mb-6">
        Join thousands of students already growing with <span className="font-semibold">Oranged</span>.  
        Seats for early access are filling fast — secure your spot today!
      </p>
      <button className="px-6 py-3 rounded-2xl bg-orange-500 text-white font-semibold text-lg shadow-md hover:bg-orange-600 transition-all duration-300">
          Join the Beta
        </button>
    </section>
  );
};

export default FomoBanner;
