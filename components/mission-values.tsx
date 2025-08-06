import { Heart, Target, Users, Shield } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We approach every client with empathy, understanding, and genuine care for their wellbeing and healing journey.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We maintain the highest standards of professional practice and continuously improve our skills and knowledge.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients, families, and other professionals to create comprehensive treatment plans.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold ethical standards, maintain confidentiality, and build trust through honest, transparent communication.'
  }
]

export function MissionValues() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#20394c] mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Sygnity Wellness, our mission is to provide compassionate, evidence-based mental health care that empowers individuals and families to overcome challenges and thrive. We believe that everyone deserves access to quality mental health support, and we're committed to creating a safe, welcoming environment where healing can begin.
            </p>
            <p className="text-lg text-gray-600">
              We specialize in working with adolescents and their families, understanding the unique challenges that come with this critical stage of development. Our approach combines clinical expertise with genuine care, ensuring that each client receives personalized treatment that addresses their specific needs and goals.
            </p>
          </div>
          <div className="bg-[#f5f1ec] p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[#20394c] mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-4">
              To be Florida's leading provider of adolescent and family mental health services, known for our innovative approaches, compassionate care, and commitment to positive outcomes.
            </p>
            <p className="text-gray-600">
              We envision a community where mental health is prioritized, stigma is eliminated, and every individual has the tools and support they need to live their best life.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#20394c] text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#aedff7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#20394c]" />
                </div>
                <h3 className="text-xl font-bold text-[#20394c] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
