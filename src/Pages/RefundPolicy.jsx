import React from 'react';
import { motion } from 'framer-motion';
import { ReceiptIndianRupee, History, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

const RefundPolicy = () => {
  const lastUpdated = "January 28, 2026";

  return (
    <div className="bg-[#0a0a0c] text-white pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-500/30"
          >
            <ReceiptIndianRupee className="text-indigo-400 w-8 h-8" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
            Refund <span className="text-indigo-500">Policy</span>
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
            This Refund Policy outlines the conditions under which refunds may be issued for products or services offered by MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED.
          </div>

          {/* 1. Digital Products */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <AlertCircle className="text-indigo-500" size={24} /> 1. Digital Products & Software Services
            </h2>
            <p className="pl-9">
              Due to the nature of digital products and software-based services, refunds are generally not guaranteed once access has been provided or work has commenced.
            </p>
          </div>

          {/* 2. Eligibility (Card style) */}
          <div className="p-8 rounded-3xl bg-indigo-600/5 border border-indigo-500/20">
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle size={20} className="text-indigo-400" /> 2. Eligibility for Refunds
            </h2>
            <p className="mb-4 text-sm font-medium">Refunds may be considered under the following circumstances:</p>
            <ul className="space-y-4 pl-4">
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span>Duplicate payment made by the customer</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span>Payment processed but service not initiated</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <span>Technical issues preventing access where no resolution is possible</span>
              </li>
            </ul>
            <p className="mt-6 text-xs text-indigo-300/60 italic font-bold">Each refund request is evaluated individually.</p>
          </div>

          {/* 3. Non-Refundable Situations */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Non-Refundable Situations</h2>
            <div className="pl-9 space-y-3">
              <p>Refunds will not be provided if services have already been delivered, access to digital products has been granted, or delays occur due to incomplete customer information. Change of mind after service initiation is also non-refundable.</p>
            </div>
          </div>

          {/* Grid for 4, 5, 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-white font-bold uppercase text-xs tracking-widest">4. Requesting a Refund</h3>
              <p className="text-xs">Contact us within a reasonable time with transaction details. Requests can be submitted via our contact page.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-white font-bold uppercase text-xs tracking-widest">5. Refund Processing</h3>
              <p className="text-xs">Approved refunds use the original payment method. Processing time depends on your payment provider.</p>
            </div>
          </div>

          {/* 6. Policy Changes */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <History className="text-indigo-500" size={24} /> 6. Policy Changes
            </h2>
            <p className="pl-9">
              This Refund Policy may be updated as our services evolve. Changes will be posted on this page.
            </p>
          </div>

          {/* 7. Contact Details Footer */}
          <div className="mt-20 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center">
            <HelpCircle className="w-10 h-10 text-indigo-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 uppercase">7. Contact for Refunds</h2>
            <p className="text-gray-300">For refund-related inquiries:</p>
            <p className="text-white font-bold mt-2">MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED</p>
            <p className="text-sm mt-1 text-gray-500 uppercase tracking-widest">Sitamarhi, Bihar, India</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default RefundPolicy;