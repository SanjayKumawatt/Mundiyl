import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, Boxes, Globe, CheckCircle2 } from 'lucide-react';

const About = () => {
    // Reliable high-res tech images
    const teamImages = [
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    ];

    return (
        <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
            {/* Dynamic Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* WHO WE ARE SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-12 bg-indigo-500"></div>
                            <span className="text-indigo-400 text-sm font-bold tracking-[0.2em] uppercase">Who We Are</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1]">
                            A Product-Focused <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                Technology Startup
                            </span>
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                <span className="text-white font-bold border-b-2 border-indigo-500/50">MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED</span> was founded with the goal of creating meaningful technology products rather than one-off software deliveries. We operate with a builder’s mindset, treating every project as a living system.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                As a young startup, we prioritize learning, experimentation, and thoughtful execution. Our team focuses on understanding problems deeply before designing solutions, ensuring adaptability in a fast-paced digital world.
                            </p>
                        </div>

                        {/* Feature Badges */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: <Brain size={20} />, text: "Deep Problem Solving" },
                                { icon: <Boxes size={20} />, text: "Scalable Architecture" },
                                { icon: <CheckCircle2 size={20} />, text: "Thoughtful Execution" },
                                { icon: <Globe size={20} />, text: "Global Standards" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                                    <div className="text-indigo-400">{item.icon}</div>
                                    <span className="text-gray-200 font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* OUR VISION SIDE (Enhanced Card) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Animated Ring Decor */}
                        <div className="absolute -inset-4 border border-indigo-500/20 rounded-[2.5rem] animate-[spin_20s_linear_infinite] pointer-events-none"></div>

                        <div className="relative p-10 md:p-14 rounded-[2rem] bg-gradient-to-br from-indigo-950/50 via-[#0a0a0c] to-[#0a0a0c] border border-white/10 backdrop-blur-2xl shadow-2xl">
                            <div className="flex justify-between items-center mb-10">
                                <div className="bg-indigo-600/20 p-4 rounded-2xl">
                                    <Rocket className="w-8 h-8 text-indigo-400" />
                                </div>
                                <div className="text-right">
                                    <p className="text-indigo-500 font-black text-xl uppercase tracking-tighter">Vision 2026</p>
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Vision</h3>
                            <p className="text-xl md:text-2xl text-indigo-100/80 leading-snug font-medium italic mb-12">
                                "To grow into a technology organization that builds intelligent software platforms capable of supporting businesses and digital creators in an increasingly automated world."
                            </p>


                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;