import Image from 'next/image'
import React from 'react'

const HeroSection =() =>{
  return (
      <section className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-20 py-16 bg-gradient-to-r from-orange-50 to-white">
        {/* Left Side - Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 leading-snug">
            Learning that Grows with You
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">
            Interactive, gamified, and AI-powered learning for every age.
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg px-6 py-3 transition">
            Get Started
          </button>
        </div>

        {/* Right Side - Graphic */}
        <div className="flex justify-center">
          <Image
            src="/orange-hero.png" // Replace with your image
            alt="Orange Learning Graphic"
            width={400}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>
  )
}

export default HeroSection
