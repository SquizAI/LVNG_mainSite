'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Users, Building2, Code2, Zap, Sparkles, Brain, Target, Shield, Database, Cpu, Network, Activity, BarChart3, TrendingUp } from 'lucide-react'
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

  // Enterprise Technical Stack Visualization
  const techStack = [
    { name: 'Data Layer', icon: Database, position: { x: 0, y: 0 }, connections: [1, 2] },
    { name: 'Processing Engine', icon: Cpu, position: { x: 120, y: -60 }, connections: [2, 3] },
    { name: 'AI Core', icon: Brain, position: { x: 0, y: -120 }, connections: [3, 4] },
    { name: 'Network Layer', icon: Network, position: { x: -120, y: -60 }, connections: [0, 4] },
    { name: 'Security Layer', icon: Shield, position: { x: 0, y: 60 }, connections: [0] }
  ]

  // Enterprise metrics simulation
  const metrics = [
    { label: 'System Uptime', value: '99.9%', trend: 'up' },
    { label: 'Processing Speed', value: '2.4ms', trend: 'up' },
    { label: 'Data Throughput', value: '847GB/h', trend: 'up' },
    { label: 'Active Connections', value: '12,847', trend: 'up' }
  ]

  return (
    <section className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Professional Grid Background */}
      <div className="absolute inset-0">
        {/* Subtle Technical Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(100, 116, 139, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 116, 139, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Subtle Mouse Interaction */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-slate-500/[0.02] to-slate-400/[0.02] rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />
        
        {/* Professional Gradient Accents */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-slate-800/10 to-slate-700/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-slate-700/10 to-slate-600/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container-width relative z-10">
        <div className="pt-32 pb-20">
          {/* Professional Header */}
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Enterprise Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative inline-flex items-center gap-3 px-6 py-3 bg-slate-800/30 border border-slate-700/50 rounded-lg text-slate-300 text-sm font-medium backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Enterprise AI Integration & Development</span>
              <div className="text-xs text-slate-500">•</div>
              <span className="text-xs text-slate-400">Production Ready</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Enterprise AI Integration
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 block">
                  Built for Scale
                </span>
              </motion.div>
            </div>

            {/* Enterprise Architecture Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="py-16"
            >
              <div className="relative max-w-6xl mx-auto">
                {/* Central Architecture Display */}
                <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Technical Stack Diagram */}
                    <div className="relative">
                      <div className="text-sm text-slate-400 mb-4 font-mono">System Architecture</div>
                      <div className="relative w-full h-64 bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
                        
                        {/* Technical Stack Nodes */}
                        {techStack.map((component, index) => (
                          <motion.div
                            key={component.name}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                            className="absolute"
                            style={{
                              left: `calc(50% + ${component.position.x}px)`,
                              top: `calc(50% + ${component.position.y}px)`,
                              transform: 'translate(-50%, -50%)'
                            }}
                          >
                            <div className="relative group">
                              <div className="w-12 h-12 bg-slate-700 border border-slate-600 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors">
                                <component.icon className="h-6 w-6 text-slate-300" />
                              </div>
                              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                {component.name}
                              </div>
                            </div>
                          </motion.div>
                        ))}

                        {/* Connection Lines */}
                        {techStack.map((component, index) => (
                          component.connections.map((connectionIndex) => {
                            const target = techStack[connectionIndex]
                            const startX = 50 + (component.position.x / 3)
                            const startY = 50 + (component.position.y / 3)
                            const endX = 50 + (target.position.x / 3)
                            const endY = 50 + (target.position.y / 3)

                            return (
                              <motion.svg
                                key={`${index}-${connectionIndex}`}
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 1.5 + index * 0.1 }}
                              >
                                <line
                                  x1={`${startX}%`}
                                  y1={`${startY}%`}
                                  x2={`${endX}%`}
                                  y2={`${endY}%`}
                                  stroke="rgba(100, 116, 139, 0.4)"
                                  strokeWidth="1"
                                  strokeDasharray="3,3"
                                />
                              </motion.svg>
                            )
                          })
                        ))}

                        {/* Data Flow Indicators */}
                        <motion.div
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-4 right-4 flex items-center gap-2 text-xs text-slate-400"
                        >
                          <Activity className="h-3 w-3" />
                          <span className="font-mono">Live Data Flow</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Enterprise Metrics Dashboard */}
                    <div className="space-y-6">
                      <div className="text-sm text-slate-400 mb-4 font-mono">Performance Metrics</div>
                      
                      {metrics.map((metric, index) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                          className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-slate-400">{metric.label}</div>
                              <div className="text-2xl font-bold text-white font-mono">{metric.value}</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-green-400" />
                              <div className="w-12 h-8 bg-green-400/20 rounded flex items-end justify-center space-x-px">
                                {[...Array(5)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="w-1 bg-green-400 rounded-sm"
                                    initial={{ height: 4 }}
                                    animate={{ height: Math.random() * 20 + 8 }}
                                    transition={{ duration: 1, delay: 2 + i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
              className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto"
            >
              We architect, build, and deploy sophisticated AI systems that{' '}
              <span className="text-white font-semibold">transform enterprise operations</span>. 
              From strategy to implementation—delivering{' '}
              <span className="text-white font-semibold">measurable business outcomes</span>.
            </motion.p>

            {/* Enterprise CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="xl"
                  className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-slate-500 shadow-lg relative group"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  href="/consultation"
                >
                  <span className="relative z-10">Schedule Technical Consultation</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="xl"
                  variant="outline"
                  icon={<BarChart3 className="h-5 w-5" />}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-slate-500 relative group"
                >
                  <span>View Implementation Case Studies</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Enterprise Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3, ease: "easeOut" }}
            className="mt-32 max-w-6xl mx-auto"
          >
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2 }}
                    className="text-3xl font-bold text-white mb-4"
                  >
                    Enterprise Performance Metrics
                  </motion.h2>
                  <p className="text-lg text-slate-400">
                    Delivering measurable results for Fortune 500 clients
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 3.3 + index * 0.1, ease: "easeOut" }}
                      className="text-center group"
                    >
                      <div className="relative">
                        <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700 transition-colors duration-300">
                          <stat.icon className="h-8 w-8 text-slate-300" />
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-white mb-2 font-mono">
                        {stat.value}
                      </div>
                      <div className="text-lg font-semibold text-slate-300 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-sm text-slate-500">
                        {stat.sublabel}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enterprise Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5, ease: "easeOut" }}
            className="mt-24 max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Core Integration Capabilities
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Comprehensive AI development and integration services for enterprise clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.7 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6 hover:bg-slate-900/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-colors">
                    <capability.icon className="h-6 w-6 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-slate-200 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enterprise Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
            className="mt-24 text-center"
          >
            <p className="text-sm text-slate-500 mb-8">
              Trusted by leading Fortune 500 organizations
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {['Microsoft', 'Google', 'Amazon', 'Meta', 'Tesla', 'OpenAI'].map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 4.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-slate-500 font-medium text-sm bg-slate-900/30 border border-slate-800/50 px-4 py-3 rounded-lg hover:text-slate-400 hover:bg-slate-900/50 transition-all duration-300 cursor-pointer backdrop-blur-sm"
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