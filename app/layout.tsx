 import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Samy Hair Studio",
  description: "Luxury hair extensions, melted lace installations, and premium makeup artistry.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-[#050505]">
      <body className={`${inter.className} min-h-full flex flex-col text-white antialiased overflow-y-auto overflow-x-hidden`}>
        {/* Navigation Layer */}
        <Navbar />

        {/* Dynamic Content Core - Grows to fit whatever you write, ensuring scrollability */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* Footer Layer - Placed naturally at the bottom */}
        <Footer />
      </body>
    </html>
  )
}
