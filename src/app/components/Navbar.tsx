// Navbar.js
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = ['Home', 'About', 'Services', 'Contact']
const socialLinks = ['Dribbble', 'Behance', 'TikTok', 'Instagram', 'LinkedIn']

// Color mapping for different menu items
const rectangleColors = {
    'about-us': 'bg-purple-600',
    'what-we-do': 'bg-green-600',
    'our-works': 'bg-orange-600',
    'contact-us': 'bg-red-600',
    default: 'bg-blue-600'
}

const Navbar = ({ setHoveringLinkOrButton, setHoveredElement }) => {
    const [hoveredItem, setHoveredItem] = useState(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hoveredMenuItem, setHoveredMenuItem] = useState(null)

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

    const handleMenuItemHover = (itemId) => {
        setHoveredMenuItem(itemId)
    }

    const handleMenuItemLeave = () => {
        setHoveredMenuItem(null)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const getRectangleColor = () => {
        if (hoveredMenuItem) {
            return rectangleColors[hoveredMenuItem] || rectangleColors.default
        }
        return rectangleColors.default
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full flex items-center justify-between px-16 py-12 z-40  fixed"
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
                        <motion.div
                            key={link}
                            className="relative"
                            onMouseEnter={(e) => handleMouseEnter(e, link)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link href={`#${link.toLowerCase()}`}>
                                <motion.span
                                    className={`text-xl transition-all duration-300 cursor-pointer px-3 py-2 rounded-lg ${hoveredItem === link ? 'text-white' : 'text-black hover:text-gray-700'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    animate={
                                        hoveredItem === link
                                            ? { scale: [1, 1.02, 1] }
                                            : {}
                                    }
                                    transition={{
                                        duration: 2,
                                        repeat: hoveredItem === link ? Infinity : 0,
                                        repeatType: 'reverse',
                                    }}
                                >
                                    {link}
                                </motion.span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side: Menu + Button */}
                <div className="flex items-center gap-9">
                    <motion.button
                        className={`px-6 py-3 border-2 rounded-3xl text-[18px] relative transition-all duration-300 cursor-pointer ${hoveredItem === 'button'
                            ? 'text-white border-white'
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
                        className={`cursor-pointer p-2 rounded-lg transition-all duration-300 ${hoveredItem === 'menu' ? '' : ''
                            }`}
                        onMouseEnter={(e) => handleMouseEnter(e, 'menu')}
                        onMouseLeave={handleMouseLeave}
                        onClick={toggleMenu}
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

            {/* Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 bg-gray-100 z-50 flex"
                    >
                        {/* Left Side - Social Links */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className=" flex-1 flex flex-col  gap-24  justify-center py-44 px-16"
                        >
                            <div className=''>
                                <div className="space-y-2  ">
                                    <motion.h3
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-gray-500 text-lg font-medium mb-8"
                                    >
                                        Social
                                    </motion.h3>
                                    {socialLinks.map((social, index) => (
                                        <motion.div
                                            key={social}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                        >
                                            <Link
                                                href={`#${social.toLowerCase()}`}
                                                className="block text-black text-xl hover:text-gray-600 transition-colors duration-300"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {social}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Contact Info */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className=""
                            >
                                <p className="text-gray-500 text-sm mb-2">Get in touch</p>
                                <a
                                    href="mailto:info@qclay.design"
                                    className="text-black text-lg hover:text-gray-600 transition-colors duration-300 underline"
                                >
                                    info@qclay.design
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Center - Animated Rectangle */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex-1 flex items-center justify-center"
                        >
                            <motion.div
                                className={`w-80 h-96 rounded-lg transition-all duration-500 ${getRectangleColor()}`}
                                animate={{
                                    scale: hoveredMenuItem ? [1, 1.05, 1] : 1,
                                    rotateY: hoveredMenuItem ? [0, 5, -5, 0] : 0,
                                    rotateX: hoveredMenuItem ? [0, 2, -2, 0] : 0,
                                }}
                                transition={{
                                    duration: hoveredMenuItem ? 1.5 : 0.5,
                                    repeat: hoveredMenuItem ? Infinity : 0,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }}
                                style={{
                                    boxShadow: hoveredMenuItem
                                        ? '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)'
                                        : '0 10px 20px rgba(0,0,0,0.1)'
                                }}
                            >
                                {/* Optional: Add some content inside the rectangle */}
                                {hoveredMenuItem && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="flex items-center justify-center h-full text-white text-2xl font-bold"
                                    >
                                        {hoveredMenuItem.replace('-', ' ').toUpperCase()}
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Navigation & Header */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="flex-1 flex flex-col px-16 py-12"
                        >
                            {/* Header with Logo and Close */}
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center justify-between mb-16"
                            >
                                <div className="text-3xl font-bold text-black">QCLAY</div>
                                <div className="flex items-center gap-6">
                                    <button className="px-6 py-3 border-2 border-black rounded-3xl text-[18px] text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2">
                                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                                        Let's Talk!
                                    </button>
                                    <button
                                        onClick={toggleMenu}
                                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-300"
                                    >
                                        <X className="w-8 h-8 text-black" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Menu Label */}
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-500 text-lg font-medium mb-12"
                            >
                                Menu
                            </motion.p>

                            {/* Navigation Links with Hover Effects */}
                            <motion.div
                                className="space-y-8"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {['About Us', 'What We Do', 'Our Works', 'Contact Us'].map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        <Link
                                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                                            className={`block text-4xl font-bold transition-all duration-300 ${hoveredMenuItem === item.toLowerCase().replace(' ', '-')
                                                ? 'text-gray-800 scale-105'
                                                : 'text-black hover:text-gray-600'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                            onMouseEnter={() => handleMenuItemHover(item.toLowerCase().replace(' ', '-'))}
                                            onMouseLeave={handleMenuItemLeave}
                                        >
                                            <motion.span
                                                whileHover={{ x: 10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item}
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Bottom Right Info */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="mt-auto mb-8 text-right"
                            >
                                <p className="text-gray-500 text-sm mb-2">Privacy Policy & Cookies</p>
                                <p className="text-gray-500 text-sm">© QClay Design</p>
                                <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors duration-300">
                                    Book a call
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar;