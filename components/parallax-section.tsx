"use client"

import { useParallax } from "@/hooks/use-parallax"
import type React from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
  backgroundImage?: string
}

export function ParallaxSection({ children, speed = 0.5, className = "", backgroundImage }: ParallaxSectionProps) {
  const scrollY = useParallax()

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div
          className="absolute inset-0 parallax-element"
          style={{
            transform: `translateY(${scrollY * speed}px)`,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
