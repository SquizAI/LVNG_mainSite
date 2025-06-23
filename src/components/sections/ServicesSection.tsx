'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Search,
  Code2,
  Plug,
  Settings,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Wrench,
  HeartHandshake
} from 'lucide-react'
import { Button } from '../ui/Button'

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'AI Strategy & Assessment',
      description: 'Discover where AI can create real value in your business',
      features: [
        'Comprehensive business process analysis',
        'AI opportunity identification',
        'Technology stack recommendations',
        'ROI projections and success metrics',
        'Implementation roadmap'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code2,
      title: 'Custom AI Development',
      description: 'Build AI solutions tailored to your specific needs',
      features: [
        'Custom AI agents and automation',
        'Machine learning model development',
        'Natural language processing systems',
        'Computer vision applications',
        'Predictive analytics solutions'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Plug,
      title: 'Integration & Implementation',
      description: 'Seamlessly connect AI with your existing systems',
      features: [
        'Enterprise system integration',
        'API development and orchestration',
        'Data pipeline architecture',
        'User interface development',
        'Testing and quality assurance'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Settings,
      title: 'Support & Optimization',
      description: 'Continuous improvement to maximize your AI investment',
      features: [
        'Performance monitoring',
        'Model retraining and updates',
        'User training and documentation',
        'Technical support',
        'Scaling and expansion planning'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const process = [
    {
      icon: Lightbulb,
      title: 'Understand',
      description: 'We start by understanding your business, challenges, and goals'
    },
    {
      icon: Target,
      title: 'Design',
      description: 'Create a tailored AI strategy that aligns with your objectives'
    },
    {
      icon: Wrench,
      title: 'Build',
      description: 'Develop and implement solutions using proven methodologies'
    },
    {
      icon: HeartHandshake,
      title: 'Support',
      description: 'Provide ongoing optimization and support for long-term success'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-blue-300 text-sm font-medium mb-6"
          >
            <Code2 className="h-4 w-4" />
            Full-Stack AI Development
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How We Help You Succeed with AI
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We're not just consultants—we're builders. From initial strategy to ongoing support, 
            we handle every aspect of your AI implementation.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Our Proven Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Why Businesses Choose LVNG.ai
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">Full-Stack</div>
              <p className="text-gray-400">From infrastructure to UI, we handle everything</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">Platform Agnostic</div>
              <p className="text-gray-400">We work with any AI platform or build custom</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">Long-Term Partner</div>
              <p className="text-gray-400">Ongoing support, not one-off projects</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Build AI That Works?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you implement AI successfully
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              href="/get-started"
            >
              Start Your Project
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white hover:border-gray-500"
              href="/consultation"
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection 