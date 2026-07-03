import { Logo } from "./logo"
import { Button } from "./ui/button"
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="flex items-center space-x-4">
          <Button variant="ghost">Services</Button>
          <Button>Book Appointment</Button>
        </nav>
      </div>
    </header>
  )
}