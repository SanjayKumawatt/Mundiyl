import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form Submitted:", formData);
    setIsSent(true);
    
    // Reset message after 5 seconds
    setTimeout(() => setIsSent(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#0a0a0c] text-white pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter"
          >
            Connect <span className="text-indigo-500">With Us</span>
          </motion.h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Start a Conversation. We’re always open to discussing ideas, products, and technical challenges.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-indigo-500" />
                Company Details
              </h2>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-8">
                <div>
                  <p className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-2">Organization</p>
                  <p className="text-xl font-bold text-gray-200">MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED</p>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-xl h-fit text-indigo-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-2">Registered Address</p>
                    <p className="text-gray-400 leading-relaxed">
                      Ward-3, Village-Harsingpur, Post-Manik Chauk, Manikchowk,<br />
                      Sitamarhi, Runnisaidpur, Bihar, India – 843323
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-xl h-fit text-indigo-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-2">Support Email</p>
                    <p className="text-gray-200 font-bold italic">support@mundiyl.in</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] p-8 md:p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none transition-all"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none transition-all"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Subject</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none transition-all"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                <textarea 
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-indigo-500 focus:outline-none transition-all resize-none"
                  placeholder="Describe your project or query..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            {/* Inline Success Notification */}
            <AnimatePresence>
              {isSent && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="absolute inset-0 flex items-center justify-center bg-[#0a0a0c]/90 rounded-[2.5rem] border border-indigo-500/50 backdrop-blur-md z-20"
                >
                  <div className="text-center p-8">
                    <CheckCircle size={64} className="text-indigo-500 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-black text-white mb-2 uppercase">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. Our team at MUNDIYL will get back to you soon.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;