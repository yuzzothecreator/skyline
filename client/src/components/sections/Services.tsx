import { Shield, Code, Wifi, Palette, Database, Cpu, Smartphone, Lock, Cloud, Server, Terminal, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Penetration Testing',
    description: 'Advanced security solutions with gold-standard encryption and threat detection.',
    icon: Shield,
    color: 'cyber',
    features: ['Penetration Testing', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
    price: 'Starting at $2,499'
  },
  {
    id: 'web-dev',
    title: 'Web Development & Design',
    description: 'Premium, bespoke websites and applications with cutting-edge technology.',
    icon: Code,
    color: 'web',
    features: ['Custom Websites', 'E-commerce Solutions', 'Web Applications', 'UI/UX Design'],
    price: 'From $3,999'
  },
  {
    id: 'wifi',
    title: 'WiFi Configuration & Setup',
    description: 'Enterprise-grade WiFi solutions with captive portals and advanced security.',
    icon: Wifi,
    color: 'wifi',
    features: ['WiFi Setup', 'Network Security', 'Captive Portals', 'Performance Optimization'],
    price: 'Starting at $1,299'
  },
  {
    id: 'design',
    title: 'Graphics & Creative Design',
    description: 'Premium branding and design services for modern businesses.',
    icon: Palette,
    color: 'creative',
    features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'UI/UX Design'],
    price: 'Project-based'
  },
  {
    id: 'database',
    title: 'Database Management',
    description: 'High-performance database solutions with enterprise-grade reliability.',
    icon: Database,
    color: 'database',
    features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions'],
    price: 'From $1,999/month'
  },
  {
    id: 'it-support',
    title: 'IT Troubleshooting & Support',
    description: '24/7 elite IT support and infrastructure management.',
    icon: Cpu,
    color: 'tech',
    features: ['24/7 Support', 'Remote Assistance', 'Hardware Repair', 'Software Installation'],
    price: 'From $999/month'
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    icon: Smartphone,
    color: 'social',
    features: ['iOS Apps', 'Android Apps', 'Cross-platform', 'App Maintenance'],
    price: 'From $4,999'
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and migration services.',
    icon: Cloud,
    color: 'gold',
    features: ['Cloud Migration', 'Infrastructure Setup', 'Security', 'Cost Optimization'],
    price: 'Custom Quote'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black-light border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Premium <span className="gradient-text">Tech Solutions</span>
          </h2>
          <p className="text-lg text-gray-light max-w-3xl mx-auto">
            Comprehensive technology services designed for modern enterprises, delivered with gold-standard excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card 
                key={service.id} 
                className="bg-black-light border border-gold/10 hover:border-gold/30 transition-all group hover:glow-effect"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 text-${service.color}`} />
                    </div>
                    <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded">
                      {service.price}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-gold transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="text-sm text-gray-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-gold text-gold hover:bg-gold/10"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Featured Services Tabs */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Most <span className="gradient-text">Popular</span> Services
          </h3>
          
          <Tabs defaultValue="cybersecurity" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-black-light border border-gold/20 p-1 rounded-lg">
              <TabsTrigger 
                value="cybersecurity" 
                className="data-[state=active]:bg-gold data-[state=active]:text-black"
              >
                Cybersecurity
              </TabsTrigger>
              <TabsTrigger 
                value="web-dev" 
                className="data-[state=active]:bg-gold data-[state=active]:text-black"
              >
                Web Dev
              </TabsTrigger>
              <TabsTrigger 
                value="it-support" 
                className="data-[state=active]:bg-gold data-[state=active]:text-black"
              >
                IT Support
              </TabsTrigger>
              <TabsTrigger 
                value="database" 
                className="data-[state=active]:bg-gold data-[state=active]:text-black"
              >
                Database
              </TabsTrigger>
            </TabsList>
            
            {services.slice(0, 4).map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-6">
                <Card className="bg-black-light border border-gold/20">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center`}>
                            <service.icon className={`h-8 w-8 text-${service.color}`} />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-white">{service.title}</h4>
                            <p className="text-gold font-medium">{service.price}</p>
                          </div>
                        </div>
                        <p className="text-gray-light mb-6">{service.description}</p>
                        <div className="flex gap-4">
                          <Button className="gold-gradient-bg text-black">
                            Book Service
                          </Button>
                          <Button variant="outline" className="border-gold text-gold">
                            View Case Studies
                          </Button>
                        </div>
                      </div>
                      <div className="bg-black/50 rounded-xl p-6">
                        <h5 className="text-white font-semibold mb-4">Key Features:</h5>
                        <div className="space-y-3">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-gold" />
                              <span className="text-gray-light">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-black-light border border-gold/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-light mb-6 max-w-2xl mx-auto">
            Schedule a free consultation with our experts and discover how our premium tech solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gold-gradient-bg text-black">
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}