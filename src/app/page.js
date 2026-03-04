'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, X, Ruler, PenTool, Layout, Activity, Target, Zap, Globe, TrendingUp, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ArrowUpRight, Search, PencilRuler, Rocket, PieChart, Layers, Users, BarChart3, Shield, Cpu } from 'lucide-react';
import Link from 'next/link'; // Sabse upar ye line honi chahiye




const navData = [
  { 
    label: 'Our Services', 
    link: '/services', 
    desc: 'How we help you grow', 
    sub: ['Ads that bring Sales', 'Making Your Brand Famous', 'Viral Reels & Content', 'Getting New Leads'] 
  },
  { 
    label: 'How we work', 
    link: '/work', 
    desc: 'Our simple 5-step way', 
    sub: ['The Strategy', 'Tools We Use', 'Our Process'] 
  },
  { 
    label: 'About Us', 
    link: '/about', 
    desc: 'Brands we have grown', 
    sub: ['Who are we', 'What do we do', 'Our Leadership'] 
  }
];

{/* --- HERO TAGLINE (Force Visible Version) --- */}
<span className="text-[#d9ff00] font-[1000] tracking-[0.2em] text-[20px] md:text-[20px] uppercase block mb-12 italic opacity-100 relative z-[50] drop-shadow-[0_0_15px_rgba(217,255,0,0.5)]">
  Leading Performance Lab in Gurgaon
</span>

const HeroSlideshow = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
    "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1200",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200"
  ];

  useEffect(() => {
    setIsMounted(true);
    // 5 second timer
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % 5), 5000); 
    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return <div className="relative w-full">{children}</div>;

  return (
    <div ref={ref} className="relative w-full rounded-[60px] overflow-hidden group">
      {/* --- BACKGROUND SLIDESHOW LAYER --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.18, scale: 1 }} // Low opacity taaki text pop kare
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={images[index]} 
              className="w-full h-full object-cover grayscale brightness-50" 
              alt="Background Growth" 
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark Vignette Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* --- TEXT CONTENT OVERLAY --- */}
      <div className="relative z-10 py-20 px-10 md:px-20">
        {children}
      </div>

      {/* Progress Bars at the Bottom of Placeholder */}
      <div className="absolute bottom-10 right-16 z-20 flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-[2px] rounded-full transition-all duration-700 ${index === i ? 'w-8 bg-[#d9ff00]' : 'w-2 bg-white/10'}`} 
          />
        ))}
      </div>
    </div>
  );
};

        

  

const partners = ['UrbanSight Reality', 'DIY', 'SWIGGY', 'ZOMATO', 'BOAT'];

const pipelineSteps = [
  { title: "MARKET DISCOVERY", desc: "We study your business and competitors to find the exact growth gaps where your brand can win and attract customers. We use data to find your most profitable audience.", icon: <Search size={22} /> },
  { title: "BRAND ARCHITECTURE", desc: "We design a professional visual identity and a clear strategic message that makes people trust your brand instantly. This ensures your brand looks established from day one.", icon: <PencilRuler size={22} /> },
  { title: "CREATIVE PRODUCTION", desc: "Our team builds high quality content designed to grab attention and turn regular visitors into loyal followers. We focus on storytelling that actually converts and builds long term brand equity.", icon: <PenTool size={22} /> },
  { title: "STRATEGIC LAUNCH", desc: "We launch targeted ad campaigns across all major platforms using advanced algorithms to reach the right people at the perfect time for maximum revenue growth.", icon: <Rocket size={22} /> },
  { title: "RESULT OPTIMIZATION", desc: "We track every click and conversion to constantly improve our strategy and ensure your brand keeps growing over time while lowering your costs.", icon: <PieChart size={22} /> }
];

const ladderPoints = [
  { label: "Phase 01: Analysis", x: "10%", y: "80%" },
  { label: "Phase 02: Design", x: "35%", y: "50%" },
  { label: "Phase 03: Lead Gen", x: "65%", y: "60%" },
  { label: "Phase 04: Market Dominance", x: "90%", y: "20%" }
];

const strategyPlans = [
  { title: "Good", features: ["Logo & Brand Identity", "Social Presence Setup", "Initial Content Strategy"], desc: "Built for early stage brands looking to establish a professional presence. This model creates the trust needed to enter a competitive market and ensures you are taken seriously from the first interaction." },
  { title: "Better", features: ["Paid Growth Management", "Lead Capture Systems", "Conversion Focused Web"], desc: "Designed for businesses ready to scale revenue aggressively. We use data driven advertising and digital experiences to turn traffic into consistent leads and outperform your competitors." },
  { title: "Best", features: ["Full Market Takeover", "Bespoke Content Lab", "24/7 Strategic Support"], desc: "The ultimate solution for industry leaders demanding total authority. A complete ecosystem providing premium video production and total market reach across all digital platforms." }
];

// --- HELPERS ---
const HoverUnderline = ({ children }) => (
  <span className="relative group cursor-none inline-block">
    <span className="group-hover:text-[#d9ff00] transition-colors duration-300">{children}</span>
    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.2px] bg-[#d9ff00] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(217,255,0,0.5)]" />
  </span>
);


const CalibratedWord = ({ children, type }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const handleMouse = (e) => {
    if (type !== 'highlight') return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.4;
    const y = (clientY - (top + height / 2)) * 0.4;
    setPos({ x, y });
  };
  const isCraft = children === "CRAFT";
  return (
    <motion.span 
      ref={ref} onMouseMove={handleMouse} onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={type === 'highlight' ? { x: pos.x, y: pos.y } : { x: 0, y: 0 }}
      whileHover={{ color: "#d9ff00" }}
      className={`relative inline-block px-3 transition-colors cursor-none group ${type === 'highlight' ? 'text-5xl md:text-[85px] font-black' : 'text-xl md:text-[32px] font-bold text-zinc-600'} ${isCraft ? 'text-[#d9ff00]' : ''}`}
    >
      {children}
      {type === 'highlight' && (
        <>
          <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 0.4 }} className="absolute -top-6 left-0 w-full flex justify-between text-[6px] text-neon font-mono uppercase tracking-widest">
            <span>SCALE_v2.0</span><span>|</span><span>BLUEPRINT</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute -bottom-2 left-0 h-[1px] bg-neon/40 shadow-[0_0_15px_rgba(217,255,0,0.5)]" />
        </>
      )}
    </motion.span>
  );
};

// --- SHARD CURSOR (Smooth Mix-Blend + Scaled Hover) ---
const ShardCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onIn = () => setIsHovered(true);
    const onOut = () => setIsHovered(false);
    window.addEventListener('mousemove', move);
    // Remove hover listener from standard 'button, a' elements to manage neon button specifically
    document.querySelectorAll('button:not(.permanent-neon), a').forEach(el => {
      el.addEventListener('mouseenter', onIn); el.addEventListener('mouseleave', onOut);
    });
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <motion.div 
      className="fixed top-0 left-0 w-4 h-4 bg-[#d9ff00] z-[10000] pointer-events-none mix-blend-difference" 
      animate={{ x: pos.x - 8, y: pos.y - 8, scale: isHovered ? 4 : 1, rotate: isHovered ? 45 : 0 }} 
      transition={{ type: 'spring', damping: 25, stiffness: 450 }} 
    />
  );
};
const StrategyCard = ({ plan, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    className="sticky top-32 bg-zinc-950 border border-white/5 p-12 md:p-14 rounded-[40px] shadow-[0_-30px_60px_rgba(0,0,0,0.8)] h-[420px] mb-16 flex flex-col justify-between group overflow-hidden"
    style={{ zIndex: index + 10, marginTop: index === 0 ? 0 : '-120px' }}
  >
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#d9ff00]/5 blur-[100px] pointer-events-none" />
    <div>
      <span className="text-[#d9ff00] font-black text-[8px] tracking-[0.4em] uppercase block mb-4 opacity-30 italic">Solution Tier 0{index + 1}</span>
      <h4 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-6 tracking-tighter leading-none">{plan.title}</h4>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
        {plan.features.map((feat, idx) => (
          <li key={idx} className="flex items-center gap-3 text-zinc-500 font-bold uppercase text-[10px] tracking-widest group-hover:text-white transition-colors">
            <div className="w-1.5 h-1.5 bg-[#d9ff00] rounded-full shadow-[0_0_10px_#d9ff00]" /> {feat}
          </li>
        ))}
      </ul>
    </div>
    <div className="max-w-xl">
      <p className="text-zinc-400 text-lg font-medium leading-relaxed italic border-l-2 border-[#d9ff00]/20 pl-6">{plan.desc}</p>
    </div>
  </motion.div>
);

export default function ScaleCraftRefined() {
  const [activeNav, setActiveNav] = useState(null);
  const [isNexusOpen, setIsNexusOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ladderRef = useRef(null);

  useEffect(() => { setIsMounted(true); }, []);

  const { scrollYProgress } = useScroll({ target: isMounted ? ladderRef : null, offset: ["start end", "end center"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  return (
    <div className="relative min-h-screen blueprint-draft text-sm md:text-base selection:bg-[#d9ff00] selection:text-black">
      <div className="noise-overlay" />
      <ShardCursor />

      {/* --- HEADER --- */}
      {/* --- BRAND HEADER --- */}
<nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] z-[150] glass-vault px-10 py-4 flex flex-col rounded-3xl overflow-visible">
  <div className="flex justify-between items-center w-full">
    
    {/* 1. LOGO: CLICK TO TOP */}
    <div 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex items-center gap-3 group cursor-pointer"
    >
      <div className="relative">
        <BarChart3 size={20} className="text-[#d9ff00] opacity-80" />
        <TrendingUp 
          size={16} 
          className="absolute -top-1 -right-1 text-white group-hover:text-[#d9ff00] transition-colors duration-500 animate-pulse" 
        />
      </div>
      <div className="text-lg font-extrabold tracking-tighter uppercase italic text-white">
        SCALE<span className="text-[#d9ff00]">CRAFT.</span>
      </div>
    </div>

    {/* 2. CENTER: NAVIGATION WITH DROPDOWNS */}
    <div className="hidden lg:flex gap-2">
  {navData.map((item, i) => (
    <div key={i} className="relative group" onMouseEnter={() => setActiveNav(i)} onMouseLeave={() => setActiveNav(null)}>
      {/* Is Link tag ki wajah se page badlega */}
      <Link href={item.link}>
        <button className="px-5 py-2 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
          {item.label} 
          {item.sub && item.sub.length > 0 && (
            <ChevronDown size={12} className={activeNav === i ? 'rotate-180 transition-transform' : ''} />
          )}
        </button>
      </Link>

      <AnimatePresence>
        {item.sub && item.sub.length > 0 && activeNav === i && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 w-64 bg-[#080808] border border-white/10 p-8 shadow-2xl mt-4 rounded-2xl z-[160]">
             <p className="text-[7px] font-black text-[#d9ff00] uppercase tracking-[0.3em] mb-4 italic">{item.desc}</p>
             <ul className="space-y-3">
              {item.sub.map((sub, idx) => (
                <li key={idx} className="text-[10px] font-semibold text-zinc-500 hover:text-white uppercase tracking-wider transition-colors cursor-pointer">
                  {sub}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</div>

    {/* 3. RIGHT: PERMANENT NEON BUTTON WITH PHONE ANIMATION */}
    <Link href="/contact">
      <button className="bg-[#d9ff00] text-black px-8 py-2.5 rounded-lg font-black text-[9px] uppercase tracking-widest shadow-[0_0_15px_rgba(217,255,0,0.5)] hover:shadow-[0_0_25px_rgba(217,255,0,0.8)] transition-all flex items-center gap-2 group">
        <Phone 
          size={12} 
          className="group-hover:animate-bounce transition-transform duration-300 text-black" 
        />
        START GROWING
      </button>
    </Link>

  </div>
</nav>

      {/* --- HERO: ALIGNMENT AS PROVIDED --- */}
     {/* --- HERO SECTION --- */}
{/* --- HERO SECTION WITH INTEGRATED BACKGROUND --- */}
<section className="min-h-screen flex flex-col justify-center px-10 md:px-24 pt-40 relative overflow-hidden">
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl z-10 text-left">
    
    <span className="text-[#d9ff00] font-black tracking-[0.8em] text-[9px] uppercase block mb-12 italic opacity-50">
      Leading Performance Lab in Gurgaon
    </span>

    {/* Integrated Placeholder Container */}
    <HeroSlideshow>
      {/* TITLES: Your exact alignment maintained */}
      <h1 className="flex flex-col items-start gap-0 uppercase">
        <div className="flex items-center -ml-4">
          <CalibratedWord type="highlight">SCALE</CalibratedWord>
        </div>
        <div className="flex items-center ml-20 md:ml-40 -mt-2">
          <CalibratedWord type="standard">YOUR REACH.</CalibratedWord>
        </div>
        <div className="flex items-center -ml-6 mt-4">
          <CalibratedWord type="highlight">CRAFT</CalibratedWord>
        </div>
        <div className="flex items-center ml-20 md:ml-40 -mt-2">
          <CalibratedWord type="standard">YOUR LEGACY.</CalibratedWord>
        </div>
      </h1>

      {/* PARAGRAPH: Now inside the placeholder bounds */}
      {/* Paragraph section below titles */}
<div className="mt-20 md:mt-24 max-w-2xl border-l-4 border-[#d9ff00]/20 pl-10 ml-auto mr-10 md:mr-16 text-right relative z-10">
  <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed italic drop-shadow-2xl">
    We, at <HoverUnderline>Scale</HoverUnderline><HoverUnderline>Craft</HoverUnderline> Studio, blend artistic precision with performance branding to build your brand a standard. We aren't just any other marketing agency, we're the only stop you need to take in your startup journey.So, Why not craft something and scale together?
  </p>
  <div className="flex justify-end mt-10">
    {/* Permanent Neon Button Integration */}
    {/* --- HERO PARAGRAPH CTA --- */}
<div className="flex justify-end mt-10">
  <Link href="/contact">
    <button className="bg-[#d9ff00] text-black px-12 py-6 font-extrabold uppercase text-[10px] tracking-[0.3em] transition-all duration-300 shadow-[0_0_20px_#d9ff00] hover:shadow-[0_0_35px_#d9ff00] hover:scale-105 rounded-xl flex items-center gap-3 group">
      Get in Touch 
      <ArrowRight size={14} className="text-black group-hover:translate-x-1 transition-transform" />
    </button>
  </Link>
</div>
  </div>
</div>
    </HeroSlideshow>

  </motion.div>
</section>

      {/* --- PIPELINE --- */}
      <section className="py-48 bg-black relative border-y border-white/5 px-10 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:sticky top-48 h-fit max-w-sm">
            <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.4em] italic mb-6">Our Path</h2>
            <h3 className="text-5xl font-black uppercase italic leading-none tracking-tighter text-white">THE STRATEGIC <br /> <span className="text-zinc-800 italic">BLUEPRINT.</span></h3>
          </div>
          <div className="flex-1 space-y-24">
            {pipelineSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} className="group relative border-l-2 border-white/10 pl-10 py-4">
                <div className="absolute -left-2.5 top-6 w-4 h-4 bg-black border-2 border-[#d9ff00] rounded-full group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(217,255,0,0.5)]" />
                <div className="text-[#d9ff00] mb-4 opacity-40 group-hover:opacity-100 transition-opacity">{step.icon}</div>
                <h4 className="text-3xl font-black uppercase italic text-zinc-500 group-hover:text-white transition-colors mb-3">{step.title}</h4>
                <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors text-lg font-medium leading-relaxed max-w-lg">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS --- */}
      <section className="py-48 bg-[#050505] px-10 md:px-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto mb-32 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.4em] italic mb-6">Service Models</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter text-white">REVENUE <br /> <span className="text-zinc-800">ECOSYSTEMS.</span></h3>
          </div>
          <p className="text-zinc-500 text-base md:text-lg font-medium max-w-sm italic text-right">We design specialized growth models that turn your brand into a market leader.</p>
        </div>
        <div className="max-w-5xl mx-auto relative">
          {strategyPlans.map((plan, i) => (<StrategyCard key={i} plan={plan} index={i} />))}
        </div>
      </section>

      {/* --- WHY US (BENTO GRID) --- */}
     {/* --- THE SCALECRAFT EDGE (Small Grid Bento) --- */}
      <section className="py-48 bg-black relative px-10 md:px-24 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.5em] italic mb-6">The Competitive Advantage</h2>
            <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-none tracking-tighter text-white">WHY WE ARE <br /> <span className="text-zinc-800">UNBEATABLE.</span></h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Box 1: Data Mastery */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="col-span-2 bg-zinc-950 border border-white/5 p-10 rounded-[32px] flex flex-col justify-between group hover:border-[#d9ff00]/20 transition-all">
              <Activity className="text-[#d9ff00] mb-6" size={24} />
              <div>
                <h4 className="text-2xl font-black uppercase italic text-white mb-4">Data Mastery</h4>
                <p className="text-zinc-500 text-sm font-medium italic leading-relaxed">We treat every marketing campaign as a mathematical problem, optimizing for the lowest cost and highest return.</p>
              </div>
            </motion.div>

            {/* Box 2: Gurgaon Intelligence */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-zinc-900/40 border border-white/5 p-8 rounded-[32px] group hover:bg-zinc-900/60 transition-all">
              <MapPin className="text-[#d9ff00] mb-6" size={24} />
              <h4 className="text-xl font-black uppercase italic text-white mb-3">Local Logic</h4>
              <p className="text-zinc-500 text-xs font-medium italic">Deep intelligence on the Gurgaon startup landscape.</p>
            </motion.div>

            {/* Box 3: Speed */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-zinc-900/40 border border-white/5 p-8 rounded-[32px] group hover:bg-zinc-900/60 transition-all">
              <Zap className="text-[#d9ff00] mb-6" size={24} />
              <h4 className="text-xl font-black uppercase italic text-white mb-3">Rapid Scale</h4>
              <p className="text-zinc-500 text-xs font-medium italic">Execution speed that outpaces market trends and competitors.</p>
            </motion.div>

            {/* Box 4: Architecture */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-zinc-900/40 border border-white/5 p-8 rounded-[32px] group hover:bg-zinc-900/60 transition-all">
              <Layers className="text-[#d9ff00] mb-6" size={24} />
              <h4 className="text-xl font-black uppercase italic text-white mb-3">Tech First</h4>
              <p className="text-zinc-500 text-xs font-medium italic">Using advanced tech stacks for tracking and deployment.</p>
            </motion.div>

            {/* Box 5: Custom Ecosystems */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="col-span-2 bg-zinc-950 border border-white/5 p-10 rounded-[32px] flex flex-col justify-between group hover:border-[#d9ff00]/20 transition-all">
              <Globe className="text-[#d9ff00] mb-6" size={24} />
              <div>
                <h4 className="text-2xl font-black uppercase italic text-white mb-4">Bespoke Ecosystems</h4>
                <p className="text-zinc-500 text-sm font-medium italic">Zero templates. We architect custom growth models specifically for your unique business stage.</p>
              </div>
            </motion.div>

            {/* Box 6: ROI Focus */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="bg-zinc-900/40 border border-white/5 p-8 rounded-[32px] group hover:bg-zinc-900/60 transition-all">
              <TrendingUp className="text-[#d9ff00] mb-6" size={24} />
              <h4 className="text-xl font-black uppercase italic text-white mb-3">Revenue ROI</h4>
              <p className="text-zinc-500 text-xs font-medium italic">We prioritize real revenue over vanity social metrics.</p>
            </motion.div>

          

          </div>
        </div>
      </section>

      {/* --- ROADMAP --- */}
      <section ref={ladderRef} className="py-48 bg-black relative overflow-hidden px-10">
        <div className="max-w-5xl mx-auto text-center mb-24">
           <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.4em] italic mb-6">Our Trajectory</h2>
           <h3 className="text-6xl font-black uppercase italic tracking-tighter leading-none text-white">THE ASCENSION PATH.</h3>
        </div>
        <div className="relative h-[550px] max-w-5xl mx-auto border border-white/5 rounded-[50px] bg-white/[0.01] backdrop-blur-sm">
           <svg className="absolute inset-0 w-full h-full p-20 pointer-events-none">
              <motion.path d="M 50 400 Q 250 400 400 200 T 800 100" fill="transparent" stroke="#d9ff00" strokeWidth="3" style={{ pathLength }} strokeDasharray="8 8" />
           </svg>
           {ladderPoints.map((point, i) => (
             <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.15 }} style={{ left: point.x, top: point.y }} className="absolute group flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-[#d9ff00] rounded-full shadow-[0_0_20px_rgba(217,255,0,0.8)] cursor-none" />
                <div className="mt-4 flex flex-col items-center">
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-3 rounded-lg text-center min-w-[150px]">
                     <p className="text-[#d9ff00] font-black text-[8px] uppercase tracking-widest mb-1 italic opacity-60">Phase_0{i+1}</p>
                     <p className="text-white font-black uppercase text-[10px] tracking-tight">{point.label.split(': ')[1]}</p>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* --- DUAL FOUNDERS: BRAND BEE STYLE --- */}
      {/* --- DUAL FOUNDERS SECTION --- */}
<section id="founders" className="py-48 bg-white text-black px-10 md:px-24 overflow-hidden border-y border-zinc-200">
  {/* ... baaki founders ka code ... */}
</section>
      <section className="py-48 bg-white text-black px-10 md:px-24 overflow-hidden border-y border-zinc-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 items-center gap-10">
           <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="relative bg-zinc-100 rounded-3xl overflow-hidden aspect-[4/5] border border-zinc-200 group">
{/* REPLACE THIS: <div className="absolute inset-0 bg-[#d9ff00]/5 ...">MANKIRAT</div> */}

{/* WITH THIS: */}
<img 
  src="Mankirat.jpeg" 
  alt="Mankirat Singh" 
  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" 
/>              <div className="absolute bottom-8 left-8">
                 <p className="font-black uppercase text-2xl italic leading-none">Mr. Mankirat Singh</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest mt-2 opacity-50">Co-Founder & Director</p>
              </div>
           </motion.div>
           <div className="text-center px-10">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-300 italic">Visionaries</span>
              <h4 className="text-3xl font-black uppercase italic leading-tight mt-6 tracking-tighter">At ScaleCraft Studio, growth is engineered — never accidental.
Brands scale through precision, positioning, and disciplined execution.
We build performance-driven systems designed to convert and compound.
Every strategy we craft is built to deliver measurable, lasting impact.</h4>
              <div className="mt-12 w-16 h-[1px] bg-zinc-200 mx-auto" />
           </div>
           <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="relative bg-zinc-100 rounded-3xl overflow-hidden aspect-[4/5]  border border-zinc-200 group">
<img 
    src="/Aakash.jpeg" 
    alt="Aakash Setia" 
    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100" 
  />              <div className="absolute bottom-8 left-8">
                 <p className="font-black uppercase text-2xl italic leading-none">Mr. Aakash Setia</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest mt-2 opacity-50">Co-Founder & Director</p>
              </div>
           </motion.div>
        </div>
      </section>

   {/* --- ALLIANCE STRIPE --- */}
      <section className="py-32 bg-[#d9ff00] overflow-hidden">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex gap-32 whitespace-nowrap text-black font-black tracking-[1.2em] text-4xl uppercase italic items-center">
          {partners.concat(partners).map((c, i) => (<div key={i} className="flex items-center gap-32">{c} <div className="w-5 h-5 bg-black/10 rotate-45" /></div>))}
        </motion.div>
      </section>

      {/* --- CONTACT US SECTION (Visible Now) --- */}
      <section id="contact" className="py-48 bg-zinc-950 px-10 md:px-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d9ff00]/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.4em] italic mb-6 opacity-60">Forge Connection</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter text-white">LET'S <br /> BUILD THE <br /> <span className="text-zinc-800">STANDARD.</span></h3>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-lg italic border-l-4 border-[#d9ff00]/20 pl-8 ml-0 text-left">We aren't a service; we are a partnership. Define your startup blueprint and let's engineer your predictable market authority.</p>
          </div>
          
         {/* --- CONTACT CTA BUTTON --- */}
{/* --- DIRECT GMAIL COMPOSE LINK --- */}
<div className="flex-shrink-0 relative group">
  <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=scalecraftstudio7@gmail.com&su=Project%20Inquiry%20-%20ScaleCraft%20Studio" 
    target="_blank" // Naye tab mein kholne ke liye
    rel="noopener noreferrer"
    className="group relative w-56 h-56 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900 shadow-2xl overflow-hidden hover:border-[#d9ff00]/30 transition-all duration-700"
  >
    {/* Hover Background Effect */}
    <div className="absolute inset-0 bg-[#d9ff00] scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
    
    <div className="flex flex-col items-center gap-2 z-10 transition-colors duration-700 group-hover:text-black">
      <span className="text-zinc-500 font-extrabold uppercase text-[10px] tracking-[0.3em] italic group-hover:text-black transition-colors">
        A formal Enquiry?
      </span>
      <Mail size={32} className="text-[#d9ff00] group-hover:text-black transition-colors" />
    </div>
  </a>
</div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 bg-black border-t border-white/5 px-10 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
          <div className="space-y-8 text-white">
            <div className="text-3xl font-black tracking-tighter uppercase italic">SCALE<span className="text-[#d9ff00]">CRAFT.</span></div>
            <p className="text-zinc-500 font-medium italic max-w-xs text-sm leading-relaxed">Performance-driven branding studio based in Gurgaon. We engineer measurable growth for ambitious brands.</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-white font-black text-[10px] uppercase tracking-widest italic border-b border-[#d9ff00]/20 pb-2">LINKS</p>
              {/* --- FOOTER LINKS --- */}
<ul className="space-y-3 text-zinc-500 font-bold uppercase text-[9px] tracking-widest">
  <li className="hover:text-[#d9ff00] cursor-none">Services</li>
  
  {/* Link to Founders Section */}
  <li className="hover:text-[#d9ff00] cursor-none">
    <a href="#founders" className="block w-full">Founders</a>
  </li>
  
  <li className="hover:text-[#d9ff00] cursor-none">Success Cases</li>
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
           {/* --- FOOTER CIRCULAR CTA --- */}
<div className="flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-8">
  
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
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-zinc-700 text-[8px] tracking-[1em] font-black uppercase">© 2026 ScaleCraft Studio | Gurgaon</p>
        </div>
      </footer>

    

      {/* --- MODAL --- */}
      
    </div>
  );
}