import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-16 h-16 bg-[#aedff7] rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-[#20394c]" />
      </div>
      
      <h3 className="text-2xl font-bold text-[#20394c] mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <Link 
        href={href}
        className="text-[#ff6b6b] font-semibold flex items-center gap-2 hover:gap-3 transition-all group"
      >
        Learn More
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
