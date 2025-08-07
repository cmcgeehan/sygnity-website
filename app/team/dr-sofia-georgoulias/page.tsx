import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Calendar, Award, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dr. Sofia Georgoulias - Teen Therapist Florida | Anxiety & Depression Specialist - Avela Therapy',
  description: 'Dr. Sofia Georgoulias, licensed teen therapist in Florida specializing in virtual anxiety and depression treatment for teenagers. Board-certified adolescent mental health specialist.',
  keywords: ['Dr Sofia Georgoulias', 'teen therapist Florida', 'teen anxiety therapist', 'teen depression therapist', 'virtual teen therapy Florida', 'adolescent psychologist Florida'],
  openGraph: {
    title: 'Dr. Sofia Georgoulias - Teen Therapist Florida | Anxiety & Depression Specialist',
    description: 'Dr. Sofia Georgoulias, licensed teen therapist in Florida specializing in virtual anxiety and depression treatment for teenagers.',
    url: 'https://avelatherapy.com/team/dr-sofia-georgoulias',
  }
}

export default function DrSofiaGeorgouliasPage() {
  return (
    <div className="pt-20">
      {/* Schema Markup */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dr. Sofia Georgoulias",
            "jobTitle": "Licensed Clinical Psychologist",
            "description": "Board-certified teen therapist specializing in anxiety, depression, and trauma treatment for teenagers in Florida",
            "url": "https://avelatherapy.com/team/dr-sofia-georgoulias",
            "image": "https://avelatherapy.com/dr-sofia-georgoulias.jpg",
            "telephone": "+15616142857",
            "email": "info@avelatherapy.com",
            "worksFor": {
              "@type": "MedicalBusiness",
              "name": "Avela Therapy",
              "url": "https://avelatherapy.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "State",
              "name": "Florida"
            },
            "medicalSpecialty": [
              "Adolescent Psychology",
              "Anxiety Disorders",
              "Depression Treatment",
              "Trauma Therapy",
              "Cognitive Behavioral Therapy"
            ],
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "University of Florida"
              },
              {
                "@type": "EducationalOrganization", 
                "name": "Florida International University"
              }
            ],
            "memberOf": {
              "@type": "ProfessionalService",
              "name": "American Psychological Association"
            }
          })
        }}
      />

      <div className="section-padding bg-cream">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative mb-8">
                <Image
                  src="/georgoulias.png"
                  alt="Dr. Sofia Georgoulias - Teen Therapist Florida"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg w-full max-w-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-dusty-blue text-white p-4 rounded-lg shadow-lg">
                  <div className="text-sm font-medium tracking-wider all-lowercase">licensed in florida</div>
                  <div className="text-xs opacity-90 tracking-wider">board certified</div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
                  Dr. Sofia Georgoulias
                </h1>
                <p className="text-xl text-dusty-blue font-medium tracking-wider all-lowercase mb-2">
                  licensed clinical psychologist
                </p>
                <p className="text-lg text-soft-gray tracking-wide">
                  Teen Anxiety & Depression Specialist
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-dusty-blue" />
                    <span className="text-sm font-medium text-charcoal tracking-wider all-lowercase">education</span>
                  </div>
                  <p className="text-sm text-soft-gray tracking-wide">Ph.D. Clinical Psychology</p>
                  <p className="text-xs text-soft-gray tracking-wide">University of Florida</p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-dusty-blue" />
                    <span className="text-sm font-medium text-charcoal tracking-wider all-lowercase">experience</span>
                  </div>
                  <p className="text-sm text-soft-gray tracking-wide">12+ Years</p>
                  <p className="text-xs text-soft-gray tracking-wide">Teen Mental Health</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                    about dr. georgoulias
                  </h3>
                  <p className="text-soft-gray leading-relaxed tracking-wide mb-4">
                    Dr. Sofia Georgoulias is a board-certified clinical psychologist with over 12 years of experience specializing in teen mental health. She provides virtual therapy services throughout Florida, helping teenagers overcome anxiety, depression, and trauma through evidence-based treatment approaches.
                  </p>
                  <p className="text-soft-gray leading-relaxed tracking-wide">
                    Dr. Georgoulias completed her doctoral training at the University of Florida and has extensive experience working with adolescents in both individual and family therapy settings. She is passionate about helping teens develop healthy coping strategies and build resilience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                    specialties
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Teen Anxiety Disorders (GAD, Social Anxiety, Panic)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Teen Depression & Mood Disorders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Trauma-Informed Care & PTSD</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Cognitive Behavioral Therapy (CBT)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Dialectical Behavior Therapy (DBT)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Family Systems Therapy</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                    treatment approach
                  </h3>
                  <p className="text-soft-gray leading-relaxed tracking-wide">
                    Dr. Georgoulias uses an integrated approach combining evidence-based therapies tailored to each teen's unique needs. She creates a safe, non-judgmental environment where teenagers feel comfortable exploring their emotions and developing practical skills for managing mental health challenges.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-5 h-5" />
                  schedule consultation
                </Link>
                <Link href="/contact" className="btn-outline">
                  <Mail className="w-5 h-5" />
                  send message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Areas Served */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
              serving florida families
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              Dr. Georgoulias provides virtual teen therapy services throughout Florida, with deep understanding of local communities and resources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                  Teen Therapy Services
                </p>
                <div className="text-xs text-dusty-blue group-hover:text-blush-pink transition-colors tracking-wider all-lowercase">
                  virtual sessions available →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-padding bg-dusty-blue/10">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6 font-display tracking-wider small-caps">
            ready to get started?
          </h2>
          <p className="text-xl text-soft-gray mb-8 max-w-2xl mx-auto tracking-wide">
            Dr. Georgoulias is accepting new teen clients throughout Florida. Free consultations available to discuss your teenager's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15616142857" className="btn-primary text-lg px-8 py-4">
              <Phone className="w-6 h-6" />
              call (561) 614-2857
            </Link>
            <Link href="/teen-anxiety" className="btn-secondary text-lg px-8 py-4">
              learn about teen anxiety therapy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}