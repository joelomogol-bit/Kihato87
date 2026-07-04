"use client"

import { motion } from "framer-motion"
import { AlertCircle, MessageCircle, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-12">
      <div className="grid gap-6 md:grid-cols-2">
        
        {/* Rules & Intake Requirements */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="rounded-xl border border-zinc-900 bg-[#0a0a0a] p-6 space-y-4">
          <h3 className="text-md font-bold text-white flex items-center gap-2 border-b border-zinc-900 pb-2">
            <AlertCircle className="h-4 w-4 text-[#D4AF37]" /> Important Booking Notes
          </h3>
          <ul className="text-xs text-zinc-400 space-y-3 leading-relaxed">
            <li>• <span className="text-zinc-200 font-medium">Ponytail configurations:</span> Must book at least 2 days in advance.</li>
            <li>• <span className="text-zinc-200 font-medium">Wedding / Ceremonies:</span> Book 1 month before + require a 30% down deposit structure.</li>
            <li>• <span className="text-zinc-200 font-medium">Wig Laundry Services:</span> Drop off your system unit 24 hours prior to service.</li>
            <li>• <span className="text-zinc-200 font-medium">Home Service / Callouts:</span> Travel appointments are calculated at double standard pricing tiers.</li>
            <li className="text-[#D4AF37] font-bold text-xs pt-2">📌 PLEASE MAKE SURE YOU KEEP TIME FOR YOUR APPOINTMENT!</li>
          </ul>
        </motion.div>

        {/* Quick Social Action Access */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-xl border border-zinc-900 bg-[#0a0a0a] p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-md font-bold text-white border-b border-zinc-900 pb-2">Client Channels</h3>
            <p className="text-xs text-zinc-400 mt-3 leading-relaxed">We look forward to hosting you! You can easily request custom slots, submit direct photo inquiries, or follow along with our ongoing showcase portfolios via official active channel lines.</p>
          </div>
          <div className="space-y-3 pt-6">
            <a href="https://wa.me/254116322757" target="_blank" className="flex items-center justify-center gap-2 rounded border border-zinc-800 bg-zinc-900/30 hover:bg-emerald-950/20 hover:border-emerald-600 py-3 text-sm font-bold text-zinc-200 transition">
              <MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp Direct Link
            </a>
            <a href="https://instagram.com/samy_hair_stylist" target="_blank" className="flex items-center justify-center gap-2 rounded border border-zinc-800 bg-zinc-900/30 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] py-3 text-sm font-bold text-zinc-200 transition">
              <Instagram className="h-4 w-4 text-[#D4AF37]" /> Follow Instagram DM
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  )
}
