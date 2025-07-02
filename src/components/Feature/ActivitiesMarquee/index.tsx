"use client";

import Marquee from "react-fast-marquee";
import { Sparkles, BookOpen, Gamepad2, Music, Palette, Globe, PenTool } from "lucide-react";

const activities = [
  { title: "Creative Writing", icon: PenTool, color: "bg-orange-100 text-orange-600" },
  { title: "Storytelling", icon: BookOpen, color: "bg-pink-100 text-pink-600" },
  { title: "Math Games", icon: Gamepad2, color: "bg-blue-100 text-blue-600" },
  { title: "Art & Drawing", icon: Palette, color: "bg-purple-100 text-purple-600" },
  { title: "Music & Rhythm", icon: Music, color: "bg-yellow-100 text-yellow-600" },
  { title: "Science Experiments", icon: Sparkles, color: "bg-green-100 text-green-600" },
  { title: "Global Languages", icon: Globe, color: "bg-red-100 text-red-600" },
];

const ActivitiesMarquee = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className=" mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-12">
          Fun Activities Kids Love 💡
        </h2>

        <Marquee speed={40} gradient={false} className="overflow-hidden">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 px-8 py-6 mx-4 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer ${activity.color}`}
            >
              <activity.icon className="w-10 h-10" />
              <span className="text-xl font-semibold">{activity.title}</span>
            </div>
          ))}
        </Marquee>

        {/* Second row, reversed direction */}
        <Marquee speed={40} gradient={false} direction="right" className="mt-8 overflow-hidden">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 px-8 py-6 mx-4 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer ${activity.color}`}
            >
              <activity.icon className="w-10 h-10" />
              <span className="text-xl font-semibold">{activity.title}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ActivitiesMarquee;
