import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle, BookOpen, Users, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'School Refusal Therapy Florida | Virtual Treatment for School Avoidance - Avela Therapy',
  description: 'Professional school refusal therapy in Florida. Virtual treatment for teenagers with school avoidance, anxiety, and attendance issues. Licensed therapists specializing in school refusal.',
  keywords: ['school refusal therapy Florida', 'virtual school avoidance treatment', 'teen school anxiety therapy', 'school phobia treatment Florida', 'adolescent school refusal'],
  openGraph: {
    title: 'School Refusal Therapy Florida | Virtual Treatment for School Avoidance - Avela Therapy',
    description: 'Professional school refusal therapy in Florida. Virtual treatment for teenagers struggling with school avoidance and attendance.',
    url: 'https://avelatherapy.com/school-refusal',
  }
}

export default function SchoolRefusalPage() {
  return (
    <div className="pt-20">
      {/* Schema Markup */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "School Refusal Therapy Florida",
            "description": "Virtual school refusal therapy and treatment for teenagers in Florida",
            "url": "https://avelatherapy.com/school-refusal",
            "mainEntity": {
              "@type": "MedicalCondition",
              "name": "School Refusal",
              "alternateName": "School Avoidance Behavior",
              "description": "School refusal behaviors in teenagers requiring specialized virtual therapy",
              "possibleTreatment": [
                {
                  "@type": "MedicalTherapy",
                  "name": "Virtual School Refusal Therapy",
                  "description": "Online therapy for teenagers with school avoidance behaviors"
                },
                {
                  "@type": "MedicalTherapy", 
                  "name": "Cognitive Behavioral Therapy",
                  "description": "CBT techniques for addressing school anxiety and avoidance"
                }
              ]
            },
            "provider": {
              "@type": "MedicalBusiness",
              "name": "Avela Therapy",
              "telephone": "+15616142857",
              "areaServed": {
                "@type": "State",
                "name": "Florida"
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-cream to-cream/50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-light text-charcoal mb-6 leading-tight font-display tracking-wider small-caps">
                school refusal therapy florida
              </h1>
              <p className="text-xl text-soft-gray mb-8 leading-relaxed tracking-wide">
                Specialized virtual therapy for teenagers struggling with school avoidance in Florida. Our licensed therapists help teens overcome school anxiety, develop coping strategies, and successfully return to their educational environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-5 h-5" />
                  urgent school support
                </Link>
                <Link href="/team/dr-sofia-georgoulias" className="btn-secondary">
                  meet our anxiety specialist
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-soft-gray">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-dusty-blue rounded-full"></div>
                  <span className="tracking-wider all-lowercase">rapid intervention available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-dusty-blue rounded-full"></div>
                  <span className="tracking-wider all-lowercase">school collaboration support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/happy-family.jpg"
                alt="School refusal therapy Florida - Virtual treatment for school avoidance"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full max-w-lg"
              />
              <div className="absolute -top-4 -right-4 w-full h-full bg-blush-pink/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Section */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
              understanding school refusal
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              School refusal affects 2-5% of school-age children and can significantly impact academic progress and family functioning. Early intervention is crucial for successful outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 rounded-xl">
              <BookOpen className="w-12 h-12 text-dusty-blue mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                common causes
              </h3>
              <ul className="space-y-2 text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>academic pressure and performance anxiety</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>social anxiety and peer relationships</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>bullying or social conflicts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>separation anxiety from parents</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 rounded-xl">
              <Users className="w-12 h-12 text-dusty-blue mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                warning signs
              </h3>
              <ul className="space-y-2 text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>frequent absences or tardiness</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>physical complaints (headaches, stomach aches)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>extreme distress about school</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>school avoidance behaviors</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 rounded-xl">
              <Calendar className="w-12 h-12 text-dusty-blue mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                impact areas
              </h3>
              <ul className="space-y-2 text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>academic performance decline</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>social isolation and peer relationships</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>family stress and conflict</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>long-term educational outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Approach */}
      <div className="section-padding bg-cream">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6 font-display tracking-wider small-caps">
                comprehensive intervention approach
              </h2>
              <p className="text-xl text-soft-gray mb-6 tracking-wide">
                Our school refusal therapy program combines evidence-based interventions to address the root causes of school avoidance and facilitate successful return to school.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">comprehensive assessment</h3>
                    <p className="text-soft-gray tracking-wide">Thorough evaluation of academic, social, and emotional factors contributing to school avoidance.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">anxiety management</h3>
                    <p className="text-soft-gray tracking-wide">CBT techniques to address school-related anxiety, panic, and avoidance behaviors.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">gradual reintegration</h3>
                    <p className="text-soft-gray tracking-wide">Step-by-step plan for returning to school with manageable goals and support systems.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">school collaboration</h3>
                    <p className="text-soft-gray tracking-wide">Working with school personnel to create supportive educational accommodations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-medium text-charcoal mb-6 font-display tracking-wider small-caps">
                virtual therapy advantages
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">reduced pressure</p>
                    <p className="text-sm text-soft-gray tracking-wide">No additional stress of traveling to appointments</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">flexible scheduling</p>
                    <p className="text-sm text-soft-gray tracking-wide">Sessions can work around school and family schedules</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">family involvement</p>
                    <p className="text-sm text-soft-gray tracking-wide">Easy for parents and siblings to participate in sessions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">immediate access</p>
                    <p className="text-sm text-soft-gray tracking-wide">Crisis support available during school hours if needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-12 text-center font-display tracking-wider small-caps">
            school refusal therapy FAQ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">how quickly can treatment start?</h3>
                <p className="text-soft-gray tracking-wide">We understand school refusal is urgent. Initial consultations can often be scheduled within 24-48 hours to begin immediate intervention.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">do you work with schools?</h3>
                <p className="text-soft-gray tracking-wide">Yes. We collaborate with school counselors, teachers, and administrators to develop return-to-school plans and appropriate accommodations.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">how long does treatment take?</h3>
                <p className="text-soft-gray tracking-wide">Treatment duration varies but most teens show improvement within 4-8 weeks. Some may need longer-term support for sustained school attendance.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">can virtual therapy really help?</h3>
                <p className="text-soft-gray tracking-wide">Absolutely. Virtual therapy is highly effective for school refusal and may actually reduce some barriers to treatment engagement.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">what if my teen refuses therapy?</h3>
                <p className="text-soft-gray tracking-wide">This is common. We use motivational interviewing techniques and work with parents on engagement strategies to help reluctant teens participate.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">is this covered by insurance?</h3>
                <p className="text-soft-gray tracking-wide">Most Florida insurance plans cover therapy for school refusal under mental health benefits. We accept major insurances and provide superbills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Florida Locations */}
      <div className="section-padding bg-dusty-blue/10">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
              school refusal support throughout florida
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              Our school refusal specialists provide urgent virtual therapy services to teenagers and families across all major Florida school districts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {['Miami', 'Orlando', 'Tampa', 'West Palm Beach', 'Fort Lauderdale'].map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(' ', '-')}`}
                className="card p-6 text-center hover:shadow-md transition-all group"
              >
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">
                  {city}
                </h3>
                <p className="text-sm text-soft-gray tracking-wide mb-3">
                  School Refusal Therapy
                </p>
                <div className="text-xs text-dusty-blue group-hover:text-blush-pink transition-colors tracking-wider all-lowercase">
                  urgent support available →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-soft-gray mb-6 tracking-wide">
              Don't wait - early intervention for school refusal leads to better outcomes. Get support today.
            </p>
            <Link href="tel:+15616142857" className="btn-primary text-lg px-8 py-4">
              <Phone className="w-6 h-6" />
              get immediate school support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}