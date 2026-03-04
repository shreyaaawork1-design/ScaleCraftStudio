'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PencilRuler, PenTool, Rocket, PieChart, ArrowLeft } from 'lucide-react';
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

export default function WorkPage() {
  const steps = [
    { num: "01", title: "Market Discovery", desc: "We analyze your industry and competitors to find the best growth gaps.", icon: <Search /> },
    { num: "02", title: "Strategy Design", desc: "We build a visual roadmap and a clear plan to make your brand a leader.", icon: <PencilRuler /> },
    { num: "03", title: "Content Creation", desc: "Our lab produces high-quality storytelling content that attracts your audience.", icon: <PenTool /> },
    { num: "04", title: "Growth Launch", desc: "We start targeted campaigns to reach the right people at the right time.", icon: <Rocket /> },
    { num: "05", title: "Optimization", desc: "We track every result and improve the strategy to maximize your revenue.", icon: <PieChart /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <ShardCursor />
      <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#d9ff00] mb-12 transition-all">
        <ArrowLeft size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Exit Strategy</span>
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tight mb-20">
          THE <span className="text-zinc-800">PROCESS.</span>
        </h1>

        <div className="space-y-16">
          {steps.map((p, i) => (
            <div key={i} className="flex gap-10 items-start border-t border-white/5 pt-12 relative group">
              <span className="text-[#d9ff00] font-black text-4xl italic opacity-20 group-hover:opacity-100 transition-opacity">{p.num}</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold uppercase italic mb-3">{p.title}</h3>
                <p className="text-zinc-500 text-lg leading-relaxed italic">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}