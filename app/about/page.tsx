import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 mx-auto max-w-6xl w-full px-4 py-8 md:py-12">
        <header className="mb-8 md:mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">About the Pre‑Incubation Centre</h1>
          <p className="mt-3 text-muted-foreground text-lg">
            Heritage Institute of Technology — Pre‑Incubation Centre (Heritage Incubation Cell)
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2 md:gap-12 items-start">
          <div className="grid gap-6">
            <div className="space-y-4">
              <p className="text-pretty leading-relaxed text-base md:text-lg">
                The Pre‑Incubation Centre nurtures early‑stage ideas into viable, proof‑of‑concept prototypes through
                mentorship, lab access, peer collaboration, and industry exposure. We support multidisciplinary teams
                working across hardware, software, AI/ML, and IoT.
              </p>
              <p className="text-pretty leading-relaxed text-base md:text-lg">
                Activities include ideation workshops, rapid prototyping, design reviews, technical clinics, and demo days.
                We emphasize problem discovery, user‑centric design, and research‑to‑prototype translation.
              </p>
            </div>
            
            <ul className="grid gap-3 text-sm md:text-base bg-muted/30 p-4 md:p-6 rounded-lg">
              <li className="flex items-start">
                <strong className="min-w-[80px] md:min-w-[100px]">Location:</strong>
                <span className="ml-2">CME 614</span>
              </li>
              <li className="flex items-start">
                <strong className="min-w-[80px] md:min-w-[100px]">Focus:</strong>
                <span className="ml-2">Defense tech, sustainability, healthcare, and smart systems</span>
              </li>
              <li className="flex items-start">
                <strong className="min-w-[80px] md:min-w-[100px]">Support:</strong>
                <span className="ml-2">Mentorship, facilities, and guidance to transition towards incubation</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden border shadow-lg">
            <img
              src="/images/incubation-center-group.jpg"
              alt="Students at the Innovation and Incubation Center entrance"
              className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px]"
            />
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  )
}