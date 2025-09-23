import Image from "next/image"

const images = [
  { src: "/images/team-drone.jpg", alt: "JAWAAN team with drone and laptop in lab" },
  { src: "/images/incubation-center-group.jpg", alt: "Team in front of Innovation and Incubation Center" },
  { src: "/images/drone-closeup.jpg", alt: "Close-up of multi-rotor drone on table" },
  { src: "/images/lab-room.jpg", alt: "Workshop room with students collaborating" },
  { src: "/images/lab-setup.jpg", alt: "Electronics breadboard and beaker—prototype setup" },
  { src: "/images/data-laptop.jpg", alt: "Smart_Agriculture_Data table on laptop with wiring" },
]

export default function MediaGallery() {
  return (
    <section aria-labelledby="media-title" className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 id="media-title" className="text-2xl md:text-3xl font-semibold text-balance">
          Media Gallery
        </h2>
        <p className="mt-2 text-sm md:text-base opacity-80">
          Photos from our lab, workshop activities, and project artifacts under the Pre‑Incubation Unit.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img) => (
            <figure key={img.src} className="rounded-lg overflow-hidden bg-muted">
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                width={1200}
                height={800}
                className="h-56 w-full object-cover md:h-56 lg:h-48"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority={false}
              />
              <figcaption className="px-3 py-2 text-xs md:text-sm opacity-80">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
