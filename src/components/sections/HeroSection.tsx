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
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        {/* Main Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Animated Grid Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-[0.02]"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient Spotlight Effect */}
        <motion.div
          className="absolute w-[1000px] h-[1000px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.04) 35%, transparent 70%)`
          }}
          animate={{
            x: mousePosition.x - 500,
            y: mousePosition.y - 500,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 50 }}
        />

        {/* Corner Accent Gradients */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-900/[0.05] via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-900/[0.05] via-transparent to-transparent" />
        
        {/* Floating Grid Dots */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i * 0.5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-width relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* Positioning Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900/20 border border-blue-700/30 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm"
          >
            <Brain className="h-4 w-4" />
            <span>Full-Stack AI Integration Specialists</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse ml-2" />
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
              <span className="relative">
                <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Repetitive Tasks
                </span>
                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
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
            className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: CheckCircle, text: "Custom AI Development" },
              { icon: CheckCircle, text: "System Integration" },
              { icon: CheckCircle, text: "Complete Implementation" }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 text-gray-300 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-full px-6 py-3 hover:bg-gray-900/50 transition-all duration-300"
              >
                <benefit.icon className="h-5 w-5 text-green-400" />
                <span className="font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="xl"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl shadow-blue-600/25 text-lg font-semibold px-8 py-4 relative overflow-hidden group"
                rightIcon={<Phone className="h-5 w-5" />}
                href="/consultation"
              >
                <span className="relative z-10">Schedule Free Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="xl"
                variant="outline"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white hover:border-gray-500 text-lg font-semibold px-8 py-4 backdrop-blur-sm"
                rightIcon={<ArrowRight className="h-5 w-5" />}
                href="/get-started"
              >
                See How It Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-sm text-gray-500 bg-gray-900/20 backdrop-blur-sm border border-gray-800/50 rounded-full px-6 py-3 inline-block"
          >
            <span className="text-green-400">✓</span> No commitment required 
            <span className="mx-2">•</span>
            <span className="text-green-400">✓</span> Free 30-minute consultation 
            <span className="mx-2">•</span>
            Direct contact: <a href="mailto:LVNG@prjctcode.ai" className="text-blue-400 hover:text-blue-300 transition-colors">LVNG@prjctcode.ai</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 