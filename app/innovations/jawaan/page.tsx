import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function JawaanPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-center gap-2">
          <Badge className="bg-primary text-primary-foreground">TRL 6</Badge>
          <Badge variant="outline">Defence &amp; Security</Badge>
        </div>
        <h1 className="text-3xl font-semibold mt-3 text-balance">
          JAWAAN – Integrated Defence Surveillance & Support Platform
        </h1>
        <p className="text-muted-foreground mt-3 text-pretty">
          JAWAAN integrates surveillance, optimized path planning, threat detection, sound recognition, health
          monitoring, and emergency response into one unified platform. Leveraging AI, ML, and IoT, it enhances safety,
          efficiency, and mission success.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border bg-muted">
            <Image
              src={
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jawan-abstract.jpg-McY3nQAKEumCCBHacorRkB2nY0REwr.jpeg"
              }
              alt="Institutional abstract of the JAWAAN innovation and TRL details"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Team & Development</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <div>
                <span className="text-muted-foreground">Title:</span> JAWAAN
              </div>
              <div>
                <span className="text-muted-foreground">Team Lead:</span> Sandeep Sarkar
              </div>
              <div>
                <span className="text-muted-foreground">TRL:</span> 6
              </div>
              <div className="mt-2 text-muted-foreground">
                Developed as an independent/non‑academic study project, aligning with Defence &amp; Security themes.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid gap-4">
          <h2 className="text-xl font-semibold">Media Gallery</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
              <Image
                src={
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2017.04.37_228dceeb.jpg-m5A0ml3yAA2uHrAcEq5zstfZHgOybB.jpeg"
                }
                alt="Team with drone and laptop showing 'An ode to our soldiers'"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
              <Image
                src={
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2017.04.35_18b99ebf.jpg-eehTO7RvWP4EFCG8IdMQcGkaxN9XgE.jpeg"
                }
                alt="Group photo at Innovation and Incubation Center entrance"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
              <Image
                src={
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2023.23.51_3d841d41.jpg-4Tnl1tWPYLtCFfJAjVWukGnNsWkFLO.jpeg"
                }
                alt="Close-up of the multi-rotor drone on a table"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
              <Image
                src={
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2017.04.33_2c305bfa.jpg-AHt86fI2OhTKVCEPy49mYN6GI8KjDj.jpeg"
                }
                alt="Electronics breadboard setup with sensors and beaker for prototyping"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
              <Image
                src={
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2017.04.32_d9b0a4f0.jpg-IPkjGfJ1wNvjNxVPpd8yDsQ27NYiXk.jpeg"
                }
                alt="Laptop screen with Smart_Agriculture_Data spreadsheet and connected breadboard"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
              <Image
                src={
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2022.57.12_2a7eb750.jpg-pyQPPWXLV8YppR7EPdLrf21E2BmA7s.jpeg"
                }
                alt="Lab session with teams working and a central drone build"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-1 md:items-start">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Core Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-pretty">
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <span className="font-medium">24×7 AI‑Driven Surveillance using Drones:</span> AI‑powered drones with
                  high‑resolution cameras and vision models detect intrusions and suspicious activity in real‑time,
                  including under low‑light and adverse conditions. Automated alerts enable rapid deployment.
                </li>
                <li>
                  <span className="font-medium">Path Planning with Optimized Routing:</span> Dynamic terrain and
                  obstacle analysis to autonomously select safe, efficient routes—maximizing coverage and conserving
                  energy.
                </li>
                <li>
                  <span className="font-medium">Weapon & Threat Detection (Lethality):</span> AI models analyze live
                  feeds to identify/classify lethal weapons and threats, triggering real‑time alerts.
                </li>
                <li>
                  <span className="font-medium">Sound Recognition:</span> Detection and classification of battlefield
                  audio such as gunfire, drones, or explosions to enhance situational awareness.
                </li>
                <li>
                  <span className="font-medium">Soldier Health Monitoring:</span> Wearable IoT tracks vitals (heart
                  rate, SpO₂, stress indicators) with early warnings for fatigue and medical risks.
                </li>
                <li>
                  <span className="font-medium">Emergency Response (SOS Mechanism):</span> Multi‑channel emergency
                  alerts via radio, satellite, and network to ensure reliable distress signaling in remote/disrupted
                  environments.
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Impact</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Faster decision‑making, enhanced situational awareness, and safer operations across critical defence
            areas—improving response time and operational efficiency.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
