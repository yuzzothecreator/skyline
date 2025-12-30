'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast, Toaster } from 'react-hot-toast'

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

// Safe API URL with fallback
const API_URL = (import.meta.env?.VITE_API_URL as string) || 'http://localhost:5000/api'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fill all required fields correctly')
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(
          <div>
            <p className="font-semibold">Message sent successfully!</p>
            <p className="text-sm">We'll contact you within 24 hours.</p>
            <p className="text-xs mt-1">Reference ID: {data.data?.id || 'N/A'}</p>
          </div>,
          { duration: 5000 }
        )
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
        setErrors({})
        
        // Show success details in console
        console.log('✅ Contact form submitted successfully!')
        console.log('📋 Submission Details:', data.data)
        
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('❌ Form submission error:', error)
      
      // Fallback: Create mailto link
      const subject = `Contact Form: ${formData.service || 'General Inquiry'}`
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Service: ${formData.service || 'Not specified'}

Message:
${formData.message}
      `.trim()
      
      const mailtoLink = `mailto:info@skylineinnovation.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      toast.custom((t) => (
        <div className="bg-card border border-primary/20 p-4 rounded-lg shadow-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-foreground">Backend Connection Failed</p>
              <p className="text-sm text-muted-foreground mt-1">
                Please send your message directly via email:
              </p>
              <div className="flex gap-2 mt-3">
                <Button 
                  size="sm" 
                  onClick={() => {
                    window.location.href = mailtoLink
                    toast.dismiss(t.id)
                  }}
                  className="gold-gradient-bg text-primary-foreground"
                >
                  Open Email Client
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard.writeText(body)
                    toast.success('Copied to clipboard!')
                  }}
                >
                  Copy Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      ), { duration: 10000 })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }))
  }

  const downloadContacts = async () => {
    try {
      const response = await fetch(`${API_URL}/admin/contacts`)
      const contacts = await response.json()
      
      const blob = new Blob([JSON.stringify(contacts, null, 2)], { type: 'application/json' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `skyline-contacts-${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
      
      toast.success('Contacts downloaded!')
    } catch (error) {
      toast.error('Failed to download contacts')
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'hsl(var(--card))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--primary))',
          },
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium tracking-wide">CONTACT US</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Contact us today for a free consultation.
          </p>
          
          {/* Admin download button (for testing) */}
          {import.meta.env?.DEV && (
            <div className="mt-4">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={downloadContacts}
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                <Download className="h-3 w-3 mr-2" />
                Download Contacts (Dev)
              </Button>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border border-primary/10">
              <CardHeader>
                <CardTitle className="text-foreground">Contact Information</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Multiple ways to reach us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone & WhatsApp</div>
                    <div className="text-muted-foreground">+255-697-488-875</div>
                    <div className="text-sm text-muted-foreground">24/7 Support Available</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a 
                      href="mailto:skyline-africa5@gmail.com" 
                      className="text-primary hover:underline block"
                    >
                      skylineafrica5@gmail.com
                    </a>
                    <div className="text-sm text-muted-foreground">Response within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Office Location</div>
                    <div className="text-muted-foreground"> Arusha, Tanzania</div>
                    <div className="text-muted-foreground">Njiro, Nanenane</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Business Hours</div>
                    <div className="text-muted-foreground">Mon-Fri: 9AM-6PM PST</div>
                    <div className="text-sm text-muted-foreground">Emergency support available</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card className="bg-card border border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <div className="font-medium text-foreground">Prefer Direct Contact?</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  You can also reach us directly:
                </p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-primary/20 text-primary"
                    asChild
                  >
                    <a href="mailto:info@skylineinnovation.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Direct Email
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-primary/20 text-primary"
                    asChild
                  >
                    <a href="tel:+15551234567">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us Directly
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border border-primary/10">
              <CardHeader>
                <CardTitle className="text-foreground">Send us a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 2 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`bg-background border-primary/20 text-foreground ${errors.name ? 'border-red-500' : ''}`}
                        disabled={isLoading}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1 text-red-500 text-sm">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`bg-background border-primary/20 text-foreground ${errors.email ? 'border-red-500' : ''}`}
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 text-red-500 text-sm">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="bg-background border-primary/20 text-foreground"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                        className="bg-background border-primary/20 text-foreground"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground">Service Interest</Label>
                    <Select onValueChange={handleSelectChange} value={formData.service} disabled={isLoading}>
                      <SelectTrigger className="bg-background border-primary/20 text-foreground">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-primary/20">
                        {services.map((service) => (
                          <SelectItem 
                            key={service} 
                            value={service.toLowerCase()}
                            className="text-foreground hover:bg-primary/10"
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or requirements..."
                      rows={4}
                      className={`bg-background border-primary/20 text-foreground min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                      disabled={isLoading}
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1 text-red-500 text-sm">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gold-gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to our Privacy Policy.
                    </p>
                    <p className="text-xs text-primary">
                      <span className="font-semibold">Note:</span> Forms are saved to our secure database.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}