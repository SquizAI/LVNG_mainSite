'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Building2, Code2, Zap, Clock, DollarSign, Shield, TrendingUp, Star, Phone } from 'lucide-react'
import { Button } from '../ui/Button'

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Real business outcomes that matter to executives
  const results = [
    { icon: DollarSign, value: '$2.4M', label: 'Average Annual Savings', description: 'Per implementation' },
    { icon: Clock, value: '60%', label: 'Faster Operations', description: 'Typical efficiency gain' },
    { icon: TrendingUp, value: '40%', label: 'Revenue Growth', description: 'Within 12 months' },
    { icon: Shield, value: '99.9%', label: 'System Uptime', description: 'Enterprise SLA' }
  ]

  // What we actually do (clear services)
  const services = [
    {
      icon: Code2,
      title: 'Custom AI Development',
      description: 'We build AI systems from scratch tailored to your exact business needs',
      examples: ['Document processing automation', 'Predictive analytics dashboards', 'Customer service chatbots']
    },
    {
      icon: Building2,
      title: 'System Integration',
      description: 'Connect AI to your existing software and workflows seamlessly',
      examples: ['CRM automation', 'ERP optimization', 'Data pipeline integration']
    },
    {
      icon: Users,
      title: 'Implementation & Training',
      description: 'Full deployment with team training to ensure adoption and success',
      examples: ['Staff training programs', '24/7 support', 'Performance monitoring']
    }
  ]

  // Social proof - who trusts us
  const testimonials = [
    { company: 'Fortune 500 Manufacturing', result: '47% cost reduction in quality control', logo: 'M' },
    { company: 'Major Healthcare System', result: '3x faster patient data processing', logo: 'H' },
    { company: 'Global Financial Services', result: '85% reduction in manual tasks', logo: 'F' }
  ]

  return (
    <section className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Subtle Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(100, 116, 139, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 116, 139, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
        
        <motion.div
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-900/[0.03] to-purple-900/[0.03] rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 50 }}
        />
      </div>

      <div className="container-width relative z-10">
        <div className="pt-20 pb-20">
          {/* Clear Value Proposition */}
          <div className="max-w-7xl mx-auto">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-900/20 border border-green-700/30 rounded-full text-green-400 text-sm font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Trusted by 500+ Enterprise Clients</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Problem + Solution */}
              <div className="space-y-8">
                
                {/* Main Headline - Problem Focused */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="space-y-6"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Stop Wasting <span className="text-red-400">$Millions</span> on 
                    <br />
                    <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Manual Processes
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                    We're full-stack engineers who build and deploy AI systems that <strong className="text-white">eliminate repetitive work</strong>, <strong className="text-white">reduce costs by 40-60%</strong>, and <strong className="text-white">scale your operations</strong> without hiring more staff.
                  </p>
                </motion.div>

                {/* What We Do (Crystal Clear) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">Here's exactly what we do:</h3>
                  <div className="grid gap-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{service.title}</h4>
                          <p className="text-gray-300 text-sm">{service.description}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {service.examples.map((example, i) => (
                              <span key={i} className="text-xs bg-slate-800 text-gray-400 px-2 py-1 rounded">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Strong CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="xl"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl shadow-blue-600/25 text-lg font-semibold"
                    rightIcon={<Phone className="h-5 w-5" />}
                    href="/consultation"
                  >
                    Get Free 30-Min AI Strategy Call
                  </Button>
                  <Button
                    size="xl"
                    variant="outline"
                    className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 text-lg font-semibold"
                    rightIcon={<ArrowRight className="h-5 w-5" />}
                    href="/get-started"
                  >
                    See ROI Calculator
                  </Button>
                </motion.div>

                {/* Urgency */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-sm text-gray-400"
                >
                  <span className="text-orange-400">⚡ Limited spots:</span> Only taking 3 new enterprise clients this quarter
                </motion.div>
              </div>

              {/* Right: Proof + Results */}
              <div className="space-y-8">
                
                {/* Business Results */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    Typical Results for Our Clients
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {results.map((result, index) => (
                      <motion.div
                        key={result.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <result.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                        <div className="text-sm font-medium text-gray-300">{result.label}</div>
                        <div className="text-xs text-gray-500">{result.description}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold text-white text-center">Recent Client Results:</h4>
                  
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.company}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className="bg-slate-800/50 border border-slate-700/30 rounded-lg p-4 flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.logo}
                      </div>
                      <div>
                        <div className="text-white font-medium">{testimonial.company}</div>
                        <div className="text-green-400 text-sm font-semibold">{testimonial.result}</div>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-400 ml-auto" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Bottom CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-20 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-2xl p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Automate Your Operations?
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Book a free strategy call where we'll analyze your processes and show you exactly how AI can save you money and time. No sales pitch—just actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl shadow-green-600/25 text-lg font-semibold"
                  rightIcon={<Phone className="h-5 w-5" />}
                  href="/consultation"
                >
                  Schedule Free Strategy Call
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-lg font-semibold"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  href="mailto:LVNG@prjctcode.ai"
                >
                  Email: LVNG@prjctcode.ai
                </Button>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <span className="text-green-400">✓</span> No commitment required • <span className="text-green-400">✓</span> 30-minute consultation • <span className="text-green-400">✓</span> Immediate ROI analysis
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 