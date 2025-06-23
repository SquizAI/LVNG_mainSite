'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  MessageSquare,
  Clock,
  ArrowRight,
  Brain,
  Zap,
  Users
} from 'lucide-react'
import { Button } from '../ui/Button'

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: Calendar,
      title: 'Schedule Free Consultation',
      description: 'Book a 30-minute discovery call to discuss your AI transformation',
      action: 'Schedule Now',
      href: '/consultation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Start AI Assessment',
      description: 'Begin your journey with our comprehensive business analysis',
      action: 'Get Started',
      href: '/get-started',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mail,
      title: 'Direct Contact',
      description: 'Email us directly for enterprise inquiries and partnerships',
      action: 'LVNG@prjctcode.ai',
      href: 'mailto:LVNG@prjctcode.ai',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const processSteps = [
    {
      icon: Brain,
      title: 'Initial Consultation',
      description: 'Free 30-minute call to understand your business needs'
    },
    {
      icon: Users,
      title: 'Deep Analysis',
      description: 'Complete assessment of your operations and AI opportunities'
    },
    {
      icon: Zap,
      title: 'Start Building',
      description: 'Begin developing your custom living intelligence systems'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gray-900">
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
            <MessageSquare className="h-4 w-4" />
            Get Started
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Build Your Second Brain?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Let's discuss how we can transform your business with living intelligence. 
            Whether you're 10 people or 10,000, we'll build AI systems that fit your needs.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <a href={method.href} className="block h-full">
                <div className="glass-card rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
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
                  
                  {/* Action */}
                  <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                    <span>{method.action}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Simple Process, Powerful Results
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-blue">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Direct Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-6">
              Prefer Direct Contact?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:LVNG@prjctcode.ai" className="hover:text-blue-400 transition-colors">
                  LVNG@prjctcode.ai
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Miami, FL</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Mon-Fri 9AM-6PM EST</span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                Enterprise clients and partners receive priority support. 
                We typically respond within 2 business hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection 