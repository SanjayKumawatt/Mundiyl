import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

import logo from "../assets/logo.png"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Overview', path: '/' },
        { name: 'Who We Are', path: '/about' },
        { name: 'What We Build', path: '/services' },
        { name: 'Our Products', path: '/products' },
        { name: 'Our Capabilities', path: '/capabilities' },
        { name: 'Engineering Stack', path: '/stack' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        // BG changed to Dark with blur to match Hero theme
        <nav className="fixed top-0 w-full bg-[#0a0a0c]/80 backdrop-blur-md z-50 border-b border-white/5 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl flex gap-2 items-center font-black tracking-tight text-white">
                        <img src={logo} className='h-13' alt="" />
                        
                            <div>
                                MUNDIYL<span className="text-indigo-600">.</span>
                                <p className="text-[8px] uppercase tracking-[0.2em] font-semibold text-gray-400 leading-tight">
                                    Software Services
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu - Text changed to Light/Gray */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="ml-4 px-6 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Connect With Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Color changed to white */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-indigo-400 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Dark Theme applied */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#0a0a0c] border-t border-white/5 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-indigo-400 rounded-xl transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    to="/contact"
                                    className="block w-full text-center px-6 py-4 bg-indigo-600 text-white font-bold rounded-xl"
                                >
                                    Connect With Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;