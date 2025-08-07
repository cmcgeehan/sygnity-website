import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle, Brain, Calendar, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen ADHD Therapy Florida | Virtual ADHD Treatment for Teenagers - Avela Therapy',
  description: 'Professional teen ADHD therapy in Florida. Virtual ADHD treatment, medication management, and behavioral therapy for teenagers. Licensed ADHD specialists throughout Florida.',
  keywords: ['teen ADHD therapy Florida', 'virtual ADHD treatment teenagers', 'teen ADHD medication management', 'adolescent ADHD therapy Florida', 'online teen ADHD counseling'],
  openGraph: {
    title: 'Teen ADHD Therapy Florida | Virtual ADHD Treatment for Teenagers - Avela Therapy',
    description: 'Professional teen ADHD therapy in Florida. Virtual treatment, medication management, and behavioral support for teenagers with ADHD.',
    url: 'https://avelatherapy.com/teen-adhd',
  }
}

export default function TeenADHDPage() {
  return (
    <div className="pt-20">
      {/* Schema Markup */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Teen ADHD Therapy Florida",
            "description": "Virtual ADHD therapy and treatment for teenagers in Florida",
            "url": "https://avelatherapy.com/teen-adhd",
            "mainEntity": {
              "@type": "MedicalCondition",
              "name": "Teen ADHD",
              "alternateName": "Adolescent Attention Deficit Hyperactivity Disorder",
              "description": "ADHD in teenagers requiring specialized virtual therapy and treatment",
              "possibleTreatment": [
                {
                  "@type": "MedicalTherapy",
                  "name": "Virtual ADHD Therapy",
                  "description": "Online behavioral therapy for teenagers with ADHD"
                },
                {
                  "@type": "MedicalTherapy", 
                  "name": "ADHD Medication Management",
                  "description": "Psychiatric medication evaluation and monitoring for teen ADHD"
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
                teen ADHD therapy florida
              </h1>
              <p className="text-xl text-soft-gray mb-8 leading-relaxed tracking-wide">
                Specialized virtual ADHD therapy for teenagers in Florida. Our licensed therapists and psychiatrists provide comprehensive ADHD treatment including behavioral therapy, medication management, and executive function coaching.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-5 h-5" />
                  free ADHD consultation
                </Link>
                <Link href="/team/dr-raju-mangrola" className="btn-secondary">
                  meet our ADHD psychiatrist
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-soft-gray">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-dusty-blue rounded-full"></div>
                  <span className="tracking-wider all-lowercase">board-certified ADHD specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-dusty-blue rounded-full"></div>
                  <span className="tracking-wider all-lowercase">medication management available</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/happy-family.jpg"
                alt="Teen ADHD therapy Florida - Virtual ADHD treatment for teenagers"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full max-w-lg"
              />
              <div className="absolute -top-4 -right-4 w-full h-full bg-blush-pink/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ADHD Signs Section */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
              signs your teen may have ADHD
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              ADHD affects up to 11% of teenagers. Early identification and treatment can significantly improve academic performance and quality of life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 rounded-xl">
              <Brain className="w-12 h-12 text-dusty-blue mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                inattentive symptoms
              </h3>
              <ul className="space-y-2 text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>difficulty focusing on schoolwork</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>frequently losing assignments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>avoiding tasks requiring mental effort</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>easily distracted by external stimuli</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 rounded-xl">
              <Calendar className="w-12 h-12 text-dusty-blue mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                hyperactive symptoms
              </h3>
              <ul className="space-y-2 text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>restlessness and fidgeting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>difficulty sitting still in class</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>talking excessively</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>interrupting conversations</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 rounded-xl">
              <Users className="w-12 h-12 text-dusty-blue mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                impulsive symptoms
              </h3>
              <ul className="space-y-2 text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>difficulty waiting their turn</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>making decisions without thinking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>blurting out answers in class</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>engaging in risky behaviors</span>
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
                comprehensive ADHD treatment
              </h2>
              <p className="text-xl text-soft-gray mb-6 tracking-wide">
                Our teen ADHD treatment program combines evidence-based behavioral therapy with expert medication management for comprehensive care.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">comprehensive ADHD assessment</h3>
                    <p className="text-soft-gray tracking-wide">Thorough evaluation using standardized ADHD rating scales and clinical interviews.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">behavioral therapy & coaching</h3>
                    <p className="text-soft-gray tracking-wide">Executive function training, time management skills, and organizational strategies.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">medication management</h3>
                    <p className="text-soft-gray tracking-wide">Expert psychiatric evaluation and ongoing medication monitoring by Dr. Raju Mangrola.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">family support & education</h3>
                    <p className="text-soft-gray tracking-wide">Parent coaching and family therapy to create supportive home environments.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-medium text-charcoal mb-6 font-display tracking-wider small-caps">
                why choose virtual ADHD therapy?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">reduced distractions</p>
                    <p className="text-sm text-soft-gray tracking-wide">Familiar home environment helps teens with ADHD focus better</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">flexible scheduling</p>
                    <p className="text-sm text-soft-gray tracking-wide">Sessions work around school and extracurricular activities</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">immediate access</p>
                    <p className="text-sm text-soft-gray tracking-wide">No waiting lists - start treatment when you need it most</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">parent involvement</p>
                    <p className="text-sm text-soft-gray tracking-wide">Easy for parents to participate in sessions when appropriate</p>
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
            teen ADHD therapy FAQ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">how is teen ADHD diagnosed?</h3>
                <p className="text-soft-gray tracking-wide">ADHD diagnosis involves comprehensive clinical interviews, standardized rating scales, and assessment of symptoms across multiple settings (home and school).</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">is medication always necessary?</h3>
                <p className="text-soft-gray tracking-wide">Not always. Treatment plans are individualized. Some teens benefit from behavioral therapy alone, while others need a combination of therapy and medication.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">can virtual therapy help with ADHD?</h3>
                <p className="text-soft-gray tracking-wide">Yes. Virtual ADHD therapy has proven effective, especially when combined with structured behavioral interventions and parent training.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">how long does treatment take?</h3>
                <p className="text-soft-gray tracking-wide">ADHD treatment is typically long-term. Most teens see improvement within 6-12 weeks, with ongoing management to maintain progress.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">do you work with schools?</h3>
                <p className="text-soft-gray tracking-wide">Yes. We collaborate with school counselors and teachers to develop 504 plans and IEPs to support your teen's academic success.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">is ADHD therapy covered by insurance?</h3>
                <p className="text-soft-gray tracking-wide">Most insurance plans cover ADHD therapy and psychiatric services. We accept major Florida insurance plans and provide superbills for reimbursement.</p>
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
              teen ADHD therapy throughout florida
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              Our ADHD specialists provide virtual therapy services to teenagers and families across all major Florida cities.
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
                  Teen ADHD Therapy
                </p>
                <div className="text-xs text-dusty-blue group-hover:text-blush-pink transition-colors tracking-wider all-lowercase">
                  virtual sessions available →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="tel:+15616142857" className="btn-primary text-lg px-8 py-4">
              <Phone className="w-6 h-6" />
              schedule ADHD consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}