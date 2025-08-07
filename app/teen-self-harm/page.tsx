import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle, Heart, Shield, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Self-Harm Treatment Florida | Virtual Recovery Support - Avela Therapy',
  description: 'Professional teen self-harm treatment in Florida. Virtual therapy for self-injury recovery, crisis support, and healing. Licensed therapists specializing in adolescent self-harm.',
  keywords: ['teen self harm treatment Florida', 'virtual self injury therapy', 'teen cutting therapy Florida', 'adolescent self harm recovery', 'teen crisis intervention Florida'],
  openGraph: {
    title: 'Teen Self-Harm Treatment Florida | Virtual Recovery Support - Avela Therapy',
    description: 'Professional teen self-harm treatment in Florida. Virtual therapy for recovery and healing from self-injury behaviors.',
    url: 'https://avelatherapy.com/teen-self-harm',
  }
}

export default function TeenSelfHarmPage() {
  return (
    <div className="pt-20">
      {/* Schema Markup */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Teen Self-Harm Treatment Florida",
            "description": "Virtual self-harm treatment and recovery support for teenagers in Florida",
            "url": "https://avelatherapy.com/teen-self-harm",
            "mainEntity": {
              "@type": "MedicalCondition",
              "name": "Teen Self-Harm",
              "alternateName": "Adolescent Self-Injury Behaviors",
              "description": "Self-harm behaviors in teenagers requiring specialized virtual therapy and crisis support",
              "possibleTreatment": [
                {
                  "@type": "MedicalTherapy",
                  "name": "Virtual Self-Harm Therapy",
                  "description": "Online therapy for teenagers engaging in self-injury behaviors"
                },
                {
                  "@type": "MedicalTherapy", 
                  "name": "DBT Skills Training",
                  "description": "Dialectical Behavior Therapy skills for emotional regulation and distress tolerance"
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

      {/* Crisis Banner */}
      <div className="bg-blush-pink text-charcoal py-3">
        <div className="container-max text-center">
          <p className="font-medium tracking-wider">
            <strong>crisis support:</strong> if your teen is in immediate danger, call 988 (suicide & crisis lifeline) or 911
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-cream to-cream/50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-light text-charcoal mb-6 leading-tight font-display tracking-wider small-caps">
                teen self-harm treatment florida
              </h1>
              <p className="text-xl text-soft-gray mb-8 leading-relaxed tracking-wide">
                Compassionate virtual therapy for teenagers struggling with self-harm behaviors in Florida. Our specialized therapists provide evidence-based treatment, crisis support, and healing-focused care in a safe, non-judgmental environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-5 h-5" />
                  immediate support available
                </Link>
                <Link href="/team/dr-tommy-mcgee" className="btn-secondary">
                  meet our trauma specialist
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="bg-dusty-blue/10 p-4 rounded-lg">
                <p className="text-sm text-charcoal tracking-wide">
                  <strong className="tracking-wider all-lowercase">confidential support:</strong> all teen self-harm therapy sessions are private and conducted with the utmost care for your teenager's emotional safety and healing.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/happy-family.jpg"
                alt="Teen self-harm treatment Florida - Virtual recovery support"
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
              understanding teen self-harm
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              Self-harm is a coping mechanism that many teenagers use to deal with overwhelming emotions. With proper support and treatment, recovery is possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 rounded-xl">
              <Heart className="w-12 h-12 text-dusty-blue mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                emotional regulation
              </h3>
              <ul className="space-y-2 text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>managing intense emotions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>feeling overwhelmed by stress</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>difficulty expressing feelings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>seeking emotional release</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 rounded-xl">
              <Shield className="w-12 h-12 text-dusty-blue mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                warning signs
              </h3>
              <ul className="space-y-2 text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>unexplained cuts or bruises</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>wearing long sleeves in warm weather</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>isolation from friends and family</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>sudden mood changes</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 rounded-xl">
              <Users className="w-12 h-12 text-dusty-blue mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                recovery support
              </h3>
              <ul className="space-y-2 text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>developing healthy coping skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>building emotional resilience</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>strengthening support systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>creating safety plans</span>
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
                healing-focused treatment
              </h2>
              <p className="text-xl text-soft-gray mb-6 tracking-wide">
                Our teen self-harm treatment focuses on healing, safety, and developing healthy coping mechanisms through evidence-based therapeutic approaches.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">safety assessment & planning</h3>
                    <p className="text-soft-gray tracking-wide">Comprehensive risk assessment and development of personalized safety plans.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">DBT skills training</h3>
                    <p className="text-soft-gray tracking-wide">Dialectical Behavior Therapy skills for emotional regulation and distress tolerance.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">trauma-informed care</h3>
                    <p className="text-soft-gray tracking-wide">Addressing underlying trauma that may contribute to self-harm behaviors.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-dusty-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dusty-blue font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">family support & education</h3>
                    <p className="text-soft-gray tracking-wide">Parent coaching and family therapy to create supportive healing environments.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-medium text-charcoal mb-6 font-display tracking-wider small-caps">
                why virtual therapy works
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">privacy & comfort</p>
                    <p className="text-sm text-soft-gray tracking-wide">Safe space to share sensitive experiences without judgment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">immediate access</p>
                    <p className="text-sm text-soft-gray tracking-wide">Crisis support available when your teen needs it most</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">reduced barriers</p>
                    <p className="text-sm text-soft-gray tracking-wide">No transportation concerns or waiting room anxiety</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">family involvement</p>
                    <p className="text-sm text-soft-gray tracking-wide">Easy for parents to participate in healing process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crisis Resources */}
      <div className="section-padding bg-dusty-blue/10">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-12 text-center font-display tracking-wider small-caps">
            immediate crisis resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">national suicide prevention lifeline</h3>
              <p className="text-2xl font-bold text-dusty-blue mb-2">988</p>
              <p className="text-sm text-soft-gray tracking-wide">24/7 crisis support and suicide prevention</p>
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">crisis text line</h3>
              <p className="text-lg font-bold text-dusty-blue mb-2">text HOME to 741741</p>
              <p className="text-sm text-soft-gray tracking-wide">24/7 text-based crisis support</p>
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">emergency services</h3>
              <p className="text-2xl font-bold text-blush-pink mb-2">911</p>
              <p className="text-sm text-soft-gray tracking-wide">immediate emergency response</p>
            </div>
          </div>
        </div>
      </div>

      {/* Florida Locations */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
              recovery support throughout florida
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              Our specialized self-harm treatment is available to teenagers and families across all major Florida cities through secure virtual therapy sessions.
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
                  Self-Harm Treatment
                </p>
                <div className="text-xs text-dusty-blue group-hover:text-blush-pink transition-colors tracking-wider all-lowercase">
                  confidential sessions →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-soft-gray mb-6 tracking-wide">
              Recovery is possible. Our compassionate therapists are here to support your teenager's healing journey.
            </p>
            <Link href="tel:+15616142857" className="btn-primary text-lg px-8 py-4">
              <Phone className="w-6 h-6" />
              get immediate support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}