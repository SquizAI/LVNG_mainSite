'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Code, 
  Database, 
  Workflow, 
  Shield, 
  LineChart,
  Zap,
  Cog,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Button } from '../ui/Button'

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Consultation',
      description: 'Comprehensive AI readiness assessment and strategic roadmap development',
      features: [
        'Current state analysis',
        'AI opportunity identification',
        'Custom roadmap creation',
        'ROI projection modeling'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific business requirements',
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision systems',
        'Predictive analytics'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data Infrastructure',
      description: 'Robust data pipelines and infrastructure for AI-powered operations',
      features: [
        'Data pipeline design',
        'ETL/ELT processes',
        'Real-time data streaming',
        'Data quality management'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Workflow,
      title: 'System Integration',
      description: 'Seamless integration of AI solutions into existing enterprise systems',
      features: [
        'API development',
        'Legacy system integration',
        'Workflow automation',
        'Process optimization'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'AI Governance & Security',
      description: 'Enterprise-grade security and compliance for AI implementations',
      features: [
        'Security framework design',
        'Compliance monitoring',
        'Risk assessment',
        'Audit trail implementation'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: LineChart,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization of AI system performance',
      features: [
        'Performance monitoring',
        'Model optimization',
        'Scaling strategies',
        'Cost optimization'
      ],
      color: 'from-teal-500 to-blue-500'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business requirements, existing systems, and AI opportunities.',
      duration: '2-3 weeks'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop comprehensive AI strategy with clear roadmap and success metrics.',
      duration: '1-2 weeks'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Build and test AI solutions using best practices and enterprise standards.',
      duration: '6-12 weeks'
    },
    {
      step: '04',
      title: 'Integration & Testing',
      description: 'Seamlessly integrate AI solutions with thorough testing and validation.',
      duration: '2-4 weeks'
    },
    {
      step: '05',
      title: 'Deployment & Monitoring',
      description: 'Launch AI solutions with continuous monitoring and performance optimization.',
      duration: 'Ongoing'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="container-width">
        {/* Services Overview */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-blue-300 text-sm font-medium mb-6"
          >
            <Cog className="h-4 w-4" />
            Comprehensive AI Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            End-to-End AI Integration
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            From strategic planning to deployment and optimization, we provide comprehensive AI development 
            services that transform your business operations and drive measurable results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-card rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-5 w-5 text-gray-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Our Proven Process
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              A structured approach to AI implementation that ensures successful outcomes and measurable ROI
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform translate-x-4 opacity-30" />
                )}
                
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto lg:mx-0 glow-blue">
                  {step.step}
                </div>
                
                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 glass-card text-blue-300 rounded-full text-xs font-medium">
                    <Zap className="h-3 w-3" />
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI integration services can drive measurable results for your organization
          </p>
          <Button
            size="xl"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg glow-blue"
            rightIcon={<ArrowRight className="h-5 w-5" />}
          >
            Schedule Strategic Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection 