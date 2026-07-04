"use client"

import { motion } from "framer-motion"
import { ShoppingBag, ArrowUpRight } from "lucide-react"

export default function Shop() {
  const products = [
    { id: 1, name: "Luxury Vietnamese Bundles", type: "Raw Human Hair", img: "https://images.unsplash.com/photo-1605497746445-97d1b0a9eaf4?auto=format&fit=crop&q=80&w=500" },
    { id: 2, name: "Ultra Thin HD Frontal Wig", type: "13x4 / 13x6 Grid", img: "https://images.unsplash.com/photo-1595959183075-c1d0a1653de6?auto=format&fit=crop&q=80&w=500" },
    { id: 3, name: "Premium Bone Straight Unit", type: "Pre-Plucked Double Drawn", img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=500" },
  ]

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-12">
      <div className="rounded-xl border border-zinc-900 bg-gradient-to-r from-zinc-950 to-zinc-900/50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            🛍️ WIG SHOP — Zeyna Hair Classic
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            We supply high-grade, premium bundle profiles: Vietnamese bundles, high definition frontals, and premium hair products.
            <span className="block mt-1 text-emerald-400 font-bold">✨ Client Bonus: Buy something in our shop portfolio and get a discount on application services!</span>
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {products.map((p, index) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            key={p.id} 
            className="group rounded-xl border border-zinc-900 bg-[#0a0a0a] overflow-hidden"
          >
            <div className="aspect-[4/3] bg-zinc-900 relative overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-5 flex justify-between items-center">
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition">{p.name}</h4>
                <p className="text-xs text-zinc-500 mt-0.5">{p.type}</p>
              </div>
              <a 
                href="https://wa.me/254116322757?text=Hi%20Samy,%20I'm%20interested%20in%20purchasing%20the%20packages%20for%20" 
                target="_blank" 
                className="p-2 rounded bg-zinc-900 text-zinc-400 hover:text-[#D4AF37]"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
