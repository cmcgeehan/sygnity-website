import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Therapy Orlando Florida | Virtual Teen Counseling Orlando - Avela Therapy',
  description: 'Professional teen therapy in Orlando, Florida. Virtual teen counseling services available throughout Orange County. Licensed therapists specializing in adolescent mental health.',
  keywords: ['teen therapy orlando', 'virtual teen counseling orlando', 'adolescent therapy orlando', 'teen mental health orlando'],

  openGraph: {
    title: 'Teen Therapy Orlando Florida | Virtual Teen Counseling Orlando - Avela Therapy',
    description: 'Professional teen therapy in Orlando, Florida. Virtual teen counseling services available throughout Orange County.',
    url: 'https://avelatherapy.com/locations/orlando',
  }
}

export default function OrlandoTeenTherapyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#6cbf84] mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Serving Orlando, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Teen Therapy Orlando - Virtual Counseling for Orlando Adolescents
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional teen therapy services for Orlando families. Our licensed therapists provide 
                virtual teen counseling for Orlando adolescents struggling with anxiety, depression, and trauma. 
                Online teen therapy that's perfect for busy Orlando families avoiding I-4 traffic and theme park crowds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Call for Free Consultation
                </Link>
                <Link href="/teen-trauma" className="btn-secondary">
                  Learn About Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Orlando Teen Mental Health Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen Trauma Therapy Orlando</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen Anxiety Counseling Orlando</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Virtual Teen Depression Therapy</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Online Teen PTSD Treatment</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Orlando Family Therapy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Orlando Families Choose Us */}
      <div className="section-padding bg-cream">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Why Orlando Families Choose Virtual Teen Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Orlando teens and families love the convenience and effectiveness of virtual therapy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Skip I-4 Traffic</h3>
              <p className="text-gray-600">No battling I-4 congestion or theme park traffic for appointments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Tourist Season Ready</h3>
              <p className="text-gray-600">Therapy continues regardless of peak tourism crowds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Home Comfort</h3>
              <p className="text-gray-600">Teens feel more secure in their familiar environment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Work around theme park visits and family activities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Orlando-Specific Content */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                Supporting Orlando Teens & Families
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We understand the unique challenges facing teenagers in Orlando - from living in a tourism-centered economy 
                to navigating the pressures of theme park culture, hurricane season preparations, and the balance between 
                entertainment industry influences and academic achievement. Our virtual teen therapy services are designed 
                to fit seamlessly into the vibrant, fast-paced lifestyle of Orlando families.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Orlando teens face distinctive stressors including exposure to transient tourist populations, seasonal 
                employment fluctuations in families, theme park culture pressures, and the unique social dynamics of living 
                in "The City Beautiful." Our therapists understand these local factors and help teens develop resilience 
                while embracing the positive aspects of Orlando's dynamic community.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Tourism Industry Impact</h4>
                    <p className="text-gray-600">Navigate family employment fluctuations and seasonal community changes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Hurricane Preparedness Anxiety</h4>
                    <p className="text-gray-600">Support during storm season and weather-related stress management</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Entertainment Industry Pressures</h4>
                    <p className="text-gray-600">Balance exposure to performance culture with authentic self-development</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Academic Focus Challenges</h4>
                    <p className="text-gray-600">Maintain educational priorities in an entertainment-focused environment</p>
                  </div>
                </li>
              </ul>
              <Link href="/teen-trauma" className="btn-primary">
                Learn More About Our Trauma Services
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Serving These Orlando Areas</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li>• Downtown Orlando</li>
                  <li>• Winter Park</li>
                  <li>• College Park</li>
                  <li>• Thornton Park</li>
                  <li>• Lake Nona</li>
                  <li>• Dr. Phillips</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Windermere</li>
                  <li>• Altamonte Springs</li>
                  <li>• Maitland</li>
                  <li>• Kissimmee</li>
                  <li>• Celebration</li>
                  <li>• And surrounding areas</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-[#f5f1ec] rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Virtual therapy means no location limits:</strong> We serve all Central Florida 
                  teens and families from the comfort of your home, whether you're near the theme parks or in the suburbs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Orlando Content */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Comprehensive Teen Mental Health Services in Orlando
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized virtual therapy services designed for Orlando's unique environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Teen Trauma Therapy Orlando</h3>
              <p className="text-gray-600 mb-4">
                Specialized trauma therapy for Orlando teens who have experienced hurricanes, accidents, 
                violence, or other traumatic events. Our virtual EMDR and trauma-focused therapy provides 
                safe, effective healing without the need to travel through busy Orlando traffic.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Hurricane and severe weather trauma</li>
                <li>• Accident-related PTSD</li>
                <li>• Violence exposure and community trauma</li>
                <li>• EMDR therapy for trauma processing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Orlando Teen Anxiety Treatment</h3>
              <p className="text-gray-600 mb-4">
                Help your Orlando teen manage social anxiety, performance pressure, and general anxiety 
                disorders. Our virtual anxiety therapy addresses the unique stressors of living in a 
                tourism-heavy environment while building lasting coping skills.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Social anxiety in diverse environments</li>
                <li>• Performance and academic pressure</li>
                <li>• Tourist-related social stress</li>
                <li>• Weather and hurricane anxiety</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Virtual Teen Depression Support</h3>
              <p className="text-gray-600 mb-4">
                Supporting Orlando teens through depression with evidence-based virtual therapy. 
                Address seasonal mood changes, social isolation, and the unique challenges of growing 
                up in a transient, entertainment-focused community.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Seasonal depression and mood changes</li>
                <li>• Social isolation in transient communities</li>
                <li>• Identity development challenges</li>
                <li>• Family relationship dynamics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-charcoal to-charcoal/90 rounded-3xl p-8 md:p-16 text-center text-cream">
            <h2 className="text-3xl md:text-4xl font-light mb-4 font-display tracking-wider small-caps">
              ready to help your orlando teen?
            </h2>
            <p className="text-xl mb-8 text-cream/80 tracking-wide">
              get started with virtual teen therapy for your orlando adolescent today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15616142857" className="btn-primary text-lg py-4 px-8">
                <Phone className="w-5 h-5" />
                call for free consultation
              </Link>
              <Link href="/teen-trauma" className="btn-secondary text-lg py-4 px-8">
                <ArrowRight className="w-5 h-5" />
                learn about trauma therapy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}