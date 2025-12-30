import { Users, Target, Award, CheckCircle, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Gold-standard quality in every project we undertake.'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Working collaboratively as an extension of your team.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Staying ahead with cutting-edge technology solutions.'
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on.'
  }
]

const team = [
  { name: 'Mr Benny ', role: 'Cybersecurity Lead', expertise: '10+ years' },
  { name: 'Yusuph shabani', role: 'Web Development Director', expertise: '5+ years' },
  { name: 'Allan Mahundi', role: 'IT Infrastructure Manager', expertise: '5+ years' },
  { name: 'Baraka April', role: 'Creative Director', expertise: '6+ years' },
  { name: 'Yusuph shabani', role: 'Database Architect', expertise: '2+ years' },
  { name: 'Allan Mahundi', role: 'Cloud Solutions Expert', expertise: '3+ years' }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-black-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">ABOUT US</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Premium <span className="gradient-text">Technology Partner</span>
          </h2>
          <p className="text-lg text-gray-light max-w-3xl mx-auto">
            We deliver gold-standard technology solutions that drive business growth and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-light">
              <p>
                Founded in 2024, Skyline Innovation began with a simple mission: to provide 
                premium technology solutions that empower businesses to thrive in the digital age.
              </p>
              <p>
                What started as a small team of passionate technologists has grown into a 
                premier technology partner for enterprises across multiple industries.
              </p>
              <p>
                Our commitment to excellence, innovation, and client success has earned us 
                recognition as a trusted leader in technology solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-black border border-gold/10">
                <div className="text-2xl font-bold text-gold">50+</div>
                <div className="text-sm text-gray-light">Experts</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-black border border-gold/10">
                <div className="text-2xl font-bold text-gold">150+</div>
                <div className="text-sm text-gray-light">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-black border border-gold/10">
                <div className="text-2xl font-bold text-gold">99%</div>
                <div className="text-sm text-gray-light">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="bg-black border border-gold/10">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                      <p className="text-sm text-gray-light">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Meet Our <span className="gradient-text">Leadership Team</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg bg-black border border-gold/10 hover:border-gold/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{member.name}</div>
                    <div className="text-sm text-gray">{member.expertise} Experience</div>
                  </div>
                </div>
                <div className="text-sm text-gray-light">{member.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-black border border-gold/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Work with Experts?
          </h3>
          <p className="text-gray-light mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gold-gradient-bg text-black">
              Meet Our Team
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold">
              View Careers
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}