// Navbar.js
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navLinks = ['Home', 'About', 'Services', 'Contact']

const Navbar = ({ setHoveringLinkOrButton, setHoveredElement }) => {
    const [hoveredItem, setHoveredItem] = useState(null)

    const handleMouseEnter = (e, itemId) => {
        setHoveringLinkOrButton(true)
        setHoveredElement(e.currentTarget)
        setHoveredItem(itemId)
    }

    const handleMouseLeave = () => {
        setHoveringLinkOrButton(false)
        setHoveredElement(null)
        setHoveredItem(null)
    }

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full flex items-center justify-between px-16 py-12  z-40 relative"
        >
            {/* Logo */}
            <motion.div
                className={`text-3xl font-bold cursor-pointer transition-all duration-300 ${hoveredItem === 'logo' ? 'text-white bg-black px-4 py-2 rounded-lg' : 'text-black'
                    }`}
                onMouseEnter={(e) => handleMouseEnter(e, 'logo')}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05 }}
                animate={hoveredItem === 'logo' ? {
                    scale: [1, 1.02, 1],
                } : {}}
                transition={{
                    duration: 2,
                    repeat: hoveredItem === 'logo' ? Infinity : 0,
                    repeatType: "reverse"
                }}
            >
                QCLAY
            </motion.div>

            {/* Center Nav Links */}
            <div className="hidden md:flex gap-18">
                {navLinks.map((link) => (
                    <Link
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="relative"
                    >
                        <motion.span
                            className={`text-xl transition-all duration-300 cursor-pointer px-3 py-2 rounded-lg ${hoveredItem === link ? 'text-white ' : 'text-black hover:text-gray-700'
                                }`}
                            onMouseEnter={(e) => handleMouseEnter(e, link)}
                            onMouseLeave={handleMouseLeave}
                            whileHover={{ scale: 1.05 }}
                            animate={hoveredItem === link ? {
                                scale: [1, 1.02, 1],
                            } : {}}
                            transition={{
                                duration: 2,
                                repeat: hoveredItem === link ? Infinity : 0,
                                repeatType: "reverse"
                            }}
                        >
                            {link}
                        </motion.span>
                    </Link>
                ))}
            </div>

            {/* Right Side: Menu + Button */}
            <div className="flex items-center gap-9">
                <motion.button
                    className={`px-6 py-3 border-2 rounded-3xl text-[18px] relative transition-all duration-300 cursor-pointer ${hoveredItem === 'button'
                        ? 'text-white bg-black border-white'
                        : 'text-black border-black hover:border-gray-700'
                        }`}
                    onMouseEnter={(e) => handleMouseEnter(e, 'button')}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{ scale: 1.05 }}
                    animate={hoveredItem === 'button' ? {
                        scale: [1, 1.02, 1],
                    } : {}}
                    transition={{
                        duration: 2,
                        repeat: hoveredItem === 'button' ? Infinity : 0,
                        repeatType: "reverse"
                    }}
                >
                    <span className={`inline-block w-3 h-3 rounded-full mr-1 border-2 transition-all duration-300 ${hoveredItem === 'button' ? 'bg-green-400 border-white' : 'bg-green-500 border-white'
                        }`}></span>
                    Lets Talk!
                </motion.button>

                <motion.div
                    className={`cursor-pointer p-2 rounded-lg transition-all duration-300 ${hoveredItem === 'menu' ? 'bg-black' : ''
                        }`}
                    onMouseEnter={(e) => handleMouseEnter(e, 'menu')}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{ scale: 1.1 }}
                    animate={hoveredItem === 'menu' ? {
                        scale: [1, 1.02, 1],
                        rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{
                        duration: 2,
                        repeat: hoveredItem === 'menu' ? Infinity : 0,
                        repeatType: "reverse"
                    }}
                >
                    <Menu
                        className={`w-8 h-8 transition-colors duration-300 ${hoveredItem === 'menu' ? 'text-white' : 'text-black'
                            }`}
                    />
                </motion.div>
            </div>
        </motion.nav>
    )
}

export default Navbar