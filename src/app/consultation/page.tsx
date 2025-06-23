'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar,
  Clock,
  User,
  Building2,
  CheckCircle,
  MessageSquare,
  Video,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Users,
  Target,
  Brain
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface ConsultationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  role: string
  consultationType: string
  preferredDate: string
  preferredTime: string
  meetingType: string
  projectDescription: string
  urgency: string
}

const ConsultationPage: React.FC = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<ConsultationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    meetingType: 'video',
    projectDescription: '',
    urgency: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const consultationTypes = [
    {
      id: 'strategic',
      title: 'AI Strategy Consultation',
      description: 'High-level strategic planning and roadmap development',
      duration: '60 minutes',
      icon: Target,
      features: ['Technology assessment', 'ROI analysis', 'Implementation roadmap', 'Risk evaluation']
    },
    {
      id: 'technical',
      title: 'Technical Architecture Review',
      description: 'Deep-dive into technical requirements and solutions',
      duration: '90 minutes',
      icon: Brain,
      features: ['System architecture', 'Integration planning', 'Technology stack', 'Performance optimization']
    },
    {
      id: 'discovery',
      title: 'Discovery Workshop',
      description: 'Comprehensive assessment of your AI readiness',
      duration: '120 minutes',
      icon: Users,
      features: ['Current state analysis', 'Gap assessment', 'Team readiness', 'Quick wins identification']
    }
  ]

  const availableSlots = [
    { date: '2024-12-20', slots: ['09:00', '11:00', '14:00', '16:00'] },
    { date: '2024-12-21', slots: ['10:00', '13:00', '15:00'] },
    { date: '2024-12-23', slots: ['09:00', '11:00', '14:00', '16:00'] },
    { date: '2024-12-24', slots: ['10:00', '13:00'] },
    { date: '2024-12-27', slots: ['09:00', '11:00', '14:00', '15:00', '16:00'] }
  ]

  const handleInputChange = (field: keyof ConsultationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsBooked(true)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  if (isBooked) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="glass-card rounded-3xl p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle className="h-10 w-10 text-white" />
                </motion.div>
                
                <h1 className="text-3xl font-bold text-white mb-6">
                  Consultation Scheduled!
                </h1>
                
                <div className="glass-card rounded-xl p-6 mb-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-400" />
                      <span className="text-white">{formatDate(formData.preferredDate)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-purple-400" />
                      <span className="text-white">{formData.preferredTime} PST</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Video className="h-5 w-5 text-green-400" />
                      <span className="text-white capitalize">{formData.meetingType} Meeting</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  You'll receive a calendar invitation with meeting details within the next few minutes. 
                  Our AI integration expert will be prepared with insights specific to your industry and use case.
                </p>
                
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    rightIcon={<ArrowRight className="h-5 w-5" />}
                  >
                    Add to Calendar
                  </Button>
                  
                  <p className="text-sm text-gray-500">
                    Questions? Email us at <a href="mailto:consulting@lvng.ai" className="text-blue-400 hover:text-blue-300">consulting@lvng.ai</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container-width">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Schedule Your AI Consultation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Get personalized guidance from our AI integration experts. We'll analyze your specific requirements and create a tailored strategy for your organization.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                  Choose Your Consultation Type
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {consultationTypes.map((type) => (
                    <motion.div
                      key={type.id}
                      whileHover={{ y: -5 }}
                      onClick={() => handleInputChange('consultationType', type.id)}
                      className={`glass-card rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                        formData.consultationType === type.id
                          ? 'ring-2 ring-blue-500 bg-blue-500/10'
                          : 'hover:shadow-2xl hover:shadow-blue-500/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <type.icon className="h-8 w-8 text-blue-400" />
                        <span className="text-sm text-gray-400">{type.duration}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {type.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4">
                        {type.description}
                      </p>
                      
                      <div className="space-y-2">
                        {type.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-xs text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!formData.consultationType}
                    className={`${
                      !formData.consultationType
                        ? 'opacity-50 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    }`}
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-2xl p-8 md:p-12"
              >
                <h2 className="text-2xl font-bold text-white mb-8">
                  Your Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Your Role *
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., CTO, VP Engineering"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-white mb-2">
                    Project Description *
                  </label>
                  <textarea
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                    placeholder="Brief description of your AI integration goals and current challenges..."
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-white mb-2">
                    Urgency Level *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { value: 'urgent', label: 'Urgent', desc: 'Need to start ASAP' },
                      { value: 'moderate', label: 'Moderate', desc: 'Within next month' },
                      { value: 'planning', label: 'Planning', desc: 'Exploring options' }
                    ].map(option => (
                      <div
                        key={option.value}
                        onClick={() => handleInputChange('urgency', option.value)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                          formData.urgency === option.value
                            ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                            : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600'
                        }`}
                      >
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm opacity-70">{option.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    onClick={() => setStep(1)}
                    className="text-gray-300 hover:text-white"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.role || !formData.projectDescription || !formData.urgency}
                    className={`${
                      !formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.role || !formData.projectDescription || !formData.urgency
                        ? 'opacity-50 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    }`}
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Schedule Time
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-2xl p-8 md:p-12"
              >
                <h2 className="text-2xl font-bold text-white mb-8">
                  Choose Date & Time
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Available Dates</h3>
                    <div className="space-y-3">
                      {availableSlots.map((day) => (
                        <div
                          key={day.date}
                          onClick={() => handleInputChange('preferredDate', day.date)}
                          className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                            formData.preferredDate === day.date
                              ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                              : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600'
                          }`}
                        >
                          <div className="font-medium">{formatDate(day.date)}</div>
                          <div className="text-sm opacity-70">{day.slots.length} slots available</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Available Times</h3>
                    {formData.preferredDate && (
                      <div className="grid grid-cols-2 gap-3">
                        {availableSlots
                          .find(day => day.date === formData.preferredDate)
                          ?.slots.map((time) => (
                            <div
                              key={time}
                              onClick={() => handleInputChange('preferredTime', time)}
                              className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 text-center ${
                                formData.preferredTime === time
                                  ? 'border-purple-500 bg-purple-500/10 text-purple-300'
                                  : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600'
                              }`}
                            >
                              {time} PST
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Meeting Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: 'video', icon: Video, label: 'Video Call', desc: 'Zoom or Teams' },
                      { value: 'phone', icon: Phone, label: 'Phone Call', desc: 'Audio only' },
                      { value: 'in-person', icon: Users, label: 'In-Person', desc: 'San Francisco office' }
                    ].map(option => (
                      <div
                        key={option.value}
                        onClick={() => handleInputChange('meetingType', option.value)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                          formData.meetingType === option.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600'
                        }`}
                      >
                        <option.icon className="h-6 w-6 mb-2" />
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm opacity-70">{option.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    onClick={() => setStep(2)}
                    className="text-gray-300 hover:text-white"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.preferredDate || !formData.preferredTime || isSubmitting}
                    className={`${
                      !formData.preferredDate || !formData.preferredTime || isSubmitting
                        ? 'opacity-50 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    }`}
                    rightIcon={
                      isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="h-4 w-4" />
                        </motion.div>
                      ) : (
                        <CheckCircle className="h-4 w-4" />
                      )
                    }
                  >
                    {isSubmitting ? 'Booking...' : 'Book Consultation'}
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ConsultationPage 