import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AwardsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />  
      <div className="flex-1 mx-auto max-w-6xl w-full px-4 py-8 md:py-12">
        <header className="mb-8 md:mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">Awards & Recognitions</h1>
          <p className="mt-3 text-muted-foreground text-lg max-w-3xl">Celebrating our teams' achievements.</p>
        </header>

        <section aria-labelledby="sbh-2025" className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 id="sbh-2025" className="text-2xl md:text-3xl font-semibold text-primary">
                Smart Bengal Hackathon 2025 — Winners
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-base md:text-lg">
                Our student team secured top honors at the Smart Bengal Hackathon 2025 for their innovative defense‑tech
                solution under the Pre‑Incubation Centre. The project demonstrated strong systems engineering, on‑ground
                testing, and a clear pathway from lab to field deployment.
              </p>
            </div>
            
            <ul className="text-sm md:text-base grid gap-3 bg-muted/30 p-4 md:p-6 rounded-lg">
              <li className="flex items-start">
                <strong className="min-w-[80px] md:min-w-[100px]">Category:</strong>
                <span className="ml-2">Senior</span>
              </li>
              <li className="flex items-start">
                <strong className="min-w-[80px] md:min-w-[100px]">Institution:</strong>
                <span className="ml-2">Heritage Institute of Technology</span>
              </li>
              <li className="flex items-start">
                <strong className="min-w-[80px] md:min-w-[100px]">Recognition:</strong>
                <span className="ml-2">State‑level winner</span>
              </li>
            </ul>
          </div>
          
          <div className="rounded-lg overflow-hidden border shadow-lg">
            <img
              src="/images/team-drone.jpg"
              alt="Winning team with drone and demo setup for Smart Bengal Hackathon 2025"
              className="w-full h-auto object-cover max-h-[500px] md:max-h-[600px]"
            />
          </div>
        </section>

        {/* Additional space for future awards */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-semibold text-center text-muted-foreground">
            More achievements coming soon...
          </h3>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}