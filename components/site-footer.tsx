export function SiteFooter() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Heritage Incubation Shell</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Pre‑Incubation Centre at Heritage Institute of Technology. Enabling students to transform ideas into
            ventures.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-muted-foreground">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a className="hover:text-primary" href="/pre-incubation">
                Pre‑Incubation
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="/innovations/jawaan">
                JAWAAN
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="/success-stories/paradox-innovators">
                Success Stories
              </a>
            </li>
          </ul>
        </div>
        <div id="contact">
          <h4 className="text-sm font-medium text-muted-foreground">Contact</h4>
          <p className="text-sm mt-2">
            Heritage Institute of Technology
            <br />
            Incubation Shell, Kolkata, India
          </p>
          <p className="text-sm mt-2">General inquiries: incubation@heritageit.edu (placeholder)</p>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground py-4 border-t">
        © {new Date().getFullYear()} Heritage Incubation Shell. All rights reserved.
      </div>
    </footer>
  )
}
