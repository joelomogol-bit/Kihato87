 "use client"

import React, { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Sparkles, ArrowRight, Calendar, CheckCircle, ShoppingBag } from "lucide-react"

// --- WIG SHOP DATA CONFIGURATION WITH CORRECT PUBLIC PATHS ---
const shopItems = [
  { 
    title: "Luxury Vietnamese Bundles", 
    subtitle: "Raw Human Hair", 
    img: "/shop1.jpg.png" 
  },
  { 
    title: "Ultra Thin HD Frontal Wig", 
    subtitle: "13x4 / 13x6 Grid", 
    img: "/shop2.jpg.png" 
  },
  { 
    title: "Premium Bone Straight Unit", 
    subtitle: "Pre-Plucked Double Drawn", 
    img: "/shop3.jpg.png" 
  }
]

// --- PORTFOLIO GALLERY DATA CONFIGURATION WITH CORRECT PUBLIC PATHS ---
const galleryItems = [
  { title: "Bridal Glow Makeup", img: "/gallery1.jpg.png" },
  { title: "Precision Melted Lace Installation", img: "/gallery2.jpg.png" },
  { title: "Luxury Volume Weave Extensions", img: "/gallery3.jpg.png" },
  { title: "Studio Editorial Photo Styling", img: "/gallery4.jpg.png" }
]

// --- WHATSAPP BOOKING INTEGRATION ARCHITECTURE ---
function BookingForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({ name: "", phone: "", date: "", time: "", notes: "" })
  const [selectedService, setSelectedService] = useState("General Appointment Focus")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam) {
      setSelectedService(decodeURIComponent(serviceParam))
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const baseText = `Hi Samy, I'd like to book an appointment!\n\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${selectedService}\n• Date: ${formData.date}\n• Time: ${formData.time}`
    const notesText = formData.notes ? `\n• Notes: ${formData.notes}` : ""
    
    setIsSubmitted(true)
    setTimeout(() => {
      // Updated target endpoint to the new phone number
      window.open(`https://wa.me/254116322757?text=${encodeURIComponent(baseText + notesText)}`, "_blank")
      setIsSubmitted(false)
    }, 1200)
  }

  return (
    <div className="rounded-xl border border-zinc-900 bg-[#0a0a0a] p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="h-5 w-5 text-[#D4AF37]" />
        <h3 className="text-xl font-bold text-white">Appointment Intake Form</h3>
      </div>
      <p className="text-xs text-zinc-400 mb-6">Focus Profile: <span className="text-[#D4AF37] font-semibold">{selectedService}</span></p>

      {isSubmitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="mx-auto h-12 w-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400">
            <CheckCircle className="h-6 w-6 animate-pulse" />
          </div>
          <h4 className="text-lg font-bold text-white">Opening WhatsApp Chat...</h4>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase mb-1">Full Name</label>
            <input type="text" required placeholder="Your name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[#D4AF37]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase mb-1">Phone Number</label>
            <input type="tel" required placeholder="e.g. 0712345678" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[#D4AF37]" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-zinc-500 uppercase mb-1">Date</label>
              <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[#D4AF37]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-500 uppercase mb-1">Time</label>
              <input type="time" required value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[#D4AF37]" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase mb-1">Notes / Style Specifications</label>
            <textarea rows={3} placeholder="Describe requirements..." value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-white text-sm resize-none focus:outline-none focus:border-[#D4AF37]" />
          </div>
          <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#c29f2f] text-black font-bold py-3 rounded text-sm transition duration-300">Confirm Configuration</button>
        </form>
      )}
    </div>
  )
}

// --- MAIN STRUCTURAL HOMEPAGE EXPORT ---
export default function Home() {
  return (
    <div className="w-full bg-[#050505] text-white">
      
      {/* 1. HERO MAIN HEADER */}
      <section className="mx-auto max-w-6xl w-full px-6 pt-16 pb-24 grid md:grid-cols-2 items-center gap-12 min-h-[85vh]">
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
            <a href="#booking" className="rounded bg-[#D4AF37] px-8 py-4 text-sm font-bold text-black hover:bg-[#c29f2f] transition flex items-center gap-2 shadow-xl shadow-[#D4AF37]/10">
              Schedule Session <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="rounded border border-zinc-800 bg-zinc-900/20 px-8 py-4 text-sm font-bold text-white hover:bg-zinc-900 transition">
              View Service Menu
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl border border-zinc-800 bg-zinc-900 p-2 overflow-hidden shadow-2xl">
          <img src="/gallery4.jpg.png" alt="Showcase Portfolio" className="w-full h-full object-cover rounded-xl opacity-80" />
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="border-t border-zinc-900 py-24 mx-auto max-w-6xl px-6 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Our Mastered Menu Specialties</h2>
          <p className="text-zinc-500 text-sm mt-2">Select your choice package and secure a time slot booking below.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-[#D4AF37]/30 bg-zinc-900/20 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-[#D4AF37] flex items-center gap-2">✂️ 1. Hair Care & Treatment</h3>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex justify-between border-b border-zinc-900 pb-2"><span>Wash & Treatment</span> <span className="text-[#D4AF37] font-semibold">KSH 1,500</span></li>
              <li className="flex justify-between border-b border-zinc-900 pb-2"><span>Tong</span> <span className="text-[#D4AF37] font-semibold">KSH 1,000</span></li>
              <li className="flex justify-between border-b border-zinc-900 pb-2"><span>Flat Iron (Brushing)</span> <span className="text-[#D4AF37] font-semibold">KSH 800</span></li>
            </ul>
          </div>
          <div className="border border-zinc-900 bg-zinc-900/20 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">✨ 2. Weaving & Installation</h3>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex justify-between border-b border-zinc-900 pb-2"><span>Wig Installation</span> <span className="text-[#D4AF37] font-semibold">KSH 3,000</span></li>
              <li className="flex justify-between border-b border-zinc-900 pb-2"><span>Sew-in</span> <span className="text-zinc-400">From KSH 3,500</span></li>
              <li className="flex justify-between border-b border-zinc-900 pb-2"><span>Weaving Braids</span> <span className="text-zinc-400">From KSH 1,500</span></li>
            </ul>
          </div>
          <div className="border border-zinc-900 bg-zinc-900/20 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">👑 3. Styling & Occasions</h3>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex justify-between border-b border-zinc-900 pb-2"><span>Wig Styling (Ceremony)</span> <span className="text-zinc-400">From KSH 6,500</span></li>
              <li className="flex justify-between border-b border-zinc-900 pb-2"><span>Makeup</span> <span className="text-zinc-400">From KSH 2,500</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. WIG SHOP SECTION */}
      <section id="shop" className="border-t border-zinc-900 py-24 bg-zinc-950/40 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-black flex items-center gap-2"><ShoppingBag className="text-[#D4AF37]" /> The Premium Wig Shop</h2>
            <p className="text-sm text-zinc-400 mt-2">High-grade Vietnamese bundles, HD frontals, and raw human hair systems.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {shopItems.map((item, index) => (
              <div key={index} className="bg-zinc-900/50 border border-zinc-900 rounded-xl overflow-hidden flex flex-col justify-between">
                <div className="w-full aspect-square bg-zinc-950 relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-4 bg-zinc-900/80 border-t border-zinc-900">
                  <h4 className="font-bold text-sm text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-500 mt-1">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALLERY PORTFOLIO SECTION */}
      <section id="gallery" className="border-t border-zinc-900 py-24 mx-auto max-w-6xl px-6 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black">Transformation Portfolio Gallery</h2>
          <p className="text-zinc-500 text-sm mt-2">A luxury lookbook showcasing our real salon results.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-900 bg-zinc-950 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <p className="text-xs font-bold text-zinc-300">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOOKING INTAKE SECTION */}
      <section id="booking" className="border-t border-zinc-900 py-24 max-w-md mx-auto px-6 scroll-mt-24">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black">Secure Your Slot</h2>
          <p className="text-zinc-500 text-sm mt-1">Instantly connects right to Samy via WhatsApp.</p>
        </div>
        <Suspense fallback={<div className="text-zinc-600 text-sm text-center">Loading Booking Architecture...</div>}>
          <BookingForm />
        </Suspense>
      </section>

    </div>
  )
}
