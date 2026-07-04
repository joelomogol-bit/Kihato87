 "use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 grid md:grid-cols-2 items-center gap-12 min-h-[calc(100vh-80px)]">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">Premium Hair Artistry</span>
          </div>
          
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl text-white leading-none">
            Elevate Your <br />
            <motion.span 
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="gold-gradient bg-[length:200%_auto] bg-clip-text text-transparent text-gold-glow"
            >
              Natural Style
            </motion.span>
          </h1>
          
          <p className="text-base text-zinc-400 max-w-md leading-relaxed">
            Experience premium lace installations, pristine wig transformations, luxury makeup layouts, and meticulous extensions tailored for perfection.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              href="/booking"
              className="rounded bg-[#D4AF37] px-8 py-4 text-sm font-bold text-black hover:bg-[#c29f2f] transition transform active:scale-95 shadow-xl shadow-[#D4AF37]/10 flex items-center gap-2"
            >
              Schedule Session <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/services"
              className="rounded border border-zinc-800 bg-zinc-900/20 px-8 py-4 text-sm font-bold text-white hover:bg-zinc-900 transition"
            >
              View Service Menu
            </Link>
          </div>
        </motion.div>

        {/* Hero Image Component Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] rounded-2xl border border-zinc-800 bg-gradient-to-tr from-zinc-950 to-zinc-900 p-2 overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" 
            alt="Samy Salon Work Showcase"
            className="w-full h-full object-cover rounded-xl opacity-70 group-hover:scale-105 transition duration-700"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Precision Craftsmanship</p>
            <p className="text-lg font-bold text-white mt-0.5">Flawless Installs & Melted Lace</p>
          </div>
        </motion.div>

      </section>
    </div>
  )
}
