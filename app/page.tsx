 "use client"

import { SiteHeader } from "@/components/site-header"
import { ServicesSection } from "@/components/services-section"
import { SubmissionPortal } from "@/components/submission-portal"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 antialiased">
      <SiteHeader />
      
      <main className="container mx-auto px-4 py-8 space-y-16">
        <ServicesSection />
        <SubmissionPortal />
      </main>

      <SiteFooter />
      <WhatsappFloat />
    </div>
  )
}
