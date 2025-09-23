import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MediaGallery from "@/components/media-gallery"
import VideoGrid from "@/components/video-grid"

export default function PreIncubationPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-semibold text-balance">
          ANNEXURE 3: Pre‑Incubation Unit at Heritage Institute of Technology
        </h1>
        <p className="text-muted-foreground mt-3 text-pretty">
          The Pre‑Incubation Unit (Heritage Incubation Cell) supports students in transforming validated ideas into
          tangible prototypes and pilot‑ready solutions with structured guidance and resources.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Objectives</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              • Foster innovation culture • Support early‑stage prototyping • Enable pilot readiness • Encourage
              industry collaboration
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Programs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Cohorts, workshops, 1:1 mentorship, demo days, and TRL/IRL‑aligned milestones for consistent progress.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Facilities</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Access to labs and maker tools, meeting spaces, and shared resources for design, testing, and iteration.
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Eligibility & Selection</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Open to student teams with clearly defined problems and solution hypotheses; selection via application and
              review.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Outcomes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Prototype development, pilot readiness, mentorship network access, and pathways toward incubation or
              startup formation.
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 rounded-lg border p-6">
          <h2 className="text-xl font-semibold">How to Apply</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Prepare a brief proposal (problem, solution, team, expected outcomes, timeline) and submit via the
            Incubation Cell.
          </p>
        </div>
        <MediaGallery />
        <VideoGrid />
      </section>
      <SiteFooter />
    </main>
  )
}
