// components/Features/ActivitiesMarquee/index.tsx
"use client";

import Marquee from "react-fast-marquee";

const activities = [
  { title: "🎨 Art Challenges", desc: "Boost creativity with fun drawing & design activities." },
  { title: "📖 Storytelling", desc: "Enhance imagination through engaging story sessions." },
  { title: "🧩 Puzzles", desc: "Improve problem-solving skills with interactive puzzles." },
  { title: "🎮 Quizzes & Games", desc: "Make learning fun with gamified quizzes." },
  { title: "🌍 Language Learning", desc: "Learn basics of new languages with interactive games." },
  { title: "🔬 Science Experiments", desc: "Hands-on activities to spark curiosity in science." },
  { title: "🤝 Team Projects", desc: "Collaborate and learn teamwork through group tasks." },
  { title: "🏆 Leaderboards", desc: "Friendly competitions to motivate and inspire growth." },
];

const ActivitiesMarquee = () => {
  return (
    <section className="py-20 bg-orange-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-12">
        Activities We Offer
      </h2>

      <Marquee gradient={false} speed={40} pauseOnHover className="space-x-8">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="w-72 h-40 bg-white shadow-lg rounded-2xl flex flex-col justify-center items-center text-center px-6 py-4 mx-6 border border-orange-200 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              {activity.title}
            </h3>
            <p className="text-gray-600 text-sm">{activity.desc}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ActivitiesMarquee;
