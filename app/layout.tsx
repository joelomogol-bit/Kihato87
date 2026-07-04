 import type { Metadata } from "next"
import "./globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Samy Hair Stylist | Luxury Hair & Beauty Studio",
  description: "Premium Hair Care, Wig Installation, Makeup, and Luxury Wigs in Kenya.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-[#EDEDED] antialiased min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
