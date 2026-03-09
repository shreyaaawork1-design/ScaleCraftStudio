'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Shield, Zap, Target, ArrowLeft, MousePointer2, 
  Phone, Instagram, Layout, MessageSquare, BarChart, Globe, 
  Search, PencilRuler, Rocket, PieChart, ArrowUpRight, MapPin, Mail,
  PenTool, ChevronDown, Video, Eye, Layers, Share2, Cpu, Menu, X, Twitter, Activity
} from 'lucide-react';
import Link from 'next/link';

// --- DATA ---
const navData = [
  { label: 'Our Services', link: '/services' },
  { label: 'How we work', link: '/work' },
  { label: 'About Us', link: '/about' }
];

// --- SHARD CURSOR (Fast + Mix-Blend Mode) ---
const ShardCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 800, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 800, mass: 0.5 });

  useEffect(() => {
    const move = (e) => {
      window.requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="fixed top-0 left-0 z-[10000] pointer-events-none hidden md:block" 
      style={{ 
        x: smoothX, 
        y: smoothY, 
        mixBlendMode: 'difference' 
      }}
    >
      <MousePointer2 size={22} fill="#d9ff00" className="text-[#d9ff00] drop-shadow-[0_0_12px_rgba(217,255,0,0.8)]" />
    </motion.div>
  );
};

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d9ff00] selection:text-black overflow-x-hidden">
      <ShardCursor />

      {/* --- HEADER (Synced with Home) --- */}
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
                <button className={`px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] transition-all ${item.label === 'Our Services' ? 'text-[#d9ff00]' : 'text-zinc-400 hover:text-[#d9ff00]'}`}>
                  {item.label} 
                </button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/contact" className="relative z-[160]">
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
                    <span className={`font-black uppercase tracking-widest text-[10px] ${item.label === 'Our Services' ? 'text-[#d9ff00]' : 'text-zinc-400'}`}>{item.label}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-40 md:pt-56 pb-16 md:pb-24 px-6 md:px-24">
        <div className="max-w-5xl">
          <span className="text-[#d9ff00] font-bold tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[13px] uppercase block mb-6 md:mb-10 italic opacity-80 drop-shadow-[0_0_8px_rgba(217,255,0,0.2)]">
            Leading Performance Lab in Gurugram
          </span>
          <h1 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8 md:mb-12">
            OUR SERVICE <br /> <span className="text-zinc-800 italic">YOUR GROWTH.</span>
          </h1>
          <p className="text-zinc-500 text-base md:text-xl font-medium leading-relaxed italic border-l-4 border-[#d9ff00]/20 pl-6 md:pl-10 max-w-3xl">
            We don't follow trends; we create the visual authority that others copy. Based in the heart of the Gurugram startup landscape, ScaleCraft Studio is dedicated to turning ambitious brands into market leaders through calculated positioning and high-conversion systems.
          </p>
        </div>
      </section>

      {/* --- SERVICES CONTENT --- */}
      <section className="py-16 md:py-32 px-6 md:px-24 space-y-32 md:space-y-64">
        
        {/* 1. SOCIAL MEDIA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5 shrink-0"><Instagram className="text-[#d9ff00]" size={20} /></div>
               <h2 className="text-3xl md:text-5xl font-black uppercase italic leading-none">Social Media <br/> <span className="text-[#d9ff00]">Domination.</span></h2>
            </div>
            <div className="space-y-6 md:space-y-8 text-zinc-400 text-sm md:text-lg font-medium italic leading-relaxed">
              <p>We take complete control of your social presence. It’s not about just posting; it’s about creating a "Movement" around your brand.</p>
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {[
                  { t: "Strategic Content Pillars:", d: "We define 4-5 core topics (Educational, Entertaining, Relatable, Transactional) that your brand will own." },
                  { t: "Viral Hook Engineering:", d: "Our scripts are written using psychological triggers to stop the scroll in 1.5 seconds." },
                  { t: "Community Management:", d: "We manage comments and DMs proactively to nurture leads and build a loyal tribe." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 md:p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                    <b className="text-white block mb-2 uppercase tracking-widest text-[10px] md:text-sm">{item.t}</b>
                    <p className="text-[12px] md:text-[16px]">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sticky top-32 md:top-48 bg-zinc-950 border border-white/5 rounded-[40px] md:rounded-[60px] aspect-square p-8 md:p-12 flex flex-col justify-center gap-4 md:gap-6">
             <div className="flex items-center gap-4 text-zinc-700 font-black uppercase italic tracking-widest text-[10px] group-hover:text-[#d9ff00] transition-colors"><Share2 size={16}/> Organic Distribution</div>
             <div className="space-y-4">
                <div className="w-full h-8 md:h-12 bg-zinc-900 rounded-2xl flex items-center px-4 md:px-6"><motion.div initial={{width:0}} whileInView={{width:'90%'}} className="h-2 bg-[#d9ff00] rounded-full" /></div>
                <div className="w-full h-8 md:h-12 bg-zinc-900 rounded-2xl flex items-center px-4 md:px-6"><motion.div initial={{width:0}} whileInView={{width:'75%'}} className="h-2 bg-[#d9ff00]/60 rounded-full" /></div>
                <div className="w-full h-8 md:h-12 bg-zinc-900 rounded-2xl flex items-center px-4 md:px-6"><motion.div initial={{width:0}} whileInView={{width:'95%'}} className="h-2 bg-[#d9ff00]/30 rounded-full" /></div>
             </div>
          </div>
        </div>

        {/* 2. PERFORMANCE MARKETING */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="order-2 md:order-1 sticky top-32 md:top-48 bg-zinc-950 border border-white/5 rounded-[40px] md:rounded-[60px] aspect-square flex flex-col items-center justify-center p-12 md:p-20">
             <motion.div animate={{rotate:360}} transition={{duration:15, repeat:Infinity, ease:"linear"}} className="relative w-full h-full border-2 border-dashed border-[#d9ff00]/10 rounded-full flex items-center justify-center">
                <Target size={60} md:size={100} className="text-[#d9ff00] opacity-20" />
                <div className="absolute top-0 w-4 h-4 bg-[#d9ff00] rounded-full shadow-[0_0_20px_#d9ff00]" />
             </motion.div>
             <h4 className="absolute font-black uppercase italic text-zinc-500 tracking-[0.5em] text-[8px] md:text-[10px]">Scanning Leads</h4>
          </div>
          <div className="order-1 md:order-2 space-y-8 md:space-y-12 text-left md:text-right">
            <div className="flex items-center gap-4 justify-start md:justify-end">
               <h2 className="text-3xl md:text-5xl font-black uppercase italic leading-none">Performance <br/> <span className="text-[#d9ff00]">Ads & Scaling.</span></h2>
               <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5 shrink-0"><Target className="text-[#d9ff00]" size={20}/></div>
            </div>
            <div className="space-y-6 md:space-y-8 text-zinc-400 text-sm md:text-lg font-medium italic leading-relaxed">
              <p>We treat every Rupee like an investment. Our performance systems are designed to convert cold traffic into high-intent customers.</p>
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <div className="p-6 md:p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                  <b className="text-white block mb-2 uppercase tracking-widest text-[10px] md:text-sm">Multi-Channel Paid Ads:</b>
                  We scale across Meta and Google using advanced A/B testing models.
                </div>
                <div className="p-6 md:p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                  <b className="text-white block mb-2 uppercase tracking-widest text-[10px] md:text-sm">Lead Gen Funnels:</b>
                  Automated WhatsApp flows to capture intent instantly.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CREATIVE PRODUCTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5 shrink-0"><PenTool className="text-[#d9ff00]" size={20}/></div>
               <h2 className="text-3xl md:text-5xl font-black uppercase italic leading-none">Creative <br/> <span className="text-[#d9ff00]">Production.</span></h2>
            </div>
            <div className="space-y-6 md:space-y-8 text-zinc-400 text-sm md:text-lg font-medium italic leading-relaxed">
              <p>Great marketing fails with bad creatives. We build assets engineered to make people stop and take action.</p>
              <div className="p-6 md:p-8 bg-zinc-950 border border-white/5 rounded-3xl">
                <b className="text-white block mb-2 uppercase tracking-widest text-[10px] md:text-sm">High-Retention Editing:</b>
                Cinematic transitions and sound design that keeps viewers watching.
              </div>
            </div>
          </div>
          <div className="bg-[#d9ff00] rounded-[40px] md:rounded-[60px] p-8 md:p-16 text-black flex flex-col justify-between h-[300px] md:h-[400px] w-full shadow-2xl">
             <div className="space-y-4">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">Visual Standard</p>
                <h4 className="text-3xl md:text-5xl font-[1000] uppercase italic tracking-tighter leading-none">THE <br/> BRAND LAB.</h4>
             </div>
             <p className="text-lg md:text-2xl font-bold italic leading-tight">"We bridge artistic design and performance logic to build a brand that scales."</p>
          </div>
        </div>

        {/* 4. TECH & AUTOMATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="order-2 md:order-1 sticky top-32 md:top-48 bg-zinc-950 border border-white/5 rounded-[40px] md:rounded-[60px] h-[300px] md:h-[400px] w-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
             <div className="relative w-full space-y-4">
                {[1, 2, 3].map((i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.3 }} className="w-full h-10 md:h-14 bg-zinc-900/40 border border-white/5 rounded-2xl flex items-center px-4 md:px-6 justify-between">
                    <div className="flex gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-[#d9ff00] animate-pulse" />
                      <div className="w-16 md:w-24 h-2 bg-zinc-800 rounded-full" />
                    </div>
                    <div className="w-8 md:w-12 h-2 bg-[#d9ff00]/20 rounded-full" />
                  </motion.div>
                ))}
             </div>
             <p className="mt-8 md:mt-12 text-[8px] md:text-[10px] font-black uppercase text-zinc-600 tracking-[0.5em] md:tracking-[0.8em]">System_Optimization_Active</p>
          </div>
          <div className="order-1 md:order-2 space-y-8 md:space-y-12 text-left md:text-right">
            <div className="flex items-center gap-4 justify-start md:justify-end">
               <h2 className="text-3xl md:text-5xl font-black uppercase italic leading-none">High-Conversion <br/> <span className="text-[#d9ff00]">Tech & Systems.</span></h2>
               <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5 shrink-0"><Cpu className="text-[#d9ff00]" size={20}/></div>
            </div>
            <div className="space-y-6 text-zinc-400 text-sm md:text-lg">
              <p className="italic">Great ads fail on bad websites. We build high-speed infrastructure that turns clicks into customers.</p>
              <div className="p-6 md:p-8 bg-zinc-950 border border-white/5 rounded-3xl text-left">
                <b className="text-white block mb-2 uppercase tracking-widest text-[10px]">WhatsApp & CRM Automation:</b>
                Automated bots so no inquiry goes unanswered.
              </div>
            </div>
          </div>
        </div>

        {/* 5. SEO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5 shrink-0"><Globe className="text-[#d9ff00]" size={20}/></div>
               <h2 className="text-3xl md:text-5xl font-black uppercase italic leading-none">Search <br/> <span className="text-[#d9ff00]">Authority (SEO).</span></h2>
            </div>
            <div className="space-y-6 md:space-y-8 text-zinc-400 text-sm md:text-lg italic leading-relaxed">
              <p>SEO builds a permanent asset. We make sure your brand is the first thing people see on Google in Gurgaon and Noida.</p>
            </div>
          </div>
          <div className="bg-[#d9ff00] rounded-[40px] md:rounded-[60px] p-8 md:p-20 text-black flex flex-col justify-between h-[300px] md:h-[400px] w-full">
             <div className="space-y-4">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic">Long-Term Asset</p>
                <h4 className="text-3xl md:text-5xl font-[1000] uppercase italic tracking-tighter leading-none">THE <br/> ORGANIC <br/> PULL.</h4>
             </div>
             <p className="text-lg md:text-2xl font-bold italic">"We build an un-ignorable digital presence that grows on its own."</p>
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-24 md:py-48 bg-zinc-950 px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-32">
          <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.5em] italic mb-6">Investment Models</h2>
          <h3 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter text-white">REVENUE <br/> <span className="text-zinc-800">PARTNERSHIPS.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { name: "Essential", price: "₹9,999", sub: "Startup Friendly", features: ["Social Media Management", "Content Pillar Strategy", "8 High-End Designs/mo", "Monthly Growth Audit"] },
            { name: "Performance", price: "₹19,999", sub: "Growth Catalyst", features: ["Full SMM Handling", "Performance Ads Management", "High-Retention Reels", "WhatsApp Funnels", "Pixel Integration"] },
            { name: "Dominance", price: "₹29,999", sub: "Market Authority", features: ["Full Ecosystem", "Unlimited Creative Lab", "Premium Content Production", "CRM & Lead Automation", "24/7 Consulting"] }
          ].map((plan, i) => (
            <div key={i} className={`p-8 md:p-14 border rounded-[40px] md:rounded-[50px] flex flex-col justify-between transition-all duration-700 ${i === 1 ? 'bg-white text-black border-white shadow-2xl scale-100 md:scale-105' : 'bg-black border-white/5 text-white'}`}>
              <div>
                <p className={`font-black uppercase text-[9px] md:text-[10px] tracking-[0.4em] mb-4 md:mb-6 italic ${i === 1 ? 'text-zinc-400' : 'text-[#d9ff00]'}`}>{plan.sub}</p>
                <h4 className="text-2xl md:text-4xl font-black uppercase italic mb-2 tracking-tighter">{plan.name}</h4>
                <div className="text-4xl md:text-5xl font-[1000] tracking-tighter mb-8 md:mb-10">{plan.price}<span className="text-xs font-bold opacity-30">/mo</span></div>
                <div className="h-[1px] bg-zinc-800/20 mb-8 md:mb-10" />
                <ul className="space-y-4 md:space-y-5 mb-12 md:mb-16">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-widest items-start leading-tight">
                      <div className={`w-2 h-2 rounded-full mt-1 shrink-0 ${i === 1 ? 'bg-black' : 'bg-[#d9ff00]'}`} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact">
                <button className={`w-full py-5 md:py-6 rounded-2xl font-black uppercase text-[10px] md:text-[11px] tracking-widest transition-all ${i === 1 ? 'bg-black text-[#d9ff00]' : 'bg-[#d9ff00] text-black shadow-lg'}`}>Select Strategy</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER (Synced) --- */}
      <footer className="py-24 bg-black border-t border-white/5 px-6 md:px-24">
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
                <li className="text-[#d9ff00] flex items-center gap-2"><Layers size={12}/> Services</li>
                <li><Link href="/work" className="hover:text-[#d9ff00] flex items-center gap-2"><Activity size={12}/> How we work</Link></li>
                <li><Link href="/about" className="hover:text-[#d9ff00] flex items-center gap-2"><Target size={12}/> Success Cases</Link></li>
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
          <p className="text-zinc-700 text-[7px] md:text-[8px] tracking-[0.5em] md:tracking-[1em] font-black uppercase">© 2026 ScaleCraft Studio | Gurgaon</p>
        </div>
      </footer>
    </main>
  );
}