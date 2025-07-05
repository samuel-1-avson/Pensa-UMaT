"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Music, Heart, PlayIcon as Pray } from "lucide-react"
import { useParallax, useScrollAnimation } from "@/hooks/use-parallax"

const ministries = [
  {
    icon: Users,
    title: "Youth Ministry",
    description: "Empowering young people to grow in faith and leadership.",
    image: "/placeholder.svg?height=250&width=350",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Music,
    title: "Worship & Music",
    description: "Leading our congregation in heartfelt worship and praise.",
    image: "/placeholder.svg?height=250&width=350",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Heart,
    title: "Outreach",
    description: "Serving our community with love and compassion.",
    image: "/placeholder.svg?height=250&width=350",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Pray,
    title: "Prayer Team",
    description: "Interceding for our church and community needs.",
    image: "/placeholder.svg?height=250&width=350",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
]

export function FeaturedMinistries() {
  const scrollY = useParallax()
  useScrollAnimation()

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Parallax Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 parallax-element"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d97706' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Ministries</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the many ways you can get involved and make a difference in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => {
            const IconComponent = ministry.icon
            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover-lift scroll-animate stagger-${index + 1} border-0 shadow-lg overflow-hidden ${ministry.bgColor}`}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={ministry.image || "/placeholder.svg"}
                      alt={ministry.title}
                      width={350}
                      height={250}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                      className={`absolute top-6 left-6 bg-gradient-to-r ${ministry.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-playfair text-2xl font-semibold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                      {ministry.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{ministry.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent border-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16 scroll-animate">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
          >
            <Link href="/ministries">View All Ministries</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
