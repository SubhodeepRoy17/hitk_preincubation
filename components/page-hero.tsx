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

  const getPreviousIndex = (current: number) => (current - 1 + images.length) % images.length
  const getNextIndex = (current: number) => (current + 1) % images.length

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-2 md:py-8">
        {/* Institution Name */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Pre‑Incubation Centre
          </h1>
        </div>

        {/* Image Carousel with partial side images */}
        <div className="relative overflow-hidden rounded-lg bg-card border shadow-lg w-full max-w-5xl mx-auto">
          <div className="relative h-80 md:h-96 w-full">
            {/* Previous Image (Left Side) */}
            <div className="absolute left-0 top-0 w-1/4 h-full overflow-hidden opacity-60">
              <Image
                src={images[getPreviousIndex(currentIndex)]}
                alt={`Previous image`}
                fill
                className="object-cover scale-110"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent" />
            </div>

            {/* Next Image (Right Side) */}
            <div className="absolute right-0 top-0 w-1/4 h-full overflow-hidden opacity-60">
              <Image
                src={images[getNextIndex(currentIndex)]}
                alt={`Next image`}
                fill
                className="object-cover scale-110"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-card to-transparent" />
            </div>

            {/* Current Image */}
            <div className="absolute inset-0 left-1/4 right-1/4 transition-opacity duration-1000 ease-in-out opacity-100">
              <Image
                src={images[currentIndex]}
                alt={`Carousel image ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority={currentIndex === 0}
                sizes="50vw"
              />
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-all z-10"
              onClick={() => setCurrentIndex(getPreviousIndex(currentIndex))}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-all z-10"
              onClick={() => setCurrentIndex(getNextIndex(currentIndex))}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}