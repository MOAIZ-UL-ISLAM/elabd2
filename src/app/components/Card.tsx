import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ bgColor, gifSrc, gifX }) => {
    return (
        <div
            className={`rounded-3xl shrink-0 ${bgColor} w-[820px] h-[600px] flex flex-col justify-center pl-12 gap-14 overflow-hidden`}
        >
            <motion.div style={{ x: gifX }} className='w-96 h-48 rounded-full'>
                <Image
                    alt='giflogo'
                    src={gifSrc}
                    width={100}
                    height={100}
                    className='w-full h-full object-cover rounded-full'
                />
            </motion.div>
            <div>
                <h1 className='text-7xl text-start pb-6'>
                    We help our clients <br />
                    to shine online
                </h1>
                <h3 className='text-xl text-start'>
                    We collaborate as a collective of individuals bringing <br />
                    their whole self to a project and, together, create work <br /> that
                    none of us would be able to do on our own.
                </h3>
            </div>
        </div>
    );
};

export default Card;
