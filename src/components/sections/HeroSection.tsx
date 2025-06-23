'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Users, Building2, Code2, Zap, Sparkles, Brain, Target, Bot, Cpu, Network, Database } from 'lucide-react'
import { Button } from '../ui/Button'

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const capabilities = [
    { icon: Code2, title: 'Custom AI Development', description: 'Bespoke AI solutions tailored to your business requirements' },
    { icon: Building2, title: 'Enterprise Integration', description: 'Seamless integration with existing systems and workflows' },
    { icon: Users, title: 'Expert Consultation', description: 'Strategic guidance from AI integration specialists' },
    { icon: Zap, title: 'Rapid Deployment', description: 'Fast time-to-value with proven implementation frameworks' }
  ]

  const stats = [
    { value: '500+', label: 'AI Systems Deployed', sublabel: 'Production environments', icon: Target },
    { value: '95%', label: 'Client Satisfaction', sublabel: 'Post-deployment success', icon: CheckCircle },
    { value: '40%', label: 'Average ROI Increase', sublabel: 'Within 6 months', icon: Sparkles },
    { value: '24/7', label: 'System Reliability', sublabel: 'Enterprise SLA', icon: Brain }
  ]

  // AI Agent Animation Components
  const aiAgents = [
    { id: 1, icon: Bot, name: 'Data Agent', color: 'from-blue-400 to-cyan-400', delay: 0 },
    { id: 2, icon: Brain, name: 'Learning Agent', color: 'from-purple-400 to-pink-400', delay: 0.5 },
    { id: 3, icon: Cpu, name: 'Processing Agent', color: 'from-green-400 to-emerald-400', delay: 1 },
    { id: 4, icon: Network, name: 'Network Agent', color: 'from-orange-400 to-yellow-400', delay: 1.5 },
    { id: 5, icon: Database, name: 'Storage Agent', color: 'from-red-400 to-pink-400', delay: 2 }
  ]

  return (
    <section className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Light Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-move 30s linear infinite'
        }} />
        
        {/* Interactive Mouse Follow Effect */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
        
        {/* Main Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.08, 0.05],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container-width relative z-10">
        <div className="pt-32 pb-20">
          {/* Enhanced Main Content */}
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-blue-300 text-sm font-medium group cursor-pointer"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Building2 className="h-4 w-4" />
              </motion.div>
              <span>AI Integration & Development Specialists</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>

            {/* Enhanced Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight"
              >
                Enterprise AI Integration
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <span className="text-5xl md:text-6xl lg:text-8xl font-bold text-gradient block">
                  Done Right
                </span>
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>

            {/* AI Agents Animation Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="py-12"
            >
              <div className="relative max-w-4xl mx-auto">
                {/* Central AI Hub */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 1, type: "spring", stiffness: 200 }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50"
                  >
                    <Brain className="h-12 w-12 text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl"
                  />
                </motion.div>

                {/* AI Agents orbiting around the central hub */}
                {aiAgents.map((agent, index) => {
                  const angle = (index * 72) * (Math.PI / 180) // 72 degrees between each agent
                  const radius = 120
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <motion.div
                      key={agent.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: [x, x + 10, x],
                        y: [y, y - 10, y]
                      }}
                      transition={{ 
                        opacity: { duration: 0.6, delay: 1.2 + agent.delay },
                        scale: { duration: 0.6, delay: 1.2 + agent.delay },
                        x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: agent.delay },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: agent.delay }
                      }}
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`w-16 h-16 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center shadow-lg group cursor-pointer`}
                      >
                        <agent.icon className="h-8 w-8 text-white" />
                        
                        {/* Data flow lines */}
                        <motion.div
                          animate={{ 
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: agent.delay + 2
                          }}
                          className="absolute inset-0 border-2 border-white/30 rounded-xl"
                        />
                      </motion.div>

                      {/* Connection lines to central hub */}
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1.5 + agent.delay }}
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      >
                        <svg 
                          width="2" 
                          height={Math.abs(y) + 50} 
                          className="absolute"
                          style={{ 
                            left: x > 0 ? 0 : -Math.abs(x),
                            top: y > 0 ? 0 : -Math.abs(y)
                          }}
                        >
                          <motion.line
                            x1="1"
                            y1="0"
                            x2="1"
                            y2={Math.abs(y) + 50}
                            stroke="url(#gradient)"
                            strokeWidth="1"
                            strokeDasharray="5,5"
                            animate={{ strokeDashoffset: [0, -10] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.8)" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </motion.div>

                      {/* Agent name tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 2 + agent.delay }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap"
                      >
                        {agent.name}
                      </motion.div>
                    </motion.div>
                  )
                })}

                {/* Pulsing data transfer effects */}
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-400/30 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/20 rounded-full"
                />
              </div>
            </motion.div>

            {/* Enhanced Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            >
              We architect, build, and deploy sophisticated AI systems that{' '}
              <span className="text-gradient font-semibold">transform enterprise operations</span>. 
              From strategy to implementation—delivering{' '}
              <span className="text-gradient font-semibold">measurable business outcomes</span>.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl shadow-blue-500/25 relative group overflow-hidden"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  href="/consultation"
                >
                  <span className="relative z-10">Schedule Consultation</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  icon={<Play className="h-5 w-5" />}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white hover:border-gray-500 relative group"
                >
                  <span>View Case Studies</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5, ease: "easeOut" }}
            className="mt-32 max-w-6xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5" />
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.7 }}
                    className="text-3xl font-bold text-white mb-4"
                  >
                    Proven Track Record
                  </motion.h2>
                  <p className="text-lg text-gray-400">
                    Delivering measurable results for enterprise clients
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 3.8 + index * 0.1, ease: "easeOut" }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300"
                        >
                          <stat.icon className="h-8 w-8 text-white" />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ scale: 1 }}
                        whileInView={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-4xl font-bold text-gradient mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-lg font-semibold text-white mb-1">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.sublabel}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Capabilities Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
            className="mt-24 max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Core Integration Capabilities
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Comprehensive AI development and integration services for enterprise clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 4.2 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-card rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"
                  >
                    <capability.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.5, ease: "easeOut" }}
            className="mt-24 text-center"
          >
            <p className="text-sm text-gray-500 mb-8">
              Trusted by leading organizations across industries
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-4xl mx-auto opacity-60">
              {['Microsoft', 'Google', 'Amazon', 'Meta', 'Tesla', 'OpenAI'].map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 4.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="text-gray-400 font-medium text-sm glass-card px-4 py-3 rounded-lg hover:text-gray-300 transition-all duration-300 cursor-pointer"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 