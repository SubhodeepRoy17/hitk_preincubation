"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const images = [
  "/images/incubation-center-group.jpg",
  "/images/team-drone.jpg",
  "/images/lab-setup.jpg",
  "/images/data-laptop.jpg",
  "/images/drone-closeup.jpg",
  "/images/winner.jpg"
]

export function PageHero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-4xl px-4 py-14 md:py-20"> {/* Reduced max-width */}
        {/* Institution Name */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Heritage Institute of Technology
          </h1>
        </div>

        {/* Image Carousel - Fit to image size */}
        <div className="relative overflow-hidden rounded-lg bg-card border shadow-lg w-full max-w-3xl mx-auto"> {/* Centered with max-width */}
          <div className="relative h-80 md:h-96 w-full"> {/* Reduced height */}
            {images.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
              </div>
            ))}
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary scale-125' : 'bg-primary/50'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-all"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-all"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary text-primary-foreground px-8 py-3">
              <Link href="/innovations/jawaan">Explore JAWAAN</Link>
            </Button>
            <Button asChild variant="outline" className="px-8 py-3">
              <Link href="/success-stories/paradox-innovators">Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}