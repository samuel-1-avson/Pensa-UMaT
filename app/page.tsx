import { Hero } from "@/components/hero"
import { WelcomeSection } from "@/components/welcome-section"
import { FeaturedMinistries } from "@/components/featured-ministries"
import { UpcomingEvents } from "@/components/upcoming-events"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WelcomeSection />
      <FeaturedMinistries />
      <UpcomingEvents />
      <CallToAction />
    </div>
  )
}
