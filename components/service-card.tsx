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
    <div className="card p-8 rounded-2xl hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-dusty-blue/20 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-dusty-blue" />
      </div>
      
      <h3 className="text-2xl font-medium text-charcoal mb-4 font-display tracking-wider small-caps">
        {title}
      </h3>
      
      <p className="text-soft-gray mb-6 leading-relaxed tracking-wide">
        {description}
      </p>
      
      <Link 
        href={href}
        className="text-blush-pink font-medium flex items-center gap-2 hover:gap-3 transition-all group hover:text-dusty-blue tracking-wider all-lowercase"
      >
        learn more
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}