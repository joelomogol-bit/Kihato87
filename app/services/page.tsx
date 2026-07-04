"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Scissors, Layers, Crown } from "lucide-react"

export default function Services() {
  const serviceCategories = [
    {
      title: "1. Hair Care & Treatment",
      icon: <Scissors className="h-5 w-5 text-[#D4AF37]" />,
      items: [
        { name: "Wash & Treatment", price: "KSH 1,500" },
        { name: "Tong", price: "KSH 1,000" },
        { name: "Flat Iron (Brushing)", price: "KSH 800" },
        { name: "Washing & Blow-dry", price: "KSH 500" },
        { name: "Plucking", price: "KSH 500" },
        { name: "Wig Making (Glueless & Plucking)", price: "KSH 2,000" }
      ]
    },
    {
      title: "2. Weaving & Installation",
      icon: <Layers className="h-5 w-5 text-[#D4AF37]" />,
      items: [
        { name: "Wig Installation", price: "KSH 3,000" },
        { name: "Sew-in", price: "From KSH 3,500" },
        { name: "Weaving Braids", price: "From KSH 1,500" }
      ]
    },
    {
      title: "3. Styling & Special Occasions",
      icon: <Crown className="h-5 w-5 text-[#D4AF37]" />,
      items: [
        { name: "Wig Styling (Wedding & Ceremony)", price: "From KSH 6,500" },
        { name: "Makeup", price: "From KSH 2,500" }
      ]
    }
  ]

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-white tracking-tight">Our Mastered Menu Specialties</h2>
        <p className="text-zinc-500 text-sm mt-2">Select your choice package and secure a time slot booking.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {serviceCategories.map((category, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={category.title} 
            className="rounded-xl border border-zinc-900 bg-[#0a0a0a] p-6 gold-border-glow border-t-2 border-t-zinc-800 hover:border-t-[#D4AF37] transition duration-300"
          >
            <div className="flex items-center gap-2 border-b border-zinc-900 pb-3 mb-4">
              {category.icon}
              <h3 className="text-md font-bold text-white tracking-wide">{category.title}</h3>
            </div>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-4">
                  <p className="text-sm text-zinc-300 font-medium">{item.name}</p>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs font-bold text-[#D4AF37] block mb-1">{item.price}</span>
                    <Link
                      href={`/booking?service=${encodeURIComponent(`${category.title} - ${item.name}`)}`}
                      className="text-[10px] bg-zinc-900 text-zinc-400 hover:bg-[#D4AF37] hover:text-black px-2 py-0.5 rounded transition font-semibold"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
