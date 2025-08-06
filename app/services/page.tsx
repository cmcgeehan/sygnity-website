import type { Metadata } from 'next'
import Link from 'next/link'
import { ServiceCard } from '@/components/service-card'
import { Brain, Users, Pill, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Therapy Services Florida | Virtual Anxiety & Depression Treatment - Sygnity Wellness',
  description: 'Virtual teen therapy services in Florida specializing in anxiety, depression, trauma, and family therapy. Professional adolescent mental health treatment online.',
  keywords: 'teen therapy services Florida, virtual teen therapy Florida, teen anxiety treatment Florida, teen depression counseling Florida, adolescent therapy Florida',
  alternates: {
    canonical: 'https://sygnityhealth.com/services'
  },
  openGraph: {
    title: 'Teen Therapy Services Florida | Virtual Mental Health Treatment',
    description: 'Virtual teen therapy services in Florida specializing in anxiety, depression, trauma, and family therapy.',
    url: 'https://sygnityhealth.com/services',
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
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental health services tailored to meet the unique needs of adolescents, adults, and families in Florida. 
              We also offer specialized <Link href="/teen-anxiety" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline">teen anxiety</Link>, 
              <Link href="/teen-depression" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline">depression</Link>, and 
              <Link href="/teen-trauma" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline">trauma therapy</Link> services.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Additional Services Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
                Specialized Teen Mental Health Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In addition to our core services, we offer specialized therapy for common teen mental health conditions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#20394c] mb-4">
                  <Link href="/teen-anxiety" className="hover:text-[#6cbf84] transition-colors">
                    Teen Anxiety Therapy
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized virtual therapy for teens struggling with anxiety disorders, social anxiety, panic attacks, and general anxiety.
                </p>
                <Link href="/teen-anxiety" className="text-[#ff6b6b] font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#20394c] mb-4">
                  <Link href="/teen-depression" className="hover:text-[#6cbf84] transition-colors">
                    Teen Depression Therapy
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Evidence-based depression counseling for teenagers experiencing persistent sadness, hopelessness, and mood challenges.
                </p>
                <Link href="/teen-depression" className="text-[#ff6b6b] font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#20394c] mb-4">
                  <Link href="/teen-trauma" className="hover:text-[#6cbf84] transition-colors">
                    Teen Trauma Therapy
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized EMDR and trauma-focused therapy to help teens heal from traumatic experiences and PTSD.
                </p>
                <Link href="/teen-trauma" className="text-[#ff6b6b] font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Location Services */}
          <div className="mt-16 bg-[#f5f1ec] rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#20394c] mb-4">
                Serving Florida Families
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our virtual therapy services are available throughout Florida, with specialized local understanding for major metropolitan areas.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/locations/miami" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-[#20394c] font-semibold hover:text-[#6cbf84]">
                Miami Teen Therapy
              </Link>
              <Link href="/locations/west-palm-beach" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-[#20394c] font-semibold hover:text-[#6cbf84]">
                West Palm Beach Therapy
              </Link>
              <Link href="/" className="bg-[#20394c] text-white px-6 py-3 rounded-lg hover:bg-[#2e4f64] transition-colors font-semibold">
                View All Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
