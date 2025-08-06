import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Therapy Blog Florida | Virtual Mental Health Resources for Parents - Sygnity Wellness',
  description: 'Expert insights on teen anxiety, depression, and trauma therapy in Florida. Virtual outpatient mental health resources, therapy tips for parents, and professional guidance for helping your teenager.',
  keywords: 'teen therapy Florida blog, virtual teen therapy Florida, teen anxiety therapy Florida, teen depression therapy Florida, teen trauma therapy Florida, help my depressed teenager Florida, teen mental health resources Florida',
}

const blogPosts = [
  {
    slug: '5-signs-your-teen-might-be-struggling',
    title: '5 Signs Your Teen Needs Mental Health Help - Florida Teen Therapy Guide',
    excerpt: 'Recognize warning signs of teen anxiety, depression, and trauma. Learn when to seek professional virtual teen therapy in Florida and how to start the conversation with our anxiety, depression, and trauma specialists.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    category: 'Teen Mental Health',
    image: '/placeholder.svg?height=300&width=500&text=Teen+Mental+Health+Signs',
    readTime: '12 min read'
  },
  {
    slug: 'what-to-expect-first-therapy-call',
    title: 'First Teen Therapy Call: What to Expect in Florida Virtual Therapy',
    excerpt: 'Complete guide to your teen\'s first virtual therapy consultation in Florida. Learn how to prepare, what questions to ask, and what happens during the initial call.',
    author: 'Michael Rodriguez',
    date: '2024-01-10',
    category: 'Getting Started',
    image: '/placeholder.svg?height=300&width=500&text=First+Therapy+Call',
    readTime: '15 min read'
  },
  {
    slug: 'florida-resources-adolescent-mental-health',
    title: 'Complete Guide to Teen Mental Health Resources in Florida 2025',
    excerpt: 'Comprehensive directory of teen therapy resources in Florida. Find crisis support, community mental health centers, virtual therapy options, and insurance information.',
    author: 'Dr. Emily Chen',
    date: '2024-01-05',
    category: 'Resources',
    image: '/placeholder.svg?height=300&width=500&text=Florida+Mental+Health+Resources',
    readTime: '20 min read'
  },
  {
    slug: 'understanding-teen-anxiety-depression',
    title: 'Teen Anxiety & Depression in Florida: Parent\'s Guide to Virtual Therapy',
    excerpt: 'Distinguish between normal teen emotions and clinical anxiety/depression. Learn when Florida teens need professional help with our specialized anxiety therapy and depression counseling services in Miami and West Palm Beach.',
    author: 'Dr. Sarah Johnson',
    date: '2023-12-28',
    category: 'Teen Mental Health',
    image: '/placeholder.svg?height=300&width=500&text=Teen+Anxiety+Depression',
    readTime: '18 min read'
  },
  {
    slug: 'family-therapy-benefits',
    title: 'Family Therapy for Teen Mental Health in Florida: Virtual Sessions That Work',
    excerpt: 'How family therapy strengthens relationships when your teen has anxiety, depression, or trauma. Benefits of virtual family therapy sessions in Florida.',
    author: 'Michael Rodriguez',
    date: '2023-12-20',
    category: 'Family Therapy',
    image: '/placeholder.svg?height=300&width=500&text=Family+Therapy+Benefits',
    readTime: '16 min read'
  }
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
              Mental Health Resources & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance on adolescent mental health, parenting tips, and Florida resources to support your family's wellness journey.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-max">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#ff6b6b] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
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
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
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
            ))}
          </div>

          {/* Service Links Section */}
          <div className="mt-16 mb-12 bg-[#f5f1ec] rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#20394c] mb-4">
              Looking for Teen Therapy Services?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you're ready to get help for your teen, explore our specialized therapy services available throughout Florida.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link href="/teen-anxiety" className="btn-secondary text-sm">
                Teen Anxiety Therapy
              </Link>
              <Link href="/teen-depression" className="btn-secondary text-sm">
                Teen Depression Therapy
              </Link>
              <Link href="/teen-trauma" className="btn-secondary text-sm">
                Teen Trauma Therapy
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/locations/miami" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline">
                Miami Teen Therapy
              </Link>
              <Link href="/locations/west-palm-beach" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline">
                West Palm Beach Therapy
              </Link>
              <Link href="/" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline">
                All Florida Locations
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 bg-[#20394c] rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated on Teen Mental Health
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights, tips, and resources delivered to your inbox. Join our community of parents and professionals committed to adolescent wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#6cbf84]"
              />
              <button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
