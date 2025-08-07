import { Shield, Heart, Users, Award } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'compassionate care',
    description: 'we approach every client with empathy, understanding, and genuine care for their wellbeing.'
  },
  {
    icon: Shield,
    title: 'evidence-based treatment',
    description: 'our therapists use proven methods and stay current with the latest research in mental health.'
  },
  {
    icon: Users,
    title: 'family-centered approach',
    description: 'we involve families in the healing process, strengthening relationships and communication.'
  },
  {
    icon: Award,
    title: 'licensed professionals',
    description: 'our team consists of licensed, experienced therapists specializing in adolescent and adult care.'
  }
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-6 font-display tracking-wider small-caps">why choose avela therapy</h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto tracking-wide">
            we're committed to providing the highest quality mental health care with a focus on trust, empathy, and proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <feature.icon className="w-8 h-8 text-dusty-blue" />
              </div>
              <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                {feature.title}
              </h3>
              <p className="text-charcoal/80 tracking-wide">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
