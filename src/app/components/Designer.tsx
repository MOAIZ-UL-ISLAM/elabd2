// import React from 'react'

// const Designer = () => {
//     return (
//         <section className='  absolute h-screen w-full bg-black'>
//             <div className=' relative top-0'>
//                 <div className='text-gray-600 w-36 h-24'><h1 className='text-[770px] text-amber-500'>,,</h1></div>
//             </div>
//         </section>
//     )
// }

// export default Designer


'use client'; // This directive is necessary for client-side components in Next.js 13+

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedQuoteSection: React.FC = () => {
    // Variants for the main quote mark animation
    const quoteMarkVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    // Variants for the main quote text animation
    const quoteTextVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3, // Start slightly after the quote mark
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    // Variants for the smaller descriptive text at the bottom
    const descriptiveTextVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.7, // Appear later
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    // Variants for the circular elements on the right
    const circleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            },
        },
    };

    // Variants for the vertical line inside the circle
    const lineVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: '100%', // Animate height to full
            opacity: 1,
            transition: {
                delay: 0.9, // Appear after circles
                duration: 1.0,
                ease: 'easeOut',
            },
        },
    };

    return (
        // Main container for the section, setting dark background and padding
        <section className="min-h-screen bg-black text-gray-300 font-inter py-16 px-4 md:px-8 lg:px-16 flex items-center justify-center overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between w-full relative">
                {/* Left side: Quote content */}
                <div className="flex flex-col flex-1 max-w-3xl lg:pr-12 text-center lg:text-left z-10">
                    {/* Animated quote mark */}
                    <motion.div
                        className="text-8xl md:text-9xl font-bold text-gray-600 mb-8 select-none"
                        variants={quoteMarkVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }} // Animate once when 50% in view
                    >
                        &ldquo;
                    </motion.div>

                    {/* Animated main quote text */}
                    <motion.p
                        className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-white mb-12"
                        variants={quoteTextVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        Majority of people can run a 100 meter dash, but only a dozen can do it in under 9.8 seconds
                    </motion.p>
                </div>

                {/* Right side: Decorative circles and smaller text */}
                <div className="relative flex-1 flex items-center justify-center lg:justify-end min-h-[300px] lg:min-h-[500px] mt-16 lg:mt-0 z-0">
                    {/* Large circle with vertical line */}
                    <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full border bg-black/10 flex items-center justify-center"
                        variants={circleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {/* Vertical line inside the large circle */}
                        <motion.div
                            className="w-1 h-3/4 bg-yellow-500 rounded-full"
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        ></motion.div>
                    </motion.div>

                    {/* Smaller overlapping circles (positioned relative to the large circle) */}
                    <motion.div
                        className="absolute -right-16 top-1/4 w-24 h-24 rounded-full border border-gray-700 opacity-30"
                        variants={circleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1, ...circleVariants.visible.transition }}
                    ></motion.div>
                    <motion.div
                        className="absolute -right-24 bottom-1/4 w-32 h-32 rounded-full border border-gray-700 opacity-30"
                        variants={circleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, ...circleVariants.visible.transition }}
                    ></motion.div>
                </div>

                {/* Bottom right descriptive text */}
                <div className="absolute bottom-16 right-4 md:right-8 lg:right-16 text-right w-full lg:w-auto z-20">
                    <motion.p
                        className="text-sm md:text-base text-gray-500 max-w-xs ml-auto mt-8 lg:mt-0"
                        variants={descriptiveTextVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        Each of our designers was the best among several thousand others in his niche
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default AnimatedQuoteSection;
