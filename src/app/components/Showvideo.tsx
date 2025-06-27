'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Showvideo = () => {
    const containerRef = useRef(null)
    const videoRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    const width = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['89%', '95%', '100%', '100%'])
    const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], ['12px', '6px', '0px'])
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1.02, 1])
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -20])

    const shadowBlur = useTransform(scrollYProgress, [0, 0.5, 1], [20, 40, 60])

    return (
        <div
            ref={containerRef}
            className="relative  flex items-center justify-center w-screen"
        >
            <motion.div
                className="relative flex items-center justify-center w-screen"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                style={{ y }}
            >
                <motion.video
                    ref={videoRef}
                    className="h-screen w-screen shadow-lg object-cover "
                    controls
                    autoPlay
                    loop
                    muted
                    style={{
                        width,
                        borderRadius,
                        scale,
                        boxShadow: useTransform(
                            [shadowBlur],
                            ([opacity, blur]) =>
                                `0 ${blur}px ${blur * 2}px rgba(0, 0, 0, ${opacity})`
                        ),
                    }}
                >
                    <source src="/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </motion.video>
            </motion.div>
        </div>
    )
}

export default Showvideo
