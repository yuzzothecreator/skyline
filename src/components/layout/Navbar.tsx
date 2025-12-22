// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Menu, X, Shield, Code, Wifi, Palette, Database, Globe } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   const services = [
//     { name: 'Cybersecurity', icon: Shield, href: '/services#cybersecurity' },
//     { name: 'Web Development', icon: Code, href: '/services#web-dev' },
//     { name: 'WiFi Services', icon: Wifi, href: '/services#wifi' },
//     { name: 'Graphics Design', icon: Palette, href: '/services#design' },
//     { name: 'Database Management', icon: Database, href: '/services#database' },
//     { name: 'IT Support', icon: Globe, href: '/services#it-support' },
//   ]

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-blue to-primary-navy flex items-center justify-center">
//               <Globe className="h-4 w-4 text-white" />
//             </div>
//             <Link to="/" className="text-xl font-bold">
//               Skyline<span className="text-primary-blue">Innovation</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             <NavigationMenu>
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <Link to="/">
//                     <NavigationMenuLink className="px-4 py-2 hover:text-primary-blue transition">
//                       Home
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
                
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger>Services</NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                       {services.map((service) => (
//                         <Link
//                           key={service.name}
//                           to={service.href}
//                           className="flex items-center gap-3 rounded-lg p-3 hover:bg-accent transition-colors"
//                         >
//                           <service.icon className="h-4 w-4 text-primary-blue" />
//                           <span className="font-medium">{service.name}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link to="/portfolio">
//                     <NavigationMenuLink className="px-4 py-2 hover:text-primary-blue transition">
//                       Portfolio
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link to="/about">
//                     <NavigationMenuLink className="px-4 py-2 hover:text-primary-blue transition">
//                       About
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link to="/contact">
//                     <NavigationMenuLink className="px-4 py-2 hover:text-primary-blue transition">
//                       Contact
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>

//             <div className="flex items-center gap-2">
//               <Button variant="outline" asChild>
//                 <Link to="/contact">Get Quote</Link>
//               </Button>
//               <Button asChild>
//                 <Link to="/contact">Contact Us</Link>
//               </Button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden border-t py-4 animate-in slide-in-from-top">
//             <div className="space-y-3">
//               <Link to="/" className="block py-2 hover:text-primary-blue transition">Home</Link>
              
//               <div className="space-y-2">
//                 <p className="font-semibold text-sm text-muted-foreground">Services</p>
//                 <div className="grid grid-cols-2 gap-2 ml-4">
//                   {services.map((service) => (
//                     <Link
//                       key={service.name}
//                       to={service.href}
//                       className="flex items-center gap-2 py-2 text-sm hover:text-primary-blue transition"
//                     >
//                       <service.icon className="h-3 w-3" />
//                       {service.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               <Link to="/portfolio" className="block py-2 hover:text-primary-blue transition">Portfolio</Link>
//               <Link to="/about" className="block py-2 hover:text-primary-blue transition">About</Link>
//               <Link to="/contact" className="block py-2 hover:text-primary-blue transition">Contact</Link>

//               <div className="flex gap-2 pt-4">
//                 <Button variant="outline" className="flex-1" asChild>
//                   <Link to="/contact">Get Quote</Link>
//                 </Button>
//                 <Button className="flex-1" asChild>
//                   <Link to="/contact">Contact Us</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Shield, Code, Wifi, Palette, Database, Cpu, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: 'Cyber Security', icon: Shield, href: '/services#cybersecurity' },
    { name: 'Web Development', icon: Code, href: '/services#web-dev' },
    { name: 'WiFi Solutions', icon: Wifi, href: '/services#wifi' },
    { name: 'Creative Design', icon: Palette, href: '/services#design' },
    { name: 'Data Management', icon: Database, href: '/services#database' },
    { name: 'IT Infrastructure', icon: Cpu, href: '/services#it-support' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gold/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with Inter font */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-black" />
              </div>
            </div>
            <Link to="/" className="text-xl font-bold tracking-tight">
              <span className="text-white">Skyline</span>
              <span className="gradient-text">Innovation</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link to="/">
                    <Button variant="ghost" className="text-white hover:text-gold hover:bg-black-light font-medium text-sm">
                      Home
                    </Button>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-gold data-[state=open]:text-gold font-medium text-sm">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-black-light border border-gold/20 p-2">
                    <div className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                      {services.map((service) => {
                        const Icon = service.icon
                        return (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="group flex items-center gap-3 rounded-md p-3 hover:bg-gold/10 transition-colors"
                          >
                            <div className="w-8 h-8 rounded bg-black/50 flex items-center justify-center">
                              <Icon className="h-4 w-4 text-gold" />
                            </div>
                            <div>
                              <span className="font-medium text-white text-sm group-hover:text-gold">{service.name}</span>
                              <p className="text-xs text-gray font-normal">Premium service</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/portfolio">
                    <Button variant="ghost" className="text-white hover:text-gold hover:bg-black-light font-medium text-sm">
                      Portfolio
                    </Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <Button variant="ghost" className="text-white hover:text-gold hover:bg-black-light font-medium text-sm">
                      About
                    </Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <Button variant="ghost" className="text-white hover:text-gold hover:bg-black-light font-medium text-sm">
                      Contact
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 ml-4">
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold/10 font-medium text-sm h-9 px-4"
                asChild
              >
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button 
                className="gold-gradient-bg text-black hover:opacity-90 font-semibold text-sm h-9 px-4"
                asChild
              >
                <Link to="/contact">Start Project</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-gold transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gold/20 py-4 animate-in slide-in-from-top bg-black-light/95 backdrop-blur">
            <div className="space-y-1">
              <Link to="/" className="block py-2 text-white hover:text-gold transition pl-4 text-sm font-medium">Home</Link>
              
              <div className="space-y-1">
                <p className="font-semibold text-xs text-gold pl-4 uppercase tracking-wide">Services</p>
                <div className="grid grid-cols-2 gap-1 ml-6">
                  {services.map((service) => {
                    const Icon = service.icon
                    return (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center gap-2 py-2 text-xs text-gray hover:text-gold transition pl-3"
                      >
                        <Icon className="h-3 w-3" />
                        {service.name}
                      </Link>
                    )
                  })}
                </div>
              </div>

              <Link to="/portfolio" className="block py-2 text-white hover:text-gold transition pl-4 text-sm font-medium">Portfolio</Link>
              <Link to="/about" className="block py-2 text-white hover:text-gold transition pl-4 text-sm font-medium">About</Link>
              <Link to="/contact" className="block py-2 text-white hover:text-gold transition pl-4 text-sm font-medium">Contact</Link>

              <div className="flex gap-2 pt-4 pl-4">
                <Button variant="outline" className="flex-1 border-gold text-gold text-sm h-9" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
                <Button className="flex-1 gold-gradient-bg text-black text-sm h-9" asChild>
                  <Link to="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar