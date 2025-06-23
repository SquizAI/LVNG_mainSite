'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle, 
  Building2, 
  Users, 
  Target,
  Zap,
  Brain,
  Code2,
  Shield,
  MessageSquare,
  Calendar,
  FileText,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface FormData {
  // Company Information
  companyName: string
  industry: string
  companySize: string
  
  // Contact Information
  firstName: string
  lastName: string
  email: string
  phone: string
  role: string
  
  // Project Information
  projectType: string[]
  currentChallenges: string[]
  timeline: string
  budget: string
  
  // AI Readiness
  currentAIUsage: string
  dataMaturity: string
  technicalTeam: string
  
  // Goals & Priorities
  primaryGoals: string[]
  successMetrics: string[]
  
  // Additional Information
  additionalInfo: string
  preferredContactMethod: string
}

const GetStartedPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    industry: '',
    companySize: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    projectType: [],
    currentChallenges: [],
    timeline: '',
    budget: '',
    currentAIUsage: '',
    dataMaturity: '',
    technicalTeam: '',
    primaryGoals: [],
    successMetrics: [],
    additionalInfo: '',
    preferredContactMethod: 'email'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const steps = [
    {
      title: 'Company Information',
      description: 'Tell us about your organization',
      icon: Building2,
      fields: ['companyName', 'industry', 'companySize']
    },
    {
      title: 'Contact Details',
      description: 'How can we reach you?',
      icon: Users,
      fields: ['firstName', 'lastName', 'email', 'phone', 'role']
    },
    {
      title: 'Project Scope',
      description: 'What are you looking to achieve?',
      icon: Target,
      fields: ['projectType', 'currentChallenges', 'timeline', 'budget']
    },
    {
      title: 'AI Readiness',
      description: 'Current state assessment',
      icon: Brain,
      fields: ['currentAIUsage', 'dataMaturity', 'technicalTeam']
    },
    {
      title: 'Goals & Success',
      description: 'Define your objectives',
      icon: Sparkles,
      fields: ['primaryGoals', 'successMetrics', 'additionalInfo', 'preferredContactMethod']
    }
  ]

  const industries = [
    'Technology', 'Healthcare', 'Financial Services', 'Manufacturing', 
    'Retail', 'Education', 'Government', 'Energy', 'Transportation', 'Other'
  ]

  const companySizes = [
    'Startup (1-50 employees)',
    'Small Business (51-200 employees)',
    'Mid-Market (201-1000 employees)',
    'Enterprise (1001-5000 employees)',
    'Large Enterprise (5000+ employees)'
  ]

  const projectTypes = [
    'AI Strategy & Consultation',
    'Custom AI Development',
    'Data Infrastructure',
    'System Integration',
    'AI Governance & Security',
    'Performance Optimization'
  ]

  const challenges = [
    'Lack of AI strategy',
    'Data quality issues',
    'Integration complexity',
    'Skills gap',
    'Regulatory compliance',
    'ROI measurement',
    'Scalability concerns',
    'Legacy system constraints'
  ]

  const goals = [
    'Increase operational efficiency',
    'Improve customer experience',
    'Reduce costs',
    'Drive innovation',
    'Enhance decision making',
    'Automate processes',
    'Gain competitive advantage',
    'Ensure compliance'
  ]

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field: keyof FormData, value: string) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[]
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value]
      return { ...prev, [field]: newArray }
    })
  }

  const isStepValid = (stepIndex: number) => {
    const step = steps[stepIndex]
    return step.fields.every(field => {
      const value = formData[field as keyof FormData]
      if (Array.isArray(value)) {
        return value.length > 0
      }
      return value && value.toString().trim() !== ''
    })
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Company Name *
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Industry *
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select your industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Company Size *
              </label>
              <select
                value={formData.companySize}
                onChange={(e) => handleInputChange('companySize', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select company size</option>
                {companySizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
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
                placeholder="e.g., CTO, VP of Engineering, AI Director"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-3">
                Project Type * (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {projectTypes.map(type => (
                  <div
                    key={type}
                    onClick={() => handleArrayChange('projectType', type)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      formData.projectType.includes(type)
                        ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                        : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{type}</span>
                      {formData.projectType.includes(type) && (
                        <CheckCircle className="h-4 w-4 text-blue-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-3">
                Current Challenges * (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {challenges.map(challenge => (
                  <div
                    key={challenge}
                    onClick={() => handleArrayChange('currentChallenges', challenge)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                      formData.currentChallenges.includes(challenge)
                        ? 'border-purple-500 bg-purple-500/10 text-purple-300'
                        : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{challenge}</span>
                      {formData.currentChallenges.includes(challenge) && (
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Timeline *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (1-3 months)</option>
                  <option value="short-term">Short-term (3-6 months)</option>
                  <option value="medium-term">Medium-term (6-12 months)</option>
                  <option value="long-term">Long-term (12+ months)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Budget Range *
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-100k">Under $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="over-5m">Over $5M</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Current AI Usage *
              </label>
              <select
                value={formData.currentAIUsage}
                onChange={(e) => handleInputChange('currentAIUsage', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select current AI usage</option>
                <option value="none">No current AI implementation</option>
                <option value="limited">Limited AI pilots or experiments</option>
                <option value="moderate">Some AI solutions in production</option>
                <option value="extensive">Extensive AI deployment</option>
                <option value="advanced">Advanced AI capabilities</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Data Maturity Level *
              </label>
              <select
                value={formData.dataMaturity}
                onChange={(e) => handleInputChange('dataMaturity', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select data maturity level</option>
                <option value="basic">Basic data collection</option>
                <option value="structured">Structured data management</option>
                <option value="integrated">Integrated data platforms</option>
                <option value="advanced">Advanced analytics capabilities</option>
                <option value="optimized">Fully optimized data ecosystem</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Technical Team Capacity *
              </label>
              <select
                value={formData.technicalTeam}
                onChange={(e) => handleInputChange('technicalTeam', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select team capacity</option>
                <option value="limited">Limited technical resources</option>
                <option value="moderate">Moderate technical capacity</option>
                <option value="strong">Strong technical team</option>
                <option value="expert">Expert-level capabilities</option>
              </select>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-3">
                Primary Goals * (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {goals.map(goal => (
                  <div
                    key={goal}
                    onClick={() => handleArrayChange('primaryGoals', goal)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                      formData.primaryGoals.includes(goal)
                        ? 'border-green-500 bg-green-500/10 text-green-300'
                        : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{goal}</span>
                      {formData.primaryGoals.includes(goal) && (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Success Metrics *
              </label>
              <textarea
                value={formData.successMetrics.join('\n')}
                onChange={(e) => handleInputChange('successMetrics', e.target.value.split('\n').filter(Boolean))}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
                placeholder="How will you measure success? (one metric per line)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Additional Information
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                placeholder="Any additional details about your project or specific requirements..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Preferred Contact Method *
              </label>
              <div className="flex gap-4">
                {['email', 'phone', 'video-call'].map(method => (
                  <div
                    key={method}
                    onClick={() => handleInputChange('preferredContactMethod', method)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                      formData.preferredContactMethod === method
                        ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                        : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600'
                    }`}
                  >
                    <span className="text-sm capitalize">{method.replace('-', ' ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (isSubmitted) {
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
                  Thank You for Your Interest!
                </h1>
                
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We've received your information and our AI integration experts will review your requirements. 
                  You can expect to hear from us within 24 hours to schedule your strategic consultation.
                </p>
                
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    rightIcon={<Calendar className="h-5 w-5" />}
                  >
                    Schedule Immediate Consultation
                  </Button>
                  
                  <p className="text-sm text-gray-500">
                    Or return to our <a href="/" className="text-blue-400 hover:text-blue-300">homepage</a>
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
              Get Started with AI Integration
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Tell us about your organization and goals. Our AI experts will create a customized integration strategy for your business.
            </motion.p>
          </div>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex justify-between items-center mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ 
                      scale: index <= currentStep ? 1 : 0.8,
                      opacity: index <= currentStep ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      index < currentStep 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : index === currentStep
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                        : 'bg-gray-700'
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle className="h-6 w-6 text-white" />
                    ) : (
                      <step.icon className="h-6 w-6 text-white" />
                    )}
                  </motion.div>
                  <div className="text-center">
                    <div className={`text-sm font-medium ${
                      index <= currentStep ? 'text-white' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </div>
                    <div className={`text-xs ${
                      index <= currentStep ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 bg-gradient-to-r w-full mt-6 ${
                      index < currentStep 
                        ? 'from-green-500 to-emerald-500' 
                        : 'from-gray-700 to-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 md:p-12"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {steps[currentStep].title}
                </h2>
                <p className="text-gray-400">
                  {steps[currentStep].description}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStepContent()}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`${
                    currentStep === 0 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  icon={<ArrowLeft className="h-4 w-4" />}
                >
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStep 
                          ? 'bg-blue-500 w-8' 
                          : index < currentStep
                          ? 'bg-green-500'
                          : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!isStepValid(currentStep) || isSubmitting}
                  className={`${
                    !isStepValid(currentStep) 
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
                    ) : currentStep === steps.length - 1 ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )
                  }
                >
                  {isSubmitting 
                    ? 'Processing...' 
                    : currentStep === steps.length - 1 
                    ? 'Submit Application' 
                    : 'Next Step'
                  }
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default GetStartedPage 