import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, ArrowRight, GraduationCap, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Teen Therapy Team Florida | Licensed Therapists & Psychiatrists - Avela Therapy',
  description: 'Meet our team of board-certified teen therapists and psychiatrists in Florida. Specialized virtual therapy for teenagers with anxiety, depression, trauma, and ADHD.',
  keywords: ['teen therapists Florida', 'teen psychiatrists Florida', 'licensed teen therapists', 'virtual teen therapy team', 'adolescent mental health specialists Florida'],
  openGraph: {
    title: 'Our Teen Therapy Team Florida | Licensed Therapists & Psychiatrists - Avela Therapy',
    description: 'Meet our board-certified team specializing in virtual teen therapy for anxiety, depression, trauma, and ADHD in Florida.',
    url: 'https://avelatherapy.com/team',
  }
}

const teamMembers = [
  {
    name: 'Dr. Sofia Georgoulias',
    title: 'Licensed Clinical Psychologist',
    specialty: 'Teen Anxiety & Depression Specialist',
    experience: '12+ Years',
    education: 'Ph.D. Clinical Psychology, University of Florida',
    credentials: 'Licensed in Florida, Board Certified',
    image: '/georgoulias.png',
    href: '/team/dr-sofia-georgoulias',
    specialties: [
      'Teen Anxiety Disorders (GAD, Social Anxiety, Panic)',
      'Teen Depression & Mood Disorders', 
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT)'
    ]
  },
  {
    name: 'Dr. Tommy McGee',
    title: 'Licensed Clinical Social Worker',
    specialty: 'Teen Depression & Trauma Specialist',
    experience: '15+ Years',
    education: 'MSW Clinical Practice, Florida State University',
    credentials: 'Licensed in Florida, EMDR Certified',
    image: '/mcgee.jpg',
    href: '/team/dr-tommy-mcgee',
    specialties: [
      'Teen Depression & Major Depressive Disorder',
      'PTSD & Trauma Recovery',
      'EMDR Therapy',
      'Trauma-Focused CBT'
    ]
  },
  {
    name: 'Dr. Raju Mangrola',
    title: 'Board-Certified Psychiatrist',
    specialty: 'Teen Medication Management & ADHD Specialist',
    experience: '18+ Years',
    education: 'M.D. Psychiatry, University of Miami',
    credentials: 'Licensed in Florida, Board Certified Psychiatrist',
    image: '/mangrola.jpeg',
    href: '/team/dr-raju-mangrola',
    specialties: [
      'Teen ADHD Assessment & Treatment',
      'Depression Medication Management',
      'Anxiety Medication Optimization',
      'Psychopharmacology'
    ]
  }
]

export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Schema Markup */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Our Teen Therapy Team Florida",
            "description": "Licensed teen therapists and psychiatrists specializing in virtual therapy for teenagers in Florida",
            "url": "https://avelatherapy.com/team",
            "mainEntity": {
              "@type": "MedicalBusiness",
              "name": "Avela Therapy",
              "employee": [
                {
                  "@type": "Person",
                  "name": "Dr. Sofia Georgoulias",
                  "jobTitle": "Licensed Clinical Psychologist",
                  "medicalSpecialty": "Teen Anxiety & Depression"
                },
                {
                  "@type": "Person", 
                  "name": "Dr. Tommy McGee",
                  "jobTitle": "Licensed Clinical Social Worker",
                  "medicalSpecialty": "Teen Depression & Trauma"
                },
                {
                  "@type": "Person",
                  "name": "Dr. Raju Mangrola", 
                  "jobTitle": "Board-Certified Psychiatrist",
                  "medicalSpecialty": "Teen ADHD & Medication Management"
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-cream to-cream/50">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-light text-charcoal mb-6 leading-tight font-display tracking-wider small-caps">
            our teen therapy team
          </h1>
          <p className="text-xl text-soft-gray mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Meet our board-certified team of licensed therapists and psychiatrists specializing in virtual teen mental health care throughout Florida. Each member brings years of expertise in adolescent psychology and evidence-based treatment approaches.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15616142857" className="btn-primary">
              <Phone className="w-5 h-5" />
              schedule with our team
            </Link>
            <Link href="/services" className="btn-secondary">
              view our services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={member.name} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.specialty}`}
                      width={400}
                      height={500}
                      className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-dusty-blue text-white p-4 rounded-lg shadow-lg">
                      <div className="text-sm font-medium tracking-wider all-lowercase">licensed in florida</div>
                      <div className="text-xs opacity-90 tracking-wider">{member.experience}</div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-3 font-display tracking-wider small-caps">
                      {member.name}
                    </h2>
                    <p className="text-xl text-dusty-blue font-medium tracking-wider all-lowercase mb-2">
                      {member.title}
                    </p>
                    <p className="text-lg text-soft-gray tracking-wide">
                      {member.specialty}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-cream/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="w-5 h-5 text-dusty-blue" />
                        <span className="text-sm font-medium text-charcoal tracking-wider all-lowercase">education</span>
                      </div>
                      <p className="text-sm text-soft-gray tracking-wide">{member.education}</p>
                    </div>

                    <div className="bg-cream/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-dusty-blue" />
                        <span className="text-sm font-medium text-charcoal tracking-wider all-lowercase">credentials</span>
                      </div>
                      <p className="text-sm text-soft-gray tracking-wide">{member.credentials}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-charcoal mb-3 tracking-wider small-caps">
                      specialties
                    </h3>
                    <ul className="space-y-2">
                      {member.specialties.map((specialty) => (
                        <li key={specialty} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-dusty-blue rounded-full flex-shrink-0"></div>
                          <span className="text-soft-gray tracking-wide">{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={member.href} className="btn-primary">
                      <ArrowRight className="w-5 h-5" />
                      learn more about {member.name.split(' ')[1]}
                    </Link>
                    <Link href="tel:+15616142857" className="btn-outline">
                      <Phone className="w-5 h-5" />
                      schedule consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Our Team */}
      <div className="section-padding bg-cream">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
              why choose our team
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              Our therapists bring specialized training, extensive experience, and genuine passion for helping teenagers navigate mental health challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 rounded-xl text-center">
              <GraduationCap className="w-12 h-12 text-dusty-blue mx-auto mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                specialized training
              </h3>
              <p className="text-soft-gray tracking-wide">
                Advanced degrees from top universities with specialized training in adolescent psychology and evidence-based treatments.
              </p>
            </div>

            <div className="card p-6 rounded-xl text-center">
              <Award className="w-12 h-12 text-dusty-blue mx-auto mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                extensive experience
              </h3>
              <p className="text-soft-gray tracking-wide">
                Combined 45+ years of experience specifically working with teenagers and their unique mental health needs.
              </p>
            </div>

            <div className="card p-6 rounded-xl text-center">
              <Phone className="w-12 h-12 text-dusty-blue mx-auto mb-4" />
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                compassionate care
              </h3>
              <p className="text-soft-gray tracking-wide">
                Genuine commitment to creating safe, supportive environments where teenagers feel heard and understood.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-padding bg-dusty-blue/10">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6 font-display tracking-wider small-caps">
            ready to meet our team?
          </h2>
          <p className="text-xl text-soft-gray mb-8 max-w-2xl mx-auto tracking-wide">
            Schedule a free consultation to meet our therapists and find the best match for your teenager's needs. We're here to support your family's journey to better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15616142857" className="btn-primary text-lg px-8 py-4">
              <Phone className="w-6 h-6" />
              call (561) 614-2857
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              <Mail className="w-6 h-6" />
              send us a message
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}