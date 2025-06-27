'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const imageSources = [
    '/1.jpeg',
    '/2.jpeg',
    '/3.jpeg',
    '/4.jpeg',
    '/5.jpeg',
    '/6.jpeg',
    '/3.jpeg',
    '/4.jpeg',
    '/5.jpeg'
]

const Pitch = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

    return (
        <motion.section className='h-screen w-full bg-violet-200' ref={ref}>
            <div className='flex flex-col items-center justify-center h-full gap-4'>
                <h1 className='uppercase text-8xl font-bold'>Each of our designers</h1>
                <h1 className='uppercase text-8xl text-white font-bold'>was the best among</h1>
                <div className='flex gap-2 items-center justify-center'>
                    <h1 className='text-8xl uppercase font-bold'>several</h1>

                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className='flex items-center justify-center'
                    >
                        <div className='w-[520px] h-24 bg-white rounded-4xl flex items-center justify-start px-2 overflow-hidden'>
                            <motion.div
                                className='flex -space-x-2'
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            >
                                {imageSources.map((src, i) => (
                                    <Image
                                        key={i}
                                        src={src}
                                        alt={`client-${i + 1}`}
                                        width={57}
                                        height={57}
                                        className='rounded-full object-cover border-2 border-white'
                                    />
                                ))}
                                <div className='w-[60px] h-[60px] flex items-center justify-center rounded-full bg-black text-white text-lg font-semibold border-2 border-white'>
                                    +25
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <h1 className='text-8xl uppercase font-bold'>others</h1>
                </div>
            </div>
        </motion.section>
    )
}

export default Pitch
