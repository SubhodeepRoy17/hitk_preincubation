import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { FeatureCard } from "@/components/feature-card"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <PageHero />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Structured Pre‑Incubation"
            description="Cohorts focusing on problem validation, prototyping, and readiness for pilot programs."
          />
          <FeatureCard
            title="Mentorship & Guidance"
            description="Access to faculty advisors and industry mentors for product, tech, and go‑to‑market."
          />
          <FeatureCard
            title="Facilities & Resources"
            description="Lab access, prototyping resources, and demo opportunities for promising teams."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-lg border p-4 md:p-6 grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-balance">Featured Innovation: JAWAAN</h2>
            <p className="text-sm text-muted-foreground mt-2">
              An AI‑powered platform integrating 24×7 drone surveillance, optimized path planning, threat and sound
              detection, soldier health monitoring, and an SOS mechanism—built with AI, ML, and IoT for mission success.
              TRL: 6
            </p>
            <div className="mt-4">
              <Link className="text-primary underline underline-offset-4" href="/innovations/jawaan">
                Read the full case
              </Link>
            </div>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border bg-muted">
            <Image
              src={
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jawan-abstract.jpg-McY3nQAKEumCCBHacorRkB2nY0REwr.jpeg" ||
                "/placeholder.svg"
              }
              alt="JAWAAN abstract: Institutional document describing the innovation and TRL"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold">Success Story: Paradox Innovator Pvt. Ltd.</h3>
          <p className="text-sm text-muted-foreground mt-2">
            A student tech group nurtured at the Heritage Incubation Cell, now a registered startup with achievements
            including winning SIH 2024. Focus areas: R&amp;D, product design, PCB design, and 3D modeling/printing.
          </p>
          <div className="mt-3 text-sm">
            <a className="text-primary underline underline-offset-4" href="/success-stories/paradox-innovators">
              Explore the full story
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-lg border p-4 md:p-6 grid gap-4 md:grid-cols-[1fr_420px] md:items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-balance">Smart Bengal Hackathon 2025 — Winners</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Our student innovators achieved top honors at the Smart Bengal Hackathon 2025 (Senior). Congratulations to
              the team for their outstanding work and impact.
            </p>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border bg-muted">
            <Image
              src={"/images/winner.jpg"}
              alt="Winning team with drone and project showcase at the lab"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 420px, 100vw"
              priority={false}
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
