'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  Code2, 
  Zap,
  CheckCircle,
  ArrowRight,
  Building2,
  Globe,
  Award,
  Lightbulb,
  Shield
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const AboutPage: React.FC = () => {
  const highlights = [
    { number: 'Full-Stack', label: 'AI Development', icon: Code2 },
    { number: 'Multi-Industry', label: 'Experience', icon: Building2 },
    { number: 'Enterprise', label: 'Security Standards', icon: Award },
    { number: 'Ongoing', label: 'Support & Optimization', icon: Zap }
  ]

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success by the real business value our AI solutions deliver, not just technical metrics.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work as an extension of your team, whether building alongside you or handling everything ourselves.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'We stay ahead of AI trends to ensure your solutions remain cutting-edge and competitive.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Every solution is built with enterprise-grade security and compliance from day one.'
    }
  ]

  const team = [
    {
      name: 'Alex Chen',
      role: 'Chief Technology Officer',
      bio: 'Former AI lead at Google, specializing in large-scale ML systems and enterprise integration.',
      expertise: ['Machine Learning', 'System Architecture', 'Enterprise Integration']
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Head of AI Strategy',
      bio: 'Ex-McKinsey consultant with 10+ years helping Fortune 500 companies implement AI solutions.',
      expertise: ['AI Strategy', 'Business Transformation', 'ROI Optimization']
    },
    {
      name: 'Michael Kim',
      role: 'Lead AI Engineer',
      bio: 'Former OpenAI engineer with expertise in foundation models and custom AI development.',
      expertise: ['Foundation Models', 'Custom Development', 'Performance Optimization']
    }
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
                <Users className="h-4 w-4" />
                About LVNG.ai
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                We Build AI That
                <span className="text-gradient block">Actually Works</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Founded by AI engineers and business strategists who were frustrated by failed AI projects. 
                We're here to change that by building solutions that deliver real business value.
              </motion.p>
            </div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {highlights.map((highlight, index) => (
                <div key={highlight.label} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                    <highlight.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-lg font-bold text-white mb-2">{highlight.number}</div>
                  <div className="text-gray-400">{highlight.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-900">
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission: Demystify AI Implementation
                </h2>
                <div className="space-y-6 text-gray-400 text-lg">
                  <p>
                    <span className="text-white font-semibold">65% of AI projects fail.</span> Not because 
                    the technology isn't ready, but because companies struggle with implementation, 
                    integration, and finding the right technical talent.
                  </p>
                  <p>
                    We exist to bridge that gap. Our team combines deep AI expertise with real-world 
                    business experience to build solutions that actually work in production environments.
                  </p>
                  <p>
                    <span className="text-white font-semibold">We're not consultants who talk.</span> We're 
                    builders who code. We take responsibility for delivering working AI systems that 
                    drive measurable business outcomes.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">What Makes Us Different</h3>
                <div className="space-y-4">
                  {[
                    'We build and deploy, not just consult',
                    'Full-stack AI development capabilities',
                    'Platform-agnostic approach',
                    'Enterprise security and compliance built-in',
                    'Long-term partnership model'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                Our Core Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto"
              >
                The principles that guide every project and partnership
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-900">
          <div className="container-width">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Meet Our Leadership Team
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto"
              >
                AI experts with proven track records at leading technology companies
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                  <p className="text-blue-400 text-center mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-950">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you build AI solutions that actually deliver results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  href="/consultation"
                >
                  Schedule Consultation
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  href="/get-started"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}

export default AboutPage 