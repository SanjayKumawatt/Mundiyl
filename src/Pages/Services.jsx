import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeSquare, 
  Workflow, 
  Lightbulb, 
  Globe, 
  Network, 
  Server, 
  MonitorSmartphone, 
  Database, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

import img from "../assets/ai.png"
import Mission from '../Component/Mission';
import TechStack from '../Component/TechStack';


const ServicesPage = () => {
  const mainServices = [
    {
      title: "Custom Software Systems",
      desc: "We design and develop custom software tailored to specific operational or product needs. This includes defining system architecture and ensuring reliable interactions between modules.",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800",
      features: ["Modular & extensible architecture", "Clean code structure", "Future-ready design"],
      icon: <CodeSquare className="w-6 h-6" />
    },
    {
      title: "Automation-Driven Applications",
      desc: "We build applications that integrate automation into everyday workflows, reducing repetitive manual work while maintaining consistency and efficiency.",
      image: img,
      features: ["Workflow orchestration", "Automated communication", "Data processing pipelines"],
      icon: <Workflow className="w-6 h-6" />
    },
    {
      title: "Intelligent & AI-Assisted Software",
      desc: "We develop intelligent software components that support smarter decision-making. Practical intelligence that improves productivity without unnecessary complexity.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      features: ["Smart decision support", "Seamless platform integration", "Productivity-focused AI"],
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Web & Platform Development",
      desc: "Modern web platforms that emphasize performance, usability, and scalability, designed to support multi-user environments and evolving features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      features: ["High-performance UI", "Scalable infrastructure", "Multi-user support"],
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const technicalExpertise = [
    { title: "System Architecture", icon: <Network />, desc: "Designing long-term stability and flexibility." },
    { title: "Backend Engineering", icon: <Server />, desc: "Secure business logic and integrations." },
    { title: "Frontend Engineering", icon: <MonitorSmartphone />, desc: "Clean, responsive, and accessible UIs." },
    { title: "Data Processing", icon: <Database />, desc: "Efficient handling with data integrity." },
    { title: "Quality Assurance", icon: <ShieldCheck />, desc: "Integrated testing for system reliability." }
  ];

  return (
    <div className="bg-[#0a0a0c] text-white pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 text-indigo-400 text-xs font-bold uppercase tracking-widest">
            What We Build
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Software Systems <br /><span className="text-indigo-500">Designed for Growth</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg italic">
            "Our focus extends to creating well-structured digital ecosystems where components work together efficiently, ensuring products evolve without rework."
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {mainServices.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="p-3 bg-indigo-600 rounded-2xl shadow-xl">{service.icon}</div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-8 leading-relaxed">{service.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight size={14} className="text-indigo-500" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <TechStack/>
      

      {/* Technical Capabilities Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-16 text-center uppercase tracking-widest">Technical <span className="text-indigo-500">Capabilities</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technicalExpertise.map((tech, tIdx) => (
              <motion.div 
                key={tIdx}
                whileHover={{ y: -10 }}
                className="p-6 rounded-2xl bg-black border border-white/5 text-center group hover:border-indigo-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {tech.icon}
                </div>
                <h4 className="font-bold text-sm mb-2 text-white">{tech.title}</h4>
                <p className="text-[11px] text-gray-500">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;