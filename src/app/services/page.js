'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  TrendingUp, Shield, Zap, Target, ArrowLeft, MousePointer2, 
  Phone, Instagram, Layout, MessageSquare, BarChart, Globe, 
  Search, PencilRuler, Rocket, PieChart, ArrowUpRight, MapPin, Mail,
  PenTool, ChevronDown, Video, Eye, Layers, Share2, Cpu
} from 'lucide-react';
import Link from 'next/link';

// --- SHARED DATA ---
const navData = [
  { label: 'Our Services', link: '/services' },
  { label: 'How we work', link: '/work' },
  { label: 'About Us', link: '/about' }
];

// --- SHARED CURSOR (Buttery Smooth) ---
const ShardCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 400, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 400, mass: 0.5 });
  useEffect(() => {
    const move = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);
  return (
    <motion.div className="fixed top-0 left-0 z-[10000] pointer-events-none" style={{ x: smoothX, y: smoothY, filter: 'drop-shadow(0 0 8px rgba(217,255,0,0.6))' }}>
      <MousePointer2 size={18} fill="#d9ff00" className="text-[#d9ff00]" />
    </motion.div>
  );
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d9ff00] selection:text-black">
      <ShardCursor />

      {/* --- HEADER (Glassmorphism + 3 Sections) --- */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] z-[150] px-10 py-5 flex justify-between items-center rounded-[32px] bg-white/[0.05] backdrop-blur-[50px] border border-white/20 shadow-2xl">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="text-xl font-black tracking-tighter uppercase italic text-white transition-all group-hover:drop-shadow-[0_0_15px_rgba(217,255,0,0.9)]">
            SCALECRAFT<span className="text-[#d9ff00]">STUDIO.</span>
          </div>
        </Link>
        <div className="hidden lg:flex gap-4">
          {navData.map((item, i) => (
            <Link key={i} href={item.link}>
              <button className="px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-[#d9ff00] transition-all">
                {item.label} 
              </button>
            </Link>
          ))}
        </div>
        <Link href="/contact" className="relative z-[160]">
          <button className="bg-[#d9ff00] text-black px-10 py-3.5 rounded-2xl font-[1000] text-[11px] uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(217,255,0,0.4)] hover:shadow-[0_0_45px_rgba(217,255,0,0.8)] hover:scale-105 transition-all flex items-center gap-2 border-none">
            <Phone size={14} className="animate-bounce" /> START SCALING
          </button>
        </Link>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-56 pb-24 px-10 md:px-24">
        <div className="max-w-5xl">
          <span className="text-[#d9ff00] font-bold tracking-[0.5em] text-[11px] md:text-[13px] uppercase block mb-10 italic opacity-80 drop-shadow-[0_0_8px_rgba(217,255,0,0.2)]">
            Leading Performance Lab in Gurugram
          </span>
          

<h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] mb-12">
  OUR SERVICE <br /> <span className="text-zinc-800 italic">YOUR GROWTH.</span>
</h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#d9ff00]/20 pl-10 max-w-3xl">
           We don't follow trends; we create the visual authority that others copy. Based in the heart of the Gurugram startup landscape, ScaleCraft Studio is dedicated to turning ambitious brands into market leaders through calculated positioning and high-conversion systems. Stop chasing vanity metrics and start building a predictable revenue ecosystem that compounds over time.
          </p>
        </div>
      </section>

      {/* --- DEEP DESCRIPTIVE CONTENT --- */}
      <section className="py-32 px-10 md:px-24 space-y-64">
        
        {/* 1. SOCIAL MEDIA & CONTENT DOMINATION */}
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5"><Instagram className="text-[#d9ff00]" /></div>
               <h2 className="text-5xl font-black uppercase italic leading-none">Social Media <br/> <span className="text-[#d9ff00]">Domination.</span></h2>
            </div>
            <div className="space-y-8 text-zinc-400 text-lg font-medium italic leading-relaxed">
              <p>We take complete control of your social presence. It’s not about just posting; it’s about creating a "Movement" around your brand.</p>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                   <b className="text-white block mb-2 uppercase tracking-widest text-sm">Strategic Content Pillars:</b>
                   We define 4-5 core topics (Educational, Entertaining, Relatable, Transactional) that your brand will own in your industry.
                </div>
                <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                   <b className="text-white block mb-2 uppercase tracking-widest text-sm">Viral Hook Engineering:</b>
                   Our scripts are written using psychological triggers (curiosity, fear of missing out, or direct benefit) to stop the scroll in 1.5 seconds.
                </div>
                <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                   <b className="text-white block mb-2 uppercase tracking-widest text-sm">Community & Inbound Management:</b>
                   We manage comments and DMs proactively to nurture leads and build a loyal tribe that advocates for your brand.
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-48 bg-zinc-950 border border-white/5 rounded-[60px] aspect-square p-12 flex flex-col justify-center gap-6 group">
             <div className="flex items-center gap-4 text-zinc-700 font-black uppercase italic tracking-widest text-xs group-hover:text-[#d9ff00] transition-colors"><Share2 /> Organic Distribution Network</div>
             <div className="space-y-4">
                <div className="w-full h-12 bg-zinc-900 rounded-2xl flex items-center px-6"><motion.div initial={{width:0}} whileInView={{width:'90%'}} className="h-2 bg-[#d9ff00] rounded-full" /></div>
                <div className="w-full h-12 bg-zinc-900 rounded-2xl flex items-center px-6"><motion.div initial={{width:0}} whileInView={{width:'75%'}} className="h-2 bg-[#d9ff00]/60 rounded-full" /></div>
                <div className="w-full h-12 bg-zinc-900 rounded-2xl flex items-center px-6"><motion.div initial={{width:0}} whileInView={{width:'95%'}} className="h-2 bg-[#d9ff00]/30 rounded-full" /></div>
             </div>
          </div>
        </div>

        {/* 2. PERFORMANCE MARKETING & ROI ENGINE */}
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div className="order-2 md:order-1 sticky top-48 bg-zinc-950 border border-white/5 rounded-[60px] aspect-square flex flex-col items-center justify-center p-20">
             <motion.div animate={{rotate:360}} transition={{duration:15, repeat:Infinity, ease:"linear"}} className="relative w-full h-full border-2 border-dashed border-[#d9ff00]/10 rounded-full flex items-center justify-center">
                <Target size={100} className="text-[#d9ff00] opacity-20" />
                <div className="absolute top-0 w-4 h-4 bg-[#d9ff00] rounded-full shadow-[0_0_20px_#d9ff00]" />
             </motion.div>
             <h4 className="absolute font-black uppercase italic text-zinc-500 tracking-[0.5em] text-[10px]">Scanning Leads</h4>
          </div>
          <div className="order-1 md:order-2 space-y-12 text-right">
            <div className="flex items-center gap-4 justify-end">
               <h2 className="text-5xl font-black uppercase italic leading-none">Performance <br/> <span className="text-[#d9ff00]">Ads & Scaling.</span></h2>
               <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5"><Target className="text-[#d9ff00]" /></div>
            </div>
            <div className="space-y-8 text-zinc-400 text-lg font-medium italic leading-relaxed">
              <p>We treat every Rupee like an investment. Our performance systems are designed to convert cold traffic into high-intent customers.</p>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                   <b className="text-white block mb-2 uppercase tracking-widest text-sm">Multi-Channel Paid Ads:</b>
                   We scale across Meta (FB/IG) and Google Search/Display using advanced A/B testing models to find your "Winning Creative."
                </div>
                <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                   <b className="text-white block mb-2 uppercase tracking-widest text-sm">Lead Generation Funnels:</b>
                   We don't just send traffic to a website; we build high-converting landing pages and automated WhatsApp flows to capture intent.
                </div>
                <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                   <b className="text-white block mb-2 uppercase tracking-widest text-sm">Data & Pixel Integration:</b>
                   Full setup of FB Pixel, CAPI (Conversion API), and Google Analytics to track every single event and optimize your ROI (ROAS focus).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CREATIVE PRODUCTION & BRANDING */}
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5"><PenTool className="text-[#d9ff00]" /></div>
               <h2 className="text-5xl font-black uppercase italic leading-none">Creative <br/> <span className="text-[#d9ff00]">Production.</span></h2>
            </div>
            <div className="space-y-8 text-zinc-400 text-lg font-medium italic leading-relaxed">
              <p>Great marketing fails with bad creatives. We build visual assets that are not just "pretty" but are engineered to make people stop and take action.</p>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                   <b className="text-white block mb-2 uppercase tracking-widest text-sm">High-Retention Reel Editing:</b>
                   Cinematic transitions, captions that pop, and sound design that keeps viewers watching until the Call-To-Action.
                </div>
                <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                   <b className="text-white block mb-2 uppercase tracking-widest text-sm">Brand Identity Architecture:</b>
                   Designing logos, color palettes, and typography that make you look like a multi-million dollar company from Day 1.
                </div>
                <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
                   <b className="text-white block mb-2 uppercase tracking-widest text-sm">Ad Creative Lab:</b>
                   Static banners and video ads designed specifically for high Click-Through Rates (CTR).
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#d9ff00] rounded-[60px] p-20 text-black flex flex-col justify-between h-[400px] w-full">
             <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic">Visual Standard</p>
                <h4 className="text-5xl font-[1000] uppercase italic tracking-tighter leading-none">THE <br/> BRAND LAB.</h4>
             </div>
             <p className="text-2xl font-bold italic leading-tight">"We bridge the gap between artistic design and performance logic to build a brand that scales."</p>
          </div>
        </div>
      </section>
      {/* 4. HIGH-CONVERSION TECH & AUTOMATION */}
<div className="grid md:grid-cols-2 gap-24 items-start">
  <div className="order-2 md:order-1 sticky top-48 bg-zinc-950 border border-white/5 rounded-[60px] h-[400px] w-full flex flex-col items-center justify-center p-16 overflow-hidden">
     <div className="relative w-full space-y-4">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
            className="w-full h-14 bg-zinc-900/40 border border-white/5 rounded-2xl flex items-center px-6 justify-between"
          >
            <div className="flex gap-3 items-center">
              <div className="w-2 h-2 rounded-full bg-[#d9ff00] animate-pulse" />
              <div className="w-24 h-2 bg-zinc-800 rounded-full" />
            </div>
            <div className="w-12 h-2 bg-[#d9ff00]/20 rounded-full" />
          </motion.div>
        ))}
     </div>
     <p className="mt-12 text-[10px] font-black uppercase text-zinc-600 tracking-[0.8em]">System_Optimization_Active</p>
  </div>
  <div className="order-1 md:order-2 space-y-12 text-right">
    <div className="flex items-center gap-4 justify-end">
       <h2 className="text-5xl font-black uppercase italic leading-none">High-Conversion <br/> <span className="text-[#d9ff00]">Tech & Systems.</span></h2>
       <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5"><Cpu className="text-[#d9ff00]" /></div>
    </div>
    <div className="space-y-8 text-zinc-400 text-lg font-medium italic leading-relaxed">
      <p>Great ads fail on bad websites. We build the high-speed infrastructure that turns clicks into confirmed customers.</p>
      <div className="grid grid-cols-1 gap-6">
        <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
           <b className="text-white block mb-2 uppercase tracking-widest text-sm">Performance Landing Pages:</b>
           Ultra-fast, mobile-optimized pages designed with a "Conversion-First" psychology to maximize your ad-spend.
        </div>
        <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
           <b className="text-white block mb-2 uppercase tracking-widest text-sm">WhatsApp & CRM Automation:</b>
           We set up automated bots and lead-tracking systems so no inquiry ever goes unanswered, even while you sleep.
        </div>
        <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
           <b className="text-white block mb-2 uppercase tracking-widest text-sm">Technical Funnel Architecture:</b>
           Connecting your ads, website, and payment gateways into one seamless revenue-generating machine.
        </div>
      </div>
    </div>
  </div>
</div>
{/* 5. SEO & SEARCH AUTHORITY */}
<div className="grid md:grid-cols-2 gap-24 items-start mt-32 md:mt-48">
  <div className="space-y-12">
    <div className="flex items-center gap-4">
       <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5"><Globe className="text-[#d9ff00]" /></div>
       <h2 className="text-5xl font-black uppercase italic leading-none">Search <br/> <span className="text-[#d9ff00]">Authority (SEO).</span></h2>
    </div>
    <div className="space-y-8 text-zinc-400 text-lg font-medium italic leading-relaxed">
      <p>Paid ads bring fast results, but SEO builds a permanent asset. We make sure your brand is the first thing people see on Google.</p>
      <div className="grid grid-cols-1 gap-6">
        <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
           <b className="text-white block mb-2 uppercase tracking-widest text-sm">Local Search Dominance:</b>
           Ranking your business for high-intent keywords in Gurgaon and Greater Noida so local customers find you first.
        </div>
        <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
           <b className="text-white block mb-2 uppercase tracking-widest text-sm">Inbound Content Strategy:</b>
           Writing authoritative blogs and case studies that answer your customers' biggest questions and build deep trust.
        </div>
        <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-[#d9ff00]/20 transition-all">
           <b className="text-white block mb-2 uppercase tracking-widest text-sm">Authority Backlink Engine:</b>
           Building high-quality links from reputable sites to increase your domain's power and search ranking.
        </div>
      </div>
    </div>
  </div>
  <div className="bg-[#d9ff00] rounded-[60px] p-20 text-black flex flex-col justify-between h-[400px] w-full">
     <div className="space-y-4">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic">Long-Term Asset</p>
        <h4 className="text-5xl font-[1000] uppercase italic tracking-tighter leading-none">THE <br/> ORGANIC <br/> PULL.</h4>
     </div>
     <p className="text-2xl font-bold italic leading-tight">"We don't just buy traffic; we build an un-ignorable digital presence that grows on its own."</p>
  </div>
</div>

      {/* --- PRICING: INR REVISED --- */}
      <section id="pricing"className="py-48 bg-zinc-950 px-10m-32 md:px-24">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.5em] italic mb-6">Investment Models</h2>
          <h3 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-white">REVENUE <br/> <span className="text-zinc-800">PARTNERSHIPS.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { 
              name: "Essential", 
              price: "₹9,999", 
              sub: "Startup Friendly",
              features: ["Social Media Management", "Content Pillar Strategy", "8 High-End Designs/mo", "Basic Caption Copywriting", "Monthly Growth Audit"] 
            },
            { 
              name: "Performance", 
              price: "₹19,999", 
              sub: "Growth Catalyst",
              features: ["Full SMM Handling", "Performance Ads Management", "High-Retention Reel Editing", "Direct WhatsApp Lead Funnels", "Pixel & API Integration"] 
            },
            { 
              name: "Dominance", 
              price: "₹29,999", 
              sub: "Market Authority",
              features: ["Full Authority Ecosystem", "Unlimited Creative Lab", "Premium Content Production", "CRM & Lead Automation", "24/7 Strategic Consulting"] 
            }
          ].map((plan, i) => (
            <div key={i} className={`p-14 border rounded-[50px] flex flex-col justify-between transition-all duration-700 ${i === 1 ? 'bg-white text-black border-white shadow-[0_0_60px_rgba(255,255,255,0.1)] scale-105' : 'bg-black border-white/5 text-white'}`}>
              <div>
                <p className={`font-black uppercase text-[10px] tracking-[0.4em] mb-6 italic ${i === 1 ? 'text-zinc-400' : 'text-[#d9ff00]'}`}>{plan.sub}</p>
                <h4 className="text-4xl font-black uppercase italic mb-2 tracking-tighter">{plan.name}</h4>
                <div className="text-5xl font-[1000] tracking-tighter mb-10">{plan.price}<span className="text-xs font-bold opacity-30">/mo</span></div>
                <div className="h-[1px] bg-zinc-800/20 mb-10" />
                <ul className="space-y-5 mb-16">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex gap-4 text-[11px] font-black uppercase tracking-widest items-start leading-tight">
                      <div className={`w-2 h-2 rounded-full mt-1 ${i === 1 ? 'bg-black' : 'bg-[#d9ff00]'}`} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact">
                <button className={`w-full py-6 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all ${i === 1 ? 'bg-black text-[#d9ff00]' : 'bg-[#d9ff00] text-black shadow-[0_0_20px_rgba(217,255,0,0.3)]'}`}>Select Strategy</button>
              </Link>
            </div>
          ))}
        </div>
        
      </section>
      

      {/* --- FOOTER: SYNCED WITH HOME --- */}
      <footer className="py-24 bg-black border-t border-white/5 px-10 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
          <div className="space-y-8 text-white">
            <div className="text-3xl font-black tracking-tighter uppercase italic">SCALE<span className="text-[#d9ff00]">CRAFT.</span></div>
            <p className="text-zinc-500 font-medium italic max-w-xs text-sm leading-relaxed">Performance-driven branding studio based in Gurgaon. We engineer measurable growth for ambitious brands.</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-white font-black text-[10px] uppercase tracking-widest italic border-b border-[#d9ff00]/20 pb-2">LINKS</p>
              <ul className="space-y-3 text-zinc-500 font-bold uppercase text-[9px] tracking-widest">
                <li className="hover:text-[#d9ff00] cursor-pointer"><Link href="/services">Services</Link></li>
                <li className="hover:text-[#d9ff00] cursor-pointer"><Link href="/#founders">Founders</Link></li>
                <li className="hover:text-[#d9ff00] cursor-pointer">Success Cases</li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-white font-black text-[10px] uppercase tracking-widest italic border-b border-[#d9ff00]/20 pb-2">HQ</p>
              <div className="space-y-4 text-zinc-500 text-[9px] font-bold uppercase tracking-widest leading-loose">
                <p className="flex gap-3"><MapPin size={14} className="text-[#d9ff00] shrink-0" /> Gurgaon, HR</p>
                <p className="flex gap-3 truncate"><Mail size={14} className="text-[#d9ff00] shrink-0" /> scalecraftstudio7</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-8">
            <h4 className="text-3xl md:text-4xl font-black uppercase italic leading-none tracking-tighter text-white">READY TO <br /> <span className="text-zinc-800 underline decoration-[#d9ff00]/30 italic">SCALE FAST?</span></h4>
            <Link href="/contact">
              <button className="group relative w-36 h-36 rounded-full border border-white/10 flex items-center justify-center bg-transparent hover:bg-[#d9ff00] transition-all duration-700 shadow-2xl">
                  <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <span className="text-white group-hover:text-black font-black uppercase text-[9px] tracking-[0.3em] z-10 text-center leading-tight">
                    BOOK A <br /> CALL <ArrowUpRight className="inline ml-1" />
                  </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-zinc-700 text-[8px] tracking-[1em] font-black uppercase">© 2026 ScaleCraft Studio | Gurgaon</p>
        </div>
      </footer>
    </main>
  );
}