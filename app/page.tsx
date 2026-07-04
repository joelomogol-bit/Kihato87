 "use client"

import React, { useState } from "react"
import { Calendar, MessageCircle, Sparkles, X, CheckCircle, Clock, ShoppingBag, AlertCircle, Scissors, Layers, Crown } from "lucide-react"

export default function Home() {
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

  // Full Menu Categorized Data
  const serviceCategories = [
    {
      title: "1. Hair Care & Treatment",
      icon: <Scissors className="h-5 w-5 text-[#C5A059]" />,
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
      icon: <Layers className="h-5 w-5 text-[#C5A059]" />,
      items: [
        { name: "Wig Installation", price: "KSH 3,000" },
        { name: "Sew-in", price: "From KSH 3,500" },
        { name: "Weaving Braids", price: "From KSH 1,500" }
      ]
    },
    {
      title: "3. Styling & Special Occasions",
      icon: <Crown className="h-5 w-5 text-[#C5A059]" />,
      items: [
        { name: "Wig Styling (Wedding & Ceremony)", price: "From KSH 6,500" },
        { name: "Makeup", price: "From KSH 2,500" }
      ]
    }
  ]

  const handleBookClick = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsOpen(true)
    setIsSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const baseText = `Hi Samy, I'd like to book an appointment!\n\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${selectedService}\n• Date: ${formData.date}\n• Time: ${formData.time}`
    const notesText = formData.notes ? `\n• Notes: ${formData.notes}` : ""
    const encodedText = encodeURIComponent(baseText + notesText)
    
    setIsSubmitted(true)
    
    setTimeout(() => {
      window.open(`https://wa.me/254116322757?text=${encodedText}`, "_blank")
      setIsOpen(false)
      setFormData({ name: "", phone: "", date: "", time: "", notes: "" })
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#EEEEEE] antialiased font-sans">
      
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#0B0C10]/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-widest text-[#C5A059]">SAMY</span>
            <span className="text-xs uppercase tracking-widest text-zinc-400 border-l border-zinc-700 pl-2">HAIR STYLIST</span>
          </div>
          <nav className="flex items-center gap-4">
            <button 
              onClick={() => handleBookClick("General Appointment")}
              className="rounded bg-[#C5A059] px-4 py-2 text-xs sm:text-sm font-bold text-black hover:bg-[#d6b26b] transition duration-200"
            >
              Book Appointment
            </button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative mx-auto max-w-5xl px-6 pt-16 pb-12 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white max-w-2xl mx-auto leading-tight">
          👋 Hello! Welcome to <span className="text-[#C5A059]">Samy Hair Stylist</span>
        </h1>
        <p className="mt-4 text-zinc-400 max-w-md mx-auto text-sm sm:text-base">
          Thank you for reaching out. Explore our complete service menu below and lock in your dynamic session instantly.
        </p>
      </section>

      {/* DYNAMIC RATE MENU SECTION */}
      <main className="mx-auto max-w-6xl px-6 pb-24 space-y-12">
        
        <div className="grid gap-8 md:grid-cols-3">
          {serviceCategories.map((category) => (
            <div key={category.title} className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 mb-4">
                  {category.icon}
                  <h2 className="text-lg font-bold text-white tracking-wide">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-4 group">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-zinc-200 group-hover:text-[#C5A059] transition">{item.name}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs font-bold text-[#C5A059] block mb-1.5">{item.price}</span>
                        <button
                          onClick={() => handleBookClick(`${category.title} - ${item.name}`)}
                          className="text-[11px] bg-zinc-800 hover:bg-[#C5A059] text-zinc-300 hover:text-black px-2 py-0.5 rounded font-medium transition"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WIG SHOP & DISCOUNTS */}
        <section className="rounded-xl border border-zinc-800 bg-gradient-to-r from-zinc-900/50 to-zinc-900/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#C5A059]/10 rounded-lg text-[#C5A059] mt-1">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                🛍️ 4. WIG SHOP — <a href="https://instagram.com/Zeyna_Hair_Classic" target="_blank" className="text-[#C5A059] hover:underline">@Zeyna Hair Classic</a>
              </h3>
              <p className="text-sm text-zinc-400 mt-2 max-w-xl">
                We sell high-quality wigs: Vietnamese bundles, HD Frontals & hair products. 
                <span className="block mt-1 text-emerald-400 font-medium">✨ Buy something in the shop and get a discount on services!</span>
              </p>
            </div>
          </div>
          <a 
            href="https://instagram.com/samy_hair_stylist" 
            target="_blank"
            className="w-full md:w-auto bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm px-6 py-3 rounded text-center transition"
          >
            Visit Shop Portfolio
          </a>
        </section>

        {/* GUIDELINES & HOURS RULES GRID */}
        <div className="grid gap-6 md:grid-cols-2">
          
          {/* POLICIES */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/10 p-6 space-y-4">
            <h3 className="text-md font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
              <AlertCircle className="h-4 w-4 text-[#C5A059]" /> 5. Important Booking Notes
            </h3>
            <ul className="text-sm text-zinc-400 space-y-2.5">
              <li>• <span className="text-zinc-200 font-medium">Ponytail styles:</span> Book 2 days before</li>
              <li>• <span className="text-zinc-200 font-medium">Wedding / Ceremony:</span> Book 1 month before + pay 30% deposit</li>
              <li>• <span className="text-zinc-200 font-medium">Wig laundry:</span> Bring your wig 24 hours before your appointment</li>
              <li>• <span className="text-zinc-200 font-medium">Home service (house call):</span> Double the service price</li>
              <li className="text-[#C5A059] font-bold mt-2 text-xs tracking-wider">📌 PLEASE MAKE SURE YOU KEEP TIME FOR YOUR APPOINTMENT!</li>
            </ul>
          </div>

          {/* HOURS */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/10 p-6 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-md font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
                <Clock className="h-4 w-4 text-[#C5A059]" /> 6. Working Hours
              </h3>
              <ul className="text-sm text-zinc-400 space-y-2 mt-2">
                <li>• <span className="text-zinc-200 font-medium">Mon – Sat:</span> 8:00 AM – 9:30 PM</li>
                <li>• <span className="text-zinc-200 font-medium">Sunday:</span> 9:30 AM – 8:00 PM</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-zinc-800/60 text-xs text-zinc-500">
              📲 To Book: Call, WhatsApp, or DM us on Instagram. We look forward to serving you! 💛
            </div>
          </div>

        </div>

      </main>

      {/* INTERACTIVE BOOKING MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-xl border border-zinc-800 bg-[#12131C] p-6 shadow-2xl">
            <button onClick={() => setIsOpen(false)} className="absolute right-4 top-4 text-zinc-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-[#C5A059]" />
              <h3 className="text-xl font-bold text-white">Appoint Intake</h3>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              Selected Focus: <span className="text-[#C5A059] font-semibold">{selectedService}</span>
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto h-12 w-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400">
                  <CheckCircle className="h-6 w-6 animate-bounce" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Generated!</h4>
                <p className="text-xs text-zinc-400">Opening WhatsApp chat directory to lock in slot...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Full Name</label>
                  <input 
                    type="text" required placeholder="Your name" value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A059] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Phone Number</label>
                  <input 
                    type="tel" required placeholder="e.g. 0712345678" value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-white focus:outline-none focus:border-[#C5A059] text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Date</label>
                    <input 
                      type="date" required value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Time</label>
                    <input 
                      type="time" required value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Special Notes / Requests</label>
                  <textarea 
                    rows={2} placeholder="Add any details (e.g., House call, Bring wig early, etc.)" value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-white text-sm resize-none focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <button type="submit" className="w-full bg-[#C5A059] hover:bg-[#d6b26b] text-black font-bold py-3 rounded text-sm transition duration-200">
                  Confirm Booking Session
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/254116322757" target="_blank"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#20ba5a] rounded-full text-white shadow-xl hover:scale-110 transition duration-300 flex items-center gap-2 group"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-sm font-semibold tracking-wide whitespace-nowrap">Chat Now</span>
      </a>

    </div>
  )
}
