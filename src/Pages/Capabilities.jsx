import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Server, 
  MonitorSmartphone, 
  Database, 
  ShieldCheck, 
  Cpu,
  Layers,
  Zap,
  Activity
} from 'lucide-react';

const CapabilitiesPage = () => {
  const mainCapabilities = [
    {
      title: "System Architecture & Design",
      desc: "We design architectures that define how components interact, scale, and evolve. This ensures long-term system stability and flexibility.",
      icon: <Network className="w-10 h-10" />,
      details: ["Scalable Microservices", "Event-Driven Architecture", "System Interoperability"],
      color: "indigo"
    },
    {
      title: "Backend Engineering",
      desc: "We build secure and reliable backend systems responsible for business logic, data processing, and integrations.",
      icon: <Server className="w-10 h-10" />,
      details: ["High-Performance APIs", "Secure Logic Implementation", "Third-party Integrations"],
      color: "blue"
    },
    {
      title: "Frontend Engineering",
      desc: "We create clean, responsive user interfaces that prioritize usability, accessibility, and performance.",
      icon: <MonitorSmartphone className="w-10 h-10" />,
      details: ["Responsive UI/UX", "State Management", "Performance Optimization"],
      color: "purple"
    },
    {
      title: "Data Handling & Processing",
      desc: "We design systems that store, process, and analyze data efficiently while maintaining data integrity and scalability.",
      icon: <Database className="w-10 h-10" />,
      details: ["Relational & NoSQL", "Data Integrity Pipelines", "Efficient Querying"],
      color: "indigo"
    },
    {
      title: "Quality & Testing",
      desc: "We integrate testing and validation processes to ensure system reliability and reduce unexpected behavior.",
      icon: <ShieldCheck className="w-10 h-10" />,
      details: ["Automated Testing", "Performance Validation", "Code Reliability"],
      color: "blue"
    }
  ];

  return (
    <div className="bg-[#0a0a0c] text-white pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Cpu className="w-5 h-5 text-indigo-500" />
            <span className="text-indigo-400 text-sm font-black tracking-[0.3em] uppercase">Engineering Core</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            OUR <span className="text-indigo-500">CAPABILITIES</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-2xl text-gray-300 font-bold mb-4">Strong Foundations in Software Engineering</p>
            <p className="text-gray-500 text-lg leading-relaxed italic">
              "Our capabilities are built around engineering discipline, system design, and thoughtful execution. We focus on building reliable systems that remain stable as complexity increases."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Detailed Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCapabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.08] transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-8 p-5 bg-indigo-500/10 rounded-2xl w-fit group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                {cap.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-indigo-400 transition-colors">
                {cap.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {cap.desc}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/5">
                {cap.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Special "Growth" Card to make it feel bigger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-gradient-to-br from-indigo-600/20 to-transparent border border-indigo-500/30 flex flex-col justify-center items-center text-center group"
          >
            <Layers className="w-12 h-12 text-indigo-400 mb-6 animate-pulse" />
            <h3 className="text-xl font-bold mb-4">Scalability First</h3>
            <p className="text-sm text-gray-400 italic">
              "We prioritize long-term system stability and flexibility over short-term trends."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engineering Philosophy Banner */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Activity className="w-12 h-12 text-indigo-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black mb-8">Thoughtful Execution & Discipline</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-indigo-400 font-black text-2xl mb-1">Clean</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Architecture</p>
            </div>
            <div>
              <p className="text-indigo-400 font-black text-2xl mb-1">Robust</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Performance</p>
            </div>
            <div>
              <p className="text-indigo-400 font-black text-2xl mb-1">Future</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Ready</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesPage;