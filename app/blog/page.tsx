import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Therapy Blog Florida | Virtual Mental Health Resources for Parents - Avela Therapy',
  description: 'Expert insights on teen anxiety, depression, and trauma therapy in Florida. Virtual outpatient mental health resources, therapy tips for parents, and professional guidance for helping your teenager.',
  keywords: 'teen therapy Florida blog, virtual teen therapy Florida, teen anxiety therapy Florida, teen depression therapy Florida, teen trauma therapy Florida, help my depressed teenager Florida, teen mental health resources Florida',
}

const blogPosts = [
  {
    slug: 'why-virtual-teen-therapy-works-better-than-you-think',
    title: 'Why Virtual Teen Therapy Works Better Than You Think',
    excerpt: 'Research proves virtual therapy works for teens. Higher engagement rates, better outcomes, and surprising advantages over traditional in-person therapy. Discover the science behind online therapy success.',
    author: 'Dr. Tommy McGee',
    date: '2025-08-08',
    category: 'Teen Mental Health',
    readTime: '22 min read'
  },
  {
    slug: 'school-refusal-therapy-miami-teens-back-learning',
    title: 'School Refusal Therapy in Miami: Getting Teens Back to Learning',
    excerpt: 'Comprehensive school refusal therapy for Miami teens. Virtual treatment helps overcome school avoidance and anxiety while supporting families through the journey back to academic success.',
    author: 'Dr. Tommy McGee',
    date: '2025-08-07',
    category: 'Teen Mental Health',
    readTime: '18 min read'
  },
  {
    slug: 'teen-therapy-fort-lauderdale-virtual-mental-health',
    title: 'Teen Therapy in Fort Lauderdale: Virtual Mental Health Services',
    excerpt: 'Comprehensive virtual mental health services for Broward County teens. Expert therapy for anxiety, depression, trauma, and behavioral challenges from licensed Florida therapists.',
    author: 'Dr. Tommy McGee',
    date: '2025-08-07',
    category: 'Teen Mental Health',
    readTime: '25 min read'
  },
  {
    slug: 'teen-trauma-therapy-tampa-emdr-virtual-healing',
    title: 'Teen Trauma Therapy in Tampa: EMDR and Virtual Healing',
    excerpt: 'Comprehensive guide to trauma therapy for Tampa teens using EMDR and virtual healing approaches. Learn how compassionate, evidence-based treatment can help your teenager recover from trauma and reclaim their future.',
    author: 'Dr. Tommy McGee',
    date: '2025-08-07',
    category: 'Teen Trauma Recovery',
    readTime: '18 min read'
  },
  {
    slug: 'virtual-vs-in-person-teen-therapy',
    title: 'Virtual vs In-Person Teen Therapy: Which is Better for Your Teen?',
    excerpt: 'A comprehensive, research-based guide to help Florida parents choose between virtual and in-person therapy options for their teenager\'s mental health needs.',
    author: 'Dr. Tommy McGee',
    date: '2025-01-10',
    category: 'Teen Mental Health',
    readTime: '22 min read'
  },
  {
    slug: 'teen-depression-treatment-west-palm-beach-online-counseling',
    title: 'Teen Depression Treatment in West Palm Beach: Online Counseling Services',
    excerpt: 'Expert teen depression treatment in West Palm Beach through virtual counseling. Licensed therapists specializing in adolescent depression therapy for Palm Beach County families.',
    author: 'Dr. Tommy McGee',
    date: '2024-02-20',
    category: 'Teen Depression',
    readTime: '15 min read'
  },
  {
    slug: '5-signs-your-teen-might-be-struggling',
    title: '5 Signs Your Teen Needs Mental Health Help - Florida Teen Therapy Guide',
    excerpt: 'Recognize warning signs of teen anxiety, depression, and trauma. Learn when to seek professional virtual teen therapy in Florida and how to start the conversation with our anxiety, depression, and trauma specialists.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    category: 'Teen Mental Health',
    readTime: '12 min read'
  },
  {
    slug: 'what-to-expect-first-therapy-call',
    title: 'First Teen Therapy Call: What to Expect in Florida Virtual Therapy',
    excerpt: 'Complete guide to your teen\'s first virtual therapy consultation in Florida. Learn how to prepare, what questions to ask, and what happens during the initial call.',
    author: 'Michael Rodriguez',
    date: '2024-01-10',
    category: 'Getting Started',
    readTime: '15 min read'
  },
  {
    slug: 'florida-resources-adolescent-mental-health',
    title: 'Complete Guide to Teen Mental Health Resources in Florida 2025',
    excerpt: 'Comprehensive directory of teen therapy resources in Florida. Find crisis support, community mental health centers, virtual therapy options, and insurance information.',
    author: 'Dr. Emily Chen',
    date: '2024-01-05',
    category: 'Resources',
    readTime: '20 min read'
  },
  {
    slug: 'understanding-teen-anxiety-depression',
    title: 'Teen Anxiety & Depression in Florida: Parent\'s Guide to Virtual Therapy',
    excerpt: 'Distinguish between normal teen emotions and clinical anxiety/depression. Learn when Florida teens need professional help with our specialized anxiety therapy and depression counseling services in Miami and West Palm Beach.',
    author: 'Dr. Sarah Johnson',
    date: '2023-12-28',
    category: 'Teen Mental Health',
    readTime: '18 min read'
  },
  {
    slug: 'family-therapy-benefits',
    title: 'Family Therapy for Teen Mental Health in Florida: Virtual Sessions That Work',
    excerpt: 'How family therapy strengthens relationships when your teen has anxiety, depression, or trauma. Benefits of virtual family therapy sessions in Florida.',
    author: 'Michael Rodriguez',
    date: '2023-12-20',
    category: 'Family Therapy',
    readTime: '16 min read'
  }
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6 font-display tracking-wider small-caps">
              mental health resources & insights
            </h1>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto tracking-wide">
              expert guidance on adolescent mental health, parenting tips, and florida resources to support your family's wellness journey.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding bg-cream">
        <div className="container-max">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[#6cbf84] to-[#4a9c6b] flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6b6b] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {blogPosts[0].title}
                  </h3>
                </div>
              </div>
              <div className="p-8 lg:flex lg:flex-col lg:justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="bg-[#aedff7] text-[#20394c] px-3 py-1 rounded-full font-medium">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#20394c] mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{blogPosts[0].author}</span>
                  </div>
                  <Link 
                    href={`/blog/${blogPosts[0].slug}`}
                    className="text-[#ff6b6b] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => {
              // Different colors for variety
              const colors = [
                'bg-gradient-to-br from-[#ff6b6b] to-[#e55555]',
                'bg-gradient-to-br from-[#aedff7] to-[#8bc5e6]',
                'bg-gradient-to-br from-[#f5f1ec] to-[#e8e0d8]',
                'bg-gradient-to-br from-[#6cbf84] to-[#4a9c6b]'
              ]
              const colorClass = colors[index % colors.length]
              
              return (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`relative h-48 ${colorClass} flex items-center justify-center p-6`}>
                    <h3 className="text-xl font-bold text-white leading-tight text-center">
                      {post.title}
                    </h3>
                  </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-[#f5f1ec] text-[#20394c] px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#20394c] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-[#ff6b6b] font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                                  </div>
                </article>
              )
            })}
          </div>

          {/* Service Links Section */}
          <div className="mt-16 mb-12 bg-white rounded-2xl p-8 text-center border border-dusty-blue/10">
            <h2 className="text-2xl md:text-3xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
              looking for teen therapy services?
            </h2>
            <p className="text-charcoal/80 mb-6 max-w-2xl mx-auto tracking-wide">
              if you're ready to get help for your teen, explore our specialized therapy services available throughout florida.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link href="/teen-anxiety" className="btn-secondary text-sm">
                teen anxiety therapy
              </Link>
              <Link href="/teen-depression" className="btn-secondary text-sm">
                teen depression therapy
              </Link>
              <Link href="/teen-trauma" className="btn-secondary text-sm">
                teen trauma therapy
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/locations/miami" className="text-charcoal hover:text-blush-pink font-medium underline transition-colors tracking-wider">
                miami teen therapy
              </Link>
              <Link href="/locations/west-palm-beach" className="text-charcoal hover:text-blush-pink font-medium underline transition-colors tracking-wider">
                west palm beach therapy
              </Link>
              <Link href="/" className="text-charcoal hover:text-blush-pink font-medium underline transition-colors tracking-wider">
                all florida locations
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 bg-charcoal rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-light text-cream mb-4 font-display tracking-wider small-caps">
              stay updated on teen mental health
            </h2>
            <p className="text-cream/80 mb-6 max-w-2xl mx-auto tracking-wide">
              get the latest insights, tips, and resources delivered to your inbox. join our community of parents and professionals committed to adolescent wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blush-pink bg-cream text-charcoal placeholder-charcoal/60"
              />
              <button className="bg-blush-pink hover:bg-blush-pink/90 text-charcoal font-medium py-3 px-6 rounded-lg transition-colors tracking-wider">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
