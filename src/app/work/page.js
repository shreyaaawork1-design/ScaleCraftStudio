'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Search, PencilRuler, PenTool, Rocket, PieChart, 
  ArrowUpRight, MapPin, Mail, Phone, Cpu, Globe, 
  Shield, Zap, Binary, Target, MousePointer2, Fingerprint, Activity, Code2, Scan, Radar, Network
} from 'lucide-react';
import Link from 'next/link';

// --- DATA ---
const navData = [
  { label: 'Our Services', link: '/services' },
  { label: 'How we work', link: '/work' },
  { label: 'About Us', link: '/about' }
];

// --- SHARD CURSOR ---
const ShardCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 400, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 400, mass: 0.5 });
  useEffect(() => {
    const handleMouseMove = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  return (
    <motion.div className="fixed top-0 left-0 z-[10000] pointer-events-none" style={{ x: smoothX, y: smoothY, filter: 'drop-shadow(0_0_8px rgba(217,255,0,0.6))' }}>
      <MousePointer2 size={18} fill="#d9ff00" className="text-[#d9ff00]" />
    </motion.div>
  );
};

// --- ELITE PROCESS VISUALS (Numbers Removed & Enhanced) ---
const VisualAnimation = ({ id }) => {
  switch(id) {
    case "01": // Market Discovery: Radar Grid + Floating Nodes
      return (
        <div className="relative w-full h-full flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9ff00]/5 to-transparent">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-80 h-80 border border-dashed border-[#d9ff00]/20 rounded-full" />
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-64 h-64 bg-[#d9ff00] rounded-full blur-[100px]" />
          <div className="relative z-10 flex gap-4">
             {[1,2,3].map(i => <motion.div key={i} animate={{ y: [0, -20, 0] }} transition={{ duration: 2, delay: i*0.3, repeat: Infinity }} className="w-2 h-2 bg-[#d9ff00] rounded-full shadow-[0_0_10px_#d9ff00]" />)}
          </div>
          <Search size={60} className="absolute text-[#d9ff00]/20" />
        </div>
      );
    case "02": // Logic & Design: Interactive Wireframe
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="grid grid-cols-3 gap-4">
             {Array.from({length: 9}).map((_, i) => (
               <motion.div key={i} animate={{ borderColor: ["rgba(217,255,0,0.1)", "rgba(217,255,0,0.5)", "rgba(217,255,0,0.1)"] }} transition={{ duration: 2, delay: i*0.1, repeat: Infinity }} className="w-16 h-16 border rounded-xl flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#d9ff00]/30 rounded-full" />
               </motion.div>
             ))}
          </motion.div>
          <motion.div animate={{ x: [-100, 100, -100] }} transition={{ duration: 4, repeat: Infinity }} className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#d9ff00]/40 to-transparent" />
        </div>
      );
    case "03": // Execution Lab: Digital Matrix Rain
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
          <div className="flex gap-8 opacity-20">
             {Array.from({length: 5}).map((_, i) => (
               <motion.div key={i} animate={{ y: [-200, 200] }} transition={{ duration: 3, delay: i*0.5, repeat: Infinity, ease: "linear" }} className="text-[10px] font-mono text-[#d9ff00] flex flex-col">
                  {["0","1","0","1","0"].map((n, j) => <span key={j}>{n}</span>)}
               </motion.div>
             ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
             <Code2 className="text-[#d9ff00] drop-shadow-[0_0_15px_rgba(217,255,0,0.4)]" size={70} />
          </div>
        </div>
      );
    case "04": // Scaling: Exponential Surge Line
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-[0_0_15px_rgba(217,255,0,0.3)]">
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
    case "05": // Auditing: Bio-Metric Pulse
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-40 h-40 border-2 border-[#d9ff00] rounded-full" />
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-24 h-24 bg-zinc-900 border border-[#d9ff00]/30 rounded-full flex items-center justify-center">
             <Activity className="text-[#d9ff00]" size={35} />
          </motion.div>
          <div className="absolute top-10 right-10 text-[8px] font-black uppercase text-[#d9ff00] tracking-widest animate-pulse">Audit_Status: Secure</div>
        </div>
      );
    default: return null;
  }
};

export default function WorkPage() {
  const [activeTerm, setActiveTerm] = useState(0);
  const strategyTerms = ["AUDIENCE_INSIGHTS", "CONVERSION_GAPS", "DATA_MODELING", "PSYCH_PROFILING", "ROI_MAXIMIZATION"];

  // Rotating logic for Growth Strategy Radar
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTerm((prev) => (prev + 1) % strategyTerms.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d9ff00] selection:text-black">
      <ShardCursor />

      {/* --- HEADER --- */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] z-[150] px-10 py-5 flex justify-between items-center rounded-[32px] bg-white/[0.05] backdrop-blur-[50px] border border-white/20 shadow-2xl">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="text-xl font-black tracking-tighter uppercase italic text-white transition-all group-hover:drop-shadow-[0_0_15px_rgba(217,255,0,0.9)]">
            SCALECRAFT<span className="text-[#d9ff00]">STUDIO.</span>
          </div>
        </Link>
        <div className="hidden lg:flex gap-4 font-black">
          {navData.map((item, i) => (
            <Link key={i} href={item.link}>
              <button className={`px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] transition-all ${item.label === 'How we work' ? 'text-[#d9ff00]' : 'text-zinc-400 hover:text-[#d9ff00]'}`}>
                {item.label} 
              </button>
            </Link>
          ))}
        </div>
        <Link href="/contact">
          <button className="bg-[#d9ff00] text-black px-10 py-3.5 rounded-2xl font-[1000] text-[11px] uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(217,255,0,0.4)] hover:scale-105 transition-all flex items-center gap-2 border-none">
            <Phone size={14} className="animate-bounce" /> START SCALING
          </button>
        </Link>
      </nav>

      {/* --- HERO: Home Page Font Scale --- */}
      <section className="pt-52 pb-24 px-10 md:px-24">
        <div className="max-w-6xl">
          <span className="text-[#d9ff00] font-bold tracking-[0.5em] text-[11px] md:text-[13px] uppercase block mb-10 italic opacity-80">
            Leading Performance Lab in Gurugram
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-12">
            ENGINEERED <br /> <span className="text-zinc-800">EXECUTION.</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#d9ff00]/20 pl-10 max-w-4xl">
            Success is not a product of luck; it is a result of clinical engineering. We dismantle the chaos of traditional marketing to install a <span className="text-[#d9ff00]">high-speed, data-driven revenue engine</span> tailored for the ambitious digital landscape of Gurgaon and beyond.
          </p>
        </div>
      </section>

      {/* --- SECTION 1: GROWTH STRATEGIES (Elite Radar) --- */}
      <section className="py-48 px-10 md:px-24">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5"><Target className="text-[#d9ff00]" /></div>
               <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight">Growth <br/> <span className="text-[#d9ff00]">Strategies.</span></h2>
            </div>
            <div className="text-zinc-400 text-lg font-medium italic space-y-8 leading-relaxed">
              <p>
                Our growth strategies are founded on the principle of <span className="text-[#d9ff00]">Psychological Performance Architecture</span>. We don't just target demographics; we target human behavior. By mapping the digital footprint of your potential customer in Gurgaon and Greater Noida, we identify the exact "Conversion Gaps". 
              </p>
              <p>
                We utilize <span className="text-[#d9ff00]">High-Intensity Data Modeling</span> to predict market shifts before they happen. This includes setting up technical funnel hierarchies that guide a cold prospect from curiosity to a confirmed transaction in record time.
              </p>
              <p>
                Whether it is scaling your <span className="text-[#d9ff00]">ROAS (Return on Ad Spend)</span> through advanced A/B testing or building a long-term asset through Search Authority, every move we make is backed by mathematical logic.
              </p>
            </div>
          </motion.div>
          
          {/* THE MEGA RADAR INTELLIGENCE */}
          <div className="sticky top-48 bg-zinc-950 border border-white/5 rounded-[60px] h-[450px] flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(217,255,0,0.05)] group">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[140%] h-[140%] border-[1px] border-dashed border-[#d9ff00]/10 rounded-full" />
             <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[90%] h-[90%] border-[1px] border-dashed border-[#d9ff00]/20 rounded-full flex items-center justify-center">
                <div className="w-40 h-40 bg-[#d9ff00]/5 rounded-full blur-3xl animate-pulse" />
             </motion.div>
             <div className="relative z-10 flex flex-col items-center">
                <Radar size={100} className="text-[#d9ff00] drop-shadow-[0_0_20px_rgba(217,255,0,0.5)] mb-8" />
                <AnimatePresence mode='wait'>
                  <motion.div 
                    key={activeTerm}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="px-8 py-3 bg-[#d9ff00] text-black text-[10px] font-black uppercase tracking-[0.5em] rounded-full shadow-[0_0_30px_rgba(217,255,0,0.3)]"
                  >
                    {strategyTerms[activeTerm]}
                  </motion.div>
                </AnimatePresence>
             </div>
             <Network className="absolute top-12 left-12 text-[#d9ff00]/10" size={150} />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE 5-STEP PIPELINE (Enhanced Visuals) --- */}
      <section className="py-48 bg-zinc-950/30 px-10 md:px-24">
        <div className="text-center mb-32">
          <h3 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.5em] italic mb-6">The Clinical Process</h3>
          <h4 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">OUR <br/> <span className="text-zinc-800 italic">PIPELINE.</span></h4>
        </div>
        <div className="space-y-48">
          {[
            { id: "01", title: "Market Discovery", desc: "Before we write code, we dismantle your industry architecture. We analyze over <span class='text-[#d9ff00]'>50 data points</span>—from competitor bounce rates to high-intent keywords. This phase ensures we aren't just joining the market, but preparing to own it." },
            { id: "02", title: "Logic & Design", desc: "This is where performance meets art. We design your visual identity using <span class='text-[#d9ff00]'>Conversion-First psychology</span>. Every color and headline is engineered to reduce friction and build multi-million dollar authority from Day 1." },
            { id: "03", title: "Execution Lab", desc: "Production begins. We create <span class='text-[#d9ff00]'>high-retention cinematic content</span> and technically-superior landing pages that stop the scroll in under 1.5 seconds. We connect your ads and CRM into one seamless machine." },
            { id: "04", title: "Aggressive Scaling", desc: "We launch multi-channel campaigns. We don't just buy traffic; we buy <span class='text-[#d9ff00]'>high-intent customers</span>. Using A/B models, we scale only on winning creatives that deliver actual revenue." },
            { id: "05", title: "Data Auditing", desc: "Optimization is infinite. We conduct weekly audits to double-down on what works. Using <span class='text-[#d9ff00]'>CAPI and GA4 integration</span>, we ensure your ROI is clearly measurable and compounding." }
          ].map((step, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-24 items-center">
               <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`bg-zinc-900/40 border border-white/5 rounded-[60px] h-[450px] flex items-center justify-center relative overflow-hidden group ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <VisualAnimation id={step.id} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               </motion.div>

               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className={`space-y-8 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <h5 className="text-4xl font-black uppercase italic tracking-tighter text-[#d9ff00]">Step {step.id}</h5>
                  <h6 className="text-5xl font-black uppercase italic tracking-tighter leading-none">{step.title}.</h6>
                  <p className="text-zinc-500 text-lg font-medium italic leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
               </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: THE TECHNICAL ARSENAL --- */}
      <section className="py-48 px-10 md:px-24">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5"><Cpu className="text-[#d9ff00]" /></div>
               <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">The Technical <br/> <span className="text-[#d9ff00]">Arsenal.</span></h2>
            </div>
            <div className="text-zinc-400 text-lg font-medium italic space-y-8 leading-relaxed">
              <p>
                A high-performance brand requires a high-performance stack. We use <span className="text-[#d9ff00]">Next.js and Vercel</span> for speed, and <span className="text-[#d9ff00]">Firebase/GA4</span> for deep tracking.
              </p>
              <p>
                Our lab leverages <span className="text-[#d9ff00]">Search Authority Engines</span> to build organic pull, ensuring you become a permanent asset in the digital ecosystem.
              </p>
            </div>
          </div>
          <div className="bg-[#d9ff00] rounded-[60px] h-[500px] p-16 text-black flex flex-col justify-between shadow-[0_0_80px_rgba(217,255,0,0.15)]">
             <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic">Arsenal_v2.0_Active</p>
                <h4 className="text-5xl font-[1000] uppercase italic tracking-tighter leading-none">BUILD <br/> SCALE <br/> DOMINATE.</h4>
             </div>
             <div className="grid grid-cols-2 gap-8">
                {[{ n: "Meta Ads", i: <Target /> }, { n: "GA4 Auditing", i: <PieChart /> }, { n: "Vercel", i: <Cpu /> }, { n: "SEO Auth", i: <Globe /> }].map((t, idx) => (
                  <div key={idx} className="space-y-2 group">
                     <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-[#d9ff00] group-hover:scale-110 transition-transform">{t.i}</div>
                     <p className="text-[9px] font-black uppercase tracking-widest">{t.n}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: WORK CULTURE --- */}
      <section className="py-64 bg-zinc-950 px-10 md:px-24 text-center relative overflow-hidden">
         <motion.div animate={{ opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 flex items-center justify-center">
            <Fingerprint size={600} className="text-[#d9ff00]" />
         </motion.div>
         
         <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto space-y-16 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-[0.9]">
              "WE UNDERSTAND YOUR <span className="text-[#d9ff00]">BRAND DNA</span> FIRST, THEN DISCOVER THE MARKET TO FIND YOUR <span className="text-[#d9ff00]">BEST FIT.</span>"
            </h2>
            <div className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed italic max-w-5xl mx-auto space-y-12">
              <p>
                Our work culture is rooted in <span className="text-[#d9ff00]">Obsessive Understanding</span>. We don't believe in generic templates or one-size-fits-all marketing. Every brand is a living entity with a unique identity, and our job is to translate that identity into a market-leading position. At ScaleCraft Studio, we immerse ourselves in your vision, your challenges, and your history. 
              </p>
              <p>
                Only once we have fully decoded your <span className="text-[#d9ff00]">Brand DNA</span> do we execute our high-intensity market discovery protocols. We analyze consumer psychology in Gurgaon, Noida, and the global digital space to find the exact intersection where your value proposition meets high-intent demand.
              </p>
              <p>
                We bridge the gap between technical complexity and business growth. Our lab operates with the precision of a surgical unit, ensuring that every line of code, every pixel of creative asset, and every rupee of ad spend is optimized to <span className="text-[#d9ff00]">maximize your revenue engine</span>. We are not just your agency; we are your performance partners.
              </p>
            </div>
         </motion.div>
      </section>

      {/* --- FOOTER (Exact Home Copy) --- --- */}
      <footer className="py-24 bg-black border-t border-white/5 px-10 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
          <div className="space-y-8 text-white">
            <div className="text-3xl font-black tracking-tighter uppercase italic">SCALE<span className="text-[#d9ff00]">CRAFT.</span></div>
            <p className="text-zinc-500 font-medium italic max-w-xs text-sm leading-relaxed italic">Performance-driven branding studio based in Gurgaon.</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-white font-black text-[10px] uppercase tracking-widest italic border-b border-[#d9ff00]/20 pb-2 italic">LINKS</p>
              <ul className="space-y-3 text-zinc-500 font-bold uppercase text-[9px] tracking-widest">
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/work">How we work</Link></li>
                <li><Link href="/about">About Us</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-white font-black text-[10px] uppercase tracking-widest italic border-b border-[#d9ff00]/20 pb-2 italic">HQ</p>
              <div className="space-y-4 text-zinc-500 text-[9px] font-bold uppercase tracking-widest leading-loose font-black italic">
                <p className="flex gap-3"><MapPin size={14} className="text-[#d9ff00] shrink-0" /> Gurgaon, HR</p>
                <p className="flex gap-3 truncate text-[#d9ff00]"><Mail size={14} className="text-[#d9ff00] shrink-0" /> enquiry@scalecraftstudio.in</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-8">
            <h4 className="text-3xl md:text-4xl font-black uppercase italic leading-none tracking-tighter text-white">READY TO <br /> <span className="text-zinc-800 underline decoration-[#d9ff00]/30 italic">SCALE FAST?</span></h4>
            <Link href="/contact">
              <button className="group relative w-36 h-36 rounded-full border border-white/10 flex items-center justify-center bg-transparent hover:bg-[#d9ff00] transition-all duration-700 shadow-2xl">
                  <span className="text-white group-hover:text-black font-black uppercase text-[9px] tracking-[0.3em] z-10 text-center leading-tight font-black">BOOK A <br /> CALL <ArrowUpRight className="inline ml-1" /></span>
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}