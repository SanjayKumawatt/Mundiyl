import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Palette, Sparkles, Send, CheckCircle2, Zap } from 'lucide-react';

const Products = () => {
  const products = [
    {
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
      footer: "MailCraft AI is built to support individuals and teams who want to communicate effectively without spending excessive time crafting messages.",
      icon: <Mail className="w-8 h-8 text-indigo-400" />,
      gradient: "from-indigo-500/20 to-blue-500/5"
    },
    {
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
      footer: "Brandora AI is designed to support early-stage brands and digital creators in establishing a clear and cohesive identity.",
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      gradient: "from-purple-500/20 to-pink-500/5"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6"
          >
            OUR <span className="text-indigo-500">PRODUCTS</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
            Focused Software Products Under Active Development
          </p>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto italic">
            In addition to custom systems, we are building independent software products that address real-world digital challenges using intelligent automation and structured system design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br ${product.gradient} border border-white/10 backdrop-blur-md group hover:border-indigo-500/40 transition-all duration-500`}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Sparkles className="w-3 h-3 text-indigo-400" />
                      <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{product.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 mb-8">
                  <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
                  <p className="text-gray-400 text-sm italic border-l-2 border-indigo-500/30 pl-4">{product.focus}</p>
                </div>

                {/* Capabilities Grid */}
                <div className="mt-auto">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    Core Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {product.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Note */}
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-xs text-indigo-200/50 font-medium leading-relaxed">
                      {product.footer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;