import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, ShieldCheck, Zap, Brain, Boxes, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-[#0a0a0c] text-white pt-24">
      {/* Hero Section - WHO WE ARE */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                <span className="text-indigo-400 text-sm font-bold tracking-widest uppercase">Who We Are</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                A Product-Focused <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Technology Startup
                </span>
              </h1>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  <strong className="text-white italic">MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED</strong> was founded with the goal of creating meaningful technology products rather than one-off software deliveries. We operate with a builder’s mindset, treating every project and product as a living system that must grow over time.
                </p>
                <p>
                  As a young startup, we prioritize learning, experimentation, and thoughtful execution. Our team focuses on understanding problems deeply before designing solutions, ensuring the technology we build remains relevant and adaptable.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team Mindset" 
                className="w-full h-[500px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-600/30">
              <Target className="text-white w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8">Our <span className="text-indigo-500">Mission</span></h2>
            <p className="text-2xl md:text-3xl font-medium text-indigo-100/90 italic leading-snug">
              "To build <span className="text-white font-bold border-b-2 border-indigo-500">reliable and intelligent</span> software products that remain simple to use, flexible to scale, and strong at their core."
            </p>
          </motion.div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-indigo-500">Our Approach</h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "System-level thinking over isolated features", icon: <Boxes className="w-6 h-6" /> },
              { title: "Clean architecture and maintainable codebases", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "Automation to reduce operational complexity", icon: <Zap className="w-6 h-6" /> },
              { title: "Continuous experimentation and learning", icon: <Brain className="w-6 h-6" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6 group hover:border-indigo-500/50 transition-all"
              >
                <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-200">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="py-24  relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-indigo-900/40 to-transparent border border-white/10 text-center relative overflow-hidden"
          >
            <Rocket className="w-12 h-12 text-indigo-500 mx-auto mb-8 animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-black mb-6">Our Vision</h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
              To grow into a technology organization that builds intelligent software platforms capable of supporting businesses and digital creators in an increasingly automated world.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;