import { Sparkles, BookOpen, Gamepad2 } from "lucide-react";

const ageGroups = [
  {
    title: "K4 (Grades 1–4)",
    description:
      "Building curiosity, basic language skills, and fun interactive stories.",
    icon: Gamepad2,
  },
  {
    title: "K6 (Grades 5–6)",
    description:
      "Exploring creativity, storytelling, and early critical thinking through projects.",
    icon: BookOpen,
  },
  {
    title: "K8 (Grades 7–8)",
    description:
      "Deeper learning, collaboration, and problem-solving quests with AI support.",
    icon: Sparkles,
  },
];

const AgeGroups = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-12">
          Focused Learning by Age
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ageGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <group.icon className="w-10 h-10 mx-auto text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {group.title}
              </h3>
              <p className="text-sm text-gray-600">{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroups;
