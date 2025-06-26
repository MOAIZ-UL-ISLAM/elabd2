// components/HeroSection.jsx
'use client'; // This directive is specific to Next.js App Router for client-side components

import React from 'react';
import { motion } from 'framer-motion';
import localFont from 'next/font/local'

const myFont = localFont({
    src: '../../../public/Atyp.ttf',
    variable: '--font-atyp',
})


const HeroSection = () => {
    // Animation variants for Framer Motion
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const eyeImageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } },
    };

    const reviewsVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 } },
    };

    const capabilitiesVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.8 } },
    };



    return (
        <section className={`${myFont.className} relative w-full flex flex-col items-center justify-center overflow-hidden py-16 px-4 sm:px-8 md:px-16 lg:px-22}`}>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full ">
                {/* Left Content Area */}
                <div className="flex flex-col items-start lg:w-3/5 text-left mb-12 lg:mb-0">
                    <motion.h1
                        className="font-main text-5xl sm:text-6xl tracking-wider md:text-7xl lg:text-5xl font-extrabold text-black leading-tight mb-8"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Global design agency that creates <br /> holistic, well-balanced design <br /> solutions for inspiring brands.
                    </motion.h1>

                    {/* Ratings and Services */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-12 mt-8"
                        variants={reviewsVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Ratings */}
                        <div className="flex items-center">
                            <span className="text-3xl font-bold text-black mr-2">C</span>
                            <div className="flex flex-col items-start">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.416 3.908 1.48-8.279-6.064-5.828 8.332-1.151z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm mt-1">Rating 5, 24 reviews</p>
                            </div>
                        </div>

                        {/* Services List */}
                        <div className="text-gray-700 text-base font-medium leading-relaxed uppercase tracking-wider">
                            WEB DEVELOPMENT / BRANDING / UX / UI / <br />
                            3D MODELING / ILLUSTRATION / STRATEGY
                        </div>
                    </motion.div>
                </div>

                {/* Right Image/Graphic Area */}
                <div className="relative  flex justify-center items-center border-black border">
                    <motion.div
                        className="relative w-32 h-32  rounded-full bg-purple-100 flex items-center justify-center overflow-hidden"
                        variants={eyeImageVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Eye Graphic - This is a simplified SVG representation.
                            For a precise match, you might use an actual SVG or Image. */}
                        <svg
                            className="w-22 h-22 text-purple-700 absolute"
                            viewBox="0 0 100 100"
                            fill="currentColor"
                        >
                            <circle cx="50" cy="50" r="30" fill="white" stroke="currentColor" strokeWidth="2"></circle>
                            <circle cx="50" cy="50" r="15" fill="#333"></circle>
                            <path d="M20 50 Q50 20 80 50 Q50 80 20 50 Z" fill="none" stroke="currentColor" strokeWidth="2"></path>
                        </svg>

                        {/* Text "SCROLLDOWN TO SEE THAT SHIT" */}
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                            <p
                                className="absolute text-purple-800 font-bold text-sm sm:text-base rotate-[290deg] whitespace-nowrap"
                                style={{ transformOrigin: 'center' }}
                            >
                                SCROLLDOWN TO SEE THAT SHIT
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Right "Our Capabilities Deck" Button */}
            <motion.button
                className="absolute bottom-12 right-16 px-6 py-3 bg-gray-200 text-gray-800 rounded-full text-lg font-medium shadow-sm hover:bg-gray-300 transition-colors"
                variants={capabilitiesVariants}
                initial="hidden"
                animate="visible"
            >
                Our Capabilities Deck
            </motion.button>
        </section>
    );
};

export default HeroSection;