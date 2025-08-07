import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Calendar, Award, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dr. Raju Mangrola - Teen Psychiatrist Florida | Medication Management Specialist - Avela Therapy',
  description: 'Dr. Raju Mangrola, board-certified teen psychiatrist in Florida specializing in virtual medication management and psychiatric treatment for teenagers with ADHD, depression, and anxiety.',
  keywords: ['Dr Raju Mangrola', 'teen psychiatrist Florida', 'teen medication management', 'teen ADHD treatment', 'virtual teen psychiatry Florida', 'adolescent psychiatrist Florida'],
  openGraph: {
    title: 'Dr. Raju Mangrola - Teen Psychiatrist Florida | Medication Management Specialist',
    description: 'Dr. Raju Mangrola, board-certified teen psychiatrist in Florida specializing in virtual medication management for teenagers.',
    url: 'https://avelatherapy.com/team/dr-raju-mangrola',
  }
}

export default function DrRajuMangrolaPage() {
  return (
    <div className="pt-20">
      {/* Schema Markup */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dr. Raju Mangrola",
            "jobTitle": "Board-Certified Psychiatrist",
            "description": "Board-certified teen psychiatrist specializing in medication management, ADHD treatment, and psychiatric care for teenagers in Florida",
            "url": "https://avelatherapy.com/team/dr-raju-mangrola",
            "image": "https://avelatherapy.com/dr-raju-mangrola.jpg",
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
              "Adolescent Psychiatry",
              "Medication Management",
              "ADHD Treatment",
              "Depression Treatment",
              "Anxiety Disorders"
            ],
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "University of Miami Miller School of Medicine"
              },
              {
                "@type": "EducationalOrganization", 
                "name": "Johns Hopkins Hospital"
              }
            ],
            "memberOf": {
              "@type": "ProfessionalService",
              "name": "American Academy of Child and Adolescent Psychiatry"
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
                  alt="Dr. Raju Mangrola - Teen Psychiatrist Florida"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg w-full max-w-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-dusty-blue text-white p-4 rounded-lg shadow-lg">
                  <div className="text-sm font-medium tracking-wider all-lowercase">licensed in florida</div>
                  <div className="text-xs opacity-90 tracking-wider">board certified psychiatrist</div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
                  Dr. Raju Mangrola
                </h1>
                <p className="text-xl text-dusty-blue font-medium tracking-wider all-lowercase mb-2">
                  board-certified psychiatrist
                </p>
                <p className="text-lg text-soft-gray tracking-wide">
                  Teen Medication Management & ADHD Specialist
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-dusty-blue" />
                    <span className="text-sm font-medium text-charcoal tracking-wider all-lowercase">education</span>
                  </div>
                  <p className="text-sm text-soft-gray tracking-wide">M.D. Psychiatry</p>
                  <p className="text-xs text-soft-gray tracking-wide">University of Miami</p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-dusty-blue" />
                    <span className="text-sm font-medium text-charcoal tracking-wider all-lowercase">experience</span>
                  </div>
                  <p className="text-sm text-soft-gray tracking-wide">18+ Years</p>
                  <p className="text-xs text-soft-gray tracking-wide">Adolescent Psychiatry</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                    about dr. mangrola
                  </h3>
                  <p className="text-soft-gray leading-relaxed tracking-wide mb-4">
                    Dr. Raju Mangrola is a board-certified psychiatrist with over 18 years of experience specializing in adolescent mental health and medication management. He provides virtual psychiatric services throughout Florida, helping teenagers with ADHD, depression, anxiety, and other mental health conditions through comprehensive medication evaluation and ongoing management.
                  </p>
                  <p className="text-soft-gray leading-relaxed tracking-wide">
                    Dr. Mangrola completed his medical training at the University of Miami Miller School of Medicine and his psychiatry residency at Johns Hopkins Hospital. He takes a collaborative approach to psychiatric care, working closely with teens, families, and other healthcare providers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                    specialties
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Teen ADHD Assessment & Treatment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Depression Medication Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Anxiety Medication Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Mood Stabilizer Therapy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Psychopharmacology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dusty-blue rounded-full"></div>
                      <span className="text-soft-gray tracking-wide">Collaborative Care Planning</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                    treatment approach
                  </h3>
                  <p className="text-soft-gray leading-relaxed tracking-wide">
                    Dr. Mangrola believes in comprehensive psychiatric care that considers the whole person. He conducts thorough evaluations, carefully monitors medication effects, and works collaboratively with therapists and families to ensure optimal treatment outcomes for each teenager.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-5 h-5" />
                  schedule psychiatric consultation
                </Link>
                <Link href="/services/medication-management" className="btn-outline">
                  <Calendar className="w-5 h-5" />
                  medication management info
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
              psychiatric services throughout florida
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              Dr. Mangrola provides comprehensive psychiatric evaluations and medication management to teenagers across Florida through secure virtual consultations.
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
                  Teen Psychiatry Services
                </p>
                <div className="text-xs text-dusty-blue group-hover:text-blush-pink transition-colors tracking-wider all-lowercase">
                  medication management →
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
            comprehensive psychiatric care
          </h2>
          <p className="text-xl text-soft-gray mb-8 max-w-2xl mx-auto tracking-wide">
            Dr. Mangrola provides thorough psychiatric evaluations and ongoing medication management for teens with ADHD, depression, and anxiety disorders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15616142857" className="btn-primary text-lg px-8 py-4">
              <Phone className="w-6 h-6" />
              call (561) 614-2857
            </Link>
            <Link href="/teen-adhd" className="btn-secondary text-lg px-8 py-4">
              teen ADHD treatment info
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}