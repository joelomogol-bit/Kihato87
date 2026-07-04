 "use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Wig Shop", href: "/shop" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="w-full bg-[#050505]/90 backdrop-blur-md border-b border-zinc-900 sticky top-0 z-50">
      <div className="mx-auto max-w-6xl h-20 px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-black text-white tracking-wider">SAMY</span>
          <span className="text-xs tracking-widest text-zinc-500 uppercase font-semibold">Hair Stylist</span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition duration-200 ${
                  isActive ? "text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Action Button */}
        <Link 
          href="/booking" 
          className="rounded border border-[#D4AF37] px-5 py-2.5 text-xs font-bold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
        >
          Book Session
        </Link>
      </div>
    </header>
  )
}
