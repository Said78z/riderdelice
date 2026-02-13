import AgencyHero from '@/components/AgencyHero'
import AgencyServices from '@/components/AgencyServices'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-slate-900">
      <AgencyHero />
      <AgencyServices />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  )
}
