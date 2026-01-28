import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Layout, 
  Database, 
  Share2, 
  Wrench, 
  Zap, 
  Terminal, 
  ShieldCheck,
  LineChart
} from 'lucide-react';

const StackPage = () => {
  const stackAreas = [
    {
      title: "Backend Frameworks",
      focus: "Scalable Logic",
      desc: "Our backend frameworks are selected for their ability to handle scalable logic and complex business requirements while maintaining high performance.",
      icon: <Cpu className="w-8 h-8" />,
      tools: ["Robust Logic", "Server-Side Stability", "High Throughput"]
    },
    {
      title: "Frontend Technologies",
      focus: "Modern Interfaces",
      desc: "We utilize modern frontend technologies to create reactive, accessible, and high-performance user interfaces that prioritize usability.",
      icon: <Layout className="w-8 h-8" />,
      tools: ["Reactive Components", "State Management", "Performance Optimization"]
    },
    {
      title: "Databases",
      focus: "Structured Storage",
      desc: "Our databases are chosen for structured data storage, ensuring data integrity and horizontal scalability as your data grows.",
      icon: <Database className="w-8 h-8" />,
      tools: ["Data Integrity", "Efficient Indexing", "Scalable Persistence"]
    },
    {
      title: "APIs & Connectivity",
      focus: "Seamless Integrations",
      desc: "We build APIs that ensure seamless integrations between internal modules and third-party services with a focus on security.",
      icon: <Share2 className="w-8 h-8" />,
      tools: ["RESTful Standards", "Secure Handshakes", "Documentation First"]
    },
    {
      title: "Development Tools",
      focus: "Monitoring & Testing",
      desc: "Our development stack includes advanced tools for monitoring and testing to reduce operational complexity and ensure reliability.",
      icon: <Wrench className="w-8 h-8" />,
      tools: ["Automated Testing", "CI/CD Pipelines", "Real-time Monitoring"]
    }
  ];

  return (
    <div className="bg-[#0a0a0c] text-white pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/5 blur-[120px] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <Terminal className="w-5 h-5 text-indigo-500" />
            <span className="text-indigo-400 text-sm font-black tracking-[0.3em] uppercase">Core Tech</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-10 leading-tight"
          >
            ENGINEERING <br /><span className="text-indigo-500">STACK</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-2xl text-gray-300 font-bold mb-4">Technology Chosen With Intent</p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our technology stack is selected based on system needs, maintainability, and scalability. 
              We adapt our tools and frameworks as product requirements evolve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stack Details Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {stackAreas.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-5 bg-indigo-600 rounded-2xl shadow-2xl shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-indigo-400 text-xs font-black uppercase tracking-widest mb-2">{item.focus}</p>
                  <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">{item.desc}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {item.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integration Banner */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="w-16 h-16 text-white mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">Maintainable & Secure</h2>
          <p className="text-indigo-100 text-lg font-medium opacity-80 italic">
            "We prioritize clean and maintainable codebases to ensure long-term product growth without technical debt."
          </p>
        </div>
      </section>
    </div>
  );
};

export default StackPage;