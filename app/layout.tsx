import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/fixes.css'
import { StickyCallBar } from '@/components/sticky-call-bar'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Teen Therapy Florida | Virtual Teen Anxiety & Depression Treatment - Avela Therapy',
  description: 'Professional teen therapy services in Florida. Virtual anxiety, depression, and trauma treatment for teenagers. Licensed therapists specializing in adolescent mental health.',
  authors: [{ name: 'Avela Therapy Team' }],
  keywords: ['teen therapy florida', 'virtual teen counseling', 'teen anxiety therapy', 'teen depression treatment', 'adolescent mental health'],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://avelatherapy.com/',
    siteName: 'Avela Therapy',
    title: 'Teen Therapy Florida | Virtual Teen Anxiety & Depression Treatment - Avela Therapy',
    description: 'Professional teen therapy services in Florida. Virtual anxiety, depression, and trauma treatment for teenagers.',
    images: [
      {
        url: 'https://avelatherapy.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Avela Therapy - Teen Therapy Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Therapy Florida | Virtual Teen Anxiety & Depression Treatment - Avela Therapy',
    description: 'Professional teen therapy services in Florida. Virtual anxiety, depression, and trauma treatment for teenagers.',
    images: ['https://avelatherapy.com/og-image.jpg']
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Florida',
    'geo.position': '27.7663;-82.6404',
    'ICBM': '27.7663, -82.6404'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/avelaWordmark.png" type="image/png" />
        <link rel="apple-touch-icon" href="/avelaWordmark.png" />
        <link rel="icon" type="image/png" sizes="any" href="/avelaWordmark.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["MedicalBusiness", "LocalBusiness", "Organization"],
                "name": "Avela Therapy",
                "alternateName": "Avela Teen Therapy Florida",
                "description": "Virtual teen therapy in Florida specializing in anxiety, depression, and trauma treatment for teenagers and adolescents",
                "url": "https://avelatherapy.com",
                "logo": "https://avelatherapy.com/avelaWordmark.png",
                "image": "https://avelatherapy.com/og-image.jpg",
                "telephone": "+15616142857",
                "email": "info@avelatherapy.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "FL",
                  "addressCountry": "US",
                  "addressLocality": "Florida"
                },
                "areaServed": [
                  {
                    "@type": "State",
                    "name": "Florida"
                  },
                  {
                    "@type": "City",
                    "name": "Miami",
                    "containedInPlace": {
                      "@type": "State",
                      "name": "Florida"
                    }
                  },
                  {
                    "@type": "City", 
                    "name": "Orlando",
                    "containedInPlace": {
                      "@type": "State",
                      "name": "Florida"
                    }
                  },
                  {
                    "@type": "City",
                    "name": "Tampa", 
                    "containedInPlace": {
                      "@type": "State",
                      "name": "Florida"
                    }
                  },
                  {
                    "@type": "City",
                    "name": "West Palm Beach",
                    "containedInPlace": {
                      "@type": "State", 
                      "name": "Florida"
                    }
                  },
                  {
                    "@type": "City",
                    "name": "Fort Lauderdale",
                    "containedInPlace": {
                      "@type": "State",
                      "name": "Florida"
                    }
                  }
                ],
                "medicalSpecialty": [
                  "Adolescent Psychology",
                  "Mental Health Counseling", 
                  "Anxiety Treatment",
                  "Depression Treatment",
                  "Trauma Therapy",
                  "ADHD Treatment",
                  "Substance Abuse Treatment",
                  "Family Therapy"
                ],
                "serviceType": "Virtual Therapy",
                "priceRange": "$$",
                "paymentAccepted": ["Insurance", "Self-Pay", "HSA", "FSA"],
                "currenciesAccepted": "USD",
                "openingHours": "Mo-Fr 08:00-18:00",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Teen Therapy Services Florida",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "MedicalTherapy",
                        "name": "Teen Anxiety Therapy Florida",
                        "description": "Virtual anxiety treatment for teenagers in Florida using evidence-based CBT and DBT techniques"
                      }
                    },
                    {
                      "@type": "Offer", 
                      "itemOffered": {
                        "@type": "MedicalTherapy",
                        "name": "Teen Depression Therapy Florida",
                        "description": "Virtual depression treatment for teenagers in Florida with licensed therapists"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "MedicalTherapy", 
                        "name": "Teen Trauma Therapy Florida",
                        "description": "Virtual trauma and PTSD treatment for teenagers in Florida using EMDR and trauma-focused CBT"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "MedicalTherapy",
                        "name": "Teen ADHD Treatment Florida", 
                        "description": "Virtual ADHD therapy and support for teenagers in Florida"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "MedicalTherapy",
                        "name": "Family Therapy Florida",
                        "description": "Virtual family therapy sessions for teens and families in Florida"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating", 
                  "ratingValue": "4.9",
                  "bestRating": "5",
                  "worstRating": "1", 
                  "ratingCount": "47"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/avela-therapy",
                  "https://www.facebook.com/avelatherapy",
                  "https://www.instagram.com/avelatherapy"
                ]
              }
            ])
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  )
}
