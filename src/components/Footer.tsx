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
  ExternalLink
} from 'lucide-react'
import { Button } from './ui/Button'
import Image from 'next/image'

const Footer: React.FC = () => {
  const navigation = {
    solutions: [
      { name: 'AI Strategy & Assessment', href: '/#services' },
      { name: 'Custom AI Development', href: '/#services' },
      { name: 'Integration & Implementation', href: '/#services' },
      { name: 'Support & Optimization', href: '/#services' }
    ],
    services: [
      { name: 'Get Started', href: '/get-started' },
      { name: 'Schedule Consultation', href: '/consultation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Technology', href: '/technology' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
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
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
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
                <Image
                  src="/LVNG_icon.png"
                  alt="LVNG.ai Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-2xl font-bold text-gradient">LVNG.ai</span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                Full-stack AI development partner. We build and integrate AI solutions that deliver real business value.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a href="mailto:LVNG@prjctcode.ai" className="hover:text-white transition-colors">
                    LVNG@prjctcode.ai
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-4 w-4 text-green-400" />
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span>Miami, FL</span>
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
                      {link.href.startsWith('http') && (
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-500 text-sm"
            >
              <p>&copy; 2025 LVNG.ai. All rights reserved.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-6 text-sm"
            >
              <a href="/privacy" className="text-gray-500 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 