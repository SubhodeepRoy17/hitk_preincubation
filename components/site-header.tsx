"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/pre-incubation", label: "Pre‑Incubation" },
  { href: "/innovations/jawaan", label: "JAWAAN" },
  { href: "/success-stories/paradox-innovators", label: "Success Stories" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full border-b bg-background sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold flex items-center gap-3">
          <Image 
            src="/images/logo.jpg" 
            alt="Heritage Incubation Shell Logo"
            width={60}
            height={60}
            className="h-16 w-16 object-contain"
          />
          <span className="text-primary">Incubation Shell</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:text-primary">
              {item.label}
            </Link>
          ))}
          <Button asChild className="bg-primary text-primary-foreground">
            <a href="#contact">Contact</a>
          </Button>
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("h-0.5 w-5 bg-foreground block", open && "opacity-0")}></span>
          <span className="h-0.5 w-5 bg-foreground block my-1.5"></span>
          <span className={cn("h-0.5 w-5 bg-foreground block", open && "opacity-0")}></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="py-1" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground">
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}