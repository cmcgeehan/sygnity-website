import type { Metadata } from 'next'
import { TeamBios } from '@/components/team-bios'
import { MissionValues } from '@/components/mission-values'
import { Certifications } from '@/components/certifications'

export const metadata: Metadata = {
  title: 'About Sygnity Wellness - Expert Teen Therapy Team Florida | Virtual Teen Counseling',
  description: 'Meet our experienced teen therapy team in Florida led by licensed professionals specializing in virtual teen anxiety, depression, and trauma therapy. Expert adolescent mental health care.',
  keywords: 'teen therapy Florida team, virtual teen therapy Florida, teen anxiety therapy Florida, teen depression therapy Florida, licensed teen therapists Florida, adolescent mental health Florida',
  alternates: {
    canonical: 'https://sygnityhealth.com/about'
  },
  openGraph: {
    title: 'About Sygnity Wellness - Expert Teen Therapy Team Florida',
    description: 'Meet our experienced teen therapy team in Florida specializing in virtual adolescent mental health care.',
    url: 'https://sygnityhealth.com/about',
  }
}

export default function AboutPage() {
  return (
    <div>
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
              Expert Teen Therapy Team Florida
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Florida teen therapy team brings over 60 years of combined experience in virtual teen mental health care, adolescent anxiety therapy, teen depression treatment, and trauma counseling. Licensed professionals specializing in evidence-based virtual teen therapy for Florida families.
            </p>
          </div>
        </div>
      </div>
      
      <MissionValues />
      <TeamBios />
      <Certifications />
    </div>
  )
}
