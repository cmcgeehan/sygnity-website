import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teen Therapy Locations in Florida | Virtual & In-Person Services - Avela Therapy',
  description: 'Find teen therapy services in Florida. Virtual therapy available statewide with in-person options in Miami, Orlando, Tampa, West Palm Beach, and Fort Lauderdale.',
  keywords: 'teen therapy locations Florida, virtual teen therapy Florida, teen counseling Miami, teen therapy Orlando, teen therapy Tampa, teen therapy West Palm Beach, teen therapy Fort Lauderdale',
}

const locations = [
  { name: 'Miami', href: '/locations/miami' },
  { name: 'Orlando', href: '/locations/orlando' },
  { name: 'Tampa', href: '/locations/tampa' },
  { name: 'West Palm Beach', href: '/locations/west-palm-beach' },
  { name: 'Fort Lauderdale', href: '/locations/fort-lauderdale' },
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
              Teen Therapy Locations in Florida
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Virtual teen therapy services available statewide. Professional, compassionate care for your teenager, 
              accessible from anywhere in Florida.
            </p>
            <div className="flex items-center justify-center gap-4 text-lg text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>Serving all of Florida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-[#20394c] mb-8 text-center">
              Our Florida Locations
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid gap-4">
                {locations.map((location) => (
                  <Link
                    key={location.name}
                    href={location.href}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#20394c] hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold text-[#20394c]">
                        {location.name}
                      </span>
                      <span className="text-gray-400">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Therapy Benefits */}
      <section className="bg-white py-16">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-8">
              Why Choose Virtual Teen Therapy?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#20394c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-[#20394c] mb-2">Comfort of Home</h3>
                <p className="text-gray-600">Teens feel more comfortable in familiar surroundings, leading to better therapy outcomes.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#20394c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold text-[#20394c] mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">No travel time means more convenient appointment times that fit your family's schedule.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#20394c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-[#20394c] mb-2">Statewide Access</h3>
                <p className="text-gray-600">Professional teen therapy available to families throughout Florida, regardless of location.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-light text-cream mb-6 font-display tracking-wider small-caps">
            ready to help your teen?
          </h2>
          <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto tracking-wide">
            start with a free consultation to see how our virtual teen therapy can help your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="tel:+15616142857"
              className="btn-primary text-lg py-4 px-8"
            >
              <Phone className="w-5 h-5" />
              call now
            </Link>
            <Link 
              href="/contact"
              className="btn-secondary text-lg py-4 px-8"
            >
              <ArrowRight className="w-5 h-5" />
              get started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 