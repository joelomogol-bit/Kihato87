 "use client"

import { Instagram, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-[#050505] py-12 mt-auto">
      <div className="mx-auto max-w-6xl px-6 grid gap-8 sm:grid-cols-3 items-center text-center sm:text-left">
        
        <div>
          <h4 className="text-sm font-black text-white tracking-widest uppercase">Samy Studio</h4>
          <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
            High-end customized hair systems, premium installations, professional extensions, and editorial makeup design.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start space-y-2">
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Operational Hours</h4>
          <p className="text-xs text-zinc-500">Mon – Sat: 8:00 AM – 9:30 PM</p>
          <p className="text-xs text-zinc-500">Sunday: 9:30 AM – 8:00 PM</p>
        </div>

        <div className="flex flex-col items-center sm:items-end space-y-4">
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#D4AF37] transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="tel:+254116322757" className="text-zinc-400 hover:text-[#D4AF37] transition">
              <Phone className="h-5 w-5" />
            </a>
          </div>
          <p className="text-[10px] text-zinc-600">
            &copy; {new Date().getFullYear()} Samy Hair Stylist. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
