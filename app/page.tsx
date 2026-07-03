 import SiteHeader from "@/components/site-header"
import ServicesSection from "@/components/services-section"
import SubmissionPortal from "@/components/submission-portal"
import SiteFooter from "@/components/site-footer"
import WhatsappFloat from "@/components/whatsapp-float"

export default function Home() {
  const whatsappBookingUrl = "https://wa.me/254116628626?text=Hi%20Samy,%20I%20would%20like%20to%20book%20an%20appointment%20for%20a%20hair%20session!"

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Header with working link */}
      <SiteHeader bookingUrl={whatsappBookingUrl} />
      
      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Services Grid Section */}
        <ServicesSection bookingUrl={whatsappBookingUrl} />
        
        {/* Interactive Custom Consultation Portal */}
        <SubmissionPortal bookingUrl={whatsappBookingUrl} />
      </main>

      {/* Footer & Floating Action Button */}
      <SiteFooter />
      <WhatsappFloat />
    </div>
  )
}
