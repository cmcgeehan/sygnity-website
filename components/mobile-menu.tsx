'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface NavigationItem {
  name: string
  href: string
}

interface MobileMenuProps {
  navigation: NavigationItem[]
}

function MobileMenu({ navigation }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2"
        type="button"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-700 hover:text-[#20394c] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileMenu 