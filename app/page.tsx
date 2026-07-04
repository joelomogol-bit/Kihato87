 "use client"

import React, { useState } from "react"
import { Menu, X, Calendar, MessageCircle, Sparkles, CheckCircle } from "lucide-react"

export default function Home() {
  // State for controlling the dynamic booking modal
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    notes: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const realServices = [
    { name: "Make up", desc: "Flawless glam, bridal, and event makeup tailored perfectly to your tone." },
    { name: "Wig Installation", desc: "Seamless lace melting, customization, and secure styling installations." },
    { name: "Nails Manicure & Pedicure", desc: "Luxury nail extensions, custom gel art, and premium therapeutic care." },
    { name: "Photo Shoot Styling", desc: "Complete high-end directional look coordination for professional sets." }
  ]

  const handleBookClick = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsOpen(true)
    setIsSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construct dynamic message to instantly notify Samy via WhatsApp
    const baseText = `Hi Samy, I'd like to book an appointment!\n\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${selectedService}\n• Date: ${formData.date}\n• Time: ${formData.time}`
    const notesText = formData.notes ? `\n• Notes: ${formData.notes}` : ""
    const encodedText = encodeURIComponent(baseText + notesText)
    
    setIsSubmitted(true)
    
    // Delayed redirect to open the customer chat automatically
    setTimeout(() => {
      window.open(`https://wa.me/254116322757?text=${encodedText}`, "_blank")
      setIsOpen(false)
      setFormData({ name: "", phone: "", date: "", time: "", notes: "" })
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#EEEEEE] antialiased font-sans">
      
      {/* 1. DYNAMIC NAVIGATION NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#0B0C10]/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-widest text-[#C5A059]">SAMY</span>
            <span className="text-xs uppercase tracking-widest text-zinc-400 border-l border-zinc-700 pl-2">Hair Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-zinc-300 hover:text-[#C5A059] transition">Services</a>
            <a href="#about" className="text-sm font-medium text-zinc-300 hover:text-[#C5A059] transition">About</a>
            <button 
              onClick={() => handleBookClick("General Consultation")}
              className="rounded bg-[#C5A059] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#d6b26b] transition duration-200 shadow-lg shadow-[#C5A059]/10"
            >
              Book Appointment
            </button>
          </nav>
        </div>
      </header>

      {/* 2. PREMIUM HERO INTRO */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 mb-6">
          <Sparkles className="h-4 w-4 text-[#C5A059]" />
          <span className="text-xs font-medium tracking-wider text-zinc-300 uppercase">Premium Beauty Studio</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white max-w-3xl mx-auto leading-[1.1]">
          Elevate Your Natural Style With <span className="text-[#C5A059]">Samy Hair Studio</span>
        </h1>
        <p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto">
          Professional makeup design, flawless wig integrations, extensions, and studio configurations tailored for you.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => handleBookClick("General Inquiry")}
            className="rounded bg-[#C5A059] px-8 py-4 font-bold text-black hover:bg-[#d6b26b] transition transform active:scale-95 shadow-xl shadow-[#C5A059]/20"
          >
            Schedule a Session
          </button>
          <a 
            href="https://instagram.com/samy_hair_stylist" 
            target="_blank" 
            className="rounded border border-zinc-700 bg-zinc-900/40 px-8 py-4 font-bold text-white hover:bg-zinc-800 transition"
          >
            View Portfolio
          </a>
        </div>
      </section>

      {/* 3. DYNAMIC SERVICES GRID (From Instagram Specs) */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-16 border-t border-zinc-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Our Mastered Specialties</h2>
          <p className="text-zinc-500 mt-2">Select a premium service options pack below to request booking availability</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {realServices.map((service) => (
            <div 
              key={service.name} 
              className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-700 transition duration-300 group"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center mb-4 group-hover:bg-[#C5A059]/20 transition">
                  <Sparkles className="h-5 w-5 text-[#C5A059]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{service.desc}</p>
              </div>
              <button 
                onClick={() => handleBookClick(service.name)}
                className="mt-6 w-full py-2.5 rounded border border-zinc-700 text-center text-sm font-medium text-zinc-300 hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition duration-200"
              >
                Book {service.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION SYSTEM */}
      <section className="mx-auto max-w-4xl px-6 py-16 mb-20 text-center bg-gradient-to-b from-zinc-900/40 to-transparent rounded-2xl border border-zinc-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Want a Custom Consultation Package?</h2>
        <p className="text-zinc-400 mt-3 max-w-md mx-auto text-sm">
          Send over your custom concept notes or photo-shoot specifications directly into our active intake queue.
        </p>
        <button 
          onClick={() => handleBookClick("Custom Project Consultation")}
          className="mt-8 rounded bg-zinc-100 text-black font-bold px-8 py-3.5 hover:bg-zinc-200 transition"
        >
          Open Consultation Panel
        </button>
      </section>

      {/* 5. FOOTER */}
      <footer className="border-t border-zinc-900 py-8 text-center text-xs text-zinc-600">
        <p>© 2026 Samy Hair Studio. All rights reserved.</p>
      </footer>

      {/* 6. DYNAMIC BOOKING MODAL FORM POPUP */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md rounded-xl border border-zinc-800 bg-[#12131C] p-6 shadow-2xl">
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute right-4 top-4 text-zinc-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-[#C5A059]" />
              <h3 className="text-xl font-bold text-white">Booking Request</h3>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              Selected Session Focus: <span className="text-[#C5A059] font-semibold">{selectedService}</span>
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto h-12 w-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400">
                  <CheckCircle className="h-6 w-6 animate-bounce" />
                </div>
                <h4 className="text-lg font-bold text-white">Booking Configured!</h4>
                <p className="text-xs text-zinc-400">Opening WhatsApp chat directory to complete schedule...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Full Name</label>
                  <input 
                    type="text" required 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A059] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Phone Number</label>
                  <input 
                    type="tel" required 
                    placeholder="e.g. 0712345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A059] text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Preferred Date</label>
                    <input 
                      type="date" required 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A059] text-sm invert-calendar-icon"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Preferred Time</label>
                    <input 
                      type="time" required 
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A059] text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Special Notes / Style Requests</label>
                  <textarea 
                    rows={2}
                    placeholder="Describe what styling options or requirements you want..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A059] text-sm resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="mt-2 w-full bg-[#C5A059] hover:bg-[#d6b26b] text-black font-bold py-3 rounded text-sm transition transition duration-200"
                >
                  Confirm Booking Session
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 7. QUICK ACCESS FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/254116322757" 
        target="_blank"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#20ba5a] rounded-full text-white shadow-xl hover:scale-110 transition duration-300 group flex items-center gap-2"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-sm font-semibold tracking-wide whitespace-nowrap">Chat With Samy</span>
      </a>

    </div>
  )
}
