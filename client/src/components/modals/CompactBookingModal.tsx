'use client'

import { useState, useEffect } from 'react'
import { X, Calendar, User, Mail, Phone, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'react-hot-toast'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    id: string
    title: string
    price: string
  }
}

export default function CompactBookingModal({ isOpen, onClose, service }: BookingModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', phone: '' })
      setIsSubmitted(false)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill all fields')
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      
      toast.success('Booking request sent! We\'ll contact you within 2 hours.')
      
      setTimeout(() => {
        onClose()
      }, 3000)

    } catch (error) {
      toast.error('Failed to send request')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-primary/20 max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-foreground">
              {isSubmitted ? 'Request Sent!' : 'Quick Booking'}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 rounded-full hover:bg-primary/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="py-2">
          {isSubmitted ? (
            <div className="text-center py-6">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Booking Request Sent!</h3>
              <p className="text-muted-foreground mb-6">
                We've received your request for <span className="text-primary">{service.title}</span>.
                Our team will contact you within 2 hours to schedule the consultation.
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Service:</span> {service.title}</p>
                <p><span className="font-medium">Price:</span> {service.price}</p>
                <p><span className="font-medium">Contact:</span> {formData.email}</p>
              </div>
              <Button 
                className="w-full mt-6 gold-gradient-bg text-primary-foreground"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              {/* Service Info */}
              <div className="bg-background/50 rounded-lg p-4 mb-6 border border-primary/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                    <p className="text-primary font-medium">{service.price}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-primary/50" />
                </div>
              </div>

              {/* Quick Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name
                    </Label>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your name"
                        className="flex-1 bg-background border-primary/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                        className="flex-1 bg-background border-primary/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone
                    </Label>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 (555) 123-4567"
                        className="flex-1 bg-background border-primary/20"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full gold-gradient-bg text-primary-foreground font-semibold py-3 mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Calendar className="mr-2 h-4 w-4" />
                      Request Booking
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We'll contact you to finalize date & time
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}