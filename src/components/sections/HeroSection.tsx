'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Building2, Code2, Zap, Clock, DollarSign, TrendingUp, Phone, Brain, Target, Cpu } from 'lucide-react'
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

  // Real market data about AI optimization benefits
  const marketBenefits = [
    { icon: DollarSign, value: '25-40%', label: 'Cost Reduction', source: 'McKinsey Global Institute' },
    { icon: Clock, value: '50-70%', label: 'Time Savings', source: 'Deloitte AI Survey 2024' },
    { icon: TrendingUp, value: '15-25%', label: 'Revenue Growth', source: 'PwC AI Analysis' },
    { icon: Target, value: '90%+', label: 'Accuracy Improvement', source: 'MIT Technology Review' }
  ]

  // Our actual services (what we really do)
  const services = [
    {
      icon: Code2,
      title: 'Custom AI Development',
      description: 'We build AI solutions from scratch tailored to your specific business needs and workflows.',
      capabilities: ['Document processing automation', 'Predictive analytics systems', 'Intelligent chatbots & assistants']
    },
    {
      icon: Building2,
      title: 'System Integration',
      description: 'Seamlessly connect AI capabilities to your existing software and business processes.',
      capabilities: ['CRM & ERP integration', 'API development & integration', 'Database optimization']
    },
    {
      icon: Users,
      title: 'Implementation & Support',
      description: 'Complete deployment with team training and ongoing support to ensure successful adoption.',
      capabilities: ['Staff training programs', 'Technical documentation', 'Ongoing maintenance & updates']
    }
  ]

  return (
    <section className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Clean Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(100, 116, 139, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 116, 139, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
        
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-900/[0.05] to-purple-900/[0.05] rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: "spring", damping: 60, stiffness: 100 }}
        />
      </div>

      <div className="container-width relative z-10">
        <div className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Clean, Honest Value Proposition */}
            <div className="text-center space-y-8 mb-16">
              
              {/* Honest Positioning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/20 border border-blue-700/30 rounded-full text-blue-400 text-sm font-medium"
              >
                <Brain className="h-4 w-4" />
                <span>Full-Stack AI Integration Specialists</span>
              </motion.div>

              {/* Problem-Focused Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Stop Wasting Time on 
                  <br />
                  <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    Repetitive Tasks
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  We're full-stack engineers who build and deploy AI systems that <strong className="text-white">automate your manual processes</strong>, so you can focus on growing your business instead of managing repetitive work.
                </p>
              </motion.div>

              {/* Market Data (Real Numbers) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm max-w-4xl mx-auto"
              >
                <h3 className="text-lg font-semibold text-white mb-6 text-center">
                  Market Research: What AI Automation Typically Delivers
                </h3>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {marketBenefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{benefit.value}</div>
                      <div className="text-sm font-medium text-gray-300 mb-1">{benefit.label}</div>
                      <div className="text-xs text-gray-500">{benefit.source}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* What We Actually Do */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
              
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Here's Exactly What We Build For You:
                </h2>

                <div className="space-y-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-slate-900/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                          <p className="text-gray-300 mb-3">{service.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.capabilities.map((capability, i) => (
                              <span key={i} className="text-xs bg-slate-800 text-gray-400 px-3 py-1 rounded-full">
                                {capability}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Why Work With Us?
                </h2>

                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-6">
                    
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Full-Stack Expertise</h4>
                        <p className="text-gray-300 text-sm">We handle everything from AI model development to database integration and user interfaces.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Business-First Approach</h4>
                        <p className="text-gray-300 text-sm">We understand your business processes first, then build AI solutions that actually solve real problems.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">End-to-End Implementation</h4>
                        <p className="text-gray-300 text-sm">From initial consultation to deployment and training—we ensure your team can actually use what we build.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Transparent Process</h4>
                        <p className="text-gray-300 text-sm">No black boxes. We'll show you exactly how everything works and train your team to maintain it.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="bg-slate-900/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold text-white mb-4">Our Technology Stack</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Cpu className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">AI/ML</div>
                      <div className="text-xs text-gray-500">Python, PyTorch, OpenAI</div>
                    </div>
                    <div className="text-center">
                      <Code2 className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">Backend</div>
                      <div className="text-xs text-gray-500">Node.js, Python, APIs</div>
                    </div>
                    <div className="text-center">
                      <Building2 className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">Integration</div>
                      <div className="text-xs text-gray-500">REST, GraphQL, Webhooks</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Clear Call-to-Action */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Automate Your Business Processes?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your specific needs and show you exactly how AI can streamline your operations. 
                <strong className="text-white"> Free consultation, no commitment required.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl shadow-blue-600/25 text-lg font-semibold"
                  rightIcon={<Phone className="h-5 w-5" />}
                  href="/consultation"
                >
                  Schedule Free Consultation
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 text-lg font-semibold"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  href="/get-started"
                >
                  See How It Works
                </Button>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                <span className="text-green-400">✓</span> Free 30-minute consultation
                •
                <span className="text-green-400"> ✓</span> No sales pressure
                •
                <span className="text-green-400"> ✓</span> Honest assessment of your needs
              </div>

              <div className="mt-4 text-sm text-gray-500">
                Direct contact: <a href="mailto:LVNG@prjctcode.ai" className="text-blue-400 hover:text-blue-300">LVNG@prjctcode.ai</a> • Miami, FL
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 