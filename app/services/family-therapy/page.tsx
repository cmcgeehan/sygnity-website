import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Users, Heart, Home, Shield, Target, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Family Therapy Florida | Virtual Family Counseling with Teen Focus - Avela Therapy',
  description: 'Professional family therapy in Florida. Virtual family counseling with focus on teen mental health. Licensed therapists helping families navigate challenges together.',
  keywords: ['family therapy', 'virtual family counseling', 'teen family therapy', 'family counseling florida'],

  openGraph: {
    title: 'Family Therapy Florida | Virtual Family Counseling with Teen Focus - Avela Therapy',
    description: 'Professional family therapy in Florida. Virtual family counseling with focus on teen mental health.',
    url: 'https://avelatherapy.com/services/family-therapy',
  }
}

export default function FamilyTherapyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-[#f5f1ec] to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Family Therapy Florida - Strengthen Your Family with Teen-Focused Counseling
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Specialized family therapy in Florida focusing on families with struggling teenagers. 
                Our virtual family counseling helps improve communication, resolve conflicts, and build 
                stronger relationships between parents and teens through evidence-based therapeutic approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary text-lg py-4 px-8">
                  <Phone className="w-5 h-5" />
                  Free Family Therapy Consultation
                </Link>
                <Link href="/services/adolescent-therapy" className="btn-secondary text-lg py-4 px-8 flex items-center gap-2">
                  Adolescent Therapy Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Signs Your Family May Benefit from Therapy</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Constant conflicts between parents and teen</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Communication breakdowns in the family</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Teen behavioral or mental health issues</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Major life transitions or changes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Feeling disconnected as a family unit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Family Issues Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Common Family Issues We Address in Florida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our family therapy specialists help Florida families navigate the unique challenges that arise 
              when raising teenagers in today's world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Communication Problems</h3>
              <p className="text-gray-600 mb-4">
                Breakdown in parent-teen communication, misunderstandings, and difficulty expressing feelings.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Parent-teen communication barriers</li>
                <li>• Active listening skill development</li>
                <li>• Healthy conflict resolution</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Behavioral Challenges</h3>
              <p className="text-gray-600 mb-4">
                Teen defiance, rule-breaking, and family dynamics that contribute to ongoing behavioral issues.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Setting healthy boundaries</li>
                <li>• Consistent family rules</li>
                <li>• Positive reinforcement strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Mental Health Support</h3>
              <p className="text-gray-600 mb-4">
                Supporting families when a teen is struggling with anxiety, depression, or other mental health issues.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Understanding teen mental health</li>
                <li>• Family support strategies</li>
                <li>• Crisis intervention planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Life Transitions</h3>
              <p className="text-gray-600 mb-4">
                Helping families navigate divorce, remarriage, moving, or other major life changes affecting teens.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Divorce and separation support</li>
                <li>• Blended family integration</li>
                <li>• Moving and school changes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Sibling Conflicts</h3>
              <p className="text-gray-600 mb-4">
                Addressing ongoing sibling rivalry and conflicts that disrupt family harmony and peace.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sibling relationship improvement</li>
                <li>• Fair conflict resolution</li>
                <li>• Individual attention strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Family Structure Issues</h3>
              <p className="text-gray-600 mb-4">
                Establishing healthy family roles, boundaries, and structure that supports teen development.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Healthy family hierarchy</li>
                <li>• Role clarification</li>
                <li>• Boundary establishment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Family Therapy Approaches Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Our Family Therapy Approaches in Florida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based family therapy methods designed to strengthen family relationships and improve communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Structural Family Therapy</h3>
              <p className="text-gray-600 mb-4">
                Focuses on reorganizing family structure to create healthier boundaries and hierarchies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Family boundary setting</li>
                <li>• Role restructuring</li>
                <li>• Hierarchy establishment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Strategic Family Therapy</h3>
              <p className="text-gray-600 mb-4">
                Problem-focused approach targeting specific behavioral patterns and family dynamics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Behavioral pattern changes</li>
                <li>• Problem-solving strategies</li>
                <li>• Communication enhancement</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Emotionally Focused Therapy (EFT)</h3>
              <p className="text-gray-600 mb-4">
                Helping family members understand and express emotions to build stronger connections.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Emotional awareness</li>
                <li>• Attachment strengthening</li>
                <li>• Empathy development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Family Therapy Benefits */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                Benefits of Virtual Family Therapy in Florida
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Virtual family therapy offers unique advantages for Florida families, making it easier 
                to access consistent, quality family counseling services.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Comfortable Home Environment</h4>
                    <p className="text-gray-600">Family sessions in your own space can feel more natural and relaxed</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Flexible Scheduling</h4>
                    <p className="text-gray-600">Sessions that work around work, school, and family commitments</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Consistent Participation</h4>
                    <p className="text-gray-600">No travel means better attendance and more consistent progress</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Teen Engagement</h4>
                    <p className="text-gray-600">Many teens are more comfortable participating in online sessions</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">What to Expect in Family Therapy</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Family Assessment</h4>
                    <p className="text-gray-600 text-sm">Understanding family dynamics, communication patterns, and goals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Treatment Planning</h4>
                    <p className="text-gray-600 text-sm">Collaborative goal setting with all family members</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Active Therapy Sessions</h4>
                    <p className="text-gray-600 text-sm">Skill building, communication practice, and conflict resolution</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Progress & Maintenance</h4>
                    <p className="text-gray-600 text-sm">Ongoing support and relapse prevention strategies</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Parent Support Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Common Parent Concerns</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#ff6b6b] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">"My teen won't listen to anything I say"</h4>
                    <p className="text-gray-600 text-sm">Learn communication techniques that actually work with teenagers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#ff6b6b] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">"We fight about everything"</h4>
                    <p className="text-gray-600 text-sm">Develop healthy conflict resolution and pick your battles wisely</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#ff6b6b] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">"I don't know how to help my struggling teen"</h4>
                    <p className="text-gray-600 text-sm">Learn specific strategies for supporting teens with mental health issues</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#ff6b6b] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">"Our family feels disconnected"</h4>
                    <p className="text-gray-600 text-sm">Rebuild family bonds and create meaningful connections</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                Supporting Florida Parents Through Family Challenges
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Parenting teenagers is one of the most challenging phases of family life. Our family therapy 
                services in Florida provide parents with the tools, understanding, and support needed to 
                navigate this difficult but important time.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through virtual family counseling, you'll learn evidence-based strategies for improving 
                communication, setting healthy boundaries, and supporting your teen's mental health while 
                maintaining your own well-being as a parent.
              </p>
              <Link 
                href="/for-parents" 
                className="inline-flex items-center gap-2 text-[#ff6b6b] font-semibold hover:gap-3 transition-all"
              >
                Explore Parent Resources
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-[#20394c] to-[#2e4f64] rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Strengthen Your Family Relationships Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start with a free consultation to discuss how family therapy can help your family 
              in Florida. Take the first step toward better communication and stronger relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15616142857" className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff5252] transition-colors">
                Call for Free Family Therapy Consultation
              </Link>
              <Link href="/teen-anxiety" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#20394c] transition-colors">
                Teen Anxiety Therapy Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}