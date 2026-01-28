import React from 'react';
import { motion } from 'framer-motion';
import { Scale, BookOpen, AlertTriangle, Gavel, FileCheck } from 'lucide-react';

const TermsAndConditions = () => {
  const lastUpdated = "January 28, 2026";

  return (
    <div className="bg-[#0a0a0c] text-white pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-500/30"
          >
            <Scale className="text-indigo-400 w-8 h-8" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
            Terms & <span className="text-indigo-500">Conditions</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm">
            MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED
          </p>
          <p className="mt-4 text-indigo-400/60 text-xs font-medium">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12 text-gray-400 leading-relaxed"
        >
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-gray-300 italic text-center">
            "By accessing or using this website, you agree to comply with and be bound by the following Terms and Conditions."
          </div>

          {/* 1. Website Usage */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <BookOpen className="text-indigo-500" size={24} /> 1. Website Usage
            </h2>
            <p className="pl-9">
              The content provided on this website is for general informational purposes only. Users must not misuse the website in any way that may damage, disable, or impair its functionality.
            </p>
          </div>

          {/* 2. Intellectual Property */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <FileCheck className="text-indigo-500" size={24} /> 2. Intellectual Property Rights
            </h2>
            <div className="pl-9 space-y-3">
              <p>All content on this website, including text, graphics, logos, designs, and software elements, is the property of <span className="text-white font-semibold">MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED</span> unless otherwise stated.</p>
              <p className="text-indigo-400/80 font-medium italic">Unauthorized copying, reproduction, distribution, or modification is strictly prohibited.</p>
            </div>
          </div>

          {/* 3. Services & Products */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <AlertTriangle className="text-indigo-500" size={24} /> 3. Services & Product Information
            </h2>
            <p className="pl-9">
              Descriptions of products and services are provided for informational purposes. Availability, features, and specifications may change without notice as products evolve. We do not guarantee uninterrupted availability of services at all times.
            </p>
          </div>

          {/* 4. User Responsibilities (Card style) */}
          <div className="p-8 rounded-3xl bg-indigo-600/5 border border-indigo-500/20">
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">4. User Responsibilities</h2>
            <ul className="space-y-4 pl-4">
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span>Not to submit false or misleading information.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span>Not to attempt unauthorized access to systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span>Not to use the website for illegal or harmful activities.</span>
              </li>
            </ul>
          </div>

          {/* 5. Limitation of Liability */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
            <p className="pl-4 border-l-2 border-white/10">
              MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED shall not be liable for any direct or indirect damages, loss of data, profits, business opportunities, or temporary service disruptions. Use of the website is at your own risk.
            </p>
          </div>

          {/* Grid for 6, 7, 8, 9 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-white font-bold uppercase text-sm tracking-widest">6. External Links</h3>
              <p className="text-sm">We are not responsible for the content, availability, or policies of third-party resources linked on this site.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-white font-bold uppercase text-sm tracking-widest">7. Termination</h3>
              <p className="text-sm">We reserve the right to restrict or terminate access to the website if these Terms are violated.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-white font-bold uppercase text-sm tracking-widest">8. Governing Law</h3>
              <p className="text-sm">These Terms shall be governed by and interpreted in accordance with the laws of India.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-white font-bold uppercase text-sm tracking-widest">9. Changes to Terms</h3>
              <p className="text-sm">Continued use of the website implies acceptance of updated terms which may be revised at any time.</p>
            </div>
          </div>

          {/* 10. Contact Details Footer */}
          <div className="mt-20 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center">
            <Gavel className="w-10 h-10 text-indigo-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 uppercase">10. Contact Details</h2>
            <p className="text-gray-300">For any questions regarding these Terms:</p>
            <p className="text-white font-bold mt-2">MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED</p>
            <p className="text-sm mt-1 text-gray-500 uppercase tracking-widest">Sitamarhi, Bihar, India</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsAndConditions;