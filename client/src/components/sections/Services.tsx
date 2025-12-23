import { useState } from 'react'
import { Shield, Code, Wifi, Palette, Database, Cpu, Smartphone, Cloud, Server, Terminal, Zap, Calendar, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import BookingModal from '@/components/modals/BookingModal'

const servicesData = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Penetration Testing',
    description: 'Advanced security solutions with gold-standard encryption and threat detection.',
    icon: Shield,
    color: 'cyber',
    features: ['Penetration Testing', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
    price: 'Starting at $2,499',
    estimatedTime: '2-4 weeks',
    popular: true
  },
  {
    id: 'web-dev',
    title: 'Web Development & Design',
    description: 'Premium, bespoke websites and applications with cutting-edge technology.',
    icon: Code,
    color: 'web',
    features: ['Custom Websites', 'E-commerce Solutions', 'Web Applications', 'UI/UX Design'],
    price: 'From $3,999',
    estimatedTime: '4-8 weeks',
    popular: true
  },
  {
    id: 'wifi',
    title: 'WiFi Configuration & Setup',
    description: 'Enterprise-grade WiFi solutions with captive portals and advanced security.',
    icon: Wifi,
    color: 'wifi',
    features: ['WiFi Setup', 'Network Security', 'Captive Portals', 'Performance Optimization'],
    price: 'Starting at $1,299',
    estimatedTime: '1-2 weeks',
    popular: false
  },
  {
    id: 'design',
    title: 'Graphics & Creative Design',
    description: 'Premium branding and design services for modern businesses.',
    icon: Palette,
    color: 'creative',
    features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'UI/UX Design'],
    price: 'Project-based',
    estimatedTime: '2-3 weeks',
    popular: false
  },
  {
    id: 'database',
    title: 'Database Management',
    description: 'High-performance database solutions with enterprise-grade reliability.',
    icon: Database,
    color: 'database',
    features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions'],
    price: 'From $1,999/month',
    estimatedTime: 'Ongoing',
    popular: true
  },
  {
    id: 'it-support',
    title: 'IT Troubleshooting & Support',
    description: '24/7 elite IT support and infrastructure management.',
    icon: Cpu,
    color: 'tech',
    features: ['24/7 Support', 'Remote Assistance', 'Hardware Repair', 'Software Installation'],
    price: 'From $999/month',
    estimatedTime: '24/7 Support',
    popular: true
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    icon: Smartphone,
    color: 'social',
    features: ['iOS Apps', 'Android Apps', 'Cross-platform', 'App Maintenance'],
    price: 'From $4,999',
    estimatedTime: '8-12 weeks',
    popular: false
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and migration services.',
    icon: Cloud,
    color: 'gold',
    features: ['Cloud Migration', 'Infrastructure Setup', 'Security', 'Cost Optimization'],
    price: 'Custom Quote',
    estimatedTime: '2-6 weeks',
    popular: false
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleBookService = (service: typeof servicesData[0]) => {
    setSelectedService(service)
    setIsBookingModalOpen(true)
  }

  return (
    <>
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-card border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wide">OUR SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Premium <span className="gradient-text">Tech Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Book a free consultation for any service below.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {servicesData.map((service) => {
              const Icon = service.icon
              return (
                <Card 
                  key={service.id} 
                  className="bg-card border border-primary/10 hover:border-primary/30 transition-all group hover:shadow-lg relative"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 text-${service.color}`} />
                      </div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {service.price}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-primary text-primary hover:bg-primary/10"
                        onClick={() => handleBookService(service)}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Now
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="flex-1"
                        onClick={() => {
                          // Scroll to service details
                          document.getElementById(service.id)?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quick Booking CTA */}
          <div className="text-center p-8 rounded-2xl bg-card border border-primary/20 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a free 30-minute consultation with our experts to discuss your needs 
              and get personalized recommendations.
            </p>
            <Button 
              size="lg" 
              className="gold-gradient-bg text-primary-foreground"
              onClick={() => handleBookService({
                id: 'consultation',
                title: 'Free Consultation',
                description: '30-minute discovery call with our experts',
                icon: Calendar,
                color: 'gold',
                features: ['Needs Assessment', 'Solution Recommendations', 'Project Planning', 'Cost Estimation'],
                price: 'FREE',
                estimatedTime: '30 minutes',
                popular: false
              })}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
          </div>

          {/* Service Details Tabs */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Service <span className="gradient-text">Details</span>
            </h3>
            
            <Tabs defaultValue="cybersecurity" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-card border border-primary/20 p-1 rounded-lg">
                {servicesData.slice(0, 4).map((service) => (
                  <TabsTrigger 
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {service.title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {servicesData.slice(0, 4).map((service) => {
                const Icon = service.icon
                return (
                  <TabsContent key={service.id} value={service.id} className="mt-6" id={service.id}>
                    <Card className="bg-card border border-primary/20">
                      <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <div className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center`}>
                                <Icon className={`h-8 w-8 text-${service.color}`} />
                              </div>
                              <div>
                                <h4 className="text-2xl font-bold text-foreground">{service.title}</h4>
                                <p className="text-primary font-medium">{service.price}</p>
                                <p className="text-sm text-muted-foreground">Est. Time: {service.estimatedTime}</p>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-6">{service.description}</p>
                            <div className="flex gap-4">
                              <Button 
                                className="gold-gradient-bg text-primary-foreground"
                                onClick={() => handleBookService(service)}
                              >
                                <Calendar className="mr-2 h-4 w-4" />
                                Book This Service
                              </Button>
                              <Button variant="outline" className="border-primary text-primary">
                                View Case Studies
                              </Button>
                            </div>
                          </div>
                          <div className="bg-background/50 rounded-xl p-6">
                            <h5 className="text-foreground font-semibold mb-4">What's Included:</h5>
                            <div className="space-y-3">
                              {service.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-primary" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-primary/10">
                              <h6 className="text-foreground font-semibold mb-2">Typical Timeline:</h6>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>{service.estimatedTime}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )
              })}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedService && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          service={selectedService}
        />
      )}
    </>
  )
}