'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Brain, CheckCircle } from 'lucide-react'
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
    <section className="relative min-h-screen bg-gray-950 overflow-hidden flex items-center">
      {/* Clean Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(100, 116, 139, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 116, 139, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
        
        <motion.div
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-900/[0.03] to-purple-900/[0.03] rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "spring", damping: 60, stiffness: 50 }}
        />
      </div>

      <div className="container-width relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* Positioning Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/20 border border-blue-700/30 rounded-full text-blue-400 text-sm font-medium"
          >
            <Brain className="h-4 w-4" />
            <span>Full-Stack AI Integration Specialists</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Stop Wasting Time on
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Repetitive Tasks
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              We build and deploy AI systems that <strong className="text-white">automate your manual processes</strong>, 
              so you can focus on growing your business instead of managing repetitive work.
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Custom AI Development</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>System Integration</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Complete Implementation</span>
            </div>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="xl"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl shadow-blue-600/25 text-lg font-semibold px-8 py-4"
              rightIcon={<Phone className="h-5 w-5" />}
              href="/consultation"
            >
              Schedule Free Consultation
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 text-lg font-semibold px-8 py-4"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              href="/get-started"
            >
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm text-gray-500"
          >
            No commitment required • Free 30-minute consultation • Direct contact: <a href="mailto:LVNG@prjctcode.ai" className="text-blue-400 hover:text-blue-300">LVNG@prjctcode.ai</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 