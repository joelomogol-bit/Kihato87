import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Samy Hair Studio',
  description: 'Premium Hair Styling and Grooming Services',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}