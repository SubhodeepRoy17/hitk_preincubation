"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/pre-incubation", label: "Pre‑Incubation" },
  { href: "/innovations", label: "Innovations" },
  { href: "/about", label: "About" },
  { href: "/awards", label: "Awards" },
  { href: "/success-stories/paradox-innovators", label: "Success Stories" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full border-b bg-background sticky top-0 z-30">
      {/* Top Layer - Logos */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-center gap-6">
          <Image 
            src="/images/logo.jpg" 
            alt="Heritage Incubation Cell Logo"
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
          />
          <span className="text-2xl font-bold text-primary text-center">Pre-Incubation Cell</span>
          <Image 
            src="/images/logo1.jpg" 
            alt="Partner Logo"
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
          />
        </div>
      </div>

      {/* Bottom Layer - Navigation */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-100/30">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-center">
          <nav className="hidden md:flex items-center gap-2">
            {nav.map((item, index) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={cn(
                  "px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105",
                  "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl",
                  "hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-0.5",
                  "border border-white/20"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="ml-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:from-green-600 hover:to-emerald-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 px-6 py-3">
              <a href="#contact">Contact</a>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 bg-white shadow-sm"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={cn("h-0.5 w-5 bg-foreground block transition-all", open && "opacity-0")}></span>
            <span className="h-0.5 w-5 bg-foreground block my-1.5 transition-all"></span>
            <span className={cn("h-0.5 w-5 bg-foreground block transition-all", open && "opacity-0")}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-gradient-to-b from-blue-50 to-purple-50">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {nav.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-center shadow-md transition-all hover:scale-105"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md mt-2 py-3">
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