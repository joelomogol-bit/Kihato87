 "use client"

import React, { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Calendar, CheckCircle } from "lucide-react"

// 1. Separate the form logic that reads URL parameters
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

// 2. Wrap the entire page export inside a strict Suspense fallback container
export default function BookingPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <Suspense fallback={
        <div className="text-center text-zinc-500 text-sm py-12">
          Loading booking dynamic framework...
        </div>
      }>
        <BookingForm />
      </Suspense>
    </main>
  )
}
