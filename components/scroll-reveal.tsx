"use client"

import { useEffect, useRef } from "react"
import type React from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, delay)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    observer.observe(element)

    return () => observer.unobserve(element)
  }, [delay])

  const getDirectionClass = () => {
    switch (direction) {
      case "left":
        return "animate-slide-in-left"
      case "right":
        return "animate-slide-in-right"
      case "down":
        return "animate-fade-in"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div ref={elementRef} className={`scroll-animate ${getDirectionClass()} ${className}`}>
      {children}
    </div>
  )
}
