import { Heart, Target, Users, Shield } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'compassion',
    description: 'we approach every client with empathy, understanding, and genuine care for their wellbeing and healing journey.'
  },
  {
    icon: Target,
    title: 'excellence',
    description: 'we maintain the highest standards of professional practice and continuously improve our skills and knowledge.'
  },
  {
    icon: Users,
    title: 'collaboration',
    description: 'we work closely with clients, families, and other professionals to create comprehensive treatment plans.'
  },
  {
    icon: Shield,
    title: 'integrity',
    description: 'we uphold ethical standards, maintain confidentiality, and build trust through honest, transparent communication.'
  }
]

export function MissionValues() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-light text-charcoal mb-6 font-display tracking-wider small-caps">our mission</h2>
            <p className="text-lg text-charcoal/80 mb-6 tracking-wide">
              at avela therapy, our mission is to provide compassionate, evidence-based mental health care that empowers individuals and families to overcome challenges and thrive. we believe that everyone deserves access to quality mental health support, and we're committed to creating a safe, welcoming environment where healing can begin.
            </p>
            <p className="text-lg text-charcoal/80 tracking-wide">
              we specialize in working with adolescents and their families, understanding the unique challenges that come with this critical stage of development. our approach combines clinical expertise with genuine care, ensuring that each client receives personalized treatment that addresses their specific needs and goals.
            </p>
          </div>
          <div className="bg-[#F3E7DA] p-8 rounded-2xl">
            <h3 className="text-2xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">our vision</h3>
            <p className="text-charcoal/80 mb-4 tracking-wide">
              to be florida's leading provider of adolescent and family mental health services, known for our innovative approaches, compassionate care, and commitment to positive outcomes.
            </p>
            <p className="text-charcoal/80 tracking-wide">
              we envision a community where mental health is prioritized, stigma is eliminated, and every individual has the tools and support they need to live their best life.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-light text-charcoal text-center mb-12 font-display tracking-wider small-caps">our values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-dusty-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-dusty-blue" />
                </div>
                <h3 className="text-xl font-medium text-charcoal mb-3 font-display tracking-wider small-caps">
                  {value.title}
                </h3>
                <p className="text-charcoal/80 tracking-wide">
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
