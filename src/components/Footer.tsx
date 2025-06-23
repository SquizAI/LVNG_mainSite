'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  Zap,
  ExternalLink
} from 'lucide-react'
import { Button } from './ui/Button'

const Footer: React.FC = () => {
  const navigation = {
    solutions: [
      { name: 'AI Strategy & Consultation', href: '/solutions/ai-strategy' },
      { name: 'Custom AI Development', href: '/solutions/custom-development' },
      { name: 'Data Infrastructure', href: '/solutions/data-infrastructure' },
      { name: 'System Integration', href: '/solutions/integration' },
      { name: 'AI Governance & Security', href: '/solutions/governance' },
      { name: 'Performance Optimization', href: '/solutions/optimization' }
    ],
    services: [
      { name: 'Get Started', href: '/get-started' },
      { name: 'Schedule Consultation', href: '/consultation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Technology Stack', href: '/technology' },
      { name: 'Implementation Process', href: '/process' },
      { name: 'Pricing', href: '/pricing' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press Kit', href: '/press' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Support Center', href: '/support' },
      { name: 'Status Page', href: '/status' },
      { name: 'Security', href: '/security' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/lvng-ai' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/lvng_ai' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/lvng-ai' }
  ]

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-width py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Updated on AI Innovation
              </h3>
              <p className="text-gray-400 text-lg">
                Get insights on the latest AI technologies, implementation strategies, and industry trends delivered to your inbox.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                No spam. Unsubscribe at any time. Read our <a href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur opacity-30 animate-pulse-slow"></div>
                </div>
                <span className="text-2xl font-bold text-gradient">LVNG.ai</span>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Full-stack AI development partner. We build and integrate AI solutions that deliver real business value.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Enterprise Sales</div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Mail className="h-4 w-4 text-blue-400" />
                      <a href="mailto:LVNG@prjctcode.ai" className="hover:text-white transition-colors">
                        LVNG@prjctcode.ai
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Direct Line</div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="h-4 w-4 text-green-400" />
                      <a href="tel:+15551234567" className="hover:text-white transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Headquarters</div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="h-4 w-4 text-purple-400" />
                      <span>Miami, FL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          {Object.entries(navigation).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-500 text-sm"
            >
              <p>&copy; 2024 LVNG.ai. All rights reserved.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-6 text-sm"
            >
              <a href="/terms" className="text-gray-500 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/privacy" className="text-gray-500 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/cookies" className="text-gray-500 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 