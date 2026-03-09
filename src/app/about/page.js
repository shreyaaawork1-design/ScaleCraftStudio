'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, MapPin, Mail, Phone, Cpu, Globe, 
  Shield, Zap, Fingerprint, Target, MousePointer2, 
  Users, Award, TrendingUp, Microscope, Landmark, 
  Workflow, Network, BarChart3, Binary, Sparkles, TrendingUp as SalesIcon, Menu, X, Instagram, Twitter, Layers, Activity
} from 'lucide-react';
import Link from 'next/link';

// --- DATA ---
const navData = [
  { label: 'Our Services', link: '/services' },
  { label: 'How we work', link: '/work' },
  { label: 'About Us', link: '/about' }
];

// --- SHARD CURSOR (Fast + Smart Inversion) ---
const ShardCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 800, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 800, mass: 0.5 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      window.requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="fixed top-0 left-0 z-[10000] pointer-events-none hidden md:block" 
      style={{ x: smoothX, y: smoothY, mixBlendMode: 'difference' }}
    >
      <MousePointer2 size={22} fill="#d9ff00" className="text-[#d9ff00] drop-shadow-[0_0_12px_rgba(217,255,0,0.9)]" />
    </motion.div>
  );
};

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d9ff00] selection:text-black overflow-x-hidden">
      <ShardCursor />

      {/* --- REFINED HEADER --- */}
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 w-[94%] md:w-[90%] z-[1000] px-3 md:px-10 py-2 md:py-4 flex flex-col rounded-[20px] md:rounded-[32px] bg-white/[0.05] backdrop-blur-[40px] border border-white/20 shadow-2xl transition-all duration-700">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="shrink-0">
            <div className="text-[12px] md:text-xl font-black tracking-tighter uppercase italic text-white transition-all hover:drop-shadow-[0_0_15px_rgba(217,255,0,0.9)]">
              SCALECRAFT<span className="text-[#d9ff00]">STUDIO.</span>
            </div>
          </Link>

          <div className="hidden lg:flex gap-4">
            {navData.map((item, i) => (
              <Link key={i} href={item.link}>
                <button className={`px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] transition-all ${item.label === 'About Us' ? 'text-[#d9ff00]' : 'text-zinc-400 hover:text-[#d9ff00]'}`}>
                  {item.label} 
                </button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/contact">
              <button className="bg-[#d9ff00] text-black px-3 md:px-8 py-2 md:py-3.5 rounded-lg md:rounded-2xl font-[1000] text-[8px] md:text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1 hover:scale-105 transition-all border-none">
                <Phone size={10} className="animate-bounce" /> START SCALING
              </button>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden flex flex-col gap-1 mt-4 pb-4 px-2">
              {navData.map((item, i) => (
                <Link key={i} href={item.link} onClick={() => setIsMenuOpen(false)}>
                  <div className="py-3 border-b border-white/5">
                    <span className={`font-black uppercase tracking-widest text-[10px] ${item.label === 'About Us' ? 'text-[#d9ff00]' : 'text-zinc-400'}`}>{item.label}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO --- */}
      <section className="pt-40 md:pt-52 pb-16 px-6 md:px-24">
        <div className="max-w-6xl">
          <span className="text-[#d9ff00] font-bold tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[13px] uppercase block mb-6 md:mb-10 italic opacity-80">
            Leading Performance Lab in Gurugram
          </span>
          <h1 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8 md:mb-12">
            THE ARCHITECTS <br /> <span className="text-zinc-800">OF AUTHORITY.</span>
          </h1>
          <p className="text-zinc-500 text-base md:text-xl font-medium leading-relaxed italic border-l-4 border-[#d9ff00]/20 pl-6 md:pl-10 max-w-4xl">
            ScaleCraft Studio is a high-speed performance laboratory. Based in Gurgaon, we operate at the intersection of clinical data engineering and high-end visual storytelling.
          </p>
        </div>
      </section>

      {/* --- GENESIS --- */}
      <section className="py-16 md:py-24 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="space-y-8 md:space-y-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">The <br/> <span className="text-[#d9ff00]">Genesis.</span></h2>
            <div className="text-zinc-400 text-sm md:text-lg font-medium italic space-y-6 md:space-y-8 leading-relaxed">
              <p>ScaleCraft Studio was founded to solve the crisis of digital mediocrity. Our history is rooted in technical discipline, treating every campaign like a high-precision software deployment.</p>
              <p>Today, we stand as the primary laboratory for brands that refuse to settle for "average" growth. We have bridged the gap between technical infrastructure and human connection.</p>
            </div>
          </div>
          <div className="bg-zinc-950 border border-white/5 rounded-[40px] md:rounded-[60px] h-[350px] md:h-[450px] flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-[#d9ff00]/5 to-transparent" />
             <div className="p-8 md:p-16 relative z-10 text-center space-y-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-900 border border-[#d9ff00]/30 rounded-[20px] md:rounded-[28px] mx-auto flex items-center justify-center shadow-2xl">
                   <Workflow size={32} className="text-[#d9ff00]" />
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase italic tracking-widest text-white">Systemic Growth.</h3>
                <p className="text-zinc-500 text-[10px] md:text-sm italic">"Clinical engineering for market leaders."</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOUNDERS --- */}
      <section className="py-16 md:py-24 bg-zinc-950/30 px-6 md:px-24">
        <div className="text-center mb-16 md:mb-24">
          <h4 className="text-[#d9ff00] font-black uppercase text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] italic mb-4 md:mb-6">The Minds Behind The Lab</h4>
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">THE <br/> <span className="text-zinc-800">FOUNDERS.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-6xl mx-auto">
          <div className="space-y-8 md:space-y-10 group text-center">
             <div className="max-w-[280px] md:max-w-[320px] aspect-[4/5] bg-zinc-900 border border-white/5 rounded-[40px] md:rounded-[48px] relative overflow-hidden shadow-2xl mx-auto">
                <div className="absolute inset-0 flex items-center justify-center opacity-10"><Users size={100} /></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black to-transparent">
                   <SalesIcon className="text-[#d9ff00] mb-2" size={24} />
                   <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">Mr. Mankirat Singh</h3>
                </div>
             </div>
             <div className="px-4">
                <p className="text-[#d9ff00] font-black uppercase text-[8px] md:text-[10px] tracking-[0.4em] mb-4">Managing Partner | Sales Strategy</p>
                <p className="text-zinc-400 text-sm md:text-lg font-medium italic leading-relaxed">
                  Drives the Sales Vision at ScaleCraft, specializing in consumer psychology and market positioning.
                </p>
             </div>
          </div>

          <div className="space-y-8 md:space-y-10 group text-center">
             <div className="max-w-[280px] md:max-w-[320px] aspect-[4/5] bg-zinc-900 border border-white/5 rounded-[40px] md:rounded-[48px] relative overflow-hidden shadow-2xl mx-auto">
                <div className="absolute inset-0 flex items-center justify-center opacity-10"><Users size={100} /></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black to-transparent">
                   <Sparkles className="text-[#d9ff00] mb-2" size={24} />
                   <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">Mr. Aakash Setia</h3>
                </div>
             </div>
             <div className="px-4">
                <p className="text-[#d9ff00] font-black uppercase text-[8px] md:text-[10px] tracking-[0.4em] mb-4">Creative Director | Visual Systems</p>
                <p className="text-zinc-400 text-sm md:text-lg font-medium italic leading-relaxed">
                  The Creative Force behind ScaleCraft's high-end visual systems and stop-the-scroll aesthetics.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- NICHE LEADERSHIP --- */}
      <section className="py-16 md:py-24 px-6 md:px-24 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch relative z-10">
          <div className="lg:col-span-4 bg-[#d9ff00] rounded-[40px] md:rounded-[60px] p-8 md:p-10 text-black flex flex-col justify-between shadow-2xl relative overflow-hidden">
             <div className="space-y-4 md:space-y-6">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">Industry Domination</p>
                <h4 className="text-3xl md:text-5xl font-[1000] uppercase italic tracking-tighter leading-[0.85]">
                  NICHE <br/> LEADERSHIP <br/> <span className="text-black/40">ARCHITECTURE.</span>
                </h4>
             </div>
             <p className="text-base md:text-lg font-bold italic leading-tight border-l-4 border-black/20 pl-6 mt-8">
               "We specialize in dominance, not generalism."
             </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             {[
               { icon: <Landmark size={20}/>, title: "Premium Real Estate", desc: "Lead generation for luxury housing in Gurgaon, Noida, and Ghaziabad." },
               { icon: <Sparkles size={20}/>, title: "D2C Scaling", desc: "Taking home-grown brands and scaling them into household names." },
               { icon: <Fingerprint size={20}/>, title: "Visual Branding", desc: "Creating Luxury Identity Systems that mirror prestige." },
               { icon: <Binary size={20}/>, title: "Technical E-Com", desc: "Ultra-fast storefronts using Next.js and Vercel for ROI optimization." }
             ].map((niche, idx) => (
               <div key={idx} className="p-6 md:p-8 bg-zinc-950 border border-white/5 rounded-[30px] md:rounded-[48px] hover:border-[#d9ff00]/20 transition-all">
                  <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 border border-white/10 text-[#d9ff00]">
                    {niche.icon}
                  </div>
                  <h5 className="text-lg md:text-xl font-black uppercase italic tracking-tighter mb-4">{niche.title}</h5>
                  <p className="text-zinc-500 text-[12px] md:text-sm italic leading-relaxed">{niche.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- VISION 2026 --- */}
      <section className="py-16 md:py-24 bg-zinc-950/50 px-6 md:px-24 text-center">
         <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
<Network size={80} className="text-[#d9ff00]/20 mx-auto" />            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">THE <span className="text-[#d9ff00]">VISION</span> FOR 2026.</h2>
            <div className="text-zinc-400 text-sm md:text-xl font-medium italic space-y-6 md:space-y-10 max-w-4xl mx-auto leading-relaxed">
               <p>We are engineering <span className="text-[#d9ff00]">Business Operating Systems</span>, integrating AI creative intelligence with clinical data auditing.</p>
               <p>Expanding our footprint from NCR to the global landscape, maintaining our core 'Brand DNA First' philosophy.</p>
            </div>
         </div>
      </section>

      {/* --- FOOTER (Synced) --- */}
      <footer className="py-16 md:py-24 bg-black border-t border-white/5 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start">
          <div className="space-y-8 text-white">
            <div className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">SCALE<span className="text-[#d9ff00]">CRAFT.</span></div>
            <p className="text-zinc-500 font-medium italic max-w-xs text-xs md:text-sm leading-relaxed">Performance-driven branding studio based in Gurgaon.</p>
            <div className="flex gap-6 items-center">
              <a href="#" className="text-zinc-500 hover:text-[#d9ff00] transition-all"><Instagram size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-[#d9ff00] transition-all"><Twitter size={20} /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=scalecraftstudio7@gmail.com" className="text-zinc-500 hover:text-[#d9ff00] transition-all"><Mail size={20} /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-white font-black text-[9px] md:text-[10px] uppercase border-b border-[#d9ff00]/20 pb-2">LINKS</p>
              <ul className="space-y-3 text-zinc-500 font-bold uppercase text-[8px] md:text-[9px] tracking-widest">
                <li><Link href="/services" className="hover:text-[#d9ff00] flex items-center gap-2"><Layers size={12}/> Services</Link></li>
                <li><Link href="/work" className="hover:text-[#d9ff00] flex items-center gap-2"><Activity size={12}/> How we work</Link></li>
                <li className="text-[#d9ff00] flex items-center gap-2"><Target size={12}/> About Us</li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-white font-black text-[9px] md:text-[10px] uppercase border-b border-[#d9ff00]/20 pb-2">HQ</p>
              <div className="space-y-4 text-zinc-500 text-[8px] md:text-[9px] font-bold uppercase tracking-widest leading-loose">
                <p className="flex gap-3 items-center"><MapPin size={14} className="text-[#d9ff00] shrink-0" /> Gurgaon, HR</p>
                <p className="flex gap-3 truncate items-center"><Mail size={14} className="text-[#d9ff00] shrink-0" /> scalecraftstudio7</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-8">
            <h4 className="text-3xl md:text-4xl font-black uppercase italic text-white leading-none">READY TO <br /> <span className="text-zinc-800 underline decoration-[#d9ff00]/30 italic">SCALE FAST?</span></h4>
            <Link href="/contact">
              <button className="group relative w-32 h-32 md:w-36 md:h-36 rounded-full border border-white/10 flex items-center justify-center bg-transparent hover:bg-[#d9ff00] transition-all duration-700 shadow-2xl overflow-hidden">
                 <span className="text-white group-hover:text-black font-black uppercase text-[9px] z-10 text-center leading-tight">BOOK A <br /> CALL <ArrowUpRight className="inline ml-1" size={12} /></span>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-zinc-700 text-[7px] md:text-[8px] tracking-[0.5em] md:tracking-[1em] font-black uppercase italic">© 2026 ScaleCraft Studio | Gurgaon</p>
        </div>
      </footer>
    </main>
  );
}