import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Main Sanctuary",
    description: "Join us for inspiring worship, fellowship, and biblical teaching.",
    recurring: true,
  },
  {
    title: "Youth Group Meeting",
    date: "January 15, 2025",
    time: "6:00 PM",
    location: "Youth Center",
    description: "Fun activities, games, and spiritual growth for teens.",
    recurring: false,
  },
  {
    title: "Community Outreach",
    date: "January 20, 2025",
    time: "9:00 AM",
    location: "Downtown Park",
    description: "Serving meals and sharing love with our community.",
    recurring: false,
  },
]

export function UpcomingEvents() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-800 mb-4">Upcoming Events</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay connected with what's happening in our church community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-slate-600">
                    <Calendar className="h-4 w-4 mr-2 text-amber-600" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Clock className="h-4 w-4 mr-2 text-amber-600" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{event.description}</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
            <a href="/events">View All Events</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
