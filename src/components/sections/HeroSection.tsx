'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, CheckCircle, AlertCircle } from 'lucide-react'
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

  return (
    <section className="relative min-h-screen bg-gray-950 overflow-hidden flex items-center pt-20 md:pt-0">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/95 to-gray-950" />
        
        {/* Subtle Moving Gradient */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`
          }}
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-red-900/20 border border-red-700/30 rounded-full text-red-400 text-xs md:text-sm font-medium backdrop-blur-sm">
              <AlertCircle className="h-3 w-3 md:h-4 md:w-4" />
              <span>65% of AI projects fail due to poor implementation</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4 md:space-y-6 mb-6 md:mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Your Full-Stack
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Development Partner
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              Built for your business—whether you're 10 people or 10,000.
              <br className="hidden md:block" />
              From strategy to implementation to optimization—we build and integrate 
              AI solutions that actually work.
            </p>
          </motion.div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6">
              <h3 className="font-semibold text-white mb-2">We Build</h3>
              <p className="text-gray-400 text-sm">
                Custom AI solutions tailored to your specific business needs and workflows
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6">
              <h3 className="font-semibold text-white mb-2">We Integrate</h3>
              <p className="text-gray-400 text-sm">
                Connect AI seamlessly with your existing systems and processes
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6">
              <h3 className="font-semibold text-white mb-2">We Optimize</h3>
              <p className="text-gray-400 text-sm">
                Continuous improvement and support to maximize your AI ROI
              </p>
            </div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-3 mb-8 md:mb-12"
          >
            {[
              "Full-stack development from data infrastructure to user interfaces",
              "Platform-agnostic: OpenAI, Anthropic, Google, or custom models",
              "Long-term partnership, not one-off projects",
              "Proven methodology that reduces implementation risk"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
              >
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-600/20 w-full sm:w-auto"
              rightIcon={<ArrowRight className="h-4 w-4 md:h-5 md:w-5" />}
              href="/get-started"
            >
              Start Your AI Journey
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-600 w-full sm:w-auto"
              rightIcon={<Phone className="h-4 w-4" />}
              href="/consultation"
            >
              Schedule Free Consultation
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-gray-800"
          >
            <p className="text-xs md:text-sm text-gray-500 text-center">
              Helping businesses implement AI successfully • No vendor lock-in • 
              Solutions that scale with your growth
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 