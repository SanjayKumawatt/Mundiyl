import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Palette, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Layers, 
  Shield 
} from 'lucide-react';
import Mission from '../Component/Mission';
import TechStack from '../Component/TechStack';

const ProductsPage = () => {
  const products = [
    {
      id: "mailcraft",
      name: "MailCraft AI",
      tagline: "AI-Powered Email Writing & Automation Platform",
      description: "MailCraft AI is designed to simplify and enhance digital communication by assisting users in creating personalized, high-quality email content while automating campaign workflows.",
      focus: "The platform focuses on improving engagement by aligning message tone, structure, and content with user intent.",
      capabilities: [
        "Intelligent email content generation",
        "Personalization based on context and audience",
        "Automated email campaign workflows",
        "Consistent tone and clarity across communications"
      ],
      footerNote: "Built for individuals and teams who want to communicate effectively without spending excessive time crafting messages.",
      icon: <Mail className="w-10 h-10 text-indigo-400" />,
      accentColor: "indigo"
    },
    {
      id: "brandora",
      name: "Brandora AI",
      tagline: "AI-Driven Brand Identity Creation Tool",
      description: "Brandora AI helps users shape their brand identity by generating creative and strategic branding elements. The platform assists in defining how a brand looks, sounds, and communicates.",
      focus: "Rather than offering generic outputs, Brandora AI focuses on aligning brand elements with purpose and audience perception.",
      capabilities: [
        "Logo concept generation",
        "Brand voice and tone guidance",
        "Visual identity direction and suggestions",
        "Consistency across brand communication"
      ],
      footerNote: "Designed to support early-stage brands and digital creators in establishing a clear and cohesive identity.",
      icon: <Palette className="w-10 h-10 text-purple-400" />,
      accentColor: "purple"
    }
  ];

  return (
    <div className="bg-[#0a0a0c] text-white pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="py-20 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase"
          >
            Our <span className="text-indigo-500">Products</span>
          </motion.h1>
          <p className="text-xl text-gray-400 font-medium leading-relaxed">
            Focused Software Products Under Active Development. We are building independent software products that address real-world digital challenges using intelligent automation.
          </p>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-10 max-w-7xl mx-auto px-4 space-y-32 mb-32">
        {products.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
          >
            {/* Left: Product Info */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4">
                <div className={`p-4 bg-${product.accentColor}-500/10 rounded-2xl border border-${product.accentColor}-500/20 shadow-2xl shadow-${product.accentColor}-500/10`}>
                  {product.icon}
                </div>
                <div>
                  <h2 className="text-4xl font-black">{product.name}</h2>
                  <p className={`text-sm font-bold text-${product.accentColor}-400 uppercase tracking-widest mt-1`}>
                    {product.tagline}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed italic border-l-4 border-indigo-600 pl-6 bg-white/5 py-6 rounded-r-2xl">
                {product.description}
              </p>

              <div className="space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  Core Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group hover:border-indigo-500/30 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-400">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm text-indigo-300/60 font-medium">
                  {product.footerNote}
                </p>
              </div>

            </div>

            {/* Right: Visual Mockup Placeholder */}
            <div className="flex-1 w-full relative">
              <div className={`absolute -inset-4 bg-${product.accentColor}-500/10 blur-[60px] rounded-full`}></div>
              <div className="relative rounded-[2.5rem] bg-white/5 border border-white/10 p-4 aspect-video flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Layers className={`w-20 h-20 text-${product.accentColor}-500/30 mx-auto mb-4 animate-pulse`} />
                  <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.4em]">Development Phase</p>
                </div>
                {/* Overlaying "Under Construction" Vibe */}
                <div className="absolute top-4 right-4 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full">
                  <span className="text-[10px] text-yellow-500 font-black uppercase">Active Development</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <Mission/>
      <TechStack/>
      

      {/* Trust Banner */}
      <section className="py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-12 h-12 text-indigo-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Structured System Design</h3>
          <p className="text-gray-500 italic">
            "We focus on creating digital ecosystems where components work together efficiently."
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;