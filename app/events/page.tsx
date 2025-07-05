"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Tag, ArrowRight } from "lucide-react"
import { useParallax, useScrollAnimation } from "@/hooks/use-parallax"
import { ScrollReveal } from "@/components/scroll-reveal"

const upcomingEvents = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Main Sanctuary",
    description: "Join us for inspiring worship, fellowship, and biblical teaching every Sunday morning.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Worship",
    recurring: true,
    featured: true,
    registrationRequired: false,
  },
  {
    title: "New Year Prayer & Fasting",
    date: "January 1-7, 2025",
    time: "6:00 AM - 8:00 PM",
    location: "Prayer Chapel",
    description:
      "Start the new year with focused prayer and fasting. Join us for daily prayer sessions and spiritual renewal.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Prayer",
    recurring: false,
    featured: true,
    registrationRequired: true,
  },
  {
    title: "Youth Group Meeting",
    date: "January 15, 2025",
    time: "6:00 PM",
    location: "Youth Center",
    description: "Fun activities, games, and spiritual growth for teens. Bring a friend and join the adventure!",
    image: "/placeholder.svg?height=300&width=400",
    category: "Youth",
    recurring: false,
    featured: false,
    registrationRequired: false,
  },
  {
    title: "Community Outreach Day",
    date: "January 20, 2025",
    time: "9:00 AM",
    location: "Downtown Park",
    description:
      "Serving meals and sharing love with our community. Volunteers needed for setup, serving, and cleanup.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Outreach",
    recurring: false,
    featured: true,
    registrationRequired: true,
  },
  {
    title: "Marriage Enrichment Workshop",
    date: "January 25, 2025",
    time: "7:00 PM",
    location: "Fellowship Hall",
    description: "Strengthen your marriage with practical tools and biblical principles. Childcare provided.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Family",
    recurring: false,
    featured: false,
    registrationRequired: true,
  },
  {
    title: "Women's Bible Study",
    date: "Every Tuesday",
    time: "10:00 AM",
    location: "Conference Room",
    description:
      "Join us for in-depth Bible study, prayer, and fellowship. Currently studying the book of Philippians.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Bible Study",
    recurring: true,
    featured: false,
    registrationRequired: false,
  },
  {
    title: "Men's Breakfast",
    date: "February 1, 2025",
    time: "8:00 AM",
    location: "Fellowship Hall",
    description: "Monthly gathering for men featuring breakfast, fellowship, and encouraging devotions.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Fellowship",
    recurring: false,
    featured: false,
    registrationRequired: true,
  },
  {
    title: "Children's Valentine Party",
    date: "February 14, 2025",
    time: "3:00 PM",
    location: "Children's Wing",
    description: "A fun-filled afternoon of games, crafts, and treats for children ages 4-12.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Children",
    recurring: false,
    featured: false,
    registrationRequired: true,
  },
]

const blogPosts = [
  {
    title: "Preparing Hearts for the New Year",
    author: "Pastor Michael Johnson",
    date: "December 28, 2024",
    excerpt:
      "As we approach 2025, let's reflect on God's faithfulness and prepare our hearts for what He has in store.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Spiritual Growth",
    readTime: "5 min read",
  },
  {
    title: "The Power of Community Prayer",
    author: "Pastor Sarah Williams",
    date: "December 20, 2024",
    excerpt:
      "Discover how praying together strengthens our faith and builds deeper connections within our church family.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Prayer",
    readTime: "4 min read",
  },
  {
    title: "Youth Ministry Update: Winter Retreat",
    author: "David Chen",
    date: "December 15, 2024",
    excerpt: "Exciting updates from our recent youth winter retreat and upcoming events for our teenagers.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Youth",
    readTime: "3 min read",
  },
  {
    title: "Serving Our Community During the Holidays",
    author: "Jennifer Adams",
    date: "December 10, 2024",
    excerpt: "How our church family came together to serve over 200 families during the holiday season.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Outreach",
    readTime: "6 min read",
  },
]

const categories = ["All", "Worship", "Prayer", "Youth", "Outreach", "Family", "Bible Study", "Fellowship", "Children"]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Worship":
      return "bg-purple-100 text-purple-700"
    case "Prayer":
      return "bg-green-100 text-green-700"
    case "Youth":
      return "bg-blue-100 text-blue-700"
    case "Outreach":
      return "bg-red-100 text-red-700"
    case "Family":
      return "bg-pink-100 text-pink-700"
    case "Bible Study":
      return "bg-indigo-100 text-indigo-700"
    case "Fellowship":
      return "bg-yellow-100 text-yellow-700"
    case "Children":
      return "bg-orange-100 text-orange-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

export default function EventsPage() {
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
            <Calendar className="h-8 w-8 text-yellow-300/20" />
          </div>
          <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: "1s" }}>
            <Clock className="h-6 w-6 text-yellow-300/25" />
          </div>
          <div className="absolute bottom-24 left-1/4 animate-float" style={{ animationDelay: "3s" }}>
            <Users className="h-7 w-7 text-yellow-300/15" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Events &{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay connected with upcoming events and read inspiring stories from our church community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl font-bold text-center text-slate-800 mb-12">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Events</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {upcomingEvents
              .filter((event) => event.featured)
              .slice(0, 2)
              .map((event, index) => (
                <ScrollReveal key={index} delay={index * 200}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover-lift border-0 shadow-lg overflow-hidden bg-white">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(event.category)}`}
                          >
                            {event.category}
                          </span>
                        </div>
                        {event.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-yellow-400 text-slate-800 text-sm font-bold rounded-full">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-8">
                        <h3 className="font-playfair text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                          {event.title}
                        </h3>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center text-slate-600">
                            <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center text-slate-600">
                            <Clock className="h-5 w-5 mr-3 text-blue-600" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-slate-600">
                            <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed">{event.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {event.registrationRequired && (
                              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                                Registration Required
                              </span>
                            )}
                            {event.recurring && (
                              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                                Recurring
                              </span>
                            )}
                          </div>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                            Learn More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl font-bold text-center text-slate-800 mb-8">All Upcoming Events</h2>
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover-lift border-0 shadow-md overflow-hidden bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(event.category)}`}
                      >
                        {event.category}
                      </span>
                      {event.featured && <Tag className="h-4 w-4 text-yellow-500" />}
                    </div>

                    <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-slate-600">
                        <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{event.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {event.registrationRequired && (
                          <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">Registration</span>
                        )}
                        {event.recurring && (
                          <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Recurring</span>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                      >
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl font-bold text-center text-slate-800 mb-12">
              Latest from Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Blog</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover-lift border-0 shadow-md overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-playfair text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">{post.date}</div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <ScrollReveal>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                View All Blog Posts
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Subscribe to our newsletter to receive updates about upcoming events, blog posts, and church
              announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                Subscribe
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
