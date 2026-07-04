 "use client"

export default function Gallery() {
  const galleryItems = [
    {
      title: "Bridal Glow Makeup",
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Precision Melted Lace Installation",
      img: "https://images.unsplash.com/photo-1605497746444-ac9da5848ba7?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Luxury Volume Weave Extensions",
      img: "https://images.unsplash.com/photo-1595959183075-c1d09e77b94b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Studio Editorial Photo Styling",
      img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600"
    }
  ]

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 bg-[#050505] min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-white tracking-tight">Transformation Portfolio Gallery</h2>
        <p className="text-zinc-500 text-sm mt-2">A luxury lookbook showcasing our real salon results.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((item) => (
          <div 
            key={item.title} 
            className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-900 bg-zinc-950 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <img 
              src={item.img} 
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <p className="text-xs font-bold text-zinc-300 tracking-wide">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
