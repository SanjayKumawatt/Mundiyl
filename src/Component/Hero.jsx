import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-4 justify-center overflow-hidden bg-[#0a0a0c]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80" 
          alt="Tech Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/80 via-transparent to-[#0a0a0c]"></div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
              Engineering Excellence
            </span>
          </motion.div>

          {/* Main Heading with Typewriter */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight min-h-[150px] md:min-h-fit"
          >
            Thoughtfully Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 inline-block">
              <Typewriter
                options={{
                  strings: [
                    'Next Generation of Software',
                    'Intelligent Systems',
                    'Scalable Platforms',
                    'Future-Ready Solutions'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </motion.h1>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 max-w-3xl mx-auto space-y-4"
          >
            <p className="text-lg md:text-xl text-indigo-100/80 font-semibold uppercase tracking-wide">
              MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Is an early-stage IT startup focused on building intelligent, scalable, and adaptable software systems. 
              We design and develop digital solutions that help simplify communication, improve workflows, 
              and support modern digital operations.
            </p>
            <p className="text-sm md:text-base text-gray-500 italic max-w-2xl mx-auto">
              Our work blends structured software engineering with intelligent automation, allowing products to remain flexible 
              as requirements grow and evolve. Rather than chasing short-term trends, we focus on building strong technical 
              foundations that support long-term product development.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to={"/contact"} className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-indigo-600/20">
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to={"/capabilities"} className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm">
              Explore Capabilities
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;