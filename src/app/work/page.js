'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Search, PencilRuler, PenTool, Rocket, PieChart, 
  ArrowUpRight, MapPin, Mail, Phone, Cpu, Globe, 
  Shield, Zap, Binary, Target, MousePointer2, Fingerprint, Activity, Code2, Scan, Radar, Network, 
  Menu, X, Instagram, Twitter, Layers 
} from 'lucide-react';
import Link from 'next/link';

// --- DATA ---
const navData = [
  { label: 'Our Services', link: '/services' },
  { label: 'How we work', link: '/work' },
  { label: 'About Us', link: '/about' }
];

// --- SHARD CURSOR (Performance Boosted & Fast Refresh) ---
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

// --- ELITE PROCESS VISUALS (Syntax Fixed) ---
const VisualAnimation = ({ id }) => {
  switch(id) {
    case "01": 
      return (
        <div className="relative w-full h-full flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9ff00]/5 to-transparent">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-40 h-40 md:w-80 md:h-80 border border-dashed border-[#d9ff00]/20 rounded-full" />
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-32 h-32 md:w-64 md:h-64 bg-[#d9ff00] rounded-full blur-[60px] md:blur-[100px]" />
          <div className="relative z-10 flex gap-2 md:gap-4">
             {[1,2,3].map(i => <motion.div key={i} animate={{ y: [0, -20, 0] }} transition={{ duration: 2, delay: i*0.3, repeat: Infinity }} className="w-2 h-2 bg-[#d9ff00] rounded-full shadow-[0_0_10px_#d9ff00]" />)}
          </div>
          <Search size={60} className="absolute text-[#d9ff00]/20" />
        </div>
      );
    case "02": 
      return (
        <div className="relative w-full h-full flex items-center justify-center scale-75 md:scale-100">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="grid grid-cols-3 gap-2 md:gap-4">
             {Array.from({length: 9}).map((_, i) => (
               <motion.div key={i} animate={{ borderColor: ["rgba(217,255,0,0.1)", "rgba(217,255,0,0.5)", "rgba(217,255,0,0.1)"] }} transition={{ duration: 2, delay: i*0.1, repeat: Infinity }} className="w-12 h-12 md:w-16 md:h-16 border rounded-xl flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#d9ff00]/30 rounded-full" />
               </motion.div>
             ))}
          </motion.div>
          <motion.div animate={{ x: [-50, 50, -50] }} transition={{ duration: 4, repeat: Infinity }} className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#d9ff00]/40 to-transparent" />
        </div>
      );
    case "03": 
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
          <div className="flex gap-4 md:gap-8 opacity-20">
             {Array.from({length: 5}).map((_, i) => (
               <motion.div key={i} animate={{ y: [-100, 100] }} transition={{ duration: 3, delay: i*0.5, repeat: Infinity, ease: "linear" }} className="text-[8px] md:text-[10px] font-mono text-[#d9ff00] flex flex-col">
                  {["0","1","0","1","0"].map((n, j) => <span key={j}>{n}</span>)}
               </motion.div>
             ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
             <Code2 className="text-[#d9ff00] drop-shadow-[0_0_15px_rgba(217,255,0,0.4)]" size={50} />
          </div>
        </div>
      );
    case "04": 
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg width="120" height="120" viewBox="0 0 200 200" className="drop-shadow-[0_0_15px_rgba(217,255,0,0.3)]">
             <motion.path 
               d="M 20 180 Q 100 180 180 20" 
               fill="none" stroke="#d9ff00" strokeWidth="4" 
               initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }}
             />
          </svg>
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-10 right-10">
             <Rocket size={50} className="text-[#d9ff00]/60 rotate-45" />
          </motion.div>
        </div>
      );
    case "05": 
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-24 h-24 md:w-40 md:h-40 border-2 border-[#d9ff00] rounded-full" />
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-16 h-16 md:w-24 md:h-24 bg-zinc-900 border border-[#d9ff00]/30 rounded-full flex items-center justify-center">
             <Activity className="text-[#d9ff00]" size={25} />
          </motion.div>
        </div>
      );
    default: return null;
  }
};

export default function WorkPage() {
  const [activeTerm, setActiveTerm] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const strategyTerms = ["AUDIENCE_INSIGHTS", "CONVERSION_GAPS", "DATA_MODELING", "PSYCH_PROFILING", "ROI_MAXIMIZATION"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTerm((prev) => (prev + 1) % strategyTerms.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [strategyTerms.length]);

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
                <button className={`px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] transition-all ${item.label === 'How we work' ? 'text-[#d9ff00]' : 'text-zinc-400 hover:text-[#d9ff00]'}`}>
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
                    <span className={`font-black uppercase tracking-widest text-[10px] ${item.label === 'How we work' ? 'text-[#d9ff00]' : 'text-zinc-400'}`}>{item.label}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO --- */}
      <section className="pt-40 md:pt-52 pb-16 md:pb-24 px-6 md:px-24">
        <div className="max-w-6xl">
          <span className="text-[#d9ff00] font-bold tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[13px] uppercase block mb-6 md:mb-10 italic opacity-80">
            Leading Performance Lab in Gurugram
          </span>
          <h1 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8 md:mb-12">
            ENGINEERED <br /> <span className="text-zinc-800">EXECUTION.</span>
          </h1>
          <p className="text-zinc-500 text-base md:text-xl font-medium leading-relaxed italic border-l-4 border-[#d9ff00]/20 pl-6 md:pl-10 max-w-4xl">
            Success is not a product of luck; it is a result of clinical engineering. We dismantle the chaos of traditional marketing to install a <span className="text-[#d9ff00]">high-speed, data-driven revenue engine</span> tailored for the ambitious digital landscape of Gurugram.
          </p>
        </div>
      </section>

      {/* --- SECTION 1: GROWTH STRATEGIES --- */}
      <section className="py-24 md:py-48 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5 shrink-0"><Target className="text-[#d9ff00]" size={20} /></div>
               <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight">Growth <br/> <span className="text-[#d9ff00]">Strategies.</span></h2>
            </div>
            <div className="text-zinc-400 text-sm md:text-lg font-medium italic space-y-6 md:space-y-8 leading-relaxed">
              <p>Our growth strategies are founded on the principle of <span className="text-[#d9ff00]">Psychological Performance Architecture</span>. We target human behavior, not just demographics.</p>
              <p>We utilize <span className="text-[#d9ff00]">High-Intensity Data Modeling</span> to predict market shifts before they happen, building technical funnel hierarchies that guide prospects.</p>
            </div>
          </motion.div>
          
          <div className="sticky top-32 bg-zinc-950 border border-white/5 rounded-[40px] md:rounded-[60px] h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden shadow-2xl group">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[150%] h-[150%] border-[1px] border-dashed border-[#d9ff00]/10 rounded-full" />
             <div className="relative z-10 flex flex-col items-center">
                <Radar size={80} className="text-[#d9ff00] drop-shadow-[0_0_20px_rgba(217,255,0,0.5)]" />
                <AnimatePresence mode='wait'>
                  <motion.div animate={{ opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 flex items-center justify-center">
                    <Fingerprint size={300} className="text-[#d9ff00]" />
                  </motion.div>
                </AnimatePresence>
             </div>
             <Network className="absolute top-12 left-12 text-[#d9ff00]/10" size={150} />
          </div>
        </div>
      </section>

      {/* --- PIPELINE --- */}
      <section className="py-24 md:py-48 bg-zinc-950/30 px-6 md:px-24">
        <div className="text-center mb-16 md:mb-32">
          <h3 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.4em] italic mb-4">The Clinical Process</h3>
          <h4 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter">OUR <br/> <span className="text-zinc-800 italic">PIPELINE.</span></h4>
        </div>
        <div className="space-y-32 md:space-y-48">
          {[
            { id: "01", title: "Market Discovery", desc: "Before we write code, we dismantle your industry architecture analyzing <span class='text-[#d9ff00]'>50 data points</span>." },
            { id: "02", title: "Logic & Design", desc: "Performance meets art. We design your visual identity using <span class='text-[#d9ff00]'>Conversion-First psychology</span>." },
            { id: "03", title: "Execution Lab", desc: "Production begins. We create <span class='text-[#d9ff00]'>high-retention cinematic content</span> that stops the scroll." },
            { id: "04", title: "Aggressive Scaling", desc: "Launching multi-channel campaigns. We buy <span class='text-[#d9ff00]'>high-intent customers</span>." },
            { id: "05", title: "Data Auditing", desc: "Infinite optimization. Using <span class='text-[#d9ff00]'>CAPI and GA4 integration</span>, we ensure compounding ROI." }
          ].map((step, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`bg-zinc-900/40 border border-white/5 rounded-[40px] md:rounded-[60px] h-[300px] md:h-[450px] flex items-center justify-center relative overflow-hidden group ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                   <VisualAnimation id={step.id} />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className={`space-y-4 md:space-y-8 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                   <h5 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-[#d9ff00]">Step {step.id}</h5>
                   <h6 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">{step.title}.</h6>
                   <p className="text-zinc-500 text-sm md:text-lg font-medium italic leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
                </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE TECHNICAL ARSENAL --- */}
      <section className="py-24 md:py-48 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5 shrink-0"><Cpu className="text-[#d9ff00]" size={20} /></div>
               <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">The Technical <br/> <span className="text-[#d9ff00]">Arsenal.</span></h2>
            </div>
            <div className="text-zinc-400 text-sm md:text-lg font-medium italic leading-relaxed">
              <p>A high-performance brand requires a high-performance stack. We use <span className="text-[#d9ff00]">Next.js and Vercel</span> for speed.</p>
            </div>
          </div>
          <div className="bg-[#d9ff00] rounded-[40px] md:rounded-[60px] h-auto md:h-[500px] p-8 md:p-16 text-black flex flex-col justify-between shadow-2xl">
             <div className="space-y-4 mb-12 md:mb-0">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">Arsenal_v2.0_Active</p>
                <h4 className="text-3xl md:text-5xl font-[1000] uppercase italic tracking-tighter leading-none">BUILD <br/> SCALE <br/> DOMINATE.</h4>
             </div>
             <div className="grid grid-cols-2 gap-4 md:gap-8">
                {[{ n: "Meta Ads", i: <Target size={20}/> }, { n: "GA4 Auditing", i: <PieChart size={20}/> }, { n: "Vercel", i: <Cpu size={20}/> }, { n: "SEO Auth", i: <Globe size={20}/> }].map((t, idx) => (
                  <div key={idx} className="space-y-2 group">
                     <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-xl flex items-center justify-center text-[#d9ff00]">{t.i}</div>
                     <p className="text-[7px] md:text-[9px] font-black uppercase tracking-widest">{t.n}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- CULTURE --- */}
      <section className="py-24 md:py-64 bg-zinc-950 px-6 md:px-24 text-center relative overflow-hidden">
        <motion.div animate={{ opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 flex items-center justify-center">
          <Fingerprint className="text-[#d9ff00] w-[300px] h-[300px] md:w-[600px] md:h-[600px]" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto space-y-12 md:space-y-16 relative z-10">
          <h2 className="text-2xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-tight">
            "WE UNDERSTAND YOUR <span className="text-[#d9ff00]">BRAND DNA</span> FIRST."
          </h2>
          <p className="text-zinc-500 text-sm md:text-xl font-medium italic leading-relaxed">
            We bridge the gap between technical complexity and business growth. Our lab operates with surgical precision, ensuring every rupee of spend is optimized.
          </p>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 md:py-24 bg-black border-t border-white/5 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start">
          <div className="space-y-8 text-white">
            <div className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">SCALE<span className="text-[#d9ff00]">CRAFT.</span></div>
            <p className="text-zinc-500 font-medium italic max-w-xs text-xs md:text-sm leading-relaxed">Performance-driven branding studio based in Gurugram.</p>
            <div className="flex gap-6 items-center">
              <a href="#" className="text-zinc-500 hover:text-[#d9ff00] transition-all"><Instagram size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-[#d9ff00] transition-all"><Twitter size={20} /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=enquiry@scalecraftstudio.in" target="_blank" className="text-zinc-500 hover:text-[#d9ff00] transition-all"><Mail size={20} /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-white font-black text-[9px] md:text-[10px] uppercase border-b border-[#d9ff00]/20 pb-2">LINKS</p>
              <ul className="space-y-3 text-zinc-500 font-bold uppercase text-[8px] md:text-[9px] tracking-widest">
                <li><Link href="/services" className="hover:text-[#d9ff00] flex items-center gap-2"><Layers size={12}/> Services</Link></li>
                <li className="text-[#d9ff00] flex items-center gap-2"><Activity size={12}/> How we work</li>
                <li><Link href="/about" className="hover:text-[#d9ff00] flex items-center gap-2"><Target size={12}/> Success Cases</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-white font-black text-[9px] md:text-[10px] uppercase border-b border-[#d9ff00]/20 pb-2">HQ</p>
              <div className="space-y-4 text-zinc-500 text-[8px] md:text-[9px] font-bold uppercase tracking-widest">
                <p className="flex gap-3 items-center"><MapPin size={14} className="text-[#d9ff00] shrink-0" /> Gurugram, HR</p>
                <p className="flex gap-3 truncate items-center"><Mail size={14} className="text-[#d9ff00] shrink-0" /> enquiry@scalecraftstudio.in</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-8">
            <h4 className="text-3xl md:text-4xl font-black uppercase italic text-white leading-none">READY TO <br /> <span className="text-zinc-800 underline decoration-[#d9ff00]/30 italic">SCALE FAST?</span></h4>
            <Link href="/contact">
              <button className="group relative w-32 h-32 md:w-36 md:h-36 rounded-full border border-white/10 flex items-center justify-center bg-transparent hover:bg-[#d9ff00] transition-all duration-700 shadow-2xl">
                 <span className="text-white group-hover:text-black font-black uppercase text-[9px] z-10 text-center leading-tight">BOOK A <br /> CALL <ArrowUpRight className="inline ml-1" size={12} /></span>
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}