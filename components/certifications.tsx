import { Shield, Award, CheckCircle, Star } from 'lucide-react'

const certifications = [
  {
    icon: Shield,
    title: 'Licensed Professionals',
    description: 'All our therapists are licensed by the State of Florida and maintain current certifications.'
  },
  {
    icon: Award,
    title: 'Specialized Training',
    description: 'Our team has advanced training in adolescent mental health, trauma-informed care, and evidence-based practices.'
  },
  {
    icon: CheckCircle,
    title: 'Continuing Education',
    description: 'We stay current with the latest research and best practices through ongoing professional development.'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: 'We maintain the highest standards of care through regular supervision and quality improvement initiatives.'
  }
]

const licenses = [
  'Licensed Clinical Social Worker (LCSW)',
  'Licensed Mental Health Counselor (LMHC)',
  'Board-Certified Psychiatrist (MD)',
  'Certified Addiction Counselor (CAC)',
  'Trauma-Informed Care Certified',
  'Adolescent Mental Health Specialist'
]

export function Certifications() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
            Certifications & Licensing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our professional credentials and ongoing dedication to the highest standards of care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#aedff7] rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-3">
                {cert.title}
              </h3>
              <p className="text-gray-600">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-[#20394c] text-center mb-8">
            Professional Licenses & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {licenses.map((license, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-[#f5f1ec] rounded-lg">
                <CheckCircle className="w-5 h-5 text-[#6cbf84] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{license}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
