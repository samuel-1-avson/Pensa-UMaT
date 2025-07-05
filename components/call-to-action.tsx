"use client"

import { Button } from "@/components/ui/button"
import { Church, Star } from "lucide-react"
import { useParallax, useScrollAnimation } from "@/hooks/use-parallax"

export function CallToAction() {
  const scrollY = useParallax()
  useScrollAnimation()

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div
        className="absolute inset-0 parallax-element"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute top-10 left-10 animate-float">
          <Star className="h-6 w-6 text-yellow-300/30" />
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-8 h-8 bg-yellow-300/20 rounded-full" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <Church className="h-8 w-8 text-yellow-300/20" />
        </div>
        <div className="absolute bottom-32 right-1/3 animate-float" style={{ animationDelay: "3s" }}>
          <div className="w-4 h-4 bg-yellow-300/30 rounded-full" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="scroll-animate">
          <div className="mb-8 animate-float">
            <Church className="h-20 w-20 mx-auto text-yellow-200" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Join Our{" "}
            <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Community?</span>
          </h2>
          <p className="text-2xl mb-12 text-amber-100 leading-relaxed max-w-3xl mx-auto">
            Take the next step in your faith journey. We'd love to welcome you into our church family.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-yellow-50 px-10 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift"
            >
              Plan Your Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 bg-transparent px-10 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
