import { SiteHeader } from "@/components/site-header"
import { ServicesSection } from "@/components/services-section"
import { SubmissionPortal } from "@/components/submission-portal"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
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