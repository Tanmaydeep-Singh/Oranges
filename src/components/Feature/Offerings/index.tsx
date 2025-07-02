// components/Features/Gamification/index.tsx
import { Trophy, Medal, Target, Users } from "lucide-react";

const gamificationFeatures = [
  {
    title: "Points & Rewards",
    description: "Kids earn points for completing lessons and activities, making learning exciting.",
    icon: Trophy,
  },
  {
    title: "Badges & Achievements",
    description: "Unlock badges for milestones, boosting confidence and motivation.",
    icon: Medal,
  },
  {
    title: "Skill Quests",
    description: "Interactive quests designed to improve problem-solving and creativity.",
    icon: Target,
  },
  {
    title: "Friendly Competition",
    description: "Safe, child-friendly leaderboards to encourage healthy competition.",
    icon: Users,
  },
];

const Offerings = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
          Gamification That Inspires
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Learning becomes fun when it feels like play. Our gamified approach
          keeps kids engaged, motivated, and constantly improving their skills.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {gamificationFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <feature.icon className="w-12 h-12 mx-auto text-orange-500 mb-4" />
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
};

export default Offerings;
