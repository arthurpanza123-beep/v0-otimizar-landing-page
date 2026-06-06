import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { Positioning } from "@/components/positioning"
import { Curriculum } from "@/components/curriculum"
import { ForWho } from "@/components/for-who"
import { Team } from "@/components/team"
import { Problem } from "@/components/problem"
import { Method } from "@/components/method"
import { Journey } from "@/components/journey"
import { BeforeAfter } from "@/components/before-after"
import { Testimonials } from "@/components/testimonials"
import { BlackBox } from "@/components/black-box"
import { Included } from "@/components/included"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { PlatformMarquee } from "@/components/platform-marquee"
import { StickyCTA } from "@/components/sticky-cta"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Positioning />
        <Curriculum />
        <ForWho />
        <Team />
        <Testimonials />
        <PlatformMarquee />
        <Problem />
        <Method />
        <Journey />
        <BeforeAfter />
        <BlackBox />
        <Included />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
