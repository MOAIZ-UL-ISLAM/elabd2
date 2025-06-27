import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor({ isHovering, hoveredElement }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth motion with different settings for magnetic effect
    const cursorX = useSpring(mouseX, {
        stiffness: isHovering ? 200 : 150,
        damping: isHovering ? 25 : 20
    })
    const cursorY = useSpring(mouseY, {
        stiffness: isHovering ? 200 : 150,
        damping: isHovering ? 25 : 20
    })

    useEffect(() => {
        // Hide the native cursor
        document.body.style.cursor = 'none';

        const moveCursor = (e) => {
            if (isHovering && hoveredElement) {
                // Apply magnetic effect only when hovering over navbar elements
                const rect = hoveredElement.getBoundingClientRect()
                const elementCenterX = rect.left + rect.width / 2
                const elementCenterY = rect.top + rect.height / 2

                const dx = elementCenterX - e.clientX
                const dy = elementCenterY - e.clientY
                const distance = Math.sqrt(dx * dx + dy * dy)

                // Adjust magnetic strength based on distance (closer = stronger pull)
                const maxDistance = 100 // Maximum distance where magnetic effect applies
                const pullStrength = distance < maxDistance ?
                    Math.min(0.3, (maxDistance - distance) / maxDistance * 0.3) : 0

                const targetX = e.clientX + dx * pullStrength
                const targetY = e.clientY + dy * pullStrength

                mouseX.set(targetX)
                mouseY.set(targetY)
            } else {
                // Normal cursor behavior when not hovering
                mouseX.set(e.clientX)
                mouseY.set(e.clientY)
            }
        }

        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            // Restore the native cursor when the component unmounts
            document.body.style.cursor = 'auto';
        }
    }, [mouseX, mouseY, isHovering, hoveredElement])

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 rounded-full flex items-center justify-center"
            style={{
                translateX: cursorX,
                translateY: cursorY,
                zIndex: 9999,
                width: isHovering ? '60px' : '20px',
                height: isHovering ? '60px' : '20px',
                backgroundColor: isHovering ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.6)',
                mixBlendMode: 'difference',
                border: isHovering ? '2px solid rgba(0,0,0,0.4)' : 'none',
                transform: 'translate(-50%, -50%)'
            }}
            animate={{
                opacity: 1,
                scale: isHovering ? 1 : 1
            }}
            transition={{
                scale: { duration: 0.3, ease: 'easeOut' },
                opacity: { duration: 0.2 }
            }}
        >
            {/* Optional: Add content inside cursor when hovering */}
            {isHovering && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white text-xs font-medium"
                >

                </motion.div>
            )}
        </motion.div>
    )
}