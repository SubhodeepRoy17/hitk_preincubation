export default function VideoGrid() {
  const videos = [
    { src: "/videos/jawaan-1.mp4", title: "Demonstration 1", poster: "/images/drone-closeup.jpg" },
    { src: "/videos/jawaan-2.mp4", title: "Demonstration 2", poster: "/images/team-drone.jpg" },
    { src: "/videos/jawaan-3.mp4", title: "Demonstration 3", poster: "/images/lab-room.jpg" },
  ]

  return (
    <section aria-labelledby="videos-title" className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 id="videos-title" className="text-2xl md:text-3xl font-semibold text-balance">
          Project Videos
        </h2>
        <p className="mt-2 text-sm md:text-base opacity-80">
          Three demo videos from our ongoing development. Attach the files to enable inline playback.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((v) => (
            <figure key={v.title} className="rounded-lg overflow-hidden bg-muted">
              <video className="w-full aspect-video" controls playsInline poster={v.poster} preload="metadata">
                <source src={v.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="px-3 py-2 text-xs md:text-sm opacity-80">{v.title}</figcaption>
            </figure>
          ))}
        </div>

        <p className="sr-only">
          Video sources are placeholders. Please provide the three video URLs to activate playback.
        </p>
      </div>
    </section>
  )
}
