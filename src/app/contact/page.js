'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'; // Added AnimatePresence here
import { 
  ArrowRight, Mail, Phone, MapPin, Send, 
  MousePointer2, ArrowUpRight, Instagram, Linkedin, Twitter, X, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

// --- DATA (Synced with Home) ---
const navData = [
  { label: 'Our Services', link: '/services' },
  { label: 'How we work', link: '/work' },
  { label: 'About Us', link: '/about' }
];

// --- SHARED CURSOR ---
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

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState('Ads');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // ACTUAL EMAILJS LOGIC
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      service_id: 'service_pytn4qb',   // Replace with your EmailJS Service ID
      template_id: 'template_24wqdbn', // Replace with your EmailJS Template ID
      user_id: 'i-79-BgiaiHwj8IEl',      // Replace with your EmailJS Public Key
      template_params: {
        from_name: formData.get('from_name'),
        brand_name: formData.get('brand_name'),
        service_type: selectedService,
        message: formData.get('message'),
        reply_to: 'enquiry@scalecraftstudio.in' //
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
        e.target.reset(); // Form clear logic
        setTimeout(() => setShowPopup(false), 4000);
      }
    } catch (error) {
      console.error("Email Error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d9ff00] selection:text-black flex flex-col">
      <ShardCursor />

      {/* --- SUCCESS POPUP --- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-10 right-10 z-[1000] bg-zinc-950 border border-[#d9ff00]/30 p-6 rounded-[32px] shadow-[0_0_50px_rgba(217,255,0,0.2)] backdrop-blur-xl flex items-center gap-6"
          >
            <div className="w-12 h-12 bg-[#d9ff00] rounded-full flex items-center justify-center shadow-[0_0_20px_#d9ff00]">
              <CheckCircle2 size={24} className="text-black" />
            </div>
            <div>
              <p className="font-black uppercase italic text-xs tracking-widest text-[#d9ff00]">Form Submitted</p>
              <p className="text-zinc-400 text-[10px] font-bold uppercase mt-1">We'll reach out within 24 hours.</p>
            </div>
            <button onClick={() => setShowPopup(false)} className="text-zinc-700 hover:text-white transition-colors ml-4"><X size={16} /></button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* --- HEADER --- */}
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

      {/* --- MAIN CONTENT --- */}
      <section className="flex-1 flex items-center px-10 md:px-24 pt-56 pb-32">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
          
          <div className="md:col-span-2 space-y-10">
            <div>
              <span className="text-[#d9ff00] font-black tracking-[0.4em] text-[10px] uppercase block mb-4 italic opacity-80">
                Phase 05: Initiation
              </span>
              <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
                LET'S <br /> <span className="text-zinc-800">TALK.</span>
              </h1>
            </div>
            <div className="space-y-4 border-l-2 border-[#d9ff00]/20 pl-8">
              <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest italic leading-loose">Based in Gurgaon, Haryana</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=enquiry@scalecraftstudio.in&su=New%20Project%20Enquiry" target="_blank" className="text-[#d9ff00] text-sm font-black italic hover:underline flex items-center gap-2">
                enquiry@scalecraftstudio.in<ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* FORM CONVERTED & LOADING ADDED */}
          <form onSubmit={handleSubmit} className="md:col-span-3 bg-zinc-950/40 border border-white/5 p-10 rounded-[40px] backdrop-blur-sm space-y-8 shadow-2xl relative overflow-hidden">
            
            {isSubmitting && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-10 h-10 border-2 border-[#d9ff00] border-t-transparent rounded-full" />
              </div>
            )}

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-zinc-600 text-[8px] font-black uppercase tracking-widest">Name</label>
                <input required name="from_name" type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#d9ff00] text-sm transition-all italic" />
              </div>
              <div className="space-y-2 group">
                <label className="text-zinc-600 text-[8px] font-black uppercase tracking-widest">Brand</label>
                <input required name="brand_name" type="text" placeholder="ScaleCraft" className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#d9ff00] text-sm transition-all italic" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-zinc-600 text-[8px] font-black uppercase tracking-widest">Select Growth Service</label>
              <div className="flex flex-wrap gap-3">
                {['Ads', 'SMM', 'Design', 'Systems', 'SEO'].map((s) => (
                  <button type="button" key={s} onClick={() => setSelectedService(s)} className={`px-6 py-2 rounded-full border text-[9px] font-black uppercase tracking-widest transition-all ${selectedService === s ? 'bg-[#d9ff00] text-black border-[#d9ff00]' : 'border-white/10 text-zinc-500 hover:border-white/30'}`}>{s}</button>
                ))}
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="text-zinc-600 text-[8px] font-black uppercase tracking-widest">Tell us about your goals</label>
              <textarea required name="message" rows="2" className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#d9ff00] text-sm transition-all resize-none italic" />
            </div>

            <button type="submit" className="w-full bg-[#d9ff00] text-black py-6 rounded-2xl font-[1000] text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(217,255,0,0.3)] hover:shadow-[0_0_40px_rgba(217,255,0,0.6)] transition-all">
              {isSubmitting ? 'ENGINEERING...' : "LET'S CRAFT"} <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER: EXACT COPY OF HOME PAGE --- */}
      <footer className="py-24 bg-black border-t border-white/5 px-10 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
          <div className="space-y-8 text-white">
            <div className="text-3xl font-black tracking-tighter uppercase italic text-white transition-all">
              SCALE<span className="text-[#d9ff00]">CRAFT.</span>
            </div>
            <p className="text-zinc-500 font-medium italic max-w-xs text-sm leading-relaxed">
              Performance-driven branding studio based in Gurugram. We engineer measurable growth for ambitious brands.
            </p>
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
                <p className="flex gap-3"><MapPin size={14} className="text-[#d9ff00] shrink-0" /> Gurugram, HR</p>
                <p className="flex gap-3 truncate"><Mail size={14} className="text-[#d9ff00] shrink-0" /> enquiry@scalecraftstudio.in</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-8">
            <h4 className="text-3xl md:text-4xl font-black uppercase italic leading-none tracking-tighter text-white">
              READY TO <br /> <span className="text-zinc-800 underline decoration-[#d9ff00]/30 italic">SCALE FAST?</span>
            </h4>
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
          <p className="text-zinc-700 text-[8px] tracking-[1em] font-black uppercase italic">
            © 2026 ScaleCraft Studio | Gurugram, All rights reserved. 
          </p>
        </div>
      </footer>
    </main>
  );
}