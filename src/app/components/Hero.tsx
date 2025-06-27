// components/HeroSection.jsx
'use client'; // This directive is specific to Next.js App Router for client-side components

import React from 'react';
import { motion } from 'framer-motion';
import localFont from 'next/font/local'
import Image from 'next/image';

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
        <section className={`${myFont.className} relative w-full flex flex-col items-center justify-center overflow-hidden }`}>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full px-2 mt-36 ">
                {/* Left Content Area */}
                <div className="flex flex-col items-start lg:w-4/5 px-18 text-left mb-12 lg:mb-0">
                    <motion.h1
                        className="font-main text-3xl sm:text-3xl tracking-wider md:text-4xl lg:text-5xl  text-black leading-16 mb-8"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Global design agency that creates <br /> holistic, well-balanced design <br /> solutions for inspiring brands
                    </motion.h1>

                    {/* Ratings and Services */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-12 "
                        variants={reviewsVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Ratings */}
                        <div className="flex items-center">
                            <Image src='/clogo.png' alt='logo' height={60} width={100} className=" object-none m-0 p-0" />
                            <div className="flex flex-col items-start">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.416 3.908 1.48-8.279-6.064-5.828 8.332-1.151z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm mt-1">Rating 5, 24 reviews</p>
                            </div>
                        </div>

                        {/* Services List */}
                        <div className="text-gray-400 text-base font-medium uppercase tracking-wider">
                            WEB DEVELOPMENT / BRANDING / UX / UI / <br />
                            3D MODELING / ILLUSTRATION / STRATEGY
                        </div>
                    </motion.div>
                </div>

                {/* Right Image/Graphic Area */}
                <div className="relative">
                    <motion.div
                        className="relative w-120 h-120  rounded-full  flex items-center justify-center overflow-hidden"
                        variants={eyeImageVariants}
                        initial="hidden"
                        animate="visible"
                    >

                        <svg
                            className="w-22 h-22 text-purple-700 absolute"
                            viewBox="0 0 100 100"
                            fill="currentColor"
                        >
                            <circle cx="50" cy="50" r="30" fill="white" stroke="currentColor" strokeWidth="2"></circle>
                            <circle cx="50" cy="50" r="15" fill="#333"></circle>
                            <path d="M20 50 Q50 20 80 50 Q50 80 20 50 Z" fill="none" stroke="currentColor" strokeWidth="2"></path>
                        </svg>


                        <div className="flex items-center justify-center">
                            <svg width="200" height="200" viewBox="0 0 300 300" className="animate-[spin_10s_linear_infinite]">
                                <defs>
                                    <path id="circlePath" d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0" className='' />
                                </defs>
                                <text fill="purple" className='text-purple-500' fontSize="37" fontWeight="bold">
                                    <textPath href="#circlePath" startOffset="0%">
                                        SCROLL DOWN TO SEE THAT SHIT
                                    </textPath>
                                </text>
                            </svg>

                            <style jsx>{`
                                    @keyframes spin {
                                    0% {
                                        transform: rotate(0deg);
                                    }
                                    100% {
                                        transform: rotate(360deg);
                                    }
                                    }
                                `}
                            </style>
                        </div>
                    </motion.div>
                </div>
            </div >


            <motion.button
                className="absolute bottom-12 right-60 px-2 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium shadow-sm hover:bg-gray-300 transition-colors"
                variants={capabilitiesVariants}
                initial="hidden"
                animate="visible"
            >
                Our Capabilities Deck
            </motion.button >
        </section >
    );
};

export default HeroSection;