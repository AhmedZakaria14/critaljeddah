'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const phoneNumber = "0545334871";
const logoUrl = "/media/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/about', label: 'من نحن' },
    { href: '/services', label: 'خدماتنا' },
    { href: '/gallery', label: 'أعمالنا' },
    { href: '/blog', label: 'المدونة' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-stone-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image src={logoUrl} alt="حداد كريتال جدة" fill className="object-contain" referrerPolicy="no-referrer" priority />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-stone-800">حداد كريتال</span>
                <span className="text-xs text-amber-600 tracking-widest uppercase mt-0.5 font-bold">بجدة</span>
              </div>
            </Link>
            
            <div className="hidden md:flex gap-8 text-sm font-bold tracking-wide">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-stone-600 hover:text-amber-600 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={`tel:${phoneNumber}`}
                className="hidden md:flex items-center gap-3 bg-stone-100 border border-stone-200 text-stone-800 px-6 py-3 rounded-full font-bold hover:bg-white hover:border-amber-200 transition-all shadow-sm hover:shadow-md group"
              >
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <span dir="ltr" className="tracking-wider">{phoneNumber}</span>
              </a>
              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-stone-800 p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg transition-colors"
                aria-label="القائمة الرئيسية"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 md:hidden flex flex-col"
          >
            <div className="flex-1 overflow-y-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-stone-800 border-b border-stone-100 pb-4 hover:text-amber-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="mt-8">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-3 bg-amber-50 border border-amber-200 text-stone-800 px-6 py-4 rounded-full font-bold hover:bg-amber-100 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-amber-600">
                    <Phone size={16} className="fill-current" />
                  </div>
                  <span dir="ltr" className="tracking-wider">{phoneNumber}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
