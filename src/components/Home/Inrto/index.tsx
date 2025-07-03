import { motion } from 'framer-motion';
import React from 'react';

const IntroSection = () => {


    // Framer Motion variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Time between each child animation
            },
        },
    };

    return (

            <motion.div
                className="w-full py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between bg-white"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={containerVariants}
            >
            {/* Left side (Heading) */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight relative">
                        A Smarter Way to <br />
                        <span className="relative inline-block">
                            Help Kids Grow
                            <span className="absolute -bottom-2 left-0 w-full h-2 bg-orange-300 rounded-full -z-10"></span>
                        </span>
                    </h2>
                </div>

                {/* Right side (Description) */}
                <div className="md:w-1/2 text-gray-600 text-lg leading-relaxed relative">
                    <p>
                        With Orange.ed, children enjoy a fun and engaging journey that blends
                        <span className="font-semibold text-orange-500"> play and learning</span>.
                        Gamification and AI personalization ensure that every child grows at their own pace,
                        beyond the boundaries of traditional classrooms.
                    </p>


                </div>
            </motion.div>
    );
};

export default IntroSection;
