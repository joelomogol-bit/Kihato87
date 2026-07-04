 "use client"

import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full bg-[#050505] min-h-screen text-white">
      <section className="mx-auto max-w-6xl w-full px-6 pt-16 pb-24 grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Copy Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">Premium Hair Artistry</span>
          </div>
          
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl text-white leading-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF] to-[#B38728]">
              Natural Style
            </span>
          </h1>
          
          <p className="text-base text-zinc-400 max-w-md leading-relaxed">
            Experience premium lace installations, pristine wig transformations, luxury makeup layouts, and meticulous extensions tailored for perfection.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              href="/booking"
              className="rounded bg-[#D4AF37] px-8 py-4 text-sm font-bold text-black hover:bg-[#c29f2f] transition-all duration-300 shadow-xl shadow-[#D4AF37]/10 flex items-center gap-2"
            >
              Schedule Session <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/services"
              className="rounded border border-zinc-800 bg-zinc-900/20 px-8 py-4 text-sm font-bold text-white hover:bg-zinc-900 transition duration-300"
            >
              View Service Menu
            </Link>
          </div>
        </div>

        {/* Right Frame Showcase */}
        <div className="relative aspect-[4/5] rounded-2xl border border-zinc-800 bg-gradient-to-tr from-zinc-950 to-zinc-900 p-2 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" 
            alt="Samy Salon Work Showcase"
            className="w-full h-full object-cover rounded-xl opacity-80"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Precision Craftsmanship</p>
            <p className="text-lg font-bold text-white mt-0.5">Flawless Installs & Melted Lace</p>
          </div>
        </div>

      </section>
    </div>
  )
}
