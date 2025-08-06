import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Therapy West Palm Beach Florida | Virtual Teen Counseling West Palm Beach - Sygnity Wellness',
  description: 'Professional teen therapy in West Palm Beach, Florida. Virtual teen counseling services for West Palm Beach adolescents with anxiety, depression, and trauma. Online teen therapy West Palm Beach.',
  keywords: 'West Palm Beach teen therapy, teen anxiety therapy West Palm Beach, virtual teen counseling West Palm Beach, West Palm Beach teen counseling, teen depression therapy West Palm Beach, online therapy West Palm Beach teenagers',
  alternates: {
    canonical: 'https://sygnityhealth.com/locations/west-palm-beach'
  },
  openGraph: {
    title: 'Teen Therapy West Palm Beach Florida | Virtual Teen Counseling West Palm Beach',
    description: 'Professional teen therapy in West Palm Beach, Florida. Virtual teen counseling services for West Palm Beach adolescents.',
    url: 'https://sygnityhealth.com/locations/west-palm-beach',
  }
}

export default function WestPalmBeachTeenTherapyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-[#f5f1ec] to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#6cbf84] mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Serving West Palm Beach, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Teen Therapy West Palm Beach - Virtual Counseling for West Palm Beach Adolescents
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional teen therapy services for West Palm Beach families. Our licensed therapists provide 
                virtual teen counseling for West Palm Beach adolescents struggling with anxiety, depression, and trauma. 
                Online teen therapy that's convenient for busy West Palm Beach families navigating I-95 traffic and tight schedules.
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
              <div className="mb-6">
                <p className="text-gray-600">
                  All our services are available virtually to West Palm Beach families. Learn more about our specialized 
                  <Link href="/teen-anxiety" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline"> anxiety therapy</Link>, 
                  <Link href="/teen-depression" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline"> depression counseling</Link>, and 
                  <Link href="/teen-trauma" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline"> trauma therapy</Link> services.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">West Palm Beach Teen Mental Health Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen Anxiety Therapy West Palm Beach</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen Depression Counseling West Palm Beach</span>
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
                  <span>West Palm Beach Family Therapy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why West Palm Beach Families Choose Us */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Why West Palm Beach Families Choose Virtual Teen Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              West Palm Beach teens and families appreciate the convenience and effectiveness of virtual therapy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Skip I-95 Traffic</h3>
              <p className="text-gray-600">No need to battle I-95 congestion for therapy appointments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Beach Life Balance</h3>
              <p className="text-gray-600">Keep beach activities and therapy sessions balanced</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Home Comfort</h3>
              <p className="text-gray-600">Teens feel more relaxed in familiar environments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Weather Independent</h3>
              <p className="text-gray-600">Hurricane season or perfect beach day - therapy continues</p>
            </div>
          </div>
        </div>
      </div>

      {/* West Palm Beach-Specific Content */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                Supporting West Palm Beach Teens & Families
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We understand the unique challenges facing teenagers in West Palm Beach - from the pressure of affluent communities 
                to seasonal changes with tourism, hurricane season stress, and the balance between beach lifestyle and academic achievement. 
                Our virtual teen therapy services are designed to fit seamlessly into the dynamic lifestyle of West Palm Beach families.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                West Palm Beach teens face unique stressors including social pressures from affluent peer groups, seasonal population 
                changes, weather-related anxiety during hurricane season, and the challenge of maintaining academic focus in a beach town environment. 
                Our therapists understand these local dynamics and help teens develop healthy coping strategies while maintaining their connection to the 
                vibrant West Palm Beach community.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Affluent Community Pressures</h4>
                    <p className="text-gray-600">Navigate social expectations and materialism in upscale environments</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Hurricane Season Anxiety</h4>
                    <p className="text-gray-600">Support during storm season and weather-related stress</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Beach Lifestyle Balance</h4>
                    <p className="text-gray-600">Maintain academic focus while enjoying coastal living benefits</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Seasonal Community Changes</h4>
                    <p className="text-gray-600">Adapt to tourism fluctuations and seasonal population shifts</p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/" className="btn-primary">
                  View All Services
                </Link>
                <Link href="/teen-anxiety" className="btn-secondary">
                  Teen Anxiety Therapy
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Serving These West Palm Beach Areas</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li>• Downtown West Palm Beach</li>
                  <li>• Flagler Drive</li>
                  <li>• South Flagler Drive</li>
                  <li>• Clematis Street</li>
                  <li>• CityPlace</li>
                  <li>• Rosemary Square</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Northwood</li>
                  <li>• Lake Worth Beach</li>
                  <li>• Palm Beach Gardens</li>
                  <li>• Jupiter</li>
                  <li>• Wellington</li>
                  <li>• And surrounding areas</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-[#f5f1ec] rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Virtual therapy means no location limits:</strong> We serve all Palm Beach County 
                  teens and families from the comfort of your home, whether you're in a beach condo or suburban neighborhood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional West Palm Beach Content */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Teen Mental Health Services in West Palm Beach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive virtual therapy services tailored for West Palm Beach adolescents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">
                <Link href="/teen-anxiety" className="hover:text-[#6cbf84] transition-colors">
                  Teen Anxiety Therapy West Palm Beach
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Help your teen manage social anxiety, performance pressure, and general anxiety disorders 
                common in competitive West Palm Beach communities. Our 
                <Link href="/teen-anxiety" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline"> virtual anxiety therapy</Link> helps teens 
                develop coping skills without missing school or activities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Social anxiety in affluent peer groups</li>
                <li>• Academic performance pressure</li>
                <li>• Weather-related anxiety (hurricanes)</li>
                <li>• Social media and comparison stress</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">
                <Link href="/teen-depression" className="hover:text-[#6cbf84] transition-colors">
                  Teen Depression Counseling
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Supporting West Palm Beach teens through depression with evidence-based 
                <Link href="/teen-depression" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline"> virtual therapy</Link>. 
                Address seasonal mood changes, social isolation, and the unique pressures of coastal living 
                while maintaining connection to family and community.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Seasonal depression patterns</li>
                <li>• Social isolation and loneliness</li>
                <li>• Identity and self-worth issues</li>
                <li>• Family relationship challenges</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">
                <Link href="/teen-trauma" className="hover:text-[#6cbf84] transition-colors">
                  Virtual Teen Trauma Therapy
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized <Link href="/teen-trauma" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline"> trauma therapy</Link> for West Palm Beach teens who have experienced hurricanes, 
                accidents, loss, or other traumatic events. Our virtual EMDR and trauma-focused therapy 
                provides safe, effective healing from home.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Hurricane and storm trauma</li>
                <li>• Accident-related PTSD</li>
                <li>• Grief and loss counseling</li>
                <li>• EMDR therapy for trauma processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-[#20394c] to-[#2e4f64] rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Help Your West Palm Beach Teen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with virtual teen therapy for your West Palm Beach adolescent today - no I-95 traffic required
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15616142857" className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff5252] transition-colors">
                Call for Free Consultation
              </Link>
              <Link href="/" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#20394c] transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}