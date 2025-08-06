import { Shield, Heart, Users, Award } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'We approach every client with empathy, understanding, and genuine care for their wellbeing.'
  },
  {
    icon: Shield,
    title: 'Evidence-Based Treatment',
    description: 'Our therapists use proven methods and stay current with the latest research in mental health.'
  },
  {
    icon: Users,
    title: 'Family-Centered Approach',
    description: 'We involve families in the healing process, strengthening relationships and communication.'
  },
  {
    icon: Award,
    title: 'Licensed Professionals',
    description: 'Our team consists of licensed, experienced therapists specializing in adolescent and adult care.'
  }
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#f5f1ec]">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
            Why Choose Sygnity Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality mental health care with a focus on trust, empathy, and proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <feature.icon className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
