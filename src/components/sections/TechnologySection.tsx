'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Clock,
  Target,
  Sparkles
} from 'lucide-react'
import { Button } from '../ui/Button'

const TechnologySection: React.FC = () => {
  const capabilities = [
    {
      category: 'Intelligent Automation',
      icon: Brain,
      description: 'AI systems that think, decide, and execute complex business processes',
      examples: [
        'AI employees that handle customer service 24/7',
        'Automated financial analysis and reporting',
        'Smart inventory management and procurement',
        'Intelligent document processing and compliance'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Predictive Intelligence',
      icon: TrendingUp,
      description: 'See the future of your business with AI-powered forecasting',
      examples: [
        'Market trend prediction and opportunity identification',
        'Customer behavior analysis and churn prevention',
        'Demand forecasting and supply chain optimization',
        'Risk assessment and fraud detection'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Enterprise-Scale Systems',
      icon: Globe,
      description: 'AI infrastructure that grows with your business',
      examples: [
        'Multi-location data synchronization and analysis',
        'Real-time processing of millions of transactions',
        'Global compliance and regulatory automation',
        'Cross-platform integration and orchestration'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const trustedBy = [
    { name: 'Microsoft', logo: '/logos/microsoft.svg' },
    { name: 'Google', logo: '/logos/google.svg' },
    { name: 'Amazon', logo: '/logos/amazon.svg' },
    { name: 'OpenAI', logo: '/logos/openai.svg' },
    { name: 'Anthropic', logo: '/logos/anthropic.svg' },
    { name: 'Meta', logo: '/logos/meta.svg' }
  ]

  const metrics = [
    { value: '99.9%', label: 'System Uptime', icon: Shield },
    { value: '10M+', label: 'Transactions/Day', icon: Zap },
    { value: '50+', label: 'Countries Deployed', icon: Globe },
    { value: '<100ms', label: 'Response Time', icon: Clock }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Impressive Capabilities</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Really Impressive Things We Build
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From AI employees that never sleep to predictive systems that see the future, 
            we build enterprise-grade AI that delivers extraordinary business outcomes.
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <metric.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${capability.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <capability.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{capability.category}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{capability.description}</p>
                
                <div className="space-y-3">
                  {capability.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Built with Enterprise-Grade Technology</h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {trustedBy.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="text-white font-semibold text-lg">{partner.name}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Button 
              variant="gradient" 
              size="lg"
              href="/technology"
              className="group"
            >
              Explore Our Technology Stack
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologySection 