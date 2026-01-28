import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Server, 
  MonitorSmartphone, 
  Database, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react';

const Capabilities = () => {
  const caps = [
    {
      title: "System Architecture & Design",
      desc: "We design architectures that define how components interact, scale, and evolve. This ensures long-term system stability and flexibility.",
      icon: <Network className="w-8 h-8 text-indigo-400" />,
      size: "md:col-span-2"
    },
    {
      title: "Backend Engineering",
      desc: "We build secure and reliable backend systems responsible for business logic, data processing, and integrations.",
      icon: <Server className="w-8 h-8 text-indigo-400" />,
      size: "md:col-span-1"
    },
    {
      title: "Frontend Engineering",
      desc: "We create clean, responsive user interfaces that prioritize usability, accessibility, and performance.",
      icon: <MonitorSmartphone className="w-8 h-8 text-indigo-400" />,
      size: "md:col-span-1"
    },
    {
      title: "Data Handling & Processing",
      desc: "We design systems that store, process, and analyze data efficiently while maintaining data integrity and scalability.",
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      size: "md:col-span-1"
    },
    {
      title: "Quality & Testing",
      desc: "We integrate testing and validation processes to ensure system reliability and reduce unexpected behavior.",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
      size: "md:col-span-1"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 6L6 6L6 54L54 54L54 48Z' fill='none' stroke='%236366f1' stroke-width='2'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Cpu className="w-5 h-5 text-indigo-500" />
              <span className="text-indigo-400 text-sm font-bold tracking-widest uppercase">Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              OUR <span className="text-indigo-500">CAPABILITIES</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-xl text-gray-400 leading-relaxed font-medium"
            >
              Strong Foundations in Software Engineering
            </motion.p>
            <p className="mt-2 text-gray-500 italic">
              Our capabilities are built around engineering discipline, system design, and thoughtful execution.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${item.size} p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.07] transition-all duration-300 group`}
            >
              <div className="mb-6 p-4 rounded-2xl bg-indigo-500/10 w-fit group-hover:bg-indigo-500/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;