// import { ArrowRight, Shield, Zap, Globe, CheckCircle } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-primary-navy via-primary-blue to-primary-sky">
//       {/* Subtle dots pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }} />
//       </div>

//       <div className="container relative mx-auto px-4 py-20 md:py-32">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
//               <Zap className="h-4 w-4" />
//               <span className="text-sm text-white">Innovating Since 2024</span>
//             </div>

//             <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//               Your Complete
//               <span className="block text-accent-web">Tech Solution</span>
//               Partner
//             </h1>

//             <p className="text-xl text-white/90">
//               From cybersecurity to web development, we provide end-to-end IT solutions 
//               that drive business growth and ensure digital safety.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" className="bg-white text-primary-navy hover:bg-white/90">
//                 Explore Services
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
//                 Book Consultation
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8 pt-8">
//               <div>
//                 <div className="text-3xl font-bold text-white">99%</div>
//                 <div className="text-sm text-white/80">Client Satisfaction</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white">500+</div>
//                 <div className="text-sm text-white/80">Projects Completed</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white">24/7</div>
//                 <div className="text-sm text-white/80">Support Available</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Feature Cards */}
//           <div className="hidden lg:grid grid-cols-2 gap-4">
//             <Card className="bg-white/10 backdrop-blur border-white/20">
//               <CardContent className="p-6">
//                 <div className="w-12 h-12 rounded-lg bg-accent-cyber/20 flex items-center justify-center mb-4">
//                   <Shield className="h-6 w-6 text-accent-cyber" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
//                 <p className="text-sm text-white/80">Complete protection solutions</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/10 backdrop-blur border-white/20">
//               <CardContent className="p-6">
//                 <div className="w-12 h-12 rounded-lg bg-accent-web/20 flex items-center justify-center mb-4">
//                   <Globe className="h-6 w-6 text-accent-web" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">Web Development</h3>
//                 <p className="text-sm text-white/80">Modern responsive websites</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/10 backdrop-blur border-white/20">
//               <CardContent className="p-6">
//                 <div className="w-12 h-12 rounded-lg bg-accent-tech/20 flex items-center justify-center mb-4">
//                   <CheckCircle className="h-6 w-6 text-accent-tech" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">IT Support</h3>
//                 <p className="text-sm text-white/80">24/7 troubleshooting</p>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/10 backdrop-blur border-white/20">
//               <CardContent className="p-6">
//                 <div className="w-12 h-12 rounded-lg bg-primary-blue/20 flex items-center justify-center mb-4">
//                   <Zap className="h-6 w-6 text-primary-blue" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">Full Stack</h3>
//                 <p className="text-sm text-white/80">End-to-end implementation</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { ArrowRight, Shield, Zap, Globe, Cpu, Sparkles, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black-light to-black-dark" />
      
      {/* Gold particles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-accent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-black-light border border-gold/30 rounded-full px-4 py-2 w-fit">
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="text-sm text-gold font-medium tracking-wide">INNOVATING SINCE 2024</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                Premium
                <span className="block gradient-text mt-2">Tech Solutions</span>
                for Modern Businesses
              </h1>
              
              <p className="text-lg text-gray-light leading-relaxed max-w-2xl">
                Elite cybersecurity, cutting-edge web development, and premium IT services 
                wrapped in gold-standard innovation and black-book confidentiality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gold-gradient-bg text-black hover:opacity-90 transition font-semibold">
                <Zap className="mr-2 h-4 w-4" />
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 font-medium">
                Book Consultation
              </Button>
            </div>

            {/* Stats - Gold Accent */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gold/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold font-mono">99%</div>
                <div className="text-sm text-gray-light font-medium mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold font-mono">500+</div>
                <div className="text-sm text-gray-light font-medium mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold font-mono">24/7</div>
                <div className="text-sm text-gray-light font-medium mt-1">Elite Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Premium Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {/* Cybersecurity Card */}
            <Card className="bg-black-light border border-gold/20 glow-effect group hover:border-gold transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-cyber/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-cyber" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cyber Security</h3>
                <p className="text-sm text-gray font-normal">Fortified protection with gold-standard encryption</p>
              </CardContent>
            </Card>

            {/* Web Dev Card */}
            <Card className="bg-black-light border border-gold/20 glow-effect group hover:border-gold transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-web/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-web" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Web Development</h3>
                <p className="text-sm text-gray font-normal">Premium, bespoke digital experiences</p>
              </CardContent>
            </Card>

            {/* IT Support Card */}
            <Card className="bg-black-light border border-gold/20 glow-effect group hover:border-gold transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-tech/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="h-6 w-6 text-tech" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">IT Infrastructure</h3>
                <p className="text-sm text-gray font-normal">Enterprise-grade solutions</p>
              </CardContent>
            </Card>

            {/* Innovation Card */}
            <Card className="bg-black-light border border-gold/20 glow-effect group hover:border-gold transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Terminal className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation Labs</h3>
                <p className="text-sm text-gray font-normal">Future-proof technology research</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}