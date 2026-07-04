"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Wig Shop", href: "/shop" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#050505]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-widest text-[#D4AF37] text-gold-glow">SAMY</span>
          <span className="text-xs uppercase tracking-widest text-zinc-400 border-l border-zinc-800 pl-2 hidden sm:inline">Hair Stylist</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium tracking-wide transition relative py-1 ${
                pathname === link.href ? "text-[#D4AF37]" : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div layoutId="activeNavIndicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />
              )}
            </Link>
          ))}
          <Link 
            href="/booking"
            className="rounded border border-[#D4AF37] px-5 py-2 text-sm font-bold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-md shadow-[#D4AF37]/10"
          >
            Book Session
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-400 hover:text-[#D4AF37] transition">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 right-0 border-b border-zinc-900 bg-[#050505] px-6 py-6 md:hidden flex flex-col gap-4 z-50"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold ${pathname === link.href ? "text-[#D4AF37]" : "text-zinc-400"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center rounded bg-[#D4AF37] py-3 text-sm font-bold text-black"
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
