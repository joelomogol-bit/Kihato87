 "use client"

import React from "react"

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Wig Shop", href: "#shop" },
    { name: "Gallery", href: "#gallery" },
    { name: "Book Session", href: "#booking" },
  ]

  return (
    <header className="w-full bg-[#050505]/95 backdrop-blur-md border-b border-zinc-900 sticky top-0 z-50">
      <div className="mx-auto max-w-6xl h-20 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-black text-white tracking-wider">SAMY</span>
          <span className="text-xs tracking-widest text-zinc-500 uppercase font-semibold">Hair Stylist</span>
        </a>

        {/* Dynamic Length Scroll Anchors */}
        <nav className="flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs sm:text-sm font-medium transition duration-200 text-zinc-400 hover:text-[#D4AF37] ${
                link.name === "Book Session" ? "border border-[#D4AF37] px-3 py-1.5 rounded text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
