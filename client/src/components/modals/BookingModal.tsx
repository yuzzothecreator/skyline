'use client'

import { useState, useEffect } from 'react'
import { X, Calendar, Clock, User, Mail, Phone, Briefcase, MessageSquare, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'react-hot-toast'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    id: string
    title: string
    description: string
    price: string
    estimatedTime: string
  }
}

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
]

const consultationTypes = [
  'Video Call (Zoom/Google Meet)',
  'Phone Consultation',
  'In-Person Meeting',
  'Email Discussion'
]

export default function BookingModal({ isOpen, onClose, service }: BookingModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    consultationType: '',
    additionalInfo: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isFormVisible, setIsFormVisible] = useState(true)

  // Reset form when modal opens with new service
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        date: '',
        time: '',
        consultationType: '',
        additionalInfo: ''
      })
      setErrors({})
      setIsFormVisible(true)
    }
  }, [isOpen, service])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'
    
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In production, you would send to your backend
      const bookingData = {
        ...formData,
        service: service.title,
        serviceId: service.id,
        price: service.price,
        timestamp: new Date().toISOString(),
        status: 'pending'
      }

      console.log('Booking submitted:', bookingData)
      
      // Success state
      setIsFormVisible(false)
      
      // Success toast
      toast.custom((t) => (
        <div className="bg-card border border-primary/20 p-4 rounded-lg shadow-lg max-w-sm">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-foreground">Booking Confirmed!</p>
              <p className="text-sm text-muted-foreground mt-1">
                We've scheduled your {service.title} consultation.
              </p>
              <div className="mt-3 space-y-1 text-xs">
                <p><span className="font-medium">Date:</span> {formData.date} at {formData.time}</p>
                <p><span className="font-medium">Type:</span> {formData.consultationType || 'Not specified'}</p>
                <p><span className="font-medium">Reference:</span> {Date.now().toString().slice(-8)}</p>
              </div>
              <Button 
                size="sm" 
                className="mt-3 w-full gold-gradient-bg text-primary-foreground"
                onClick={() => {
                  // Add to Google Calendar
                  const startDate = new Date(`${formData.date}T${formData.time}`)
                  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000) // 1 hour later
                  
                  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation: ${service.title}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=Service: ${service.title}%0APrice: ${service.price}%0AAdditional Info: ${formData.additionalInfo}&location=Video Call&sf=true&output=xml`
                  
                  window.open(googleCalendarUrl, '_blank')
                  toast.dismiss(t.id)
                }}
              >
                Add to Google Calendar
              </Button>
            </div>
          </div>
        </div>
      ), { duration: 8000 })

      // Close modal after 5 seconds
      setTimeout(() => {
        onClose()
      }, 5000)

    } catch (error) {
      console.error('Booking error:', error)
      toast.error('Failed to book appointment. Please try again.')
      setIsFormVisible(true)
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Get tomorrow's date for min date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-card border-primary/20">
        <DialogHeader className="sticky top-0 bg-card z-10 pb-4 border-b border-primary/10">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl md:text-2xl font-bold text-foreground">
                Book {service.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {service.price} • {service.estimatedTime}
              </DialogDescription>
            </div>
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

        <div className="space-y-4 py-2">
          {/* Success Screen */}
          {!isFormVisible ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for booking a {service.title} consultation.
              </p>
              <div className="space-y-3 max-w-xs mx-auto">
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="font-medium text-foreground">{service.title}</p>
                  <p className="text-sm text-muted-foreground">{formData.date} at {formData.time}</p>
                </div>
                <Button 
                  className="w-full gold-gradient-bg text-primary-foreground"
                  onClick={() => {
                    const startDate = new Date(`${formData.date}T${formData.time}`)
                    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000)
                    
                    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation: ${service.title}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=Service: ${service.title}%0APrice: ${service.price}%0AAdditional Info: ${formData.additionalInfo}&location=Video Call&sf=true&output=xml`
                    
                    window.open(googleCalendarUrl, '_blank')
                  }}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Add to Google Calendar
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Service Info */}
              <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{service.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-lg font-bold text-primary">{service.price}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" />
                      {service.estimatedTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Personal Information
                  </h4>
                  
                  <div className="space-y-4">
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
                        className={`bg-background border-primary/20 ${errors.name ? 'border-red-500' : ''}`}
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
                        className={`bg-background border-primary/20 ${errors.email ? 'border-red-500' : ''}`}
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 text-red-500 text-sm">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className={`bg-background border-primary/20 ${errors.phone ? 'border-red-500' : ''}`}
                        disabled={isLoading}
                      />
                      {errors.phone && (
                        <div className="flex items-center gap-1 text-red-500 text-sm">
                          <AlertCircle className="h-3 w-3" />
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                        className="bg-background border-primary/20"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                </div>

                {/* Scheduling */}
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Appointment
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-foreground">
                        Preferred Date *
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={minDate}
                        className={`bg-background border-primary/20 ${errors.date ? 'border-red-500' : ''}`}
                        disabled={isLoading}
                      />
                      {errors.date && (
                        <div className="flex items-center gap-1 text-red-500 text-sm">
                          <AlertCircle className="h-3 w-3" />
                          {errors.date}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-foreground">
                        Preferred Time *
                      </Label>
                      <Select 
                        value={formData.time} 
                        onValueChange={(value) => handleSelectChange('time', value)}
                        disabled={isLoading}
                      >
                        <SelectTrigger className={`bg-background border-primary/20 ${errors.time ? 'border-red-500' : ''}`}>
                          <SelectValue placeholder="Select time" />
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-primary/20 max-h-60">
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot} className="text-foreground">
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.time && (
                        <div className="flex items-center gap-1 text-red-500 text-sm">
                          <AlertCircle className="h-3 w-3" />
                          {errors.time}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-foreground flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        Consultation Type
                      </Label>
                      <Select 
                        value={formData.consultationType} 
                        onValueChange={(value) => handleSelectChange('consultationType', value)}
                        disabled={isLoading}
                      >
                        <SelectTrigger className="bg-background border-primary/20">
                          <SelectValue placeholder="Select consultation type" />
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-primary/20 max-h-60">
                          {consultationTypes.map((type) => (
                            <SelectItem key={type} value={type} className="text-foreground">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-foreground flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Tell us more about your requirements, specific challenges, or any questions you have..."
                    rows={3}
                    className="bg-background border-primary/20"
                    disabled={isLoading}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 sticky bottom-0 bg-card pb-2">
                  <Button
                    type="submit"
                    className="w-full gold-gradient-bg text-primary-foreground font-semibold py-3 text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent mr-2" />
                        Scheduling Appointment...
                      </>
                    ) : (
                      <>
                        <Calendar className="mr-2 h-4 w-4" />
                        Confirm Booking
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    You'll receive a confirmation email with meeting details.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}