"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Church } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

const heroSlides = [
  {
    image: "/placeholder.svg?height=800&width=1400",
    title: "Welcome to Grace Community",
    subtitle: "A place where faith, hope, and love come together",
    cta: "Join Us This Sunday",
  },
  {
    image: "/placeholder.svg?height=800&width=1400",
    title: "Growing in Faith Together",
    subtitle: "Discover your purpose in our loving community",
    cta: "Explore Ministries",
  },
  {
    image: "/placeholder.svg?height=800&width=1400",
    title: "Serving Our Community",
    subtitle: "Making a difference through love and service",
    cta: "Get Involved",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollY = useParallax()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden parallax-container">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax-element"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover scale-110"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Church className="h-8 w-8 text-yellow-300/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-4 h-4 bg-yellow-400/20 rounded-full" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <div className="w-6 h-6 bg-blue-400/20 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-5xl px-4">
          <div
            className="parallax-element"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 parallax-text animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-3xl mb-8 text-amber-100 animate-fade-in-delay">
              {heroSlides[currentSlide].subtitle}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 animate-fade-in-delay-2 hover-lift"
            >
              {heroSlides[currentSlide].cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all duration-300 hover-lift"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all duration-300 hover-lift"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-yellow-400 scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
