import Accordion from "./Accordian";

const AccordianData = [
  {
    id: 1,
    question: "What is Oranged?",
    answer:
      "Oranged is a gamified + AI-powered platform designed to help kids learn and grow beyond classrooms. We make education playful, engaging, and effective.",
  },
  {
    id: 2,
    question: "How does Oranged help kids learn?",
    answer:
      "We use fun games, storytelling, and adaptive AI tools to make learning feel like play. Kids earn points, unlock rewards, and explore interactive adventures while learning important skills.",
  },
  {
    id: 3,
    question: "Is Oranged safe for kids?",
    answer:
      "Yes! Safety is our top priority. Parents can track progress, monitor activities, and ensure their child’s experience is secure and positive.",
  },
  {
    id: 4,
    question: "Can parents use Oranged too?",
    answer:
      "Absolutely. Parents get a dashboard to monitor growth, explore learning paths, and receive personalized insights to support their child.",
  },
  {
    id: 5,
    question: "How can I join the early access program?",
    answer:
      "Simply sign up on our website to reserve your spot. Early access members get exclusive perks and help us shape the future of Oranged!",
  },
];

const FAQ = () => {
  return (
    <section className="mt-16 px-6 sm:px-10 lg:px-20 text-center">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-orange-600">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {AccordianData.map((data) => (
          <Accordion key={data.id} question={data.question} answer={data.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
