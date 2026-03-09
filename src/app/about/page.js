'use client';
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  ArrowUpRight, MapPin, Mail, Phone, Cpu, Globe, 
  Shield, Zap, Fingerprint, Target, MousePointer2, 
  Users, Award, TrendingUp, Microscope, Landmark, 
  Workflow, Network, BarChart3, Binary, Sparkles, TrendingUp as SalesIcon
} from 'lucide-react';
import Link from 'next/link';

// --- SHARED DATA ---
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
    <motion.div className="fixed top-0 left-0 z-[10000] pointer-events-none" style={{ x: smoothX, y: smoothY, filter: 'drop-shadow(0 0 8px rgba(217,255,0,0.6))' }}>
      <MousePointer2 size={18} fill="#d9ff00" className="text-[#d9ff00]" />
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d9ff00] selection:text-black">
      <ShardCursor />

      {/* --- HEADER --- */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] z-[150] px-10 py-5 flex justify-between items-center rounded-[32px] bg-white/[0.05] backdrop-blur-[50px] border border-white/20 shadow-2xl">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="text-xl font-black tracking-tighter uppercase italic text-white transition-all group-hover:drop-shadow-[0_0_15px_rgba(217,255,0,0.9)]">
            SCALECRAFT<span className="text-[#d9ff00]">STUDIO.</span>
          </div>
        </Link>
        <div className="hidden lg:flex gap-4 font-black">
          {navData.map((item, i) => (
            <Link key={i} href={item.link}>
              <button className={`px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] transition-all ${item.label === 'About Us' ? 'text-[#d9ff00]' : 'text-zinc-400 hover:text-[#d9ff00]'}`}>
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

      {/* --- HERO: pt-52 --- */}
      <section className="pt-52 pb-16 px-10 md:px-24">
        <div className="max-w-6xl">
          <span className="text-[#d9ff00] font-bold tracking-[0.5em] text-[11px] md:text-[13px] uppercase block mb-10 italic opacity-80">
            Leading Performance Lab in Gurugram
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-12">
            THE ARCHITECTS <br /> <span className="text-zinc-800">OF AUTHORITY.</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#d9ff00]/20 pl-10 max-w-4xl">
            ScaleCraft Studio is a high-speed performance laboratory. Based in Gurgaon, we operate at the intersection of clinical data engineering and high-end visual storytelling to dismantle market barriers and install permanent revenue engines.
          </p>
        </div>
      </section>

      {/* --- SECTION 1: THE GENESIS (py-24 for reduced gap) --- */}
      <section className="py-24 px-10 md:px-24">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">The <br/> <span className="text-[#d9ff00]">Genesis.</span></h2>
            <div className="text-zinc-400 text-lg font-medium italic space-y-8 leading-relaxed">
              <p>ScaleCraft Studio was founded to solve the crisis of digital mediocrity. We recognized that most brands needed more than just "ads"—they needed a <span className="text-[#d9ff00]">Technical Authority Framework</span>. Our history is rooted in technical discipline, treating every marketing campaign like a high-precision software deployment.</p>
              <p>Today, we stand as the primary laboratory for brands that refuse to settle for "average" growth. We have bridged the gap between complex technical infrastructure and emotional human connection, allowing our clients to scale their revenue without losing their identity.</p>
            </div>
          </div>
          <div className="bg-zinc-950 border border-white/5 rounded-[60px] h-[450px] flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-[#d9ff00]/5 to-transparent" />
             <div className="p-16 relative z-10 text-center space-y-6">
                <div className="w-16 h-16 bg-zinc-900 border border-[#d9ff00]/30 rounded-[28px] mx-auto flex items-center justify-center shadow-2xl">
                   <Workflow size={32} className="text-[#d9ff00]" />
                </div>
                <h3 className="text-xl font-black uppercase italic tracking-widest text-white">Systemic Growth.</h3>
                <p className="text-zinc-500 text-sm italic">"Clinical engineering for market leaders."</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE FOUNDERS (Compact Placeholders) --- */}
      <section className="py-24 bg-zinc-950/30 px-10 md:px-24">
        <div className="text-center mb-24">
          <h4 className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.5em] italic mb-6">The Minds Behind The Lab</h4>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">THE <br/> <span className="text-zinc-800">FOUNDERS.</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {/* Mr. Mankirat Singh - Sales Focus */}
          <div className="space-y-10 group">
             <div className="max-w-[320px] aspect-[4/5] bg-zinc-900 border border-white/5 rounded-[48px] relative overflow-hidden shadow-2xl mx-auto">
                <div className="absolute inset-0 flex items-center justify-center opacity-10"><Users size={100} /></div>
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-transparent">
                   <SalesIcon className="text-[#d9ff00] mb-2" size={24} />
                   <h3 className="text-2xl font-black uppercase italic tracking-tighter">Mr. Mankirat Singh</h3>
                </div>
             </div>
             <div className="px-4 text-center">
                <p className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.4em] mb-4">Managing Partner | Sales Strategy</p>
                <p className="text-zinc-400 text-lg font-medium italic leading-relaxed">
                  Mr. Mankirat Singh drives the <span className="text-[#d9ff00]">Sales & Strategic Vision</span> at ScaleCraft. He specializes in high-ticket consumer psychology and market positioning, ensuring that every brand doesn't just grow—it dominates. His focus is on decoding the market 'Signal' to drive clinical acquisition.
                </p>
             </div>
          </div>

          {/* Mr. Aakash Setia - Creativity Focus */}
          <div className="space-y-10 group">
             <div className="max-w-[320px] aspect-[4/5] bg-zinc-900 border border-white/5 rounded-[48px] relative overflow-hidden shadow-2xl mx-auto">
                <div className="absolute inset-0 flex items-center justify-center opacity-10"><Users size={100} /></div>
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-transparent">
                   <Sparkles className="text-[#d9ff00] mb-2" size={24} />
                   <h3 className="text-2xl font-black uppercase italic tracking-tighter">Mr. Aakash Setia</h3>
                </div>
             </div>
             <div className="px-4 text-center">
                <p className="text-[#d9ff00] font-black uppercase text-[10px] tracking-[0.4em] mb-4">Creative Director | Visual Systems</p>
                <p className="text-zinc-400 text-lg font-medium italic leading-relaxed">
                  Mr. Aakash Setia is the <span className="text-[#d9ff00]">Creative Force</span> behind ScaleCraft's high-end visual systems. He ensures that clinical data is translated into un-ignorable storytelling assets. Aakash focuses on stop-the-scroll aesthetics and conversion-first design architecture.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: LEADERSHIP (py-24 for reduced gap) --- */}
      {/* --- SECTION 3: NICHE LEADERSHIP (Broadened & Descriptive) --- */}
{/* --- SECTION 3: NICHE LEADERSHIP (Gap Filled with Animation) --- */}

<section className="py-24 px-10 md:px-24 relative overflow-hidden">
        
        {/* Gap Filler Background Texture */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="grid lg:grid-cols-12 gap-10 items-stretch relative z-10">
          
          {/* Lime Card (Fixed ARCHITECTURE Font) */}
          <div className="lg:col-span-4 bg-[#d9ff00] rounded-[60px] p-10 text-black flex flex-col justify-between shadow-2xl relative overflow-hidden group">
             <div className="space-y-6 relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic">Industry Domination</p>
                <h4 className="text-3xl md:text-5xl font-[1000] uppercase italic tracking-tighter leading-[0.85] break-words">
                  NICHE <br/> LEADERSHIP <br/> <span className="text-black/40">ARCHITECTURE.</span>
                </h4>
             </div>
             <div className="space-y-6 relative z-10">
                <p className="text-lg font-bold italic leading-tight border-l-4 border-black/20 pl-6">
                  "We specialize in dominance, not generalism."
                </p>
                <div className="flex gap-2">
                   <div className="px-3 py-1 bg-black text-[#d9ff00] rounded-full text-[8px] font-black uppercase tracking-widest italic">EST_2026</div>
                </div>
             </div>
          </div>

          {/* THE ANIMATED GAP FILLER (The Data Stream) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center gap-8 py-10">
             <motion.div animate={{ height: [0, 150, 0], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-[1px] bg-gradient-to-b from-transparent via-[#d9ff00] to-transparent shadow-[0_0_15px_#d9ff00]" />
             <div className="p-3 border border-[#d9ff00]/20 rounded-full animate-pulse shadow-[0_0_20px_rgba(217,255,0,0.1)]">
                <Binary size={20} className="text-[#d9ff00]/40" />
             </div>
             <motion.div animate={{ height: [0, 150, 0], opacity: [0, 1, 0] }} transition={{ duration: 3, delay: 1.5, repeat: Infinity }} className="w-[1px] bg-gradient-to-t from-transparent via-[#d9ff00] to-transparent shadow-[0_0_15px_#d9ff00]" />
          </div>

          {/* Broad Niche Cards (approx 400 words here) */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
             
             {/* Real Estate */}
             <div className="p-8 bg-zinc-950 border border-white/5 rounded-[48px] hover:border-[#d9ff00]/20 transition-all group">
                <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#d9ff00] group-hover:text-black transition-all">
                   <Landmark size={20} />
                </div>
                <h5 className="text-xl font-black uppercase italic tracking-tighter mb-4 text-white">Premium Real Estate</h5>
                <p className="text-zinc-500 text-sm italic leading-relaxed">
                  We engineer high-intent lead generation systems for luxury housing in <span className="text-[#d9ff00]">Gurgaon, Greater Noida, and Ghaziabad</span>. By analyzing hyper-local market trends and integrating Vastu-compliant messaging, we build deep trust before the first site visit. Our systems are tailored for high-ticket developers who demand clinical conversion accuracy.
                </p>
             </div>

             {/* D2C Scaling */}
             <div className="p-8 bg-zinc-950 border border-white/5 rounded-[48px] hover:border-[#d9ff00]/20 transition-all group">
                <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#d9ff00] group-hover:text-black transition-all">
                   <Sparkles size={20} />
                </div>
                <h5 className="text-xl font-black uppercase italic tracking-tighter mb-4 text-white">D2C Product Scaling</h5>
                <p className="text-zinc-500 text-sm italic leading-relaxed">
                  We take <span className="text-[#d9ff00]">Home-grown Brands</span> and scale them into household names. If you produce high-quality products at home and want to sell them at scale, we build the digital pipeline to make it happen—from inventory-aware ads to seamless Next.js checkout systems. We ensure your product story reaches the right audience at the right ROAS.
                </p>
             </div>

             {/* Visual Branding */}
             <div className="p-8 bg-zinc-950 border border-white/5 rounded-[48px] hover:border-[#d9ff00]/20 transition-all group">
                <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#d9ff00] group-hover:text-black transition-all">
                   <Fingerprint size={20} />
                </div>
                <h5 className="text-xl font-black uppercase italic tracking-tighter mb-4 text-white">Visual Branding</h5>
                <p className="text-zinc-500 text-sm italic leading-relaxed">
                  Visual dominance is the foundation of digital authority. We create <span className="text-[#d9ff00]">Luxury Identity Systems</span> that mirror the prestige of multi-million dollar corporations. Our branding lab focuses on stop-the-scroll aesthetics and conversion-first design architecture, ensuring your brand stands as an unshakeable leader from day one.
                </p>
             </div>

             {/* Tech Infrastructure */}
             <div className="p-8 bg-zinc-950 border border-white/5 rounded-[48px] hover:border-[#d9ff00]/20 transition-all group">
                <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#d9ff00] group-hover:text-black transition-all">
                   <Binary size={20} />
                </div>
                <h5 className="text-xl font-black uppercase italic tracking-tighter mb-4 text-white">Technical E-Com</h5>
                <p className="text-zinc-500 text-sm italic leading-relaxed">
                  We build ultra-fast storefronts using <span className="text-[#d9ff00]">Next.js and Vercel</span> to ensure load times under 1.5 seconds. By integrating GA4 and Meta's Conversion API (CAPI), we provide a data-depth that allows for surgical ROI optimization. This is where clinical engineering meets high-speed retail commerce.
                </p>
             </div>

          </div>
        </div>
      </section>
      {/* --- SECTION 4: VISION 2026 (py-24 for reduced gap) --- */}
      <section className="py-24 bg-zinc-950/50 px-10 md:px-24 text-center">
         <div className="max-w-5xl mx-auto space-y-12">
            <Network size={80} className="text-[#d9ff00]/20 mx-auto" />
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-none">THE <span className="text-[#d9ff00]">VISION</span> FOR 2026.</h2>
           <div className="text-zinc-400 text-lg md:text-xl font-medium italic space-y-10 max-w-4xl mx-auto leading-relaxed">
               <p>
                  As we move deeper into 2026, the mission of ScaleCraft Studio is undergoing a massive evolution. We are no longer just building marketing funnels; we are engineering <span className="text-[#d9ff00]">Business Operating Systems</span>. Our goal is to integrate AI-driven creative intelligence with clinical data auditing to ensure that our clients stay five steps ahead of the curve in an increasingly volatile global economy.
               </p>
               <p>
                  We are expanding our laboratory’s footprint from the NCR region to the global digital landscape. By maintaining our core 'Brand DNA First' philosophy, we ensure that every partnership we enter is not just a transaction, but a long-term investment in excellence. We believe that the future of commerce belongs to those who can bridge the gap between technical complexity and deep human connection.
               </p>
               <p>
                  Our vision is to become the primary performance infrastructure for the next generation of D2C brands and real estate giants. ScaleCraft is here to prove that with the right data architecture and a relentless focus on ROI, any ambitious brand can achieve unshakeable market dominance. We are not just your agency; we are your strategic partners in the science of scaling.
               </p>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 bg-black border-t border-white/5 px-10 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
          <div className="space-y-8 text-white">
            <div className="text-3xl font-black tracking-tighter uppercase italic">SCALE<span className="text-[#d9ff00]">CRAFT.</span></div>
            <p className="text-zinc-500 font-medium italic max-w-xs text-sm leading-relaxed">Performance-driven branding studio based in Gurgaon.</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-white font-black text-[10px] uppercase tracking-widest italic border-b border-[#d9ff00]/20 pb-2">LINKS</p>
              <ul className="space-y-3 text-zinc-500 font-bold uppercase text-[9px] tracking-widest italic">
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/work">How we work</Link></li>
                <li><Link href="/about">About Us</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-white font-black text-[10px] uppercase tracking-widest italic border-b border-[#d9ff00]/20 pb-2">HQ</p>
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