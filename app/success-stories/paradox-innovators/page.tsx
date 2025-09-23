import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"

export default function ParadoxStoryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-semibold text-balance">
          Paradox Innovator Pvt. Ltd. – A Success Story Nurtured at Heritage Incubation Cell
        </h1>
        <p className="text-muted-foreground mt-3 text-pretty">
          Paradox Innovator began as a college tech group representing Heritage Institute of Technology at technical
          events nationwide. Supported by the Heritage Incubation Cell with guidance, mentorship, and resources, the
          team won multiple accolades including the Smart India Hackathon (SIH) 2024 and later registered as a private
          limited company.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-md border p-4">
            <h2 className="font-semibold">Focus Areas</h2>
            <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2 space-y-1">
              <li>Research and Development</li>
              <li>Innovative product design</li>
              <li>PCB designing</li>
              <li>3D modeling and printing</li>
            </ul>
          </div>
          <div className="rounded-md border p-4">
            <h2 className="font-semibold">Links</h2>
            <ul className="text-sm mt-2 space-y-2">
              <li>
                Website:{" "}
                <a
                  className="text-primary underline underline-offset-4"
                  href="https://www.paradoxinnovator.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  paradoxinnovator.com
                </a>
              </li>
              <li>
                Address:{" "}
                <a
                  className="text-primary underline underline-offset-4"
                  href="https://maps.app.goo.gl/8uraViKUSZcL5gwF9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
              <li>
                Contact:{" "}
                <a
                  className="text-primary underline underline-offset-4"
                  href="mailto:ranjan.kumargupta@paradoxinnovator.com"
                >
                  ranjan.kumargupta@paradoxinnovator.com
                </a>{" "}
                | +91 9709287187
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Testimonial Highlight</h2>
          <p className="text-sm text-muted-foreground mt-2 text-pretty">
            "Our journey from a student tech team to a registered startup was made possible by the continuous support of
            the Heritage Incubation Cell. The center provided mentorship and resources that shaped our projects and
            fueled our innovation."
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
            <Image
              src={
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2017.04.35_18b99ebf.jpg-eehTO7RvWP4EFCG8IdMQcGkaxN9XgE.jpeg"
              }
              alt="Paradox Innovator team at the Innovation and Incubation Center"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
            <Image
              src={
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2017.04.37_228dceeb.jpg-m5A0ml3yAA2uHrAcEq5zstfZHgOybB.jpeg"
              }
              alt="Team showcasing drone and laptop in lab environment"
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
              alt="Workshop scene with multiple teams working in the lab"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
