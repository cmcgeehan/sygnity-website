'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'For Parents', href: '/for-parents' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const locations = [
  { name: 'Miami', href: '/locations/miami' },
  { name: 'Orlando', href: '/locations/orlando' },
  { name: 'Tampa', href: '/locations/tampa' },
  { name: 'West Palm Beach', href: '/locations/west-palm-beach' },
  { name: 'Fort Lauderdale', href: '/locations/fort-lauderdale' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const locationsRef = useRef<HTMLDivElement>(null)

  // Ensure component is mounted before allowing state changes
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    function handleClickOutside(event: MouseEvent) {
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
        setIsLocationsOpen(false)
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsLocationsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isMounted])

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-[#20394c]">
              Sygnity Wellness
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#20394c] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Locations Dropdown */}
            <div className="relative" ref={locationsRef}>
              <button
                onClick={() => isMounted && setIsLocationsOpen(!isLocationsOpen)}
                className="text-gray-700 hover:text-[#20394c] font-medium transition-colors flex items-center gap-1"
                type="button"
                aria-expanded={isLocationsOpen}
                aria-haspopup="true"
                disabled={!isMounted}
              >
                Locations
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${isLocationsOpen && isMounted ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                  isLocationsOpen && isMounted ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
              >
                {locations.map((location) => (
                  <Link
                    key={location.name}
                    href={location.href}
                    className="block px-4 py-2 text-gray-700 hover:text-[#20394c] hover:bg-gray-50 transition-colors"
                    onClick={() => setIsLocationsOpen(false)}
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="tel:+15616142857" className="btn-primary">
              <Phone className="w-4 h-4" />
              Call Now
            </Link>
          </div>

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
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white border-t absolute top-full left-0 right-0 z-50 shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-6">
            <div className="flex flex-col space-y-6">
              {/* Main Navigation Items */}
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-[#20394c] font-medium py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Locations */}
              <div className="border-t pt-4">
                <div className="text-sm font-semibold text-gray-500 mb-3">Locations</div>
                <div className="flex flex-col space-y-3">
                  {locations.map((location) => (
                    <Link
                      key={location.name}
                      href={location.href}
                      className="text-gray-700 hover:text-[#20394c] font-medium py-2 pl-4 border-b border-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}