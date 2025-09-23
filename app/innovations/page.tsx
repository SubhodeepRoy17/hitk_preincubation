import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function InnovationsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 mx-auto max-w-6xl w-full px-4 py-8 md:py-12">
        <header className="mb-8 md:mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">Innovations at Heritage Incubation Cell</h1>
          <p className="mt-3 text-muted-foreground text-lg max-w-3xl">
            A showcase of student-led R&D from the Pre‑Incubation Centre. Below is our highlighted project.
          </p>
        </header>

        <section aria-labelledby="jawaan" className="grid gap-8 md:grid-cols-2 md:gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 id="jawaan" className="text-2xl md:text-3xl font-semibold text-primary">
                JAWAAN — Integrated Defense Support Platform
              </h2>
              <ul className="mt-4 text-sm md:text-base grid gap-2 bg-muted/30 p-4 rounded-lg">
                <li className="flex items-start">
                  <strong className="min-w-[60px]">Title:</strong>
                  <span className="ml-2">JAWAAN</span>
                </li>
                <li className="flex items-start">
                  <strong className="min-w-[60px]">Team Lead:</strong>
                  <span className="ml-2">Sandeep Sarkar</span>
                </li>
                <li className="flex items-start">
                  <strong className="min-w-[60px]">TRL:</strong>
                  <span className="ml-2">6</span>
                </li>
              </ul>
            </div>

            <p className="text-pretty leading-relaxed text-base md:text-lg">
              JAWAAN integrates surveillance, optimized path planning, threat detection, sound recognition, health
              monitoring, and emergency response into a unified platform. Leveraging AI, ML, and IoT, it enhances safety,
              efficiency, and mission success for the armed forces.
            </p>

            <ol className="col-1 space-y-2 text-pretty">
              <li className="p-3 bg-card border rounded-lg">
                <strong className="text-primary">24×7 AI-Driven Surveillance using Drones:</strong>
                <span className="block mt-1 text-sm md:text-base">
                  AI-powered drones detect intrusions and suspicious activity in real time, including low light and adverse weather, with automated alerts for rapid response.
                </span>
              </li>
              <li className="p-3 bg-card border rounded-lg">
                <strong className="text-primary">Path Planning with Optimized Routing:</strong>
                <span className="block mt-1 text-sm md:text-base">
                  Terrain-aware routing selects safe, efficient paths for maximum coverage and endurance.
                </span>
              </li>
              <li className="p-3 bg-card border rounded-lg">
                <strong className="text-primary">Weapon & Threat Detection (Lethality):</strong>
                <span className="block mt-1 text-sm md:text-base">
                  Live video analysis to identify and classify threats with real-time alerts.
                </span>
              </li>
              <li className="p-3 bg-card border rounded-lg">
                <strong className="text-primary">Sound Recognition:</strong>
                <span className="block mt-1 text-sm md:text-base">
                  Detection and classification of battlefield audio (gunfire, drones, explosions) for better situational awareness.
                </span>
              </li>
              <li className="p-3 bg-card border rounded-lg">
                <strong className="text-primary">Soldier Health Monitoring:</strong>
                <span className="block mt-1 text-sm md:text-base">
                  Wearable IoT tracks vitals; AI flags fatigue and medical risks.
                </span>
              </li>
              <li className="p-3 bg-card border rounded-lg">
                <strong className="text-primary">Emergency Response (SOS):</strong>
                <span className="block mt-1 text-sm md:text-base">
                  Multi-channel distress signaling across radio, satellite, and network.
                </span>
              </li>
            </ol>

            <div className="pt-4">
              <Link
                href="/innovations/jawaan"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Explore JAWAAN details
              </Link>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border shadow-lg">
            <img
              src="/images/jawan-abstract.jpg"
              alt="JAWAAN abstract — MOE's Innovation Cell document"
              className="w-full h-auto object-cover max-h-[600px]"
            />
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  )
}