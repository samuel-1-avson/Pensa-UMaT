import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Church, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">About Grace Community Church</h1>
          <p className="text-xl text-amber-100">Discover our story, mission, and the heart behind our community</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4">
                Grace Community Church was founded in 1985 with a simple vision: to create a place where people could
                encounter God's love and grow in their faith together. What started as a small gathering of 20 families
                has grown into a vibrant community of over 800 members.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Throughout our journey, we've remained committed to our core values of worship, fellowship,
                discipleship, and service. We believe that every person has a unique purpose and calling, and we're here
                to help you discover and fulfill yours.
              </p>
              <p className="text-lg text-slate-600">
                Today, we continue to be a beacon of hope in our community, reaching out with God's love through various
                ministries, outreach programs, and community initiatives.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Church history"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Church className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
                <p className="text-slate-600">
                  To make disciples of Jesus Christ who love God, love others, and serve the world with passion and
                  purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
                <p className="text-slate-600">
                  To be a thriving, multi-generational church that transforms lives and communities through the power of
                  God's love.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-slate-800 mb-4">Our Values</h3>
                <p className="text-slate-600">
                  Love, Grace, Truth, Community, Service, and Excellence in all we do as we follow Christ together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-slate-800 text-center mb-12">What We Believe</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">The Bible</h3>
              <p className="text-slate-600">
                We believe the Bible is God's inspired Word, our ultimate authority for faith and life.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">God</h3>
              <p className="text-slate-600">
                We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">Jesus Christ</h3>
              <p className="text-slate-600">
                We believe Jesus Christ is fully God and fully man, who died for our sins and rose again, offering
                salvation to all who believe.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">Salvation</h3>
              <p className="text-slate-600">
                We believe salvation is a gift from God, received by faith in Jesus Christ, not by works.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">The Church</h3>
              <p className="text-slate-600">
                We believe the church is the body of Christ, called to worship, fellowship, discipleship, and service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
