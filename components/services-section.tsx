import React from 'react'
export function ServicesSection() {
  return (
    <section id="services" className="py-12 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-center">Our Premium Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg text-center space-y-2">
          <h3 className="font-bold text-xl">Hair Styling & Cuts</h3>
          <p className="text-muted-foreground">Expert precision cuts tailored perfectly to your unique style and look.</p>
        </div>
        <div className="p-6 border rounded-lg text-center space-y-2">
          <h3 className="font-bold text-xl">Color & Highlights</h3>
          <p className="text-muted-foreground">Vibrant professional coloring options matching modern trends seamlessly.</p>
        </div>
        <div className="p-6 border rounded-lg text-center space-y-2">
          <h3 className="font-bold text-xl">Grooming & Therapy</h3>
          <p className="text-muted-foreground">Relaxing scalp treatments and premium detailing transformations.</p>
        </div>
      </div>
    </section>
  )
}