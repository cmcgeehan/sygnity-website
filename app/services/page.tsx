import type { Metadata } from 'next'
import Link from 'next/link'
import { ServiceCard } from '@/components/service-card'
import { Brain, Users, Pill, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Therapy Services Florida | Virtual Anxiety & Depression Treatment - Avela Therapy',
  description: 'Professional teen therapy services in Florida. Virtual anxiety, depression, and trauma treatment for teenagers. Licensed therapists specializing in adolescent mental health.',
  keywords: ['teen therapy services', 'virtual teen counseling', 'teen anxiety treatment', 'teen depression therapy', 'adolescent mental health'],

  openGraph: {
    title: 'Teen Therapy Services Florida | Virtual Anxiety & Depression Treatment - Avela Therapy',
    description: 'Professional teen therapy services in Florida. Virtual anxiety, depression, and trauma treatment for teenagers.',
    url: 'https://avelatherapy.com/services',
  }
}

const services = [
  {
    icon: Brain,
    title: 'Adolescent Therapy',
    description: 'Specialized therapy for teenagers dealing with anxiety, depression, behavioral issues, and life transitions. Our adolescent-focused approach creates a safe space for teens to express themselves and develop healthy coping strategies.',
    href: '/services/adolescent-therapy'
  },
  {
    icon: Heart,
    title: 'Substance Use Treatment',
    description: 'Evidence-based treatment for substance use disorders using proven methodologies. We provide comprehensive support for individuals and families affected by addiction, focusing on recovery and long-term wellness.',
    href: '/services/substance-abuse'
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description: 'Professional psychiatric medication evaluation and ongoing management. Our licensed providers work closely with clients to optimize medication effectiveness while minimizing side effects for improved mental health outcomes.',
    href: '/services/medication-management'
  },
  {
    icon: Users,
    title: 'Family Therapy',
    description: 'Strengthen family relationships and improve communication patterns. We help families navigate challenges together, rebuild trust, and develop healthier dynamics that support everyone\'s mental health and wellbeing.',
    href: '/services/family-therapy'
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6 font-display tracking-wider small-caps">
              Our Services
            </h1>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              Comprehensive mental health services tailored to meet the unique needs of adolescents, adults, and families in Florida. 
              We also offer specialized <Link href="/teen-anxiety" className="text-dusty-blue hover:text-blush-pink font-medium underline transition-colors tracking-wider all-lowercase">teen anxiety</Link>, 
              <Link href="/teen-depression" className="text-dusty-blue hover:text-blush-pink font-medium underline transition-colors tracking-wider all-lowercase">depression</Link>, and 
              <Link href="/teen-trauma" className="text-dusty-blue hover:text-blush-pink font-medium underline transition-colors tracking-wider all-lowercase">trauma therapy</Link> services.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding bg-cream">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Additional Services Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
                Specialized Teen Mental Health Services
              </h2>
              <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
                In addition to our core services, we offer specialized therapy for common teen mental health conditions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-xl">
                <h3 className="text-xl font-medium text-charcoal mb-4 font-display tracking-wider small-caps">
                  <Link href="/teen-anxiety" className="hover:text-dusty-blue transition-colors">
                    Teen Anxiety Therapy
                  </Link>
                </h3>
                <p className="text-soft-gray mb-4 tracking-wide">
                  Specialized virtual therapy for teens struggling with anxiety disorders, social anxiety, panic attacks, and general anxiety.
                </p>
                <Link href="/teen-anxiety" className="text-blush-pink font-medium hover:text-dusty-blue transition-colors tracking-wider all-lowercase">
                  Learn More →
                </Link>
              </div>

              <div className="card p-6 rounded-xl">
                <h3 className="text-xl font-medium text-charcoal mb-4 font-display tracking-wider small-caps">
                  <Link href="/teen-depression" className="hover:text-dusty-blue transition-colors">
                    Teen Depression Therapy
                  </Link>
                </h3>
                <p className="text-soft-gray mb-4 tracking-wide">
                  Evidence-based depression counseling for teenagers experiencing persistent sadness, hopelessness, and mood challenges.
                </p>
                <Link href="/teen-depression" className="text-blush-pink font-medium hover:text-dusty-blue transition-colors tracking-wider all-lowercase">
                  Learn More →
                </Link>
              </div>

              <div className="card p-6 rounded-xl">
                <h3 className="text-xl font-medium text-charcoal mb-4 font-display tracking-wider small-caps">
                  <Link href="/teen-trauma" className="hover:text-dusty-blue transition-colors">
                    Teen Trauma Therapy
                  </Link>
                </h3>
                <p className="text-soft-gray mb-4 tracking-wide">
                  Specialized EMDR and trauma-focused therapy to help teens heal from traumatic experiences and PTSD.
                </p>
                <Link href="/teen-trauma" className="text-blush-pink font-medium hover:text-dusty-blue transition-colors tracking-wider all-lowercase">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Location Services */}
          <div className="mt-16 bg-[#F3E7DA] rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
                Serving Florida Families
              </h2>
              <p className="text-soft-gray max-w-2xl mx-auto tracking-wide">
                Our virtual therapy services are available throughout Florida, with specialized local understanding for major metropolitan areas.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/locations/miami" className="bg-white/50 backdrop-blur-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all text-charcoal font-medium hover:text-dusty-blue tracking-wider all-lowercase">
                Miami Teen Therapy
              </Link>
              <Link href="/locations/west-palm-beach" className="bg-white/50 backdrop-blur-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all text-charcoal font-medium hover:text-dusty-blue tracking-wider all-lowercase">
                West Palm Beach Therapy
              </Link>
              <Link href="/" className="bg-dusty-blue text-white px-6 py-3 rounded-lg hover:bg-dusty-blue/90 transition-colors font-medium tracking-wider all-lowercase">
                View All Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
