"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Heart, Calendar, Clock, MapPin } from "lucide-react"
import { useParallax, useScrollAnimation } from "@/hooks/use-parallax"
import { ScrollReveal } from "@/components/scroll-reveal"

const programs = [
  {
    title: "Discipleship Program",
    category: "Spiritual Growth",
    description:
      "A comprehensive 12-month program designed to help believers grow deeper in their relationship with Christ.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "12 months",
    schedule: "Weekly meetings",
    location: "Fellowship Hall",
    features: [
      "One-on-one mentoring",
      "Small group discussions",
      "Biblical foundations course",
      "Service opportunities",
      "Leadership development",
    ],
    nextStart: "February 1, 2025",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Marriage Enrichment",
    category: "Family Life",
    description:
      "Strengthen your marriage through biblical principles, practical tools, and couple-focused activities.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "8 weeks",
    schedule: "Friday evenings",
    location: "Conference Room",
    features: [
      "Communication skills",
      "Conflict resolution",
      "Financial planning",
      "Date night ideas",
      "Prayer partnership",
    ],
    nextStart: "January 12, 2025",
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Financial Freedom",
    category: "Life Skills",
    description: "Learn biblical principles of money management, budgeting, and generous giving.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "6 weeks",
    schedule: "Sunday afternoons",
    location: "Classroom A",
    features: ["Budget creation", "Debt elimination", "Investment basics", "Generous giving", "Emergency planning"],
    nextStart: "January 21, 2025",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Leadership Development",
    category: "Ministry Training",
    description: "Equip yourself for ministry leadership through practical training and hands-on experience.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "6 months",
    schedule: "Monthly workshops",
    location: "Leadership Center",
    features: ["Leadership principles", "Team building", "Public speaking", "Ministry planning", "Mentorship program"],
    nextStart: "March 1, 2025",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Grief Support Group",
    category: "Care & Support",
    description: "Find comfort and healing in a supportive community during times of loss and grief.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "Ongoing",
    schedule: "Weekly meetings",
    location: "Prayer Room",
    features: ["Peer support", "Professional counseling", "Resource materials", "Memorial services", "Family support"],
    nextStart: "Open enrollment",
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "New Member Class",
    category: "Church Integration",
    description: "Learn about our church's history, beliefs, and how to get connected in our community.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "4 weeks",
    schedule: "Sunday mornings",
    location: "Welcome Center",
    features: ["Church history", "Core beliefs", "Ministry opportunities", "Membership benefits", "Connection events"],
    nextStart: "First Sunday monthly",
    color: "from-yellow-500 to-yellow-600",
  },
]

const categories = [
  "All",
  "Spiritual Growth",
  "Family Life",
  "Life Skills",
  "Ministry Training",
  "Care & Support",
  "Church Integration",
]

export default function ProgramsPage() {
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
          <div className="absolute top-20 left-20 animate-float">
            <GraduationCap className="h-8 w-8 text-yellow-300/20" />
          </div>
          <div className="absolute top-40 right-16 animate-float" style={{ animationDelay: "2s" }}>
            <div className="w-6 h-6 bg-yellow-400/20 rounded-full" />
          </div>
          <div className="absolute bottom-32 left-1/3 animate-float" style={{ animationDelay: "4s" }}>
            <Heart className="h-6 w-6 text-yellow-300/25" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Church{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Grow in faith, build relationships, and develop skills through our comprehensive program offerings.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    index === 0
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover-lift border-0 shadow-lg overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        width={400}
                        height={300}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                          {program.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-2xl font-semibold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{program.description}</p>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-slate-600">
                          <Clock className="h-4 w-4 mr-2 text-blue-600" />
                          <span className="text-sm">
                            {program.duration} • {program.schedule}
                          </span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                          <span className="text-sm">{program.location}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                          <span className="text-sm font-medium">Next Start: {program.nextStart}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 mb-2">Program Features:</h4>
                        <ul className="space-y-1">
                          {program.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-slate-600 text-sm flex items-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent border-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white hover:border-transparent transition-all duration-300"
                      >
                        Register Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Registration is now open for our upcoming programs. Don't miss the opportunity to grow and connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                Register Online
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift bg-transparent"
              >
                Get More Info
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
