// app/media-gallery/page.tsx
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"

export default function MediaGalleryPage() {
  const images = [
    {
      src: "/images/winner.jpg",
      alt: "Winning team with drone and demo setup for Smart Bengal Hackathon 2025",
      title: "Smart Bengal Hackathon 2025 Winners",
      description: "Our student team showcasing their innovative defense-tech solution"
    },
    {
      src: "/images/winner2.jpg",
      alt: "Paradox Innovator team winning Smart India Hackathon 2024",
      title: "Smart India Hackathon 2024 Winners",
      description: "Paradox Innovator team with their Smart Earthing Monitoring System"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2017.04.35_18b99ebf.jpg-eehTO7RvWP4EFCG8IdMQcGkaxN9XgE.jpeg",
      alt: "Paradox Innovator team at the Innovation and Incubation Center",
      title: "Team Collaboration",
      description: "Students working together in the incubation center lab"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2017.04.37_228dceeb.jpg-m5A0ml3yAA2uHrAcEq5zstfZHgOybB.jpeg",
      alt: "Team showcasing drone and laptop in lab environment",
      title: "Project Development",
      description: "Hands-on work with drones and technology prototypes"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2022.57.12_2a7eb750.jpg-pyQPPWXLV8YppR7EPdLrf21E2BmA7s.jpeg",
      alt: "Workshop scene with multiple teams working in the lab",
      title: "Workshop Session",
      description: "Active learning and collaboration during innovation workshops"
    },
    {
      src: "/images/jawan-abstract.jpg",
      alt: "JAWAAN abstract — MOE's Innovation Cell document",
      title: "JAWAAN Project Documentation",
      description: "Technical documentation and project planning"
    }
  ]

  const videos = [
    {
      title: "Smart Earthing Monitoring System",
      youtubeId: "DBtQAI7xeDo",
      description: "Paradox Innovator's award-winning solution for electrical safety"
    },
    {
      title: "JAWAAN Defense System",
      youtubeId: "0YsfX3wye64",
      description: "AI-powered surveillance and support platform for defense operations"
    }
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 mx-auto max-w-7xl w-full px-4 py-8 md:py-12">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Media Gallery
          </h1>
          <p className="mt-3 text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore the journey of innovation through our photos and videos
          </p>
        </header>

        {/* Photo Gallery Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Photo Gallery</h2>
            <p className="text-muted-foreground">Capturing moments of innovation and achievement</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-xs text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Gallery Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Video Gallery</h2>
            <p className="text-muted-foreground">Watch our projects in action</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative bg-gray-100">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2</div>
              <p className="text-primary-foreground/80">National Awards</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">3</div>
              <p className="text-primary-foreground/80">Innovation Projects</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <p className="text-primary-foreground/80">Student Innovators</p>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  )
}