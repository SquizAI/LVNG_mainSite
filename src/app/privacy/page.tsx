'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Mail, Phone } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Privacy Policy</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              
              <p className="text-xl text-gray-300">
                Last updated: January 2025
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                  <p className="text-gray-300 mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Fill out our contact forms or consultation requests</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Communicate with us via email or phone</li>
                    <li>Use our website and services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                  <p className="text-gray-300 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Provide and improve our AI development services</li>
                    <li>Respond to your inquiries and consultation requests</li>
                    <li>Send you updates about AI technologies and industry trends</li>
                    <li>Analyze website usage to improve user experience</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                  <p className="text-gray-300">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy or as required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                  <p className="text-gray-300">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
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
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPage 