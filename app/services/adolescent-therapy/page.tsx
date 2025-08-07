import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Brain, Heart, Users, Shield, Star, Target, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Adolescent Therapy Florida | Virtual Teen Mental Health Treatment - Avela Therapy',
  description: 'Professional adolescent therapy in Florida. Virtual teen mental health treatment for anxiety, depression, and trauma. Licensed therapists specializing in teen counseling.',
  keywords: ['adolescent therapy', 'teen mental health', 'virtual teen counseling', 'teen therapy florida'],

  openGraph: {
    title: 'Adolescent Therapy Florida | Virtual Teen Mental Health Treatment - Avela Therapy',
    description: 'Professional adolescent therapy in Florida. Virtual teen mental health treatment for anxiety, depression, and trauma.',
    url: 'https://avelatherapy.com/services/adolescent-therapy',
  }
}

export default function AdolescentTherapyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-[#f5f1ec] to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Adolescent Therapy Florida - Expert Virtual Teen Mental Health Treatment
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Specialized adolescent therapy in Florida providing comprehensive virtual mental health treatment 
                for teenagers. Our licensed therapists understand the unique challenges teens face and offer 
                evidence-based counseling for anxiety, depression, trauma, and behavioral issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary text-lg py-4 px-8">
                  <Phone className="w-5 h-5" />
                  Free Teen Therapy Consultation
                </Link>
                <Link href="/services/family-therapy" className="btn-secondary text-lg py-4 px-8 flex items-center gap-2">
                  Family Therapy Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Why Choose Adolescent Therapy?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen-specific therapeutic approaches</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Licensed adolescent specialists in Florida</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Convenient virtual therapy sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Evidence-based treatment methods</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Flexible scheduling for busy teens</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Common Teen Issues Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Common Teen Mental Health Issues We Treat in Florida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our adolescent therapy specialists provide comprehensive virtual treatment for the mental health 
              challenges that commonly affect teenagers in Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Teen Anxiety Disorders</h3>
              <p className="text-gray-600 mb-4">
                Social anxiety, generalized anxiety, panic attacks, and school-related anxiety affecting teen daily life.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Social anxiety and peer pressure</li>
                <li>• Academic performance anxiety</li>
                <li>• Panic attack management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Adolescent Depression</h3>
              <p className="text-gray-600 mb-4">
                Teen depression symptoms including persistent sadness, withdrawal, and loss of interest in activities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Major depressive episodes</li>
                <li>• Persistent depressive disorder</li>
                <li>• Seasonal affective disorder</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Trauma & PTSD</h3>
              <p className="text-gray-600 mb-4">
                Processing traumatic experiences and developing healthy coping strategies for teen trauma recovery.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• EMDR therapy for adolescents</li>
                <li>• Trauma-focused CBT</li>
                <li>• Grief and loss counseling</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Behavioral Issues</h3>
              <p className="text-gray-600 mb-4">
                Addressing defiant behavior, anger management, and impulse control issues in teenagers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Oppositional defiant disorder</li>
                <li>• Anger management skills</li>
                <li>• Impulse control strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Social & Relationship Issues</h3>
              <p className="text-gray-600 mb-4">
                Building social skills, navigating peer relationships, and developing healthy communication patterns.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Peer relationship difficulties</li>
                <li>• Social skills development</li>
                <li>• Communication training</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Identity & Self-Esteem</h3>
              <p className="text-gray-600 mb-4">
                Supporting teens through identity development, self-worth issues, and building confidence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Self-esteem building</li>
                <li>• Identity exploration</li>
                <li>• Body image concerns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Approaches Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Evidence-Based Adolescent Therapy Approaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our adolescent therapists in Florida use proven therapeutic methods specifically adapted for teenage clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Cognitive Behavioral Therapy (CBT)</h3>
              <p className="text-gray-600 mb-4">
                Helping teens identify and change negative thought patterns and behaviors that contribute to mental health issues.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Thought pattern identification</li>
                <li>• Behavioral modification techniques</li>
                <li>• Coping skills development</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Dialectical Behavior Therapy (DBT)</h3>
              <p className="text-gray-600 mb-4">
                Teaching teens emotional regulation, distress tolerance, and interpersonal effectiveness skills.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Emotion regulation skills</li>
                <li>• Mindfulness techniques</li>
                <li>• Interpersonal effectiveness</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Solution-Focused Brief Therapy</h3>
              <p className="text-gray-600 mb-4">
                Goal-oriented approach focusing on teen strengths and resources to create positive changes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Strength-based interventions</li>
                <li>• Goal setting and achievement</li>
                <li>• Future-focused planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Therapy Benefits Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                Why Virtual Adolescent Therapy Works for Florida Teens
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Virtual teen mental health treatment offers unique advantages for adolescents, providing 
                accessibility, comfort, and engagement that traditional in-person therapy might not offer.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Technology-Native Generation</h4>
                    <p className="text-gray-600">Teens are comfortable with digital platforms and often more engaged online</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Reduced Stigma</h4>
                    <p className="text-gray-600">Virtual sessions provide privacy and reduce concerns about being seen</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Greater Accessibility</h4>
                    <p className="text-gray-600">No transportation barriers, making consistent attendance easier</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Flexible Scheduling</h4>
                    <p className="text-gray-600">Sessions that work around school, activities, and family schedules</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Our Adolescent Therapy Process</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Initial Assessment</h4>
                    <p className="text-gray-600 text-sm">Comprehensive evaluation of teen's mental health needs and goals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Personalized Treatment Plan</h4>
                    <p className="text-gray-600 text-sm">Customized therapy approach based on individual teen needs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Regular Therapy Sessions</h4>
                    <p className="text-gray-600 text-sm">Consistent virtual sessions with progress monitoring</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Family Collaboration</h4>
                    <p className="text-gray-600 text-sm">Parent support and family involvement when appropriate</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Teen Therapy FAQ Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Adolescent Therapy Florida - Frequently Asked Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">What age range is considered adolescent therapy?</h4>
              <p className="text-gray-600 text-sm">Our adolescent therapy services in Florida are designed for teenagers ages 13-18, with specialized approaches for different developmental stages within this range.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">Do parents need to be involved in teen therapy?</h4>
              <p className="text-gray-600 text-sm">While teen therapy focuses on individual work, we often involve parents in treatment planning and provide family sessions when beneficial for the teen's progress.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">How long does adolescent therapy typically last?</h4>
              <p className="text-gray-600 text-sm">Treatment length varies based on individual needs, but most teens see significant improvement within 12-16 weeks of consistent therapy sessions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">Is virtual therapy as effective as in-person for teens?</h4>
              <p className="text-gray-600 text-sm">Research shows virtual therapy can be equally effective for teens, often with higher engagement rates due to the comfort and convenience of online sessions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-[#20394c] to-[#2e4f64] rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Support Your Teen's Mental Health?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start with a free consultation to discuss adolescent therapy options in Florida. 
              Our specialized teen therapists are here to help your teenager thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15616142857" className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff5252] transition-colors">
                Call for Free Teen Therapy Consultation
              </Link>
              <Link href="/for-parents" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#20394c] transition-colors">
                Parent Resources & Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}