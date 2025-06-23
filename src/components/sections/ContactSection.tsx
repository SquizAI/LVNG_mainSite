'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  MessageSquare,
  Users,
  ArrowRight,
  Clock,
  Shield,
  Zap
} from 'lucide-react'
import { Button } from '../ui/Button'

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: Calendar,
      title: 'Schedule Consultation',
      description: 'Book a strategic consultation with our AI integration experts',
      action: 'Schedule Now',
      color: 'from-blue-500 to-cyan-500',
      priority: 'primary'
    },
    {
      icon: MessageSquare,
      title: 'Technical Discussion',
      description: 'Discuss your technical requirements with our development team',
      action: 'Start Discussion',
      color: 'from-purple-500 to-pink-500',
      priority: 'secondary'
    },
    {
      icon: Users,
      title: 'Enterprise Partnership',
      description: 'Explore partnership opportunities for large-scale implementations',
      action: 'Contact Partnership Team',
      color: 'from-green-500 to-emerald-500',
      priority: 'secondary'
    }
  ]

  const consultationTypes = [
    {
      title: 'AI Strategy Assessment',
      duration: '60 minutes',
      description: 'Comprehensive evaluation of your AI readiness and opportunities',
      features: [
        'Current state analysis',
        'ROI projection modeling',
        'Strategic roadmap development',
        'Technology stack recommendations'
      ]
    },
    {
      title: 'Technical Architecture Review',
      duration: '90 minutes',
      description: 'Deep dive into technical requirements and system architecture',
      features: [
        'System integration planning',
        'Scalability assessment',
        'Security framework design',
        'Performance optimization strategy'
      ]
    },
    {
      title: 'Implementation Planning',
      duration: '120 minutes',
      description: 'Detailed project planning and implementation strategy',
      features: [
        'Project timeline development',
        'Resource allocation planning',
        'Risk assessment and mitigation',
        'Success metrics definition'
      ]
    }
  ]

  const guarantees = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'SOC 2 compliant with end-to-end encryption'
    },
    {
      icon: Clock,
      title: '24-Hour Response Time',
      description: 'Guaranteed response within one business day'
    },
    {
      icon: Zap,
      title: 'No-Obligation Consultation',
      description: 'Initial strategic consultation at no cost'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-blue-300 text-sm font-medium mb-6"
          >
            <Users className="h-4 w-4" />
            Enterprise Consultation
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Discuss Your AI Strategy
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Partner with our AI integration experts to transform your business operations. 
            Schedule a strategic consultation to explore how AI can drive measurable results for your organization.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                method.priority === 'primary' ? 'ring-2 ring-blue-500/30 shadow-2xl shadow-blue-500/20' : ''
              }`}
            >
              {method.priority === 'primary' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-medium">
                    Recommended
                  </div>
                </div>
              )}
              
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {method.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {method.description}
              </p>
              
              <Button
                variant={method.priority === 'primary' ? 'default' : 'outline'}
                className={method.priority === 'primary' ? 'w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' : 'w-full border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white hover:border-gray-500'}
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                {method.action}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Consultation Types */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">
              Consultation Options
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose the consultation format that best fits your needs and timeline
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <motion.div
                key={consultation.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">
                    {consultation.title}
                  </h4>
                  <div className="px-3 py-1 glass-card text-blue-300 rounded-full text-sm font-medium">
                    {consultation.duration}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {consultation.description}
                </p>
                
                <ul className="space-y-2">
                  {consultation.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Enterprise Sales</div>
                  <div className="text-gray-400">enterprise@lvng.ai</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Direct Line</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Headquarters</div>
                  <div className="text-gray-400">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Our Commitment
            </h3>
            
            <div className="space-y-6">
              {guarantees.map((guarantee, index) => (
                <div key={guarantee.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <guarantee.icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">
                      {guarantee.title}
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed">
                      {guarantee.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 gradient-bg rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 grid-background opacity-20" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your AI Transformation?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join leading enterprises who trust LVNG.ai to deliver measurable AI-driven results
            </p>
            <Button
              size="xl"
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 border-white/30 hover:border-white/50 backdrop-blur-sm"
              rightIcon={<ArrowRight className="h-5 w-5" />}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection 