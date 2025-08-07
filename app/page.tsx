import { Hero } from '@/components/hero'
import { ServicesOverview } from '@/components/services-overview'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Testimonials } from '@/components/testimonials'
import { InsuranceAccepted } from '@/components/insurance-accepted'
import { CallToAction } from '@/components/call-to-action'
import { Metadata } from 'next'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <InsuranceAccepted />
      <CallToAction />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Teen Therapy Florida | Virtual Teen Anxiety & Depression Treatment - Avela Therapy',
}
