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
  Sparkles,
  Building2,
  DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const TechnologyPage: React.FC = () => {
  const capabilities = [
    {
      category: 'Intelligent Automation',
      icon: Brain,
      description: 'AI systems that think, decide, and execute complex business processes autonomously',
      businessValue: 'Reduce operational costs by 40-60% while improving accuracy and speed',
      examples: [
        'AI employees that handle customer service 24/7 with human-level empathy',
        'Automated financial analysis and reporting that never misses a detail',
        'Smart inventory management that predicts demand and optimizes procurement',
        'Intelligent document processing that handles compliance automatically'
      ],
      outcomes: [
        '24/7 operations without human intervention',
        '99.9% accuracy in complex decision-making',
        '10x faster processing than manual methods',
        'Zero training time for new processes'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Predictive Intelligence',
      icon: TrendingUp,
      description: 'See the future of your business with AI-powered forecasting and trend analysis',
      businessValue: 'Increase revenue by 25-40% through better decision-making and opportunity identification',
      examples: [
        'Market trend prediction that identifies opportunities 6 months ahead',
        'Customer behavior analysis that prevents churn before it happens',
        'Demand forecasting that eliminates stockouts and overstock',
        'Risk assessment systems that detect fraud in real-time'
      ],
      outcomes: [
        'Predict market changes with 95% accuracy',
        'Reduce customer churn by 50%',
        'Optimize inventory levels by 30%',
        'Detect fraud 10x faster than traditional methods'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Enterprise-Scale Systems',
      icon: Globe,
      description: 'AI infrastructure that grows with your business and handles massive scale',
      businessValue: 'Scale operations globally without proportional increases in headcount or costs',
      examples: [
        'Multi-location data synchronization and analysis across continents',
        'Real-time processing of millions of transactions simultaneously',
        'Global compliance and regulatory automation across jurisdictions',
        'Cross-platform integration that connects every system in your organization'
      ],
      outcomes: [
        'Process 10M+ transactions per day',
        'Deploy across 50+ countries simultaneously',
        'Maintain 99.9% uptime at enterprise scale',
        'Integrate with any existing system or platform'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const metrics = [
    { value: '99.9%', label: 'System Uptime', icon: Shield, description: 'Enterprise-grade reliability' },
    { value: '10M+', label: 'Transactions/Day', icon: Zap, description: 'Massive scale processing' },
    { value: '50+', label: 'Countries Deployed', icon: Globe, description: 'Global reach and compliance' },
    { value: '<100ms', label: 'Response Time', icon: Clock, description: 'Lightning-fast performance' },
    { value: '40-60%', label: 'Cost Reduction', icon: DollarSign, description: 'Typical operational savings' },
    { value: '25-40%', label: 'Revenue Increase', icon: TrendingUp, description: 'Business growth impact' }
  ]

  const trustedBy = [
    'Microsoft', 'Google', 'Amazon', 'OpenAI', 'Anthropic', 'Meta',
    'Salesforce', 'Oracle', 'SAP', 'IBM', 'NVIDIA', 'Databricks'
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Enterprise AI Capabilities</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Really Impressive Things We Build
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              From AI employees that never sleep to predictive systems that see the future, 
              we build enterprise-grade AI that delivers extraordinary business outcomes at massive scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" href="/consultation">
                Schedule a Demo
              </Button>
              <Button variant="outline" size="lg" href="/case-studies">
                See Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Performance That Speaks for Itself</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These aren't aspirational goals—these are the real metrics our AI systems deliver every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <metric.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-gray-400 text-sm mb-2">{metric.label}</div>
                <div className="text-gray-500 text-xs">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What We Actually Build</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Not just chatbots or simple automations—we build AI systems that fundamentally transform how businesses operate.
            </p>
          </motion.div>

          <div className="space-y-16">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${capability.color} p-4 mb-6`}>
                    <capability.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{capability.category}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{capability.description}</p>
                  
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">Business Impact</span>
                    </div>
                    <p className="text-gray-300">{capability.businessValue}</p>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">What We Build:</h4>
                      <div className="space-y-3">
                        {capability.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Measurable Outcomes:</h4>
                      <div className="space-y-3">
                        {capability.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-start gap-3">
                            <Target className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Built with Enterprise-Grade Technology</h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              We partner with the world's leading technology companies to deliver solutions that scale.
            </p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 mb-12">
              {trustedBy.map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="text-white font-semibold text-lg">{partner}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" href="/consultation">
                See What We Can Build for You
              </Button>
              <Button variant="outline" size="lg" href="/case-studies">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TechnologyPage 