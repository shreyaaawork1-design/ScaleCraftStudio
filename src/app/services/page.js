'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, Target, ArrowLeft } from 'lucide-react';
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

export default function ServicesPage() {
  const services = [
    { title: "Paid Ads", desc: "We run high-converting ad campaigns that focus on sales and profit, not just clicks.", icon: <TrendingUp size={24} /> },
    { title: "Brand Design", desc: "We create professional logos and brand styles that build instant trust with your customers.", icon: <Shield size={24} /> },
    { title: "Content Lab", desc: "High-quality reels and videos designed to grab attention and build a viral social presence.", icon: <Zap size={24} /> },
    { title: "Lead Systems", desc: "We build automated pipelines that bring new, qualified leads to your business consistently.", icon: <Target size={24} /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 selection:bg-[#d9ff00] selection:text-black">
      <ShardCursor />
      <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#d9ff00] mb-12 transition-all">
        <ArrowLeft size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Back to Hub</span>
      </Link>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tight mb-8">
          OUR <span className="text-zinc-800">EXPERTISE.</span>
        </h1>
        
        {/* GROWTH DIAGRAM TAG */}
        <div className="mb-20 opacity-80">
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-10 border border-white/5 bg-zinc-950 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
              <div className="text-[#d9ff00] mb-6">{s.icon}</div>
              <h3 className="text-2xl font-bold uppercase italic mb-4">{s.title}</h3>
              <p className="text-zinc-500 font-medium leading-relaxed italic">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}