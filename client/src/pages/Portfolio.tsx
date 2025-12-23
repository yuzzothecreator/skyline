import PortfolioSection from '@/components/sections/Portfolio'

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <div className="bg-black border-b border-gold/20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl text-gray-light">
              Showcasing premium technology solutions that have transformed businesses 
              across industries.
            </p>
          </div>
        </div>
      </div>
      <PortfolioSection />
    </div>
  )
}