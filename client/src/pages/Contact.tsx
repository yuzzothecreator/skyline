import ContactSection from '@/components/sections/Contact'

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-black border-b border-gold/20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-light">
              Ready to transform your business? Contact us today for a free consultation 
              with our technology experts.
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  )
}