import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Therapy Tampa Florida | Virtual Teen Counseling Tampa - Sygnity Wellness',
  description: 'Professional teen therapy in Tampa, Florida. Virtual teen counseling services for Tampa adolescents with anxiety, depression, and trauma. Online teen therapy Tampa.',
  keywords: 'Tampa teen therapy, teen anxiety treatment Tampa, virtual teen therapy Tampa, Tampa teen counseling, teen depression therapy Tampa, online therapy Tampa teenagers',
  alternates: {
    canonical: 'https://sygnityhealth.com/locations/tampa'
  },
  openGraph: {
    title: 'Teen Therapy Tampa Florida | Virtual Teen Counseling Tampa',
    description: 'Professional teen therapy in Tampa, Florida. Virtual teen counseling services for Tampa adolescents.',
    url: 'https://sygnityhealth.com/locations/tampa',
  }
}

export default function TampaTeenTherapyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-[#f5f1ec] to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#6cbf84] mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Serving Tampa, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Teen Therapy Tampa - Virtual Counseling for Tampa Adolescents
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional teen therapy services for Tampa families. Our licensed therapists provide 
                virtual teen counseling for Tampa adolescents struggling with anxiety, depression, and trauma. 
                Online teen therapy that's perfect for busy Tampa families navigating I-275, downtown traffic, and the vibrant Bay Area lifestyle.
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
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Tampa Teen Mental Health Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen Anxiety Treatment Tampa</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen Depression Therapy Tampa</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Virtual Teen Trauma Counseling</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Online Teen PTSD Treatment</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Tampa Bay Family Therapy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Tampa Families Choose Us */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Why Tampa Families Choose Virtual Teen Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tampa teens and families benefit from the convenience and effectiveness of virtual therapy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Skip Downtown Traffic</h3>
              <p className="text-gray-600">No navigating I-275 or downtown Tampa congestion for appointments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Bay Area Lifestyle</h3>
              <p className="text-gray-600">Therapy fits seamlessly with Tampa Bay's active lifestyle</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Home Comfort</h3>
              <p className="text-gray-600">Teens feel more relaxed in their familiar environment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Weather Flexible</h3>
              <p className="text-gray-600">Therapy continues regardless of storms or perfect beach days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tampa-Specific Content */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                Supporting Tampa Teens & Families
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We understand the unique challenges facing teenagers in Tampa - from navigating the pressures of a rapidly growing city 
                to balancing academic achievement with the laid-back Bay Area culture, hurricane season preparations, and the diverse 
                social dynamics of Florida's third-largest city. Our virtual teen therapy services are designed to fit seamlessly 
                into the dynamic Tampa Bay lifestyle.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Tampa teens face unique stressors including rapid city growth and change, diverse cultural influences, seasonal weather 
                extremes, and the balance between urban opportunities and coastal relaxation. Our therapists understand these local 
                dynamics and help teens develop resilience while embracing the vibrant Tampa community spirit.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Rapid City Growth Adjustment</h4>
                    <p className="text-gray-600">Navigate community changes and new social dynamics in expanding Tampa</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Hurricane Season Support</h4>
                    <p className="text-gray-600">Manage weather anxiety and storm preparation stress</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Cultural Diversity Navigation</h4>
                    <p className="text-gray-600">Thrive in Tampa's multicultural community environment</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Urban-Coastal Balance</h4>
                    <p className="text-gray-600">Balance city opportunities with coastal lifestyle expectations</p>
                  </div>
                </li>
              </ul>
              <Link href="/teen-anxiety" className="btn-primary">
                Learn More About Our Anxiety Services
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Serving These Tampa Bay Areas</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li>• Downtown Tampa</li>
                  <li>• Hyde Park</li>
                  <li>• Westshore</li>
                  <li>• South Tampa</li>
                  <li>• Ybor City</li>
                  <li>• Davis Islands</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Brandon</li>
                  <li>• Riverview</li>
                  <li>• Carrollwood</li>
                  <li>• Temple Terrace</li>
                  <li>• Plant City</li>
                  <li>• And surrounding areas</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-[#f5f1ec] rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Virtual therapy means no location limits:</strong> We serve all Tampa Bay area 
                  teens and families from the comfort of your home, from downtown to the suburbs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Tampa Content */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Expert Teen Mental Health Care in Tampa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive virtual therapy services tailored for Tampa Bay adolescents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Teen Anxiety Treatment Tampa</h3>
              <p className="text-gray-600 mb-4">
                Help your Tampa teen manage social anxiety, academic pressure, and general anxiety disorders 
                common in fast-growing urban environments. Our virtual anxiety therapy addresses the unique 
                stressors of living in Tampa Bay while building lasting coping skills.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Urban social anxiety and peer pressure</li>
                <li>• Academic performance stress</li>
                <li>• Weather and hurricane-related anxiety</li>
                <li>• Social media and comparison pressures</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Tampa Teen Depression Support</h3>
              <p className="text-gray-600 mb-4">
                Supporting Tampa teens through depression with evidence-based virtual therapy. 
                Address seasonal mood changes, social isolation, and the unique challenges of growing 
                up in a rapidly changing urban environment while maintaining family connections.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Seasonal depression and mood fluctuations</li>
                <li>• Social isolation in growing communities</li>
                <li>• Identity and belonging challenges</li>
                <li>• Family relationship dynamics</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Virtual Teen Trauma Therapy</h3>
              <p className="text-gray-600 mb-4">
                Specialized trauma therapy for Tampa teens who have experienced hurricanes, accidents, 
                violence, or other traumatic events. Our virtual EMDR and trauma-focused therapy provides 
                safe, effective healing without navigating Tampa Bay traffic.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Hurricane and severe weather trauma</li>
                <li>• Urban violence and community trauma</li>
                <li>• Accident-related PTSD</li>
                <li>• EMDR therapy for trauma processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tampa Success Stories Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Tampa Teen Therapy Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results for Tampa Bay families through virtual teen therapy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">Overcoming Hurricane Anxiety</h4>
              <p className="text-gray-600 mb-4">
                "After Hurricane Ian, my 16-year-old daughter developed severe anxiety about weather patterns. 
                Virtual therapy was perfect - she could stay home where she felt safe while getting the help she needed. 
                The therapist understood Tampa's weather challenges and helped her develop coping strategies."
              </p>
              <p className="text-sm text-gray-500 italic">- Tampa Parent</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">Social Anxiety in Growing Tampa</h4>
              <p className="text-gray-600 mb-4">
                "Moving to Tampa from a small town was overwhelming for my teen. The virtual therapy sessions 
                helped him adjust to the bigger city environment and make friends. No stress about driving 
                downtown in traffic - he could focus entirely on healing."
              </p>
              <p className="text-sm text-gray-500 italic">- Carrollwood Family</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-[#20394c] to-[#2e4f64] rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Help Your Tampa Teen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with virtual teen therapy for your Tampa adolescent today - no downtown traffic required
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15616142857" className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff5252] transition-colors">
                Call for Free Consultation
              </Link>
              <Link href="/teen-anxiety" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#20394c] transition-colors">
                Learn About Anxiety Treatment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}