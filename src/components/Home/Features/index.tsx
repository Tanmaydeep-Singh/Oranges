import { Sparkles, BookOpen, Gamepad2, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Gamified Learning",
    description:
      "Points, levels, and rewards make every lesson fun and exciting for kids.",
    icon: Gamepad2,
  },
  {
    title: "AI-Powered Tutor",
    description:
      "Personalized hints and adaptive learning paths designed for every child.",
    icon: Sparkles,
  },
  {
    title: "Storytelling Adventures",
    description:
      "Engage with interactive stories that bring learning to life.",
    icon: BookOpen,
  },
  {
    title: "Safe & Parent-Friendly",
    description:
      "Track your child’s progress in a secure, parent-friendly environment.",
    icon: ShieldCheck,
  },
];

const Features = ()  => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-12">
          Why Orange.ed?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <feature.icon className="w-10 h-10 mx-auto text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;