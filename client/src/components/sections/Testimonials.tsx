import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO, FinTech Solutions',
    company: 'FinCorp',
    content: 'Skyline Innovation transformed our security infrastructure. Their gold-standard approach to cybersecurity gave us complete peace of mind.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Operations Director',
    company: 'Global Retail',
    content: 'The web platform they built increased our sales by 300%. Their attention to detail and premium service is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200'
  },
  {
    id: 3,
    name: 'Jennifer Park',
    role: 'IT Manager',
    company: 'Healthcare Plus',
    content: 'Database migration was seamless with zero downtime. Their team handled everything professionally and efficiently.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'CEO',
    company: 'TechStart Inc',
    content: 'From WiFi setup to ongoing support, their service has been exceptional. Truly a premium technology partner.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200'
  },
  {
    id: 5,
    name: 'Amanda Wilson',
    role: 'Marketing Director',
    company: 'Luxe Brands',
    content: 'The brand identity package they created elevated our entire company. Professional, creative, and premium.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200'
  },
  {
    id: 6,
    name: 'Robert Kim',
    role: 'Systems Architect',
    company: 'Enterprise Cloud',
    content: 'Their cloud migration strategy saved us 40% in costs while improving performance. Outstanding results.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black-light border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Quote className="h-4 w-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-light max-w-3xl mx-auto">
            Hear from industry leaders who have experienced our gold-standard technology solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-black-light border border-gold/10 hover:border-gold/30 transition-all group"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-gold/30 mb-4" />

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-gray'}`} 
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-light mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback className="bg-gold/20 text-gold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray">{testimonial.role}</div>
                    <div className="text-xs text-gold">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-light mb-6">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-2xl font-bold text-white">FIN TECH</div>
            <div className="text-2xl font-bold text-white">HEALTHCARE</div>
            <div className="text-2xl font-bold text-white">RETAIL</div>
            <div className="text-2xl font-bold text-white">EDUCATION</div>
            <div className="text-2xl font-bold text-white">GOVERNMENT</div>
          </div>
        </div>
      </div>
    </section>
  )
}