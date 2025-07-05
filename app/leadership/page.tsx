"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Calendar, Users } from "lucide-react"
import { useParallax, useScrollAnimation } from "@/hooks/use-parallax"
import { ScrollReveal } from "@/components/scroll-reveal"

const leadership = [
  {
    name: "Pastor Michael Johnson",
    role: "Senior Pastor",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Pastor Michael has been leading Grace Community Church for over 15 years. He holds a Master of Divinity from Seminary and is passionate about expository preaching and discipleship.",
    email: "pastor.michael@gracecommunity.org",
    phone: "(555) 123-4567",
    yearsServing: 15,
    specialties: ["Preaching", "Counseling", "Leadership Development"],
  },
  {
    name: "Pastor Sarah Williams",
    role: "Associate Pastor",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Pastor Sarah oversees our worship ministry and women's programs. She brings a heart for worship and a passion for seeing people encounter God's presence.",
    email: "pastor.sarah@gracecommunity.org",
    phone: "(555) 123-4568",
    yearsServing: 8,
    specialties: ["Worship", "Women's Ministry", "Prayer"],
  },
  {
    name: "David Chen",
    role: "Youth Pastor",
    image: "/placeholder.svg?height=400&width=300",
    bio: "David leads our vibrant youth ministry, helping teenagers grow in their faith and develop into godly leaders. He has a heart for the next generation.",
    email: "david.chen@gracecommunity.org",
    phone: "(555) 123-4569",
    yearsServing: 5,
    specialties: ["Youth Ministry", "Discipleship", "Outreach"],
  },
  {
    name: "Maria Rodriguez",
    role: "Children's Director",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Maria oversees all children's programs from nursery through elementary. She is passionate about helping children develop a strong foundation in faith.",
    email: "maria.rodriguez@gracecommunity.org",
    phone: "(555) 123-4570",
    yearsServing: 10,
    specialties: ["Children's Ministry", "Education", "Family Programs"],
  },
  {
    name: "Robert Thompson",
    role: "Worship Director",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Robert leads our worship team and oversees all musical aspects of our services. He has been in worship ministry for over 20 years.",
    email: "robert.thompson@gracecommunity.org",
    phone: "(555) 123-4571",
    yearsServing: 12,
    specialties: ["Music", "Worship Leading", "Team Development"],
  },
  {
    name: "Jennifer Adams",
    role: "Outreach Coordinator",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Jennifer coordinates all our community outreach programs and missions. She has a heart for serving those in need and spreading God's love.",
    email: "jennifer.adams@gracecommunity.org",
    phone: "(555) 123-4572",
    yearsServing: 7,
    specialties: ["Community Outreach", "Missions", "Social Justice"],
  },
]

export default function LeadershipPage() {
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
          <div className="absolute top-10 left-10 animate-float">
            <Users className="h-8 w-8 text-yellow-300/20" />
          </div>
          <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: "2s" }}>
            <div className="w-6 h-6 bg-yellow-400/20 rounded-full" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: "4s" }}>
            <div className="w-4 h-4 bg-yellow-300/30 rounded-full" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Leadership
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide our church family with wisdom, compassion, and unwavering faith.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover-lift border-0 shadow-lg overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        width={300}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{leader.yearsServing} years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-2xl font-bold text-slate-800 mb-1">{leader.name}</h3>
                      <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                      <p className="text-slate-600 mb-6 leading-relaxed">{leader.bio}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-slate-600">
                          <Mail className="h-4 w-4 mr-2 text-blue-600" />
                          <span className="text-sm">{leader.email}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Phone className="h-4 w-4 mr-2 text-blue-600" />
                          <span className="text-sm">{leader.phone}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                      >
                        Contact {leader.name.split(" ")[0]}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl font-bold text-slate-800 mb-8">Our Leadership Philosophy</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our leadership team is committed to servant leadership, following the example of Jesus Christ. We believe
              in leading with humility, integrity, and a heart for God's people.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">Servant Leadership</h3>
                <p className="text-slate-600">Leading by example and serving others with humility and love.</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">Faithful Stewardship</h3>
                <p className="text-slate-600">Responsibly managing the resources and people God has entrusted to us.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">Open Communication</h3>
                <p className="text-slate-600">Maintaining transparency and accessibility in all our interactions.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
