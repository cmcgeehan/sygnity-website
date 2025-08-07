import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Calendar, Award, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dr. Tommy McGee - Teen Therapist Florida | Depression & Trauma Specialist - Avela Therapy',
  description: 'Dr. Tommy McGee, licensed teen therapist in Florida specializing in virtual depression and trauma treatment for teenagers. Board-certified adolescent mental health specialist.',
  keywords: ['Dr Tommy McGee', 'teen therapist Florida', 'teen depression therapist', 'teen trauma therapist', 'virtual teen therapy Florida', 'adolescent psychologist Florida'],
  openGraph: {
    title: 'Dr. Tommy McGee - Teen Therapist Florida | Depression & Trauma Specialist',
    description: 'Dr. Tommy McGee, licensed teen therapist in Florida specializing in virtual depression and trauma treatment for teenagers.',
    url: 'https://avelatherapy.com/team/dr-tommy-mcgee',
  }
}

export default function DrTommyMcGeePage() {
  return (
    <div className="pt-20">
      {/* Schema Markup */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dr. Tommy McGee",
            "jobTitle": "Licensed Clinical Social Worker",
            "description": "Board-certified teen therapist specializing in depression, trauma, and EMDR treatment for teenagers in Florida",
            "url": "https://avelatherapy.com/team/dr-tommy-mcgee",
            "image": "https://avelatherapy.com/dr-tommy-mcgee.jpg",
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
              "Adolescent Mental Health",
              "Depression Treatment",
              "Trauma Therapy",
              "EMDR Therapy",
              "Family Therapy"
            ],
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "Florida State University"
              },
              {
                "@type": "EducationalOrganization", 
                "name": "Nova Southeastern University"
              }
            ],
            "memberOf": {
              "@type": "ProfessionalService",
              "name": "National Association of Social Workers"
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
                  src="/placeholder-user.jpg"
                  alt="Dr. Tommy McGee - Teen Therapist Florida"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg w-full max-w-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-dusty-blue text-white p-4 rounded-lg shadow-lg">
                  <div className="text-sm font-medium tracking-wider all-lowercase">licensed in florida</div>
                  <div className="text-xs opacity-90 tracking-wider">EMDR certified</div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
                  Dr. Tommy McGee
                </h1>
                <p className="text-xl text-dusty-blue font-medium tracking-wider all-lowercase mb-2">
                  licensed clinical social worker
                </p>
                <p className="text-lg text-soft-gray tracking-wide">
                  Teen Depression & Trauma Specialist
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-dusty-blue" />
                    <span className="text-sm font-medium text-charcoal tracking-wider all-lowercase">education</span>
                  </div>
                  <p className="text-sm text-soft-gray tracking-wide">MSW Clinical Practice</p>
                  <p className="text-xs text-soft-gray tracking-wide">Florida State University</p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-dusty-blue" />
                    <span className="text-sm font-medium text-charcoal tracking-wider all-lowercase">experience</span>
                  </div>
                  <p className="text-sm text-soft-gray tracking-wide">15+ Years</p>
                  <p className="text-xs text-soft-gray tracking-wide">Teen Mental Health</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                    about dr. mcgee
                  </h3>
                  <p className="text-soft-gray leading-relaxed tracking-wide mb-4">
                    Dr. Tommy McGee is a licensed clinical social worker with over 15 years of experience specializing in teen depression and trauma treatment. He provides virtual therapy services throughout Florida, helping teenagers heal from traumatic experiences and overcome depression through evidence-based interventions.
                  </p>
                  <p className="text-soft-gray leading-relaxed tracking-wide">
                    Dr. McGee is certified in EMDR (Eye Movement Desensitization and Reprocessing) therapy and has extensive training in trauma-focused cognitive behavioral therapy. He is passionate about helping teens build resilience and develop healthy coping mechanisms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                    specialties
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Teen Depression & Major Depressive Disorder</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">PTSD & Trauma Recovery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">EMDR Therapy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Trauma-Focused CBT</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Grief & Loss Counseling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Family Crisis Intervention</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                    treatment approach
                  </h3>
                  <p className="text-soft-gray leading-relaxed tracking-wide">
                    Dr. McGee specializes in trauma-informed care, understanding how past experiences impact a teenager's current mental health. He uses EMDR therapy, cognitive behavioral techniques, and family systems approaches to help teens process difficult experiences and build emotional resilience.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-5 h-5" />
                  schedule consultation
                </Link>
                <Link href="/teen-trauma" className="btn-outline">
                  <Calendar className="w-5 h-5" />
                  learn about trauma therapy
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
              trauma therapy throughout florida
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              Dr. McGee provides specialized trauma and depression therapy to teenagers across all major Florida cities through secure virtual sessions.
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
                  Teen Trauma Therapy
                </p>
                <div className="text-xs text-dusty-blue group-hover:text-blush-pink transition-colors tracking-wider all-lowercase">
                  EMDR sessions available →
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
            specialized trauma care
          </h2>
          <p className="text-xl text-soft-gray mb-8 max-w-2xl mx-auto tracking-wide">
            Dr. McGee specializes in helping teens heal from trauma and overcome depression. EMDR therapy and trauma-focused treatment available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15616142857" className="btn-primary text-lg px-8 py-4">
              <Phone className="w-6 h-6" />
              call (561) 614-2857
            </Link>
            <Link href="/teen-depression" className="btn-secondary text-lg px-8 py-4">
              learn about teen depression therapy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}