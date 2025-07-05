"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin, Camera, Video, Music } from "lucide-react"
import { useParallax, useScrollAnimation } from "@/hooks/use-parallax"
import { ScrollReveal } from "@/components/scroll-reveal"

const activities = [
  {
    year: "2024",
    title: "Annual Church Retreat",
    date: "August 15-17, 2024",
    location: "Mountain View Resort",
    description: "A weekend of worship, fellowship, and spiritual renewal in the beautiful mountains.",
    image: "/placeholder.svg?height=300&width=400",
    type: "retreat",
    participants: 150,
    highlights: ["Keynote speakers", "Worship sessions", "Team building", "Nature walks"],
  },
  {
    year: "2024",
    title: "Community Food Drive",
    date: "July 20, 2024",
    location: "Church Parking Lot",
    description: "Collecting food donations for local families in need during the summer months.",
    image: "/placeholder.svg?height=300&width=400",
    type: "outreach",
    participants: 200,
    highlights: ["2,500 meals collected", "50 families helped", "Community partnership", "Volunteer appreciation"],
  },
  {
    year: "2024",
    title: "Youth Summer Camp",
    date: "June 10-14, 2024",
    location: "Camp Wildwood",
    description: "Five days of adventure, worship, and friendship building for our teenagers.",
    image: "/placeholder.svg?height=300&width=400",
    type: "youth",
    participants: 75,
    highlights: ["Rock climbing", "Campfire worship", "Baptisms", "Leadership training"],
  },
  {
    year: "2024",
    title: "Easter Celebration",
    date: "March 31, 2024",
    location: "Main Sanctuary",
    description: "Celebrating the resurrection of Jesus Christ with special music and drama presentation.",
    image: "/placeholder.svg?height=300&width=400",
    type: "worship",
    participants: 800,
    highlights: ["Drama presentation", "Special choir", "Children's program", "Community breakfast"],
  },
  {
    year: "2023",
    title: "Christmas Concert",
    date: "December 15, 2023",
    location: "Main Sanctuary",
    description: "A beautiful evening of Christmas music featuring our choir, orchestra, and special guests.",
    image: "/placeholder.svg?height=300&width=400",
    type: "music",
    participants: 600,
    highlights: ["Full orchestra", "Guest soloists", "Children's choir", "Community caroling"],
  },
  {
    year: "2023",
    title: "Mission Trip to Guatemala",
    date: "October 7-14, 2023",
    location: "Guatemala City, Guatemala",
    description: "Building homes and sharing the Gospel with families in rural Guatemala communities.",
    image: "/placeholder.svg?height=300&width=400",
    type: "missions",
    participants: 25,
    highlights: ["3 homes built", "Medical clinic", "Children's ministry", "Cultural exchange"],
  },
  {
    year: "2023",
    title: "Vacation Bible School",
    date: "July 17-21, 2023",
    location: "Church Campus",
    description: "A week of fun, learning, and adventure for children ages 4-12 with the theme 'Ocean Commotion'.",
    image: "/placeholder.svg?height=300&width=400",
    type: "children",
    participants: 120,
    highlights: ["Ocean theme", "Craft activities", "Bible stories", "Music and games"],
  },
  {
    year: "2022",
    title: "Church Anniversary Celebration",
    date: "September 18, 2022",
    location: "Fellowship Hall",
    description: "Celebrating 37 years of God's faithfulness with testimonies, music, and fellowship.",
    image: "/placeholder.svg?height=300&width=400",
    type: "celebration",
    participants: 400,
    highlights: ["Historical display", "Founding members", "Anniversary cake", "Time capsule"],
  },
  {
    year: "2022",
    title: "Community Health Fair",
    date: "May 14, 2022",
    location: "Church Gymnasium",
    description: "Providing free health screenings and wellness education to our community.",
    image: "/placeholder.svg?height=300&width=400",
    type: "outreach",
    participants: 300,
    highlights: ["Free screenings", "Health education", "Fitness demos", "Nutrition counseling"],
  },
  {
    year: "2021",
    title: "Virtual Christmas Service",
    date: "December 24, 2021",
    location: "Online Streaming",
    description: "Adapting our Christmas celebration to reach families safely during the pandemic.",
    image: "/placeholder.svg?height=300&width=400",
    type: "worship",
    participants: 1200,
    highlights: ["Live streaming", "Home participation", "Virtual choir", "Online giving"],
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "music":
      return Music
    case "youth":
    case "children":
      return Users
    case "worship":
    case "celebration":
      return Calendar
    default:
      return Camera
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "retreat":
      return "bg-green-100 text-green-700"
    case "outreach":
      return "bg-red-100 text-red-700"
    case "youth":
      return "bg-blue-100 text-blue-700"
    case "worship":
      return "bg-purple-100 text-purple-700"
    case "music":
      return "bg-pink-100 text-pink-700"
    case "missions":
      return "bg-teal-100 text-teal-700"
    case "children":
      return "bg-yellow-100 text-yellow-700"
    case "celebration":
      return "bg-indigo-100 text-indigo-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

export default function ActivitiesPage() {
  const scrollY = useParallax()
  useScrollAnimation()

  const years = ["All", "2024", "2023", "2022", "2021"]

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
            <Camera className="h-8 w-8 text-yellow-300/20" />
          </div>
          <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: "1s" }}>
            <Video className="h-6 w-6 text-yellow-300/25" />
          </div>
          <div className="absolute bottom-24 left-1/4 animate-float" style={{ animationDelay: "3s" }}>
            <Music className="h-7 w-7 text-yellow-300/15" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Creative{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Activities
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Celebrating four years of God's faithfulness through memorable events, programs, and community
              initiatives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Year Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {years.map((year, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    index === 0
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {year}
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Activities Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = getTypeIcon(activity.type)
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover-lift border-0 shadow-lg overflow-hidden bg-white">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.title}
                          width={400}
                          height={300}
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4 flex items-center space-x-2">
                          <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                            {activity.year}
                          </span>
                          <span
                            className={`px-3 py-1 text-sm font-medium rounded-full capitalize ${getTypeColor(activity.type)}`}
                          >
                            {activity.type}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                          {activity.title}
                        </h3>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-slate-600">
                            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                            <span className="text-sm">{activity.date}</span>
                          </div>
                          <div className="flex items-center text-slate-600">
                            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                            <span className="text-sm">{activity.location}</span>
                          </div>
                          <div className="flex items-center text-slate-600">
                            <Users className="h-4 w-4 mr-2 text-blue-600" />
                            <span className="text-sm">{activity.participants} participants</span>
                          </div>
                        </div>

                        <p className="text-slate-600 mb-4 leading-relaxed text-sm">{activity.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-800 mb-2 text-sm">Highlights:</h4>
                          <div className="flex flex-wrap gap-1">
                            {activity.highlights.slice(0, 3).map((highlight, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-transparent border-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white hover:border-transparent transition-all duration-300"
                        >
                          View Gallery
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

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl font-bold text-center mb-12">Four Years of Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2,500+</div>
                <div className="text-lg">People Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="text-lg">Mission Trips</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-lg">Volunteers</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
