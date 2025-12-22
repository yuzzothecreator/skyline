import AboutSection from '@/components/sections/About'
import { Users, Target, Award, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* About Hero */}
      <div className="bg-black border-b border-gold/20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">Skyline Innovation</span>
            </h1>
            <p className="text-xl text-gray-light mb-8">
              We are a premium technology partner dedicated to delivering gold-standard 
              solutions that drive business growth and innovation.
            </p>
          </div>
        </div>
      </div>

      <AboutSection />

      {/* Mission & Vision */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-black-light border border-gold/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-light">
                  To empower businesses with premium technology solutions that drive 
                  innovation, efficiency, and growth through gold-standard service 
                  and cutting-edge expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black-light border border-gold/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-light">
                  To be the world's most trusted premium technology partner, 
                  recognized for transforming businesses through innovative solutions 
                  and exceptional service excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}