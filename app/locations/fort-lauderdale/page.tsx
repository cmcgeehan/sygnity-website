import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Therapy Fort Lauderdale Florida | Virtual Teen Counseling Fort Lauderdale - Sygnity Wellness',
  description: 'Professional teen therapy in Fort Lauderdale, Florida. Virtual teen counseling services for Fort Lauderdale adolescents with anxiety, depression, and trauma. Online teen therapy Fort Lauderdale.',
  keywords: 'Fort Lauderdale teen therapy, teen depression counseling Fort Lauderdale, virtual teen therapy Fort Lauderdale, Fort Lauderdale teen counseling, teen anxiety therapy Fort Lauderdale, online therapy Fort Lauderdale teenagers',
  alternates: {
    canonical: 'https://sygnityhealth.com/locations/fort-lauderdale'
  },
  openGraph: {
    title: 'Teen Therapy Fort Lauderdale Florida | Virtual Teen Counseling Fort Lauderdale',
    description: 'Professional teen therapy in Fort Lauderdale, Florida. Virtual teen counseling services for Fort Lauderdale adolescents.',
    url: 'https://sygnityhealth.com/locations/fort-lauderdale',
  }
}

export default function FortLauderdaleTeenTherapyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-[#f5f1ec] to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#6cbf84] mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Serving Fort Lauderdale, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Teen Therapy Fort Lauderdale - Virtual Counseling for Fort Lauderdale Adolescents
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional teen therapy services for Fort Lauderdale families. Our licensed therapists provide 
                virtual teen counseling for Fort Lauderdale adolescents struggling with anxiety, depression, and trauma. 
                Online teen therapy that's perfect for busy Fort Lauderdale families navigating I-95, Las Olas traffic, and the vibrant coastal lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Call for Free Consultation
                </Link>
                <Link href="/teen-depression" className="btn-secondary">
                  Learn About Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Fort Lauderdale Teen Mental Health Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen Depression Counseling Fort Lauderdale</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen Anxiety Therapy Fort Lauderdale</span>
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
                  <span>Fort Lauderdale Family Therapy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Fort Lauderdale Families Choose Us */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Why Fort Lauderdale Families Choose Virtual Teen Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fort Lauderdale teens and families appreciate the convenience and effectiveness of virtual therapy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Skip I-95 Traffic</h3>
              <p className="text-gray-600">No navigating I-95 or Las Olas congestion for therapy appointments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Boating Season Ready</h3>
              <p className="text-gray-600">Therapy fits around water activities and beach lifestyle</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Home Privacy</h3>
              <p className="text-gray-600">Teens feel more comfortable in their secure environment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Spring Break Flexible</h3>
              <p className="text-gray-600">Consistent care during tourist season and school breaks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fort Lauderdale-Specific Content */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                Supporting Fort Lauderdale Teens & Families
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We understand the unique challenges facing teenagers in Fort Lauderdale - from navigating the pressures 
                of affluent coastal communities to balancing academic achievement with the beach lifestyle, managing Spring Break 
                disruptions, and the social dynamics of living in "The Venice of America." Our virtual teen therapy services 
                are designed to fit seamlessly into the sophisticated Fort Lauderdale lifestyle.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Fort Lauderdale teens face distinctive stressors including exposure to affluent peer pressure, seasonal tourism 
                impacts, boating and water safety concerns, hurricane preparedness anxiety, and the unique social expectations 
                of waterfront living. Our therapists understand these local factors and help teens develop resilience while 
                embracing the positive aspects of Fort Lauderdale's coastal community.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Affluent Community Pressures</h4>
                    <p className="text-gray-600">Navigate social expectations and materialism in upscale coastal environments</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Spring Break Disruptions</h4>
                    <p className="text-gray-600">Manage stress from seasonal tourism and community disruptions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Hurricane Season Anxiety</h4>
                    <p className="text-gray-600">Support during storm preparation and weather-related stress</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Water Lifestyle Balance</h4>
                    <p className="text-gray-600">Balance aquatic activities with academic and social responsibilities</p>
                  </div>
                </li>
              </ul>
              <Link href="/teen-depression" className="btn-primary">
                Learn More About Our Depression Services
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Serving These Fort Lauderdale Areas</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li>• Downtown Fort Lauderdale</li>
                  <li>• Las Olas</li>
                  <li>• Victoria Park</li>
                  <li>• Rio Vista</li>
                  <li>• Harbordale</li>
                  <li>• Sailboat Bend</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Coral Ridge</li>
                  <li>• Plantation</li>
                  <li>• Davie</li>
                  <li>• Oakland Park</li>
                  <li>• Wilton Manors</li>
                  <li>• And surrounding areas</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-[#f5f1ec] rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Virtual therapy means no location limits:</strong> We serve all Broward County 
                  teens and families from the comfort of your home, whether you're on Las Olas or in the suburbs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Fort Lauderdale Content */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Specialized Teen Mental Health Care in Fort Lauderdale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive virtual therapy services designed for Fort Lauderdale's unique coastal environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Teen Depression Counseling Fort Lauderdale</h3>
              <p className="text-gray-600 mb-4">
                Supporting Fort Lauderdale teens through depression with evidence-based virtual therapy. 
                Address seasonal mood changes, social pressures in affluent communities, and the unique 
                challenges of growing up in a coastal tourism destination while maintaining family connections.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Seasonal depression and mood fluctuations</li>
                <li>• Social isolation despite community wealth</li>
                <li>• Identity pressures in affluent environments</li>
                <li>• Family relationship dynamics</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Fort Lauderdale Teen Anxiety Treatment</h3>
              <p className="text-gray-600 mb-4">
                Help your Fort Lauderdale teen manage social anxiety, performance pressure, and general anxiety 
                disorders common in high-expectations coastal communities. Our virtual anxiety therapy addresses 
                the unique stressors of living in Fort Lauderdale while building lasting coping skills.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Social anxiety in affluent peer groups</li>
                <li>• Academic and social performance pressure</li>
                <li>• Weather and hurricane-related anxiety</li>
                <li>• Water safety and boating concerns</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Virtual Teen Trauma Therapy</h3>
              <p className="text-gray-600 mb-4">
                Specialized trauma therapy for Fort Lauderdale teens who have experienced hurricanes, boating accidents, 
                violence, or other traumatic events. Our virtual EMDR and trauma-focused therapy provides safe, 
                effective healing without navigating busy Las Olas or I-95 traffic.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Hurricane and severe weather trauma</li>
                <li>• Water-related accidents and incidents</li>
                <li>• Violence exposure and community trauma</li>
                <li>• EMDR therapy for trauma processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fort Lauderdale Success Stories Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Fort Lauderdale Teen Therapy Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results for Fort Lauderdale families through virtual teen therapy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">Overcoming Social Pressure</h4>
              <p className="text-gray-600 mb-4">
                "Living in Fort Lauderdale, my daughter felt constant pressure to keep up with her affluent peers. 
                Virtual therapy was perfect - she could get help without anyone knowing. Her therapist understood 
                the unique social dynamics here and helped her build genuine self-confidence."
              </p>
              <p className="text-sm text-gray-500 italic">- Las Olas Parent</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">Hurricane Trauma Recovery</h4>
              <p className="text-gray-600 mb-4">
                "After experiencing hurricane damage to our waterfront home, my teen developed severe anxiety 
                about storms. The virtual therapy sessions allowed him to stay in his safe space while processing 
                the trauma. No stress about driving through post-storm traffic - just healing."
              </p>
              <p className="text-sm text-gray-500 italic">- Victoria Park Family</p>
            </div>
          </div>
        </div>
      </div>

      {/* Local Resources Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Supporting Fort Lauderdale Teen Mental Health
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Virtual therapy that understands the Fort Lauderdale lifestyle
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#20394c] mb-6 text-center">Why Virtual Therapy Works for Fort Lauderdale Teens</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-[#20394c] mb-2">No Traffic Stress</h4>
                <p className="text-sm text-gray-600">Skip the I-95 and Las Olas Boulevard congestion that can trigger anxiety</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#20394c] mb-2">Privacy Protection</h4>
                <p className="text-sm text-gray-600">Maintain confidentiality in close-knit Fort Lauderdale communities</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#20394c] mb-2">Flexible Scheduling</h4>
                <p className="text-sm text-gray-600">Work around boating, beach time, and seasonal activities</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#20394c] mb-2">Storm Continuity</h4>
                <p className="text-sm text-gray-600">Maintain therapy even during hurricane season evacuations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-[#20394c] to-[#2e4f64] rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Help Your Fort Lauderdale Teen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with virtual teen therapy for your Fort Lauderdale adolescent today - no I-95 traffic required
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15616142857" className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff5252] transition-colors">
                Call for Free Consultation
              </Link>
              <Link href="/teen-depression" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#20394c] transition-colors">
                Learn About Depression Counseling
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}