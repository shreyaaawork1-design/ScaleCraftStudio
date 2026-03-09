'use client';
import React, { useState, useEffect, useRef } from 'react';
// Line 3: Isme useMotionValue add karna zaroori hai
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Menu, ChevronDown, ArrowRight, X, Ruler, PenTool, Layout, Activity, Target, Zap, Globe, TrendingUp, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ArrowUpRight, Search, PencilRuler, Rocket, PieChart, Layers, Users, BarChart3, Shield, Cpu,MousePointer2 } from 'lucide-react';
import Link from 'next/link'; // Sabse upar ye line honi chahiye

// --- ALLIANCE PARTNERS (Exact Match with your Public Folder) ---
const partners = [
  { name: "UrbanSight Realty", logo: "/urbansightrealty.png" }, 
  { name: "Divinity Creations", logo: "/divinitycreations.png" }, 
  { name: "PhotoBox", logo: "/photobox.jpg" }, 
  { name: "Stonefeild Farms", logo: "/stonefieldfarms.png" }, 
];

const navData = [
  { 
    label: 'Our Services', 
    link: '/services', 
  },
  { 
    label: 'How we work', 
    link: '/work', 
  
  },
  { 
    label: 'About Us', 
    link: '/about', 
  }
];

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
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % 5), 5000); 
    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return <div className="relative w-full">{children}</div>;

  return (
    <div ref={ref} className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.18, scale: 1 }} 
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 py-10 px-6 md:py-20 md:px-20">
        {children}
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-16 z-20 flex gap-2">
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

const pipelineSteps = [
  { 
    title: "MARKET DISCOVERY", 
    desc: "We dismantle industry architecture to find hidden growth gaps Using 50+ data points from Gurgaon’s landscape, we audit the market to define a predictable path for your brand. We ensure every rupee is aimed at a mathematically proven audience for maximum scaling potential.", 
    icon: <Search size={22} />,
    technical: "PROTOCOL: DATA_MINING_v4.2"
  },
  { 
    title: "BRAND ARCHITECTURE", 
    desc: "Visual trust is authority. We engineer a Brand DNA that feels clinical and established. Using conversion-first psychology, we build a technical blueprint that guides every asset. From elite typography to strategic palettes, we ensure your brand stands as an unshakeable standard from Day 01.", 
    icon: <PencilRuler size={22} />,
    technical: "PROTOCOL: VISUAL_TRUST_ENGINE"
  },
  { 
    title: "CREATIVE PRODUCTION", 
    desc: "Our unit builds high-retention cinematic assets designed for the algorithm. We create storytelling frameworks that turn scrollers into advocates using high-speed narrative loops. We bridge the gap between art and engineering, producing content that commands action and builds long-term brand equity.", 
    icon: <PenTool size={22} />,
    technical: "PROTOCOL: RETENTION_MAX_CONTENT"
  },
  { 
    title: "STRATEGIC LAUNCH", 
    desc: "We deploy multi-channel campaigns using technical funnel hierarchies. Our protocol involves aggressive A/B testing across Meta and Google to ensure perfect attribution. By scaling winning creatives in real-time, we maintain a high-speed revenue engine that adapts to market shifts within hours.", 
    icon: <Rocket size={22} />,
    technical: "PROTOCOL: HYPER_SCALE_DEPLOY"
  },
  { 
    title: "RESULT OPTIMIZATION", 
    desc: "Success is a recurring audit. We track conversions through GA4 and CAPI integration to provide data depth. This allows us to compound growth while lowering costs. We audit your ROAS weekly to ensure your business remains a highly profitable market leader.", 
    icon: <PieChart size={22} />,
    technical: "PROTOCOL: ROI_MAXIMIZATION_LAB"
  }
];

const ladderPoints = [
  { label: "Phase 01: Analysis", x: "10%", y: "80%" },
  { label: "Phase 02: Design", x: "35%", y: "50%" },
  { label: "Phase 03: Lead Gen", x: "65%", y: "60%" },
  { label: "Phase 04: Market Dominance", x: "90%", y: "20%" }
];

const strategyPlans = [
  { 
    title: "FOUNDATION LAYER.", 
    desc: "Perfect for early-stage startups looking to establish a clinical digital presence. We focus on building a high-authority brand identity and an initial content engine that creates immediate market trust. This model ensures you are taken seriously from your very first interaction, providing a predictable launchpad for long-term dominance." 
  },
  { 
    title: "ACCELERATOR ENGINE.", 
    desc: "Engineered for businesses ready to dismantle their competitors and scale revenue aggressively. We deploy high-intensity performance advertising and conversion-focused web architecture to turn cold traffic into consistent, high-ticket leads. This system bridges the gap between technical complexity and business growth." 
  },
  { 
    title: "MONOPOLY ARCHITECTURE.", 
    desc: "The ultimate solution for brands demanding total market authority and unshakeable industry standards. We build a complete growth operating system, providing a bespoke content laboratory and a full-authority digital ecosystem. This is for leaders who refuse to settle for anything less than a permanent market-leading position." 
  }
];

// --- HELPERS ---
const HoverUnderline = ({ children, isNeon }) => (
  <span className={`relative group cursor-none inline-block ${isNeon ? 'text-[#d9ff00]' : ''}`}>
    <span className={`${isNeon ? 'text-[#d9ff00]' : 'group-hover:text-[#d9ff00]'} transition-colors duration-300`}>{children}</span>
    <span className="absolute left-0 -bottom-0.5 w-full h-[1.2px] bg-[#d9ff00] shadow-[0_0_8px_rgba(217,255,0,0.5)]" />
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
      className={`relative inline-block px-1 md:px-3 transition-colors cursor-none group ${type === 'highlight' ? 'text-4xl sm:text-7xl md:text-[85px] font-black' : 'text-base sm:text-2xl md:text-[32px] font-bold text-zinc-600'} ${isCraft ? 'text-[#d9ff00]' : ''}`}
    >
      {children}
      {type === 'highlight' && (
        <>
          <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 0.4 }} className="absolute -top-4 md:-top-6 left-0 w-full flex justify-between text-[4px] md:text-[6px] text-neon font-mono uppercase tracking-widest">
            <span>SCALE_v2.0</span><span>|</span><span>BLUEPRINT</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute -bottom-2 left-0 h-[1px] bg-neon/40 shadow-[0_0_15px_rgba(217,255,0,0.5)]" />
        </>
      )}
    </motion.span>
  );
};

const ShardCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 800, mass: 0.1 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 800, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="fixed top-0 left-0 z-[10000] pointer-events-none hidden md:block"
      style={{ 
        x: smoothX, 
        y: smoothY, 
        mixBlendMode: 'difference',
        filter: 'drop-shadow(0 0 12px rgba(217,255,0,0.8))' 
      }}
    >
      <MousePointer2 size={18} fill="#d9ff00" className="text-[#d9ff00]" />
    </motion.div>
  );
};

const StrategyCard = ({ plan, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }}
    className="sticky top-24 md:top-40 bg-zinc-950 border border-white/5 p-8 md:p-12 rounded-[30px] md:rounded-[50px] shadow-[0_-30px_60px_rgba(0,0,0,0.9)] h-auto md:h-[380px] mb-10 md:mb-20 flex flex-col justify-between group overflow-hidden"
    style={{ zIndex: index + 10, marginTop: index === 0 ? 0 : '-80px' }}
  >
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#d9ff00]/5 blur-[100px] pointer-events-none" />
    
    <div>
      <span className="text-[#d9ff00] font-black text-[9px] tracking-[0.4em] uppercase block mb-4 italic opacity-30">SYSTEM_MODEL_0{index + 1}</span>
      <h4 className="text-2xl md:text-5xl font-black uppercase italic text-white mb-6 tracking-tighter leading-none">{plan.title}</h4>
      <p className="text-zinc-500 text-xs md:text-base font-medium leading-relaxed italic max-w-2xl border-l-2 border-[#d9ff00]/20 pl-6 md:pl-8 group-hover:text-zinc-300 transition-colors">
        {plan.desc}
      </p>
    </div>

    <div className="text-zinc-800 font-mono text-[9px] uppercase tracking-widest italic font-bold mt-6">
        Engineering_Status: Ready_to_Deploy
    </div>
  </motion.div>
);

export default function ScaleCraftRefined() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ladderRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const { scrollYProgress } = useScroll({ 
    target: isMounted ? ladderRef : null, 
    offset: ["start 80%", "start 15%"] 
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  return (
    <div className="relative min-h-screen blueprint-draft text-sm md:text-base selection:bg-[#d9ff00] selection:text-black overflow-x-hidden">
      <div className="noise-overlay" />
      <ShardCursor />

      {/* --- BRAND HEADER --- */}
     {/* --- BRAND HEADER: REFINED SPACING & MOBILE MENU --- */}
<nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 w-[94%] md:w-[90%] z-[1000] px-3 md:px-10 py-2 md:py-4 flex flex-col rounded-[20px] md:rounded-[32px] bg-white/[0.05] backdrop-blur-[40px] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700">
  <div className="flex justify-between items-center w-full">
    
    {/* LOGO: Smaller size for more space */}
    <div 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-[12px] md:text-xl font-black tracking-tighter uppercase italic text-white cursor-pointer shrink-0"
    >
      SCALECRAFT<span className="text-[#d9ff00]">STUDIO.</span>
    </div>

    {/* Desktop Nav (Hidden on Mobile) */}
    <div className="hidden lg:flex gap-4">
      {navData.map((item, i) => (
        <Link key={i} href={item.link}>
          <button className="px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-[#d9ff00] transition-all">
            {item.label} 
          </button>
        </Link>
      ))}
    </div>

    {/* RIGHT ACTIONS: Button + 3 Bars */}
    <div className="flex items-center gap-2 md:gap-4">
      <Link href="/contact" className="relative z-[160]">
        <button className="bg-[#d9ff00] text-black px-3 md:px-8 py-2 md:py-3.5 rounded-lg md:rounded-2xl font-[1000] text-[8px] md:text-[11px] uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-1 border-none">
          {/* PHONE ANIMATION: Visible on Mobile too */}
          <Phone size={10} className="animate-bounce" />
          START SCALING
        </button>
      </Link>

      {/* THREE BAR MENU (Hamburger) */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  </div>

  {/* MOBILE DROPDOWN: Displays Services, Work, and About */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div 
        initial={{ height: 0, opacity: 0 }} 
        animate={{ height: 'auto', opacity: 1 }} 
        exit={{ height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden flex flex-col gap-1 mt-4 pb-4 px-2"
      >
        {navData.map((item, i) => (
          <Link key={i} href={item.link} onClick={() => setIsMenuOpen(false)}>
            <div className="flex flex-col py-3 border-b border-white/5 group">
              <span className="text-zinc-400 group-hover:text-[#d9ff00] font-black uppercase tracking-widest text-[10px] transition-colors">
                {item.label}
              </span>
            
              <span className="text-zinc-600 text-[8px] uppercase tracking-tighter mt-1 italic">
                {item.desc}
              </span>
            </div>
          </Link>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</nav>

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 md:pt-40 relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl z-10 text-left">
          <span className="text-[#d9ff00] font-bold tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[13px] uppercase block mb-10 italic opacity-80 drop-shadow-[0_0_8px_rgba(217,255,0,0.2)]">
            Leading Performance Lab in Gurugram
          </span>

          <HeroSlideshow>
            <h1 className="flex flex-col items-start gap-0 uppercase">
                <CalibratedWord type="highlight">SCALE</CalibratedWord>
                <CalibratedWord type="standard">YOUR REACH.</CalibratedWord>
                <CalibratedWord type="highlight">CRAFT</CalibratedWord>
                <CalibratedWord type="standard">YOUR LEGACY.</CalibratedWord>
            </h1>

            <div className="mt-12 md:mt-24 max-w-2xl border-l-4 border-[#d9ff00]/20 pl-6 md:pl-10 md:ml-auto md:mr-16 text-left md:text-right relative z-10">
              <p className="text-zinc-400 text-base md:text-xl font-medium leading-relaxed italic drop-shadow-2xl">
                We, at <HoverUnderline isNeon={true}>ScaleCraft Studio</HoverUnderline>, blend artistic precision with performance branding to build your brand a standard. We aren't just any other marketing agency, we're the only stop you need to take in your startup journey. So, Why not <HoverUnderline>craft</HoverUnderline> something and <HoverUnderline>scale</HoverUnderline> together?
              </p>
              <div className="flex justify-start md:justify-end mt-10">
                <Link href="/contact">
                  <button className="bg-[#d9ff00] text-black px-8 md:px-12 py-4 md:py-6 font-extrabold uppercase text-[9px] md:text-[10px] tracking-[0.3em] transition-all duration-300 shadow-[0_0_20px_#d9ff00] hover:shadow-[0_0_35px_#d9ff00] hover:scale-105 rounded-xl flex items-center gap-3 group">
                    Get in Touch 
                    <ArrowRight size={14} className="text-black group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </HeroSlideshow>
        </motion.div>
      </section>

      {/* --- PIPELINE --- */}
      <section className="py-24 md:py-48 bg-black relative border-y border-white/5 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:sticky top-48 h-fit max-w-sm">
            <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.4em] italic mb-6">Our Path</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic leading-none tracking-tighter text-white">THE STRATEGIC <br /> <span className="text-zinc-800 italic">BLUEPRINT.</span></h3>
          </div>
          <div className="flex-1 space-y-16 md:space-y-24">
            {pipelineSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} className="group relative border-l-2 border-white/10 pl-6 md:pl-10 py-4">
                <div className="absolute -left-2.5 top-6 w-4 h-4 bg-black border-2 border-[#d9ff00] rounded-full group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(217,255,0,0.5)]" />
                <div className="text-[#d9ff00] mb-4 opacity-40 group-hover:opacity-100 transition-opacity">{step.icon}</div>
                <h4 className="text-2xl md:text-3xl font-black uppercase italic text-zinc-500 group-hover:text-white transition-colors mb-3">{step.title}</h4>
                <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors text-base md:text-lg font-medium leading-relaxed max-w-lg">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS --- */}
      <section className="py-24 md:py-48 bg-[#050505] px-6 md:px-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.4em] italic mb-6">Revenue Systems</h2>
            <h3 className="text-4xl md:text-7xl font-[1000] uppercase italic leading-none tracking-tighter text-white">
                PERFORMANCE <br /> <span className="text-zinc-800">ARCHITECTURE.</span>
            </h3>
          </div>
          <p className="text-zinc-500 text-sm md:text-base font-medium max-w-sm italic md:text-right">We design specialized growth models that turn your brand into a market leader.</p>
        </div>

        <div className="max-w-5xl mx-auto relative pb-20 md:pb-32">
          {strategyPlans.map((plan, i) => (<StrategyCard key={i} plan={plan} index={i} />))}
        </div>

        <div className="max-w-5xl mx-auto flex justify-start md:justify-end relative z-[150] -mt-10">
           <Link href="/services#pricing">
             <button className="bg-[#d9ff00] text-black px-10 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-[1000] text-[10px] md:text-[11px] uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(217,255,0,0.3)] hover:shadow-[0_0_50px_#d9ff00] hover:scale-105 transition-all flex items-center gap-3 group">
                VIEW FULL SETUP 
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
           </Link>
        </div>
      </section>

      {/* --- THE SCALECRAFT EDGE (BENTO GRID) --- */}
      <section className="py-24 md:py-48 bg-black relative px-6 md:px-24 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.5em] italic mb-6">The Competitive Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-[1000] uppercase italic leading-none tracking-tighter text-white">WHY WE ARE <br /> <span className="text-zinc-800">UNBEATABLE.</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div className="md:col-span-2 bg-zinc-950 border border-white/5 p-8 md:p-10 rounded-[30px] md:rounded-[40px] flex flex-col justify-between group hover:border-[#d9ff00]/20 transition-all min-h-[280px]">
              <Activity className="text-[#d9ff00] mb-6" size={24} />
              <div>
                <h4 className="text-xl font-black uppercase italic text-white mb-4">Data Mastery</h4>
                <p className="text-zinc-500 text-sm font-medium italic leading-relaxed max-w-2xl">
                   We treat marketing as mathematics. We audit 50+ data points to identify inefficient funnels and install <span className="text-[#d9ff00]">clinical data architectures</span> for predictable scaling of your high-ticket ecosystems.
                </p>
              </div>
            </motion.div>

            <motion.div className="bg-zinc-900/40 border border-white/5 p-8 md:p-10 rounded-[30px] md:rounded-[40px] flex flex-col justify-center group hover:bg-zinc-900/60 transition-all min-h-[250px]">
              <MapPin className="text-[#d9ff00] mb-6" size={24} />
              <h4 className="text-xl font-black uppercase italic text-white mb-3">Local Logic</h4>
              <p className="text-zinc-500 text-xs font-medium italic leading-loose">
                  Deep intelligence in the <span className="text-[#d9ff00]">NCR region</span>. Craft localized messages that resonate with high-intent audiences.
              </p>
            </motion.div>

            <motion.div className="bg-zinc-900/40 border border-white/5 p-8 md:p-10 rounded-[30px] md:rounded-[40px] flex flex-col justify-center group hover:bg-zinc-900/60 transition-all min-h-[250px]">
              <Zap className="text-[#d9ff00] mb-6" size={24} />
              <h4 className="text-xl font-black uppercase italic text-white mb-3">Rapid Scale</h4>
              <p className="text-zinc-500 text-xs font-medium italic leading-loose">
                  Protocols outpace trends. Deploy high-speed <span className="text-[#d9ff00]">cinematic assets</span> within hours, ensuring revenue momentum.
              </p>
            </motion.div>

            <motion.div className="md:col-span-2 bg-zinc-950 border border-white/5 p-8 md:p-10 rounded-[30px] md:rounded-[40px] flex flex-col justify-between group hover:border-[#d9ff00]/20 transition-all min-h-[280px]">
              <Layers className="text-[#d9ff00] mb-6" size={24} />
              <div>
                <h4 className="text-xl font-black uppercase italic text-white mb-4">Tech First Stack</h4>
                <p className="text-zinc-500 text-sm font-medium italic leading-relaxed max-w-2xl">
                   We leverage advanced tech stacks, integrating <span className="text-[#d9ff00]">Next.js, Vercel, and GA4</span> with Meta’s CAPI for surgical tracking and better ROI.
                </p>
              </div>
            </motion.div>

            <motion.div className="bg-zinc-900/40 border border-white/5 p-8 md:p-10 rounded-[30px] md:rounded-[40px] flex flex-col justify-center group hover:bg-zinc-900/60 transition-all min-h-[250px]">
              <Globe className="text-[#d9ff00] mb-6" size={24} />
              <h4 className="text-xl font-black uppercase italic text-white mb-3">Custom Systems</h4>
              <p className="text-zinc-500 text-xs font-medium italic leading-loose">
                  Zero templates. We operate with custom-built <span className="text-[#d9ff00]">operating systems</span> for your unique business stage.
              </p>
            </motion.div>

            <motion.div className="bg-zinc-900/40 border border-white/5 p-8 md:p-10 rounded-[30px] md:rounded-[40px] flex flex-col justify-center group hover:bg-zinc-900/60 transition-all min-h-[250px]">
              <TrendingUp className="text-[#d9ff00] mb-6" size={24} />
              <h4 className="text-xl font-black uppercase italic text-white mb-3">Revenue ROI</h4>
              <p className="text-zinc-500 text-xs font-medium italic leading-loose">
                  Prioritize cash revenue over vanity metrics. We chase clinical <span className="text-[#d9ff00]">Return on Ad Spend (ROAS)</span>.
              </p>
            </motion.div>

            <motion.div className="bg-zinc-900/40 border border-white/5 p-8 md:p-10 rounded-[30px] md:rounded-[40px] flex flex-col justify-center group hover:bg-zinc-900/60 transition-all min-h-[250px]">
              <Shield className="text-[#d9ff00] mb-6" size={24} />
              <h4 className="text-xl font-black uppercase italic text-white mb-3">Authority Hub</h4>
              <p className="text-zinc-500 text-xs font-medium italic leading-loose">
                  We don't just run ads; we install <span className="text-[#d9ff00]">authority frameworks</span>. Bridge visual prestige and performance.
              </p>
            </motion.div>

            <motion.div className="md:col-span-2 bg-zinc-950 border border-white/5 p-8 md:p-10 rounded-[30px] md:rounded-[40px] flex flex-col justify-between group hover:border-[#d9ff00]/20 transition-all min-h-[280px]">
              <Cpu className="text-[#d9ff00] mb-6" size={24} />
              <div>
                <h4 className="text-xl font-black uppercase italic text-white mb-4">Retention Tech</h4>
                <p className="text-zinc-500 text-sm font-medium italic leading-relaxed max-w-2xl">
                   We engineer <span className="text-[#d9ff00]">retention-focused systems</span> that compound growth through automated CRM integrations, turning buyers into advocates.
                </p>
              </div>
            </motion.div>

            <motion.div className="bg-zinc-900/40 border border-white/5 p-8 md:p-10 rounded-[30px] md:rounded-[40px] flex flex-col justify-center group hover:bg-zinc-900/60 transition-all min-h-[250px]">
              <Target className="text-[#d9ff00] mb-6" size={24} />
              <h4 className="text-xl font-black uppercase italic text-white mb-3">Creative Lab</h4>
              <p className="text-zinc-500 text-xs font-medium italic leading-loose">
                  High-retention cinematic assets. Bridge <span className="text-[#d9ff00]">artistry and performance</span> logic for algorithmic dominance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ROADMAP --- */}
      <section ref={ladderRef} className="py-24 md:py-48 bg-black relative overflow-hidden px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.4em] italic mb-6">Our Trajectory</h2>
            <h3 className="text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter leading-none text-white">THE ASCENSION PATH.</h3>
        </div>

        <div className="relative h-[400px] md:h-[600px] max-w-5xl mx-auto border border-white/5 rounded-[30px] md:rounded-[60px] bg-white/[0.01] backdrop-blur-sm overflow-hidden">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full p-0 pointer-events-none z-10">
              <motion.path 
                d="M 10 80 C 20 80, 25 50, 35 50 S 55 60, 65 60 S 80 20, 90 20" 
                fill="transparent" 
                stroke="#d9ff00" 
                strokeWidth="0.5" 
                style={{ pathLength }} 
                strokeDasharray="2 1"
                className="drop-shadow-[0_0_8px_#d9ff00]"
              />
            </svg>

            {ladderPoints.map((point, i) => (
              <motion.div 
                key={i} 
                style={{ left: point.x, top: point.y }} 
                className="absolute group flex flex-col items-center -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#d9ff00] rounded-full shadow-[0_0_30px_#d9ff00]" />
                <div className="mt-4 md:mt-8 flex flex-col items-center">
                  <div className="bg-black/80 backdrop-blur-3xl border border-white/10 p-3 md:p-5 rounded-xl md:rounded-[24px] text-center min-w-[120px] md:min-w-[200px]">
                     <p className="text-[#d9ff00] font-black text-[7px] md:text-[9px] uppercase mb-2">MISSION_STEP_0{i+1}</p>
                     <p className="text-white font-black uppercase text-[10px] md:text-[13px]">{point.label.split(': ')[1]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* --- DUAL FOUNDERS --- */}
      <section id="founders" className="py-24 md:py-64 bg-black text-white px-6 md:px-24 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-12 md:gap-10 relative z-10">
            <div className="flex justify-center items-center">
               <div className="relative w-full max-w-[300px] h-[400px] md:max-w-[350px] md:h-[480px] rounded-[30px] md:rounded-[50px] overflow-hidden border border-[#d9ff00]/20 bg-[#080808] shadow-2xl">
                 <img src="Mankirat.jpeg" alt="Mankirat Singh" className="absolute inset-0 w-full h-full object-cover object-top" />
                 <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="font-black uppercase text-xl md:text-2xl italic leading-none">MANKIRAT SINGH</p>
                    <p className="text-[8px] md:text-[9px] font-black uppercase mt-3 text-[#d9ff00]">CEO & FOUNDER</p>
                 </div>
               </div>
            </div>

            <div className="text-center px-4 md:px-8 space-y-12">
               <div className="flex flex-col items-center gap-6">
                  <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#d9ff00]/40 to-transparent" />
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.8em] text-zinc-800">Visionaries</span>
               </div>
               <h6 className="text-xs md:text-base font-medium uppercase italic leading-loose tracking-tight text-zinc-500">
                  "At <span className="text-white">ScaleCraft Studio</span>, growth is engineered — never accidental. We build <span className="text-[#d9ff00]">performance-driven</span> systems designed to convert and compound."
               </h6>
            </div>

            <div className="flex justify-center items-center">
               <div className="relative w-full max-w-[300px] h-[400px] md:max-w-[350px] md:h-[480px] rounded-[30px] md:rounded-[50px] overflow-hidden border border-[#d9ff00]/20 bg-[#080808] shadow-2xl">
                 <img src="Aakash.jpeg" alt="Aakash Setia" className="absolute inset-0 w-full h-full object-cover object-top" />
                 <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="font-black uppercase text-xl md:text-2xl italic leading-none">AAKASH SETIA</p>
                    <p className="text-[8px] md:text-[9px] font-black uppercase mt-3 text-[#d9ff00]">COO & FOUNDER</p>
                 </div>
               </div>
            </div>
        </div>
      </section>

      {/* --- ALLIANCE STRIPE --- */}
      <section className="py-20 md:py-28 bg-[#d9ff00] overflow-hidden border-y border-black/10 relative z-40">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex gap-12 md:gap-24 whitespace-nowrap items-center w-max">
          {[...partners, ...partners, ...partners].map((item, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-24">
              <div className="w-48 h-20 md:w-72 md:h-28 flex items-center justify-center relative">
                <img src={item.logo} alt={item.name} className="max-h-full max-w-full object-contain scale-110 md:scale-125" />
              </div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-black/15 rotate-45" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 md:py-48 bg-zinc-950 px-6 md:px-24 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.4em] italic mb-6 opacity-60">Forge Connection</h2>
            <h3 className="text-4xl md:text-7xl font-black uppercase italic leading-none tracking-tighter text-white">LET'S <br /> BUILD THE <br /> <span className="text-zinc-800">STANDARD.</span></h3>
            <p className="text-zinc-500 text-base md:text-xl font-medium max-w-lg italic border-l-4 border-[#d9ff00]/20 pl-6 text-left">We aren't a service; we are a partnership. Define your startup blueprint and let's engineer your predictable market authority.</p>
          </div>
          
          <div className="flex-shrink-0 relative group self-center md:self-auto">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=scalecraftstudio7@gmail.com&su=Project%20Inquiry%20-%20ScaleCraft%20Studio" target="_blank" rel="noopener noreferrer" className="group relative w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900 shadow-2xl overflow-hidden hover:border-[#d9ff00]/30 transition-all duration-700">
              <div className="absolute inset-0 bg-[#d9ff00] scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
              <div className="flex flex-col items-center gap-2 z-10 transition-colors duration-700 group-hover:text-black">
                <span className="text-zinc-500 font-black uppercase text-[8px] md:text-[10px] tracking-[0.3em] group-hover:text-black">A formal Enquiry?</span>
                <Mail size={32} className="text-[#d9ff00] group-hover:text-black" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 md:py-24 bg-black border-t border-white/5 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start">
          <div className="space-y-6 text-white">
            <div className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">SCALE<span className="text-[#d9ff00]">CRAFT.</span></div>
            <p className="text-zinc-500 font-medium italic text-xs md:text-sm leading-relaxed">Performance-driven branding studio based in Gurgaon. We engineer measurable growth for ambitious brands.</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-white font-black text-[10px] uppercase border-b border-[#d9ff00]/20 pb-2">LINKS</p>
              <ul className="space-y-3 text-zinc-500 font-bold uppercase text-[9px] tracking-widest">
                <li className="hover:text-[#d9ff00] cursor-pointer">Services</li>
                <li className="hover:text-[#d9ff00] cursor-pointer"><a href="#founders">Founders</a></li>
                <li className="hover:text-[#d9ff00] cursor-pointer">Success Cases</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-white font-black text-[10px] uppercase border-b border-[#d9ff00]/20 pb-2">HQ</p>
              <div className="space-y-3 text-zinc-500 text-[9px] font-bold uppercase">
                <p className="flex gap-3"><MapPin size={14} className="text-[#d9ff00]" /> Gurgaon, HR</p>
                <p className="flex gap-3 truncate"><Mail size={14} className="text-[#d9ff00]" /> scalecraftstudio7</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-8">
            <h4 className="text-3xl md:text-4xl font-black uppercase italic text-white text-center md:text-right">READY TO <br /> <span className="text-zinc-800 underline decoration-[#d9ff00]/30">SCALE FAST?</span></h4>
            <Link href="/contact">
              <button className="group relative w-32 h-32 md:w-36 md:h-36 rounded-full border border-white/10 flex items-center justify-center bg-transparent hover:bg-[#d9ff00] transition-all duration-700 shadow-2xl">
                 <span className="text-white group-hover:text-black font-black uppercase text-[9px] z-10 text-center">BOOK A <br /> CALL <ArrowUpRight className="inline ml-1" /></span>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-zinc-700 text-[8px] tracking-[1em] font-black uppercase">© 2026 ScaleCraft Studio | Gurgaon</p>
        </div>
      </footer>
    </div>
  );
}