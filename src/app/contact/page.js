'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Mail, Phone, MapPin, Send, 
  MousePointer2, ArrowUpRight, Instagram, Linkedin, Twitter, X, CheckCircle2, Menu, Layers, Activity, Target
} from 'lucide-react';
import Link from 'next/link';

// --- DATA ---
const navData = [
  { label: 'Our Services', link: '/services' },
  { label: 'How we work', link: '/work' },
  { label: 'About Us', link: '/about' }
];

// --- SHARD CURSOR (Fast + Mix-Blend) ---
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

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState('Ads');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const data = {
      service_id: 'service_pytn4qb',
      template_id: 'template_24wqdbn',
      user_id: 'i-79-BgiaiHwj8IEl',
      template_params: {
        from_name: formData.get('from_name'),
        brand_name: formData.get('brand_name'),
        service_type: selectedService,
        message: formData.get('message'),
        reply_to: 'enquiry@scalecraftstudio.in'
      }
    };

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setIsSubmitting(false);
        setShowPopup(true);
        e.target.reset();
        setTimeout(() => setShowPopup(false), 4000);
      }
    } catch (error) {
      console.error("Email Error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d9ff00] selection:text-black flex flex-col overflow-x-hidden">
      <ShardCursor />

      {/* --- SUCCESS POPUP --- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[1000] bg-zinc-950 border border-[#d9ff00]/30 p-5 md:p-6 rounded-2xl md:rounded-[32px] shadow-2xl backdrop-blur-xl flex items-center gap-4 md:gap-6"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#d9ff00] rounded-full flex items-center justify-center shadow-[0_0_20px_#d9ff00]">
              <CheckCircle2 size={20} className="text-black" />
            </div>
            <div>
              <p className="font-black uppercase italic text-[10px] md:text-xs tracking-widest text-[#d9ff00]">Form Submitted</p>
              <p className="text-zinc-400 text-[8px] md:text-[10px] font-bold uppercase mt-1">We'll reach out within 24 hours.</p>
            </div>
            <button onClick={() => setShowPopup(false)} className="text-zinc-700 hover:text-white transition-colors ml-2 md:ml-4"><X size={16} /></button>
          </motion.div>
        )}
      </AnimatePresence>
      
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
                <button className="px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-[#d9ff00] transition-all">
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
                    <span className="text-zinc-400 font-black uppercase tracking-widest text-[10px]">{item.label}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <section className="flex-1 flex items-center px-6 md:px-24 pt-40 md:pt-56 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-2 space-y-8 md:space-y-10">
            <div>
              <span className="text-[#d9ff00] font-black tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px] uppercase block mb-4 italic opacity-80">
                Phase 05: Initiation
              </span>
              <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
                LET'S <br /> <span className="text-zinc-800">TALK.</span>
              </h1>
            </div>
            <div className="space-y-4 border-l-2 border-[#d9ff00]/20 pl-6 md:pl-8">
              <p className="text-zinc-500 font-bold uppercase text-[9px] md:text-[10px] tracking-widest italic">Based in Gurgaon, Haryana</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=enquiry@scalecraftstudio.in" target="_blank" className="text-[#d9ff00] text-xs md:text-sm font-black italic hover:underline flex items-center gap-2">
                enquiry@scalecraftstudio.in<ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-zinc-950/40 border border-white/5 p-6 md:p-10 rounded-[30px] md:rounded-[40px] backdrop-blur-sm space-y-6 md:space-y-8 shadow-2xl relative overflow-hidden">
            {isSubmitting && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-10 h-10 border-2 border-[#d9ff00] border-t-transparent rounded-full" />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-zinc-600 text-[8px] font-black uppercase tracking-widest">Name</label>
                <input required name="from_name" type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#d9ff00] text-sm transition-all italic" />
              </div>
              <div className="space-y-2">
                <label className="text-zinc-600 text-[8px] font-black uppercase tracking-widest">Brand</label>
                <input required name="brand_name" type="text" placeholder="ScaleCraft" className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#d9ff00] text-sm transition-all italic" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-zinc-600 text-[8px] font-black uppercase tracking-widest">Select Growth Service</label>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['Ads', 'SMM', 'Design', 'Systems', 'SEO'].map((s) => (
                  <button type="button" key={s} onClick={() => setSelectedService(s)} className={`px-4 md:px-6 py-2 rounded-full border text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all ${selectedService === s ? 'bg-[#d9ff00] text-black border-[#d9ff00]' : 'border-white/10 text-zinc-500 hover:border-white/30'}`}>{s}</button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-zinc-600 text-[8px] font-black uppercase tracking-widest">Tell us about your goals</label>
              <textarea required name="message" rows="2" className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#d9ff00] text-sm transition-all resize-none italic" />
            </div>

            <button type="submit" className="w-full bg-[#d9ff00] text-black py-5 md:py-6 rounded-xl md:rounded-2xl font-[1000] text-[10px] md:text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_0_40px_rgba(217,255,0,0.4)] transition-all">
              {isSubmitting ? 'ENGINEERING...' : "LET'S CRAFT"} <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* --- FINAL FOOTER --- */}
      <footer className="py-16 md:py-24 bg-black border-t border-white/5 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start">
          <div className="space-y-8 text-white">
            <div className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">
              SCALE<span className="text-[#d9ff00]">CRAFT.</span>
            </div>
            <p className="text-zinc-500 font-medium italic max-w-xs text-xs md:text-sm leading-relaxed">
              Performance-driven branding studio based in Gurgaon. We engineer measurable growth for ambitious brands.
            </p>
            <div className="flex gap-6 items-center">
              <a href="#" className="text-zinc-500 hover:text-[#d9ff00] transition-all"><Instagram size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-[#d9ff00] transition-all"><Twitter size={20} /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=scalecraftstudio7@gmail.com" className="text-zinc-500 hover:text-[#d9ff00] transition-all"><Mail size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-white font-black text-[9px] md:text-[10px] uppercase border-b border-[#d9ff00]/20 pb-2 italic">LINKS</p>
              <ul className="space-y-3 text-zinc-500 font-bold uppercase text-[8px] md:text-[9px] tracking-widest">
                <li><Link href="/services" className="hover:text-[#d9ff00] flex items-center gap-2"><Layers size={12}/> Services</Link></li>
                <li><Link href="/work" className="hover:text-[#d9ff00] flex items-center gap-2"><Activity size={12}/> How we work</Link></li>
                <li><Link href="/about" className="hover:text-[#d9ff00] flex items-center gap-2"><Target size={12}/> Success Cases</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-white font-black text-[9px] md:text-[10px] uppercase border-b border-[#d9ff00]/20 pb-2 italic">HQ</p>
              <div className="space-y-4 text-zinc-500 text-[8px] md:text-[9px] font-bold uppercase tracking-widest leading-loose">
                <p className="flex gap-3 items-center"><MapPin size={14} className="text-[#d9ff00] shrink-0" /> Gurgaon, HR</p>
                <p className="flex gap-3 truncate items-center"><Mail size={14} className="text-[#d9ff00] shrink-0" /> scalecraftstudio7</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-8">
            <h4 className="text-3xl md:text-4xl font-black uppercase italic leading-none text-white">READY TO <br /> <span className="text-zinc-800 underline decoration-[#d9ff00]/30 italic">SCALE FAST?</span></h4>
            <Link href="/contact">
              <button className="group relative w-32 h-32 md:w-36 md:h-36 rounded-full border border-white/10 flex items-center justify-center bg-transparent hover:bg-[#d9ff00] transition-all duration-700 shadow-2xl overflow-hidden">
                 <span className="text-white group-hover:text-black font-black uppercase text-[9px] tracking-[0.3em] z-10 text-center leading-tight">BOOK A <br /> CALL <ArrowUpRight className="inline ml-1" size={12} /></span>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-zinc-700 text-[7px] md:text-[8px] tracking-[1em] font-black uppercase">© 2026 ScaleCraft Studio | Gurgaon</p>
        </div>
      </footer>
    </main>
  );
}