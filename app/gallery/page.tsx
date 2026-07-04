"use client"

import { motion } from "framer-motion"

export default function Gallery() {
  const images = [
    { id: 1, title: "Bridal Glow Makeup", url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=400" },
    { id: 2, title: "Precision Melted Lace installation", url: "https://images.unsplash.com/photo-1595959183075-c1d0a1653de6?auto=format&fit=crop&q=80&w=400" },
    { id: 3, title: "Luxury Volume Weave Extensions", url: "https://images.unsplash.com/photo-1605497746445-97d1b0a9eaf4?auto=format&fit=crop&q=80&w=400" },
    { id: 4, title: "Studio Editorial Photo Styling", url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400" },
  ]

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-white tracking-tight">Transformation Portfolio Gallery</h2>
        <p className="text-zinc-500 text-sm mt-2">A luxury lookbook showcasing our real salon results.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            key={img.id} 
            className="group relative aspect-[3/4] rounded-xl border border-zinc-900 bg-[#0a0a0a] overflow-hidden"
          >
            <img src={img.url} alt={img.title} className="w-full h-full object-cover opacity-50 group-hover:scale-102 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            <p className="absolute bottom-4 left-4 text-xs font-bold text-zinc-300 tracking-wide group-hover:text-[#D4AF37] transition z-10">{img.title}</p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
