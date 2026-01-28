import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight, Heart } from 'lucide-react';
import logo from "../assets/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Links exact matching your Header menu
  const menuLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Who We Are', path: '/about' },
    { name: 'What We Build', path: '/services' },
    { name: 'Our Products', path: '/products' },
    { name: 'Our Capabilities', path: '/capabilities' },
    { name: 'Engineering Stack', path: '/stack' },
    { name: 'Connect With Us', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Refund Policy', path: '/refund-policy' }
  ];

  return (
    <footer className="bg-[#0a0a0c] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">

          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <div>
              <Link to="/" className=" text-2xl flex gap-2 items-center font-black tracking-tight text-white uppercase">
                <img src={logo} className='h-13' alt="" />

                <div>

                  MUNDIYL<span className="text-indigo-600">.</span>
                  <p className="text-[10px] text-gray-500 font-bold tracking-[0.3em] uppercase mt-1">
                    Software Services
                  </p>
                </div>
              </Link>

            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED is an early-stage IT startup focused on building intelligent, scalable, and adaptable software systems.
            </p>
          </div>

          {/* Header Sync Menu Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            </div>
            {menuLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-500 hover:text-indigo-400 text-sm transition-colors flex items-center group"
              >
                {link.name}
                <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>

          {/* Contact & Address Information */}
          <div className="space-y-8">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Reach Us</h4>

            <div className="space-y-6">
              <a href="mailto:support@mundiyl.in" className="flex items-start gap-4 group">
                <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Support Email</p>
                  <p className="text-sm text-gray-200">support@mundiyl.in</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Registered Office</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Ward-3, village-harsingpur,<br />
                    Post-manik Chauk, Manikchowk,<br />
                    Sitamarhi, Bihar, 843323
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] tracking-wide uppercase font-medium">
          <p className="text-gray-600">
            © {currentYear} MUNDIYL SOFTWARE SERVICES PRIVATE LIMITED.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-gray-500 hover:text-indigo-400 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;