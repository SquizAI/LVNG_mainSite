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
  CheckCircle,
  Zap,
  Users,
  Building2,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      icon: Calendar,
      title: 'Schedule Free Consultation',
      description: 'Book a 30-minute discovery call to discuss your AI project',
      action: 'Schedule Now',
      href: '/consultation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Start Your Project',
      description: 'Begin with our comprehensive AI assessment and planning',
      action: 'Get Started',
      href: '/get-started',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Direct Message',
      description: 'Send us a message and we\'ll respond within 24 hours',
      action: 'Send Message',
      href: 'mailto:LVNG@prjctcode.ai',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: 'Enterprise Sales',
      value: 'LVNG@prjctcode.ai',
      href: 'mailto:LVNG@prjctcode.ai',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: 'Direct Line',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      value: 'Miami, FL',
      href: '#',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri 9AM-6PM EST',
      href: '#',
      color: 'text-orange-400'
    }
  ]

  const officeLocations = [
    {
      city: 'Miami',
      region: 'Florida, USA',
      type: 'Headquarters',
      timezone: 'EST',
      icon: Building2
    },
    {
      city: 'Remote',
      region: 'Global Team',
      type: 'Distributed',
      timezone: 'All Timezones',
      icon: Globe
    }
  ]

  const responseTime = [
    { type: 'General Inquiries', time: '< 24 hours' },
    { type: 'Technical Questions', time: '< 12 hours' },
    { type: 'Enterprise Sales', time: '< 4 hours' },
    { type: 'Support Requests', time: '< 2 hours' }
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gray-950">
          <div className="container-width">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-blue-300 text-sm font-medium mb-6"
              >
                <MessageSquare className="h-4 w-4" />
                Get In Touch
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Let's Build Your AI Solution
                <span className="text-gradient block">Together</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Ready to transform your business with AI? We're here to help you navigate 
                your AI journey from strategy to implementation.
              </motion.p>
            </div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid md:grid-cols-3 gap-8 mb-20"
            >
              {contactMethods.map((method, index) => (
                <div key={method.title} className="glass-card rounded-2xl p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                  <p className="text-gray-400 mb-6">{method.description}</p>
                  
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    href={method.href}
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    {method.action}
                  </Button>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-900">
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Details */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold text-white mb-8"
                >
                  Contact Information
                </motion.h2>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center`}>
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                        {info.href !== '#' ? (
                          <a href={info.href} className="text-white hover:text-blue-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Office Locations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Our Locations</h3>
                  <div className="space-y-4">
                    {officeLocations.map((location, index) => (
                      <div key={location.city} className="glass-card rounded-xl p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                            <location.icon className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">{location.city}</div>
                            <div className="text-sm text-gray-400">{location.region} • {location.type}</div>
                            <div className="text-xs text-gray-500">{location.timezone}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Response Times */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold text-white mb-8"
                >
                  Response Times
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-gray-400 mb-8"
                >
                  We pride ourselves on quick response times to keep your AI projects moving forward.
                </motion.p>

                <div className="space-y-4 mb-12">
                  {responseTime.map((item, index) => (
                    <motion.div
                      key={item.type}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card rounded-xl p-4"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span className="text-white font-medium">{item.type}</span>
                        </div>
                        <span className="text-blue-400 font-semibold">{item.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Contact Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Quick Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <textarea
                      placeholder="Tell us about your AI project..."
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    ></textarea>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                    >
                      Send Message
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-950">
          <div className="container-width">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto"
              >
                Quick answers to common questions about our AI development services
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              {[
                {
                  question: "How long does a typical AI project take?",
                  answer: "Project timelines vary based on complexity. Simple integrations can be completed in 2-4 weeks, while custom AI solutions typically take 2-6 months. We provide detailed timelines during our initial consultation."
                },
                {
                  question: "Do you work with existing tech teams?",
                  answer: "Absolutely! We can either work alongside your existing team or handle the entire project ourselves. We adapt to your preferred collaboration style and technical requirements."
                },
                {
                  question: "What industries do you specialize in?",
                  answer: "We work across all industries including healthcare, finance, manufacturing, retail, and technology. Our platform-agnostic approach allows us to adapt to any business domain."
                },
                {
                  question: "How do you ensure data security?",
                  answer: "We implement enterprise-grade security measures including end-to-end encryption, access controls, audit logging, and compliance with GDPR, CCPA, and industry-specific regulations."
                }
              ].map((faq, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}

export default ContactPage 