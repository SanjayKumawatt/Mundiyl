import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Lightbulb, CodeSquare, Globe } from 'lucide-react';

import img from "../assets/ai.png"

const WhatWeBuild = () => {
  const categories = [
    {
      title: "Custom Software Systems",
      description: "We design and develop custom software tailored to specific operational or product needs. This includes defining system architecture, implementing core functionality, and ensuring reliable interactions between different modules.",
      // High-quality Architecture/Code Image
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      points: [
        "Modular and extensible architecture",
        "Clean and maintainable code structure",
        "Clear separation of responsibilities",
        "Future-ready system design",
      ],
      icon: <CodeSquare className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Automation-Driven Applications",
      description: "We build applications that integrate automation into everyday workflows. These systems reduce repetitive manual work and help maintain consistency and efficiency.",
      // Tech/Automation/Server Image
      image: img,
      points: [
        "Workflow orchestration systems",
        "Automated communication tools",
        "Data processing pipelines",
        "Rule-based task execution systems",
      ],
      icon: <Workflow className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Intelligent & AI-Assisted Software",
      description: "We develop intelligent software components that support smarter decision-making and content generation. Our focus is on practical intelligence that improves productivity rather than unnecessary complexity.",
      // Neural/AI/Abstract Tech Image
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      points: [
        "These systems are designed to integrate seamlessly into broader software platforms.",
      ],
      icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Web & Platform Development",
      description: "We build modern web platforms that emphasize performance, usability, and scalability. Our platforms are designed to support multi-user environments and evolving feature requirements.",
      // Modern Web/Design Image
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      points: [
        "High-performance user interfaces",
        "Scalable cloud infrastructure",
        "Cross-platform compatibility"
      ], 
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            What We <span className="text-indigo-500">Build</span>
          </motion.h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-white font-semibold">Software Systems Designed for Growth.</span> We build software systems that are designed to evolve. Our focus extends to creating well-structured digital ecosystems where components work together efficiently.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-600/40">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{category.title}</h3>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <p className="text-gray-400 mb-8 leading-relaxed italic">
                  "{category.description}"
                </p>
                
                {category.points.length > 0 && (
                  <ul className="space-y-4">
                    {category.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-center gap-3 group/item">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-gray-300 text-sm font-medium tracking-wide">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;