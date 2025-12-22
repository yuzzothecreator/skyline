'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const services = [
  'Cybersecurity',
  'Web Development',
  'IT Support',
  'WiFi Solutions',
  'Database Management',
  'Creative Design',
  'Mobile Development',
  'Cloud Services',
  'Other'
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    })
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black-light border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Mail className="h-4 w-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">CONTACT US</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p className="text-lg text-gray-light max-w-3xl mx-auto">
            Ready to transform your business with premium technology solutions? Get in touch today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-black-light border border-gold/10">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
                <CardDescription className="text-gray">
                  Get in touch through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Phone</div>
                    <div className="text-gray-light">+1 (555) 123-4567</div>
                    <div className="text-sm text-gray">24/7 Support Available</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <div className="text-gray-light">info@skylineinnovation.com</div>
                    <div className="text-sm text-gray">Response within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Location</div>
                    <div className="text-gray-light">123 Innovation Drive</div>
                    <div className="text-gray-light">Tech Valley, CA 94000</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Business Hours</div>
                    <div className="text-gray-light">Mon-Fri: 9AM-6PM PST</div>
                    <div className="text-sm text-gray">Emergency support available</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="bg-black-light border border-gold/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <div className="font-medium text-white">Quick Response Guarantee</div>
                </div>
                <p className="text-sm text-gray-light">
                  We guarantee a response within 2 hours during business hours. 
                  Your inquiry is our priority.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-black-light border border-gold/10">
              <CardHeader>
                <CardTitle className="text-white">Send us a Message</CardTitle>
                <CardDescription className="text-gray">
                  Fill out the form below and we'll get back to you within 2 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-light mb-6">
                      Thank you for contacting us. We'll get back to you within 2 hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="gold-gradient-bg text-black"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          className="bg-black border-gold/20 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="bg-black border-gold/20 text-white"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="bg-black border-gold/20 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Inc."
                          className="bg-black border-gold/20 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-white">Service Interest *</Label>
                      <Select onValueChange={handleSelectChange} value={formData.service}>
                        <SelectTrigger className="bg-black border-gold/20 text-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-black-light border-gold/20">
                          {services.map((service) => (
                            <SelectItem 
                              key={service} 
                              value={service.toLowerCase()}
                              className="text-white hover:bg-gold/10 focus:bg-gold/10"
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or requirements..."
                        rows={4}
                        required
                        className="bg-black border-gold/20 text-white min-h-[120px]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full gold-gradient-bg text-black font-semibold"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>

                    <p className="text-xs text-gray text-center">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}