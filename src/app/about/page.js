'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// --- INSERT SHARDCURSOR CODE HERE ---
const ShardCursor = () => {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <ShardCursor />
      <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#d9ff00] mb-12 transition-all">
        <ArrowLeft size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Back</span>
      </Link>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tight mb-16 leading-none">
          THE <span className="text-[#d9ff00]">TEAM.</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-10 text-zinc-400 text-xl font-medium leading-relaxed italic border-l-2 border-[#d9ff00]/20 pl-8">
            <p>ScaleCraft Studio is a performance agency based in Gurugram, Haryana. We help startups build market authority through engineering and design.</p>
            <p>Founded by <span className="text-white">Mr. Mankirat Singh</span> and <span className="text-white">Mr. Aakash Setia</span>, our mission is to scale brands that demand results.</p>
          </div>
          
          <div className="space-y-6">
            <div className="p-10 bg-zinc-950 border border-white/5 rounded-[40px] hover:border-[#d9ff00]/20 transition-all text-center">
              <MapPin className="text-[#d9ff00] mx-auto mb-4" size={24} />
              <h4 className="text-white font-bold uppercase text-[10px] mb-1">HQ Location</h4>
              <p className="text-zinc-500 text-xs italic">Gurugram, Haryana</p>
            </div>
            <div className="p-10 bg-[#d9ff00] rounded-[40px] text-center">
              <Users className="text-black mx-auto mb-4" size={24} />
              <h4 className="text-black font-bold uppercase text-[10px] mb-1">Co-Founders</h4>
              <p className="text-black/60 text-[10px] font-bold uppercase tracking-widest leading-none">Mankirat Singh & <br /> Aakash Setia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}