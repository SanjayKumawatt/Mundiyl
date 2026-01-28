import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm overflow-hidden"
        >
          {/* Subtle Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 rotate-3 shadow-xl shadow-indigo-600/40"
            >
              <Target className="text-white w-8 h-8" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
              Our <span className="text-indigo-400">Mission</span>
            </h2>

            <p className="text-xl md:text-3xl font-medium text-indigo-50/90 leading-tight md:leading-snug max-w-4xl italic">
              "To build <span className="text-white font-bold border-b-2 border-indigo-500">reliable and intelligent</span> software products that remain simple to use, flexible to scale, and strong at their core."
            </p>

            {/* Core Values Mini-Section */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full border-t border-white/5 pt-10">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-indigo-400" />
                <span className="text-gray-300 font-semibold uppercase tracking-wider text-xs">Reliability</span>
              </div>
              <div className="flex flex-col items-center gap-2 border-x border-white/5">
                <Zap className="w-6 h-6 text-indigo-400" />
                <span className="text-gray-300 font-semibold uppercase tracking-wider text-xs">Intelligence</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-indigo-400 border-t-transparent animate-spin-slow"></div>
                <span className="text-gray-300 font-semibold uppercase tracking-wider text-xs">Scalability</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;