import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield, Code, Wifi, Palette, Database, Cpu, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import BookingModal from '@/components/modals/BookingModal'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const location = useLocation()

  const services = [
    { name: 'Cyber Security', icon: Shield, href: '/services#cybersecurity' },
    { name: 'Web Development', icon: Code, href: '/services#web-dev' },
    { name: 'WiFi Solutions', icon: Wifi, href: '/services#wifi' },
    { name: 'Creative Design', icon: Palette, href: '/services#design' },
    { name: 'Data Management', icon: Database, href: '/services#database' },
    { name: 'IT Infrastructure', icon: Cpu, href: '/services#it-support' },
  ]

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <nav className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-primary/20 shadow-lg"
          : "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/40 border-b border-primary/10"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-lg gold-gradient-bg flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
              </div>
              <Link to="/" className="text-xl font-bold tracking-tight">
                <span className="text-foreground">Skyline</span>
                <span className="gradient-text">Innovation</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {navItems.map((item) => {
                    if (item.name === 'Services') {
                      return (
                        <NavigationMenuItem key={item.name}>
                          <NavigationMenuTrigger 
                            className={cn(
                              "bg-transparent text-foreground hover:text-primary data-[state=open]:text-primary font-medium text-sm",
                              isActive(item.href) && "text-primary"
                            )}
                          >
                            Services
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="bg-card border border-primary/20 p-2">
                            <div className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                              {services.map((service) => {
                                const Icon = service.icon
                                return (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className="group flex items-center gap-3 rounded-md p-3 hover:bg-primary/10 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="w-8 h-8 rounded bg-background flex items-center justify-center">
                                      <Icon className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                      <span className="font-medium text-foreground text-sm group-hover:text-primary">
                                        {service.name}
                                      </span>
                                      <p className="text-xs text-muted-foreground font-normal">Premium service</p>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      )
                    }

                    return (
                      <NavigationMenuItem key={item.name}>
                        <Link to={item.href}>
                          <Button 
                            variant="ghost" 
                            className={cn(
                              "text-foreground hover:text-primary hover:bg-primary/5 font-medium text-sm",
                              isActive(item.href) && "text-primary bg-primary/5"
                            )}
                          >
                            {item.name}
                          </Button>
                        </Link>
                      </NavigationMenuItem>
                    )
                  })}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Theme Toggle & CTA Buttons */}
              <div className="flex items-center gap-2 ml-4">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10 font-medium text-sm h-9 px-4"
                  asChild
                >
                  <Link to="/contact">Get Quote</Link>
                </Button>
                <Button 
                  className="gold-gradient-bg text-primary-foreground hover:opacity-90 font-semibold text-sm h-9 px-4"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Start Project
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                className="text-foreground hover:text-primary transition"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-primary/20 py-4 animate-in slide-in-from-top bg-card/95 backdrop-blur">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-3 px-4 text-foreground hover:text-primary transition text-sm font-medium rounded-lg",
                      isActive(item.href) && "text-primary bg-primary/5"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services Submenu */}
                <div className="px-4 py-3">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                    Our Services
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => {
                      const Icon = service.icon
                      return (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 p-2 rounded text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition"
                        >
                          <Icon className="h-3 w-3" />
                          {service.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="flex gap-2 pt-4 px-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary text-primary text-sm h-9"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                  <Button 
                    className="flex-1 gold-gradient-bg text-primary-foreground text-sm h-9"
                    onClick={() => {
                      setIsOpen(false)
                      setIsBookingModalOpen(true)
                    }}
                  >
                    Start Project
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={{
          id: 'consultation',
          title: 'Free Consultation',
          description: '30-minute discovery call with our experts',
          price: 'FREE',
          estimatedTime: '30 minutes'
        }}
      />
    </>
  )
}

export default Navbar