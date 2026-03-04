'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';

// --- CUSTOM CURSOR (Ab contact page par bhi dikhega) ---
const ShardCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <motion.div 
      className="fixed top-0 left-0 w-4 h-4 bg-[#d9ff00] z-[10000] pointer-events-none mix-blend-difference" 
      animate={{ x: pos.x - 8, y: pos.y - 8 }} 
      transition={{ type: 'spring', damping: 25, stiffness: 450 }} 
    />
  );
};

export default function ContactPage() {
  return (
    <div className="h-screen bg-black text-white font-sans selection:bg-[#d9ff00] selection:text-black overflow-hidden flex flex-col p-8 md:p-12">
      <ShardCursor />

      {/* --- MINIMAL NAV --- */}
      <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#d9ff00] mb-8 transition-all group w-fit">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[9px] font-black uppercase tracking-[0.3em]">Back</span>
      </Link>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        
        {/* LEFT: REFINED TYPOGRAPHY */}
        <div>
          <span className="text-[#d9ff00] font-black text-[9px] uppercase tracking-[0.5em] mb-4 block italic opacity-60">Phase 05: Initiation</span>
          <h1 className="text-6xl md:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8">
            LET'S <br /> <span className="text-zinc-800">TALK.</span>
          </h1>
          <div className="space-y-6 border-l border-zinc-800 pl-6">
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest leading-relaxed">
              Based in Gurugram, Haryana.
            </p>
            <p className="text-zinc-400 text-xs italic">scalecraftstudio7@gmail.com</p>
          </div>
        </div>

        {/* RIGHT: CLEAN UNDERLINED FORM */}
        <form action="https://formspree.io/f/xnjberbk" method="POST" className="space-y-10">
          <div className="grid grid-cols-2 gap-8">
            <input type="text" name="name" required className="bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-[#d9ff00] transition-colors text-lg font-bold placeholder:text-zinc-800 uppercase" placeholder="Name" />
            <input type="text" name="brand" required className="bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-[#d9ff00] transition-colors text-lg font-bold placeholder:text-zinc-800 uppercase" placeholder="Brand" />
          </div>
          
          <input type="email" name="email" required className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-[#d9ff00] transition-colors text-lg font-bold placeholder:text-zinc-800 uppercase" placeholder="Email Address" />
          
          <textarea name="message" rows="1" required className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-[#d9ff00] transition-colors text-lg font-bold placeholder:text-zinc-800 uppercase resize-none" placeholder="Project Brief"></textarea>
          
          <input type="hidden" name="_to" value="scalecraftstudio7@gmail.com" />

          <button type="submit" className="group flex items-center gap-6 bg-[#d9ff00] text-black px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all shadow-[0_10px_30px_rgba(217,255,0,0.1)]">
            Send Message <Send size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>

      {/* FOOTER STRIPE */}
      <div className="mt-auto pt-8 border-t border-white/5">
        <p className="text-zinc-800 text-[8px] tracking-[1em] font-black uppercase text-center">SCALECRAFT STUDIO 2026</p>
      </div>
    </div>
  );
}