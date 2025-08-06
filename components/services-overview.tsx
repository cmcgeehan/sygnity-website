import Link from 'next/link'
import { Brain, Users, Pill, Heart, ArrowRight, MapPin } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Teen Anxiety Therapy',
    description: 'Virtual anxiety treatment for teenagers in Florida. Specialized support for social anxiety, panic attacks, and anxiety disorders.',
    href: '/teen-anxiety'
  },
  {
    icon: Heart,
    title: 'Teen Depression Support',
    description: 'Help your depressed teenager with virtual counseling. Professional depression therapy for adolescents in Florida.',
    href: '/teen-depression'
  },
  {
    icon: Pill,
    title: 'Teen Trauma Therapy',
    description: 'PTSD and trauma therapy for teenagers. Virtual trauma counseling and grief support for adolescents in Florida.',
    href: '/teen-trauma'
  },
  {
    icon: Users,
    title: 'Family Therapy',
    description: 'Strengthen family relationships and improve communication patterns. Support for families with struggling teens.',
    href: '/services/family-therapy'
  },
  {
    icon: MapPin,
    title: 'Florida Locations',
    description: 'Virtual teen therapy available statewide. Serving Miami, Orlando, Tampa, West Palm Beach, and Fort Lauderdale.',
    href: '/locations'
  }
]

export function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
            Virtual Teen Therapy Services in Florida
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional online teen counseling specializing in anxiety, depression, and trauma treatment. 
            Licensed therapists providing virtual mental health support for adolescents across Florida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#aedff7] rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="text-[#ff6b6b] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}