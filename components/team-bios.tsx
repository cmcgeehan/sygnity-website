import Image from 'next/image'
import { GraduationCap, Award, Heart } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr. Sofia Georgoulias, PsyD',
    role: 'Chief Clinical Officer',
    image: '/placeholder.svg?height=300&width=300',
    credentials: 'Licensed Clinical Psychologist (FL, NY), PsyPact Participant, CASAC',
    specialties: ['Substance Abuse Treatment', 'Harm Reduction', 'First Responder Support', 'Telehealth'],
    bio: 'Dr. Georgoulias is a seasoned psychologist with over 13 years of experience working with individuals, couples, and families struggling with mental health and substance abuse issues. She is the Co-Chair of the Brooklyn Alcoholism and Substance Abuse Council and has delivered workshops and trainings for major institutions. Dr. Georgoulias has extensive experience working with First Responders and was invited to present at the First Responders Summit in Washington DC by Senator Gillibrand.'
  },
  {
    name: 'Dr. Raju Mangrola, MD',
    role: 'Medical Director',
    image: '/placeholder.svg?height=300&width=300',
    credentials: 'Board Certified in Psychiatry, Addiction Psychiatry, Forensic Psychiatry, Psychosomatic Medicine, and Addiction Medicine',
    specialties: ['Medication Management', 'Addiction Treatment', 'Psychiatric Evaluation', 'Treatment Center Leadership'],
    bio: 'With over 30 years of psychiatric practice and five board certifications, Dr. Mangrola brings unparalleled expertise to mental health care. He has served as Medical Director for prestigious treatment centers including The Hanley Center, Light House Detox, Wellness Resource Center, and Caron. His extensive experience and leadership in the field underscore his commitment to providing exceptional, patient-focused care.'
  },
  {
    name: 'Tommy McGee, LMHC',
    role: 'Clinical Director',
    image: '/placeholder.svg?height=300&width=300',
    credentials: 'Licensed Mental Health Counselor, Certified Addiction Professional, Master\'s in Counseling Psychology',
    specialties: ['Co-occurring Disorders', 'Cultural Programs', 'Crisis Intervention', 'Treatment Planning'],
    bio: 'With over 20 years of experience in mental health and addiction treatment, Tommy has worked in clinical, supportive, and administrative roles, specializing in co-occurring disorders and diverse client populations. He has developed culturally tailored programs for Native American recovery, post-incarceration skills training, and aftercare for high-net-worth individuals. As an educator at Palm Beach State College and the Academy for Addiction Professionals, he has taught courses in Psychology, crisis intervention, and treatment planning.'
  }
]

export function TeamBios() {
  return (
    <section className="section-padding bg-[#f5f1ec]">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced, licensed professionals are dedicated to providing the highest quality mental health care for you and your family.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#20394c] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#ff6b6b] font-semibold mb-3">
                  {member.role}
                </p>
                
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-4 h-4 text-[#6cbf84]" />
                  <p className="text-sm text-gray-600">
                    {member.credentials}
                  </p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-[#6cbf84]" />
                    <span className="text-sm font-semibold text-gray-700">Specialties:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="bg-[#aedff7] text-[#20394c] text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
