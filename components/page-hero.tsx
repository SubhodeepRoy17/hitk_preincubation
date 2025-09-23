import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PageHero() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-balance">
              Pre‑Incubation Centre at Heritage Institute of Technology
            </h1>
            <p className="text-muted-foreground mt-4 text-pretty">
              Mentorship, resources, and a launchpad for student innovators to build prototypes, validate ideas, and
              grow into startups.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-primary text-primary-foreground">
                <Link href="/innovations/jawaan">Explore JAWAAN</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/success-stories/paradox-innovators">Success Stories</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-md bg-primary/10 p-3">
                <div className="text-xs text-muted-foreground">Recognition</div>
                <div className="font-medium mt-1">Smart Bengal Hackathon 2025</div>
                <div className="text-xs mt-1">Winner (Senior)</div>
              </div>
              <div className="rounded-md bg-accent/10 p-3">
                <div className="text-xs text-muted-foreground">Certificates</div>
                <div className="font-medium mt-1">Smart Bengal 2025</div>
                <div className="text-xs mt-1">Awards & Merit</div>
              </div>
              <div className="rounded-md border p-3">
                <div className="text-xs text-muted-foreground">TRL Focus</div>
                <div className="font-medium mt-1">Prototype → Pilot</div>
              </div>
              <div className="rounded-md border p-3">
                <div className="text-xs text-muted-foreground">Programs</div>
                <div className="font-medium mt-1">Mentorship, Labs, Demo Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
