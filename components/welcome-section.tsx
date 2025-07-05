"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Users, HandIcon as Hands } from "lucide-react"
import { useParallax, useScrollAnimation } from "@/hooks/use-parallax"

export function WelcomeSection() {
  const scrollY = useParallax()
  useScrollAnimation()

  return (
    <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 parallax-element"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          backgroundImage: "url('/placeholder.svg?height=100&width=100')",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-animate">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              Welcome to Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Church Family
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              At Grace Community Church, we believe that everyone has a place in God's family. Whether you're seeking
              spiritual growth, meaningful relationships, or ways to serve your community, you'll find a warm welcome
              here.
            </p>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Our vibrant community is built on the foundation of faith, hope, and love. We gather to worship, learn,
              and support one another as we grow in our relationship with God.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              Learn More About Us
            </Button>
          </div>

          <div
            className="relative scroll-animate parallax-element"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
            }}
          >
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Church community gathering"
                width={700}
                height={600}
                className="rounded-2xl shadow-2xl hover-lift"
              />
              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-80 animate-float" />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-60 animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>

        {/* Core Values with Staggered Animation */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center scroll-animate stagger-1 hover-lift">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="h-10 w-10 text-yellow-600" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-slate-800 mb-4">Love</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              We show God's love through our actions, words, and service to others.
            </p>
          </div>

          <div className="text-center scroll-animate stagger-2 hover-lift">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-slate-800 mb-4">Community</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              We believe in the power of fellowship and supporting one another.
            </p>
          </div>

          <div className="text-center scroll-animate stagger-3 hover-lift">
            <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Hands className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-slate-800 mb-4">Service</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              We are called to serve our community and make a positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
