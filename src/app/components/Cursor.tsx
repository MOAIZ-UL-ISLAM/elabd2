'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor({ isHovering, hoveredElement }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth cursor movement
    const cursorX = useSpring(mouseX, { stiffness: 150, damping: 20 })
    const cursorY = useSpring(mouseY, { stiffness: 150, damping: 20 })

    useEffect(() => {
        const moveCursor = (e) => {
            if (isHovering && hoveredElement) {
                const rect = hoveredElement.getBoundingClientRect()

                // ✅ Use true center of element
                const elementCenterX = rect.left + rect.width / 2
                const elementCenterY = rect.top + rect.height / 2

                const pullStrength = 0.15
                const targetX = e.clientX + (elementCenterX - e.clientX) * pullStrength
                const targetY = e.clientY + (elementCenterY - e.clientY) * pullStrength

                mouseX.set(targetX)
                mouseY.set(targetY)
            } else {
                mouseX.set(e.clientX)
                mouseY.set(e.clientY)
            }
        }

        window.addEventListener('mousemove', moveCursor)
        return () => window.removeEventListener('mousemove', moveCursor)
    }, [mouseX, mouseY, isHovering, hoveredElement])

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 rounded-full flex items-center justify-center"
            style={{
                translateX: cursorX,
                translateY: cursorY,
                zIndex: 9999,
                width: isHovering ? '120px' : '20px',
                height: isHovering ? '120px' : '20px',
                backgroundColor: isHovering ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.6)',
                mixBlendMode: 'difference',
                border: isHovering ? '2px solid rgba(0,0,0,0.4)' : 'none',
                transform: 'translate(-50%, -50%)' // ✅ center the cursor
            }}
            animate={{
                scale: isHovering ? 1 : 1,
                opacity: 1,
            }}
            transition={{
                scale: { duration: 0.3, ease: 'easeOut' },
                opacity: { duration: 0.2 },
            }}
        >
            {isHovering && (
                <motion.div
                    // initial={{ opacity: 0, scale: 0.8 }}
                    // animate={{
                    //     opacity: 1,
                    //     scale: [1, 1.1, 1],
                    // }}
                    // transition={{
                    //     opacity: { duration: 0.2 },
                    //     scale: {
                    //         duration: 2,
                    //         repeat: Infinity,
                    //         repeatType: 'reverse',
                    //         ease: 'easeInOut',
                    //     },
                    // }}
                    className="text-white text-sm font-medium px-2 py-1 rounded-full"
                >

                </motion.div>
            )}
        </motion.div>
    )
}
