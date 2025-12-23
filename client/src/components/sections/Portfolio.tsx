import { ExternalLink, Eye, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    title: 'Enterprise Security Platform',
    category: 'Cybersecurity',
    description: 'Complete security suite for financial institutions with real-time threat detection.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800',
    tags: ['React', 'Node.js', 'AWS', 'MongoDB'],
    results: ['99.9% Uptime', '40% Faster Detection', 'Zero Breaches']
  },
  {
    id: 2,
    title: 'E-commerce Luxury Platform',
    category: 'Web Development',
    description: 'Premium e-commerce platform for luxury brands with AR product visualization.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    results: ['300% Sales Increase', '50% Faster Load Time', '4.8/5 Rating']
  },
  {
    id: 3,
    title: 'Corporate Network Infrastructure',
    category: 'WiFi Solutions',
    description: 'Enterprise-grade network setup for multinational corporation with 5000+ devices.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800',
    tags: ['Cisco', 'Ubiquiti', 'Security', 'Monitoring'],
    results: ['99.99% Reliability', '60% Cost Reduction', '24/7 Support']
  },
  {
    id: 4,
    title: 'Healthcare Database Migration',
    category: 'Database Management',
    description: 'Secure migration of patient records to cloud infrastructure with HIPAA compliance.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800',
    tags: ['AWS', 'PostgreSQL', 'Security', 'Backup'],
    results: ['Zero Downtime', '100% Data Integrity', 'Fast Recovery']
  },
  {
    id: 5,
    title: 'Fintech Mobile Application',
    category: 'Mobile Development',
    description: 'Secure banking application with biometric authentication and real-time transactions.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800',
    tags: ['React Native', 'iOS', 'Android', 'Security'],
    results: ['1M+ Downloads', '4.9 App Store', '99.9% Uptime']
  },
  {
    id: 6,
    title: 'Brand Identity Package',
    category: 'Creative Design',
    description: 'Complete brand overhaul for tech startup including logo, website, and marketing materials.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800',
    tags: ['Branding', 'UI/UX', 'Marketing', 'Web Design'],
    results: ['Consistent Branding', 'Increased Recognition', 'Modern Appeal']
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Eye className="h-4 w-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">OUR WORK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Premium <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-light max-w-3xl mx-auto">
            Selected projects showcasing our expertise in delivering gold-standard technology solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-black border border-gold/10 hover:border-gold/30 transition-all group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-gold text-black">
                  {project.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-gold transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded bg-black-light text-gray-light border border-gold/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-2">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-gold" />
                      <span className="text-sm text-gray-light">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-gold text-gold hover:bg-gold/10"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Case Study
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 rounded-xl bg-black border border-gold/10">
            <div className="text-3xl font-bold text-gold mb-2">150+</div>
            <div className="text-sm text-gray-light">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-black border border-gold/10">
            <div className="text-3xl font-bold text-gold mb-2">99%</div>
            <div className="text-sm text-gray-light">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-black border border-gold/10">
            <div className="text-3xl font-bold text-gold mb-2">24/7</div>
            <div className="text-sm text-gray-light">Support Available</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-black border border-gold/10">
            <div className="text-3xl font-bold text-gold mb-2">50+</div>
            <div className="text-sm text-gray-light">Team Experts</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to See Your Project Here?
          </h3>
          <p className="text-gray-light mb-6 max-w-2xl mx-auto">
            Partner with us for premium technology solutions that deliver exceptional results.
          </p>
          <Button size="lg" className="gold-gradient-bg text-black">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}