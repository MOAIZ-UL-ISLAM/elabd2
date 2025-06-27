import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Card from './Card';

const About = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    });

    // Phase 1: Horizontal scrolling (0% to 60% of total scroll)
    const x = useTransform(scrollYProgress, [0, 0.6, 1], ['0%', '-60%', '-60%']);

    // Phase 2: GIF animations start after horizontal scroll ends
    // Each GIF animates in sequence during the remaining scroll

    // First GIF: animates from 60% to 70% of total scroll
    const gif1X = useTransform(
        scrollYProgress,
        [0, 0.6, 0.7, 1],
        ['10%', '10%', '110%', '110%']
    );

    // Second GIF: animates from 70% to 80% of total scroll
    const gif2X = useTransform(
        scrollYProgress,
        [0, 0.7, 0.8, 1],
        ['10%', '10%', '110%', '110%']
    );

    // Third GIF: animates from 80% to 90% of total scroll
    const gif3X = useTransform(
        scrollYProgress,
        [0, 0.8, 0.9, 1],
        ['10%', '10%', '110%', '110%']
    );

    return (
        <div ref={targetRef} className='relative h-[500vh]'>
            <div className='sticky top-0 h-screen flex items-center overflow-hidden'>
                <motion.div style={{ x }} className='flex items-center gap-16 pt-20'>
                    {/* Initial Title Card */}
                    <div className='shrink-0 w-[820px] h-[600px] flex justify-center items-center'>
                        <h1 className='text-7xl text-black'>
                            What About
                            <br />
                            QCLY?
                        </h1>
                    </div>

                    {/* Cards with individual GIF animations */}
                    <Card bgColor='bg-rose-50' gifSrc='/handgiff.gif' gifX={gif1X} />
                    <Card bgColor='bg-blue-50' gifSrc='/liqgiff.gif' gifX={gif2X} />
                    <Card bgColor='bg-purple-100' gifSrc='/boxgiff.gif' gifX={gif3X} />
                </motion.div>
            </div>
        </div>
    );
};

export default About;