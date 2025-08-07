import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Kayti',
    role: 'Client',
    content: 'If you\'re looking for a caring, compassionate, understanding and motivational therapist miss Madeline Friedman is your go to girl!!! I\'ve never been big on trusting or opening up to anyone but this woman has helped me more in the last two months than I ever thought was even possible! She\'s truly a genuine soul with a huge heart who deserves nothing but the absolute best this life has to offer! I know ive said it before but thank you Madeline you don\'t know how much I appreciate you and the things you\'ve done to help me through the most difficult time in my life.. I will forever be grateful!!!',
    rating: 5
  },
  {
    name: 'Brennen V',
    role: 'Client',
    content: 'Madeline Friedman has been working with me as her patient for the better half of 3 months. I first want to acknowledge her exceptional abilities to empathize and respond with realistic, sensible advice. Her demeanor and attitude towards her job exemplifies a caring individual who genuinely takes her job seriously. I would recommend Madeline to anyone that is searching for someone as compassionate as her. Thank you so much Madeline.',
    rating: 5
  },
  {
    name: 'Jennifer D',
    role: 'Client',
    content: 'Avela Therapy has saved my life. I\'ve been seeing the therapist Madeline Friedman for a few months through virtual sessions. It\'s extremely beneficial for me. She and Dr. Mangrola (who offers medication management) are both amazing. The virtual platform is so convenient and this is a perfect option! I would recommend Avela Therapy to anyone.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Authentic testimonials from clients who have experienced life-changing support through our virtual therapy services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-[#20394c]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
