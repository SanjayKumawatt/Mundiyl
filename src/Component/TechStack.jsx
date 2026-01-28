import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Layout, 
  Cpu, 
  Share2, 
  Wrench, 
  Zap 
} from 'lucide-react';

const TechStack = () => {
  const stacks = [
    {
      area: "Backend Frameworks",
      focus: "Scalable Logic",
      description: "Robust server-side architectures designed to handle complex business logic and high traffic with ease.",
      icon: <Cpu className="w-6 h-6 text-indigo-400" />
    },
    {
      area: "Frontend Technologies",
      focus: "Modern Interfaces",
      description: "Building fast, reactive, and highly interactive user experiences using the latest frontend standards.",
      icon: <Layout className="w-6 h-6 text-indigo-400" />
    },
    {
      area: "Databases",
      focus: "Structured Storage",
      description: "Reliable data persistence layers optimized for integrity, speed, and seamless vertical/horizontal scaling.",
      icon: <Database className="w-6 h-6 text-indigo-400" />
    },
    {
      area: "APIs & Integrations",
      focus: "Seamless Connectivity",
      description: "Developing clean, documented, and secure APIs that allow different systems to communicate effectively.",
      icon: <Share2 className="w-6 h-6 text-indigo-400" />
    },
    {
      area: "Development Tools",
      focus: "Monitoring & Testing",
      description: "Integrating advanced tooling for automated testing, performance monitoring, and rapid deployment.",
      icon: <Wrench className="w-6 h-6 text-indigo-400" />
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-600/5 rotate-12 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <Zap className="w-5 h-5 text-indigo-500 fill-indigo-500" />
            <span className="text-indigo-400 text-sm font-black tracking-[0.3em] uppercase">Tech Ecosystem</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            ENGINEERING <span className="text-indigo-500">STACK</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-xl text-gray-300 font-bold mb-2">Technology Chosen With Intent</p>
            <p className="text-gray-500 leading-relaxed">
              Our technology stack is selected based on system needs, maintainability, and scalability. 
              We adapt our tools and frameworks as product requirements evolve.
            </p>
          </motion.div>
        </div>

        {/* Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-600 transition-colors duration-500">
                  <div className="group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{item.area}</h3>
                  <p className="text-indigo-400 text-xs font-bold uppercase tracking-wider mt-1">{item.focus}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default TechStack;