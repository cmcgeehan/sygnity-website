import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Therapy Miami Florida | Virtual Teen Counseling Miami - Avela Therapy',
  description: 'Professional teen therapy in Miami, Florida. Virtual teen counseling services available throughout Miami-Dade County. Licensed therapists specializing in adolescent mental health.',
  keywords: ['teen therapy miami', 'virtual teen counseling miami', 'adolescent therapy miami', 'teen mental health miami'],
  canonical: 'https://avelatherapy.com/locations/miami',
  openGraph: {
    title: 'Teen Therapy Miami Florida | Virtual Teen Counseling Miami - Avela Therapy',
    description: 'Professional teen therapy in Miami, Florida. Virtual teen counseling services available throughout Miami-Dade County.',
    url: 'https://avelatherapy.com/locations/miami',
  }
}

export default function MiamiTeenTherapyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#6cbf84] mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Serving Miami, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Teen Therapy Miami - Virtual Counseling for Miami Adolescents
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional teen therapy services for Miami families. Our licensed therapists provide 
                virtual teen counseling for Miami adolescents struggling with anxiety, depression, and trauma. 
                Online teen therapy that's convenient for busy Miami families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Call for Free Consultation
                </Link>
                <Link href="/teen-anxiety" className="btn-secondary">
                  Learn About Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Miami Teen Mental Health Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen Anxiety Therapy Miami</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen Depression Counseling Miami</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Virtual Teen Trauma Therapy</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Online Teen PTSD Treatment</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Miami Family Therapy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Miami Families Choose Us */}
      <div className="section-padding bg-cream">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Why Miami Families Choose Virtual Teen Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miami teens and families love the convenience and effectiveness of virtual therapy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">No Miami Traffic</h3>
              <p className="text-gray-600">Skip I-95 and US-1 traffic for therapy appointments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Sessions that work around school and activities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Home Comfort</h3>
              <p className="text-gray-600">Teens feel more comfortable in familiar spaces</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Parent Convenience</h3>
              <p className="text-gray-600">No need to take time off work for appointments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Miami-Specific Content */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                Supporting Miami Teens & Families
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We understand the unique challenges facing teenagers in Miami - from academic pressure 
                to social media stress, and everything in between. Our virtual teen therapy services 
                are designed to fit the busy lifestyle of Miami families.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Cultural Sensitivity</h4>
                    <p className="text-gray-600">Understanding Miami's diverse cultural landscape</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Academic Pressure Support</h4>
                    <p className="text-gray-600">Help with high-achieving school environment stress</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Teen Social Issues</h4>
                    <p className="text-gray-600">Navigate social media and peer relationship challenges</p>
                  </div>
                </li>
              </ul>
              <Link href="/teen-anxiety" className="btn-primary">
                Learn More About Our Teen Services
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Serving These Miami Areas</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li>• Downtown Miami</li>
                  <li>• Brickell</li>
                  <li>• Coral Gables</li>
                  <li>• Coconut Grove</li>
                  <li>• Key Biscayne</li>
                  <li>• South Beach</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Aventura</li>
                  <li>• Pinecrest</li>
                  <li>• Kendall</li>
                  <li>• Homestead</li>
                  <li>• Doral</li>
                  <li>• And surrounding areas</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-[#f5f1ec] rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Virtual therapy means no location limits:</strong> We serve all Miami-Dade County 
                  teens and families from the comfort of your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-charcoal to-charcoal/90 rounded-3xl p-8 md:p-16 text-center text-cream">
            <h2 className="text-3xl md:text-4xl font-light mb-4 font-display tracking-wider small-caps">
              ready to help your miami teen?
            </h2>
            <p className="text-xl mb-8 text-cream/80 tracking-wide">
              get started with virtual teen therapy for your miami adolescent today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15616142857" className="btn-primary text-lg py-4 px-8">
                <Phone className="w-5 h-5" />
                call for free consultation
              </Link>
              <Link href="/teen-depression" className="btn-secondary text-lg py-4 px-8">
                <ArrowRight className="w-5 h-5" />
                learn about depression therapy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}