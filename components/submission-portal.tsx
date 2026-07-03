import { Button } from "./ui/button"
export function SubmissionPortal() {
  return (
    <section className="bg-muted p-8 rounded-2xl text-center space-y-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold">Want a custom style consultation?</h2>
      <p className="text-muted-foreground">Send over your preferences and lock in your session slot instantly.</p>
      <Button size="lg">Open Client Portal</Button>
    </section>
  )
}