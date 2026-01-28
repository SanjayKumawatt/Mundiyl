import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code2, Cpu, Lightbulb } from 'lucide-react';

const Approach = () => {
  const approaches = [
    {
      title: "System-level thinking over isolated features",
      description: "Hum sirf features nahi banate, hum poora ecosystem design karte hain jo scale hone ke liye ready ho.",
      icon: <Layers className="w-8 h-8 text-indigo-400" />,
    },
    {
      title: "Clean architecture and maintainable codebases",
      description: "Code aisa jo aaj bhi chale aur 5 saal baad bhi dev-friendly rahe. Industry standards hamari priority hain.",
      icon: <Code2 className="w-8 h-8 text-indigo-400" />,
    },
    {
      title: "Automation to reduce operational complexity",
      description: "Repetitive tasks ko smart automation se replace karke hum efficiency aur reliability badhate hain.",
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
    },
    {
      title: "Continuous experimentation and learning",
      description: "Tech hamesha badal rahi hai, aur hum hamesha latest innovations ke saath experiment karte rehte hain.",
      icon: <Lightbulb className="w-8 h-8 text-indigo-400" />,
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            Our <span className="text-indigo-500">Approach</span>
          </motion.h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;