import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, FileText, Lock, Eye, RefreshCcw } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "January 28, 2026"; // Current Date

  return (
    <div className="bg-[#0a0a0c] text-white pt-24 min-h-screen">
      {/* Header Section */}
      <section className="py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-500/30"
          >
            <ShieldAlert className="text-indigo-400 w-8 h-8" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
            Privacy <span className="text-indigo-500">Policy</span>
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
          className="prose prose-invert max-w-none space-y-12 text-gray-400"
        >
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl italic leading-relaxed">
            MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED (“we”, “our”, “us”) respects your privacy and is committed to protecting the personal information you share with us through our website and services. This Privacy Policy explains how we collect, use, store, and protect your information.
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <FileText className="text-indigo-500" size={24} /> 1. Information We Collect
            </h2>
            <div className="pl-9 space-y-4">
              <h3 className="text-white font-semibold">a) Personal Information</h3>
              <p>When you contact us or use our services, we may collect:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Name, Email address, and Contact details</li>
                <li>Company or organization name (if provided)</li>
                <li>Any information you submit through forms or communication channels</li>
              </ul>
              <h3 className="text-white font-semibold mt-6">b) Technical Information</h3>
              <p>We may automatically collect IP address, browser type and version, device information, and pages visited. This data is collected only to improve website performance and user experience.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Eye className="text-indigo-500" size={24} /> 2. How We Use Your Information
            </h2>
            <ul className="pl-9 list-disc space-y-2">
              <li>Responding to inquiries and communication requests</li>
              <li>Providing information about our products or services</li>
              <li>Improving website functionality and content</li>
              <li>Maintaining internal records and ensuring website security</li>
              <li className="text-indigo-400 font-medium">We do not use your information for unsolicited marketing.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Lock className="text-indigo-500" size={24} /> 3. Data Sharing & Disclosure
            </h2>
            <p className="pl-9">We do not sell, rent, or trade personal information. Information may be shared only when required by law, to protect our legal rights, or with trusted service providers strictly for operational purposes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">4. Data Security</h3>
              <p className="text-sm">We implement technical measures to protect data from unauthorized access, but no internet transmission is 100% secure.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">5. Cookies & Tracking</h3>
              <p className="text-sm">We use basic cookies to improve navigation. You may disable cookies in your browser settings if preferred.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">6. Third-Party Links</h2>
            <p className="pl-2">Our website may contain links to third-party sites. We are not responsible for the privacy practices of those external sites.</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <RefreshCcw className="text-indigo-500" size={24} /> 7. User Rights & Updates
            </h2>
            <p className="pl-9">You have the right to request access, correction, or deletion of your data via our contact page. This policy may be updated periodically; changes will be reflected on this page.</p>
          </div>

          {/* Contact Footer */}
          <div className="mt-20 p-10 bg-indigo-600/10 border border-indigo-500/20 rounded-[2.5rem] text-center">
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
            <p className="text-gray-300">For privacy-related inquiries, contact:</p>
            <p className="text-white font-bold mt-2">MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED</p>
            <p className="text-sm mt-2 text-gray-400">
              Ward-3, Village-Harsingpur, Post-Manik Chauk, Manikchowk,<br />
              Sitamarhi, Runnisaidpur, Bihar, India – 843323
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;