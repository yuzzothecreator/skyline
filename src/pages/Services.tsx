import ServicesSection from '@/components/sections/Services'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Services Hero */}
      <div className="bg-black border-b border-gold/20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-light mb-8">
              Comprehensive technology solutions designed to elevate your business with 
              gold-standard excellence and innovation.
            </p>
            <Button size="lg" className="gold-gradient-bg text-black">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <ServicesSection />

      {/* Process Section */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-light max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understand your needs and goals' },
              { step: '02', title: 'Strategy', desc: 'Develop a custom solution plan' },
              { step: '03', title: 'Execution', desc: 'Implement with precision and care' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and updates' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full gold-gradient-bg flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}