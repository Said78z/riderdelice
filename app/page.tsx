import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Steps from '@/components/Steps'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Hero />
      <Features />
      <Steps />
      <CTASection />
      <Footer />
    </div>
  )
}
