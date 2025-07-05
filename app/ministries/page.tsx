"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Music, Heart, PlayIcon as Pray, BookOpen, Baby, Globe, Utensils } from "lucide-react"
import { useParallax, useScrollAnimation } from "@/hooks/use-parallax"
import { ScrollReveal } from "@/components/scroll-reveal"

const ministries = [
  {
    icon: Users,
    title: "Youth Ministry",
    description:
      "Empowering young people ages 13-18 to grow in faith, build lasting friendships, and develop leadership skills.",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    details: "Weekly youth group meetings, summer camps, mission trips, and leadership development programs.",
    meetingTime: "Wednesdays 7:00 PM",
    leader: "David Chen",
  },
  {
    icon: Music,
    title: "Worship & Music",
    description: "Leading our congregation in heartfelt worship through contemporary and traditional music.",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    details: "Choir, worship team, instrumental groups, and special music events throughout the year.",
    meetingTime: "Sundays 9:00 AM",
    leader: "Robert Thompson",
  },
  {
    icon: Heart,
    title: "Community Outreach",
    description: "Serving our local community with love, compassion, and practical assistance.",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    details: "Food pantry, homeless shelter support, community events, and disaster relief efforts.",
    meetingTime: "Saturdays 10:00 AM",
    leader: "Jennifer Adams",
  },
  {
    icon: Pray,
    title: "Prayer Ministry",
    description: "Interceding for our church family and community through dedicated prayer and spiritual warfare.",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    details: "Prayer chains, healing prayer, prayer walks, and 24/7 prayer room availability.",
    meetingTime: "Tuesdays 6:30 PM",
    leader: "Elder Mary Johnson",
  },
  {
    icon: BookOpen,
    title: "Adult Education",
    description: "Deepening biblical knowledge and spiritual growth through classes and small group studies.",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    details: "Bible studies, theology classes, marriage enrichment, and financial stewardship courses.",
    meetingTime: "Sundays 11:30 AM",
    leader: "Pastor Michael Johnson",
  },
  {
    icon: Baby,
    title: "Children's Ministry",
    description: "Nurturing children from birth through 5th grade in a safe, fun, and faith-building environment.",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    details: "Sunday school, VBS, children's choir, and special events designed for young hearts and minds.",
    meetingTime: "Sundays 10:00 AM",
    leader: "Maria Rodriguez",
  },
  {
    icon: Globe,
    title: "Missions",
    description: "Spreading the Gospel locally and globally through strategic partnerships and mission trips.",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    details: "International missions, local evangelism, missionary support, and cross-cultural ministry.",
    meetingTime: "Monthly meetings",
    leader: "Mission Committee",
  },
  {
    icon: Utensils,
    title: "Hospitality",
    description: "Creating welcoming environments through food, fellowship, and genuine care for visitors and members.",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    details: "Welcome team, coffee ministry, potluck dinners, and special event catering.",
    meetingTime: "As needed",
    leader: "Hospitality Team",
  },
]

export default function MinistriesPage() {
  const scrollY = useParallax()
  useScrollAnimation()

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 parallax-element"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="absolute top-16 left-16 animate-float">
            <Heart className="h-6 w-6 text-yellow-300/20" />
          </div>
          <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: "1s" }}>
            <Music className="h-8 w-8 text-yellow-300/15" />
          </div>
          <div className="absolute bottom-24 left-1/3 animate-float" style={{ animationDelay: "3s" }}>
            <Users className="h-7 w-7 text-yellow-300/25" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Ministries
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the many ways you can grow, serve, and connect in our vibrant church community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card
                    className={`group hover:shadow-2xl transition-all duration-500 hover-lift border-0 shadow-lg overflow-hidden ${ministry.bgColor}`}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={ministry.image || "/placeholder.svg"}
                          alt={ministry.title}
                          width={400}
                          height={300}
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div
                          className={`absolute top-6 left-6 bg-gradient-to-r ${ministry.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-playfair text-2xl font-semibold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                          {ministry.title}
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">{ministry.description}</p>
                        <p className="text-slate-500 text-sm mb-4">{ministry.details}</p>

                        <div className="space-y-2 mb-6">
                          <div className="flex items-center text-slate-600">
                            <Users className="h-4 w-4 mr-2 text-blue-600" />
                            <span className="text-sm font-medium">Leader: {ministry.leader}</span>
                          </div>
                          <div className="flex items-center text-slate-600">
                            <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                            <span className="text-sm">{ministry.meetingTime}</span>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-transparent border-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white hover:border-transparent transition-all duration-300"
                        >
                          Get Involved
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl font-bold mb-6">Ready to Get Involved?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Every ministry needs passionate volunteers. Find your place and make a difference in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                Volunteer Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift bg-transparent"
              >
                Contact Ministry Leader
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
