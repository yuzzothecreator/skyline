import { Link } from 'react-router-dom'
import { Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Skyline</span>
              <span className="gradient-text">Innovation</span>
            </div>
            <p className="text-sm text-gray-light">
              Premium technology solutions for modern businesses.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-white mb-3">Services</h3>
              <div className="space-y-2">
                {['Cybersecurity', 'Web Dev', 'IT Support', 'Database'].map((service) => (
                  <Link 
                    key={service}
                    to={`/services#${service.toLowerCase().replace(' ', '-')}`}
                    className="block text-sm text-gray-light hover:text-gold"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <div className="space-y-2">
                {['About', 'Portfolio', 'Contact', 'Blog'].map((page) => (
                  <Link 
                    key={page}
                    to={`/${page.toLowerCase()}`}
                    className="block text-sm text-gray-light hover:text-gold"
                  >
                    {page}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-3">Newsletter</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-black-light border border-gold/20 rounded px-3 py-2 text-sm text-white"
              />
              <Button type="submit" size="sm" className="w-full gold-gradient-bg text-black">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gold/10 text-center">
          <div className="text-sm text-gray-light">
            © {currentYear} Skyline Innovation. All rights reserved.
          </div>
          <div className="flex justify-center items-center gap-2 mt-2 text-xs text-gray">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-gold" />
            <span>by the Skyline Team</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer