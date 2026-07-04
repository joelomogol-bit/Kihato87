import Link from "next/link"
import { Clock, Instagram, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#0a0a0a] py-12 text-zinc-500 text-sm">
      <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-3">
        <div>
          <span className="text-xl font-bold tracking-widest text-[#D4AF37]">SAMY STUDIO</span>
          <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
            High-end customized hair systems, premium installations, professional extensions, and editorial makeup design.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-[#D4AF37]" /> Operational Hours
          </h4>
          <ul className="text-xs space-y-1.5 text-zinc-400">
            <li>Mon – Sat: 8:00 AM – 9:30 PM</li>
            <li>Sunday: 9:30 AM – 8:00 PM</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Connect Direct</h4>
          <div className="flex gap-4">
            <a href="https://instagram.com/samy_hair_stylist" target="_blank" className="hover:text-[#D4AF37] transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://wa.me/254116322757" target="_blank" className="hover:text-[#D4AF37] transition">
              <Phone className="h-5 w-5" />
            </a>
          </div>
          <p className="text-[11px] text-zinc-600 mt-4">© 2026 Samy Hair Stylist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
