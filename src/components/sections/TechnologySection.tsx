'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain,
  Code2,
  Database,
  Shield,
  Workflow,
  Cloud,
  Sparkles,
  ArrowRight,
  Cpu,
  Network,
  Lock,
  Gauge
} from 'lucide-react'
import { Button } from '../ui/Button'

const TechnologySection: React.FC = () => {
  const technologies = [
    {
      category: 'Foundation Models',
      icon: Brain,
      description: 'We integrate the best AI models for your specific needs',
      items: [
        { name: 'OpenAI GPT-4', type: 'Language & Reasoning' },
        { name: 'Anthropic Claude', type: 'Safe & Reliable AI' },
        { name: 'Google Gemini', type: 'Multimodal Processing' },
        { name: 'Meta LLaMA', type: 'On-Premise Solutions' }
      ]
    },
    {
      category: 'Agent Frameworks',
      icon: Network,
      description: 'Multi-agent systems that work together autonomously',
      items: [
        { name: 'LangChain', type: 'Production-Ready Agents' },
        { name: 'CrewAI', type: 'Collaborative AI Teams' },
        { name: 'AutoGen', type: 'Microsoft Enterprise' },
        { name: 'Custom Frameworks', type: 'Tailored Solutions' }
      ]
    },
    {
      category: 'Data Infrastructure',
      icon: Database,
      description: 'Enterprise-grade data systems for AI operations',
      items: [
        { name: 'Vector Databases', type: 'Pinecone, Weaviate' },
        { name: 'Data Pipelines', type: 'Real-time Processing' },
        { name: 'Knowledge Graphs', type: 'Semantic Understanding' },
        { name: 'Cloud Platforms', type: 'AWS, Azure, GCP' }
      ]
    },
    {
      category: 'Integration Tools',
      icon: Workflow,
      description: 'Seamless connection to your existing systems',
      items: [
        { name: 'API Orchestration', type: 'RESTful & GraphQL' },
        { name: 'Enterprise Systems', type: 'SAP, Salesforce, Oracle' },
        { name: 'Workflow Automation', type: 'Zapier, Make, n8n' },
        { name: 'Custom Connectors', type: 'Legacy System Bridge' }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      description: 'Enterprise security and regulatory compliance',
      items: [
        { name: 'Data Encryption', type: 'End-to-End Security' },
        { name: 'Access Control', type: 'Role-Based Permissions' },
        { name: 'Audit Trails', type: 'Complete Traceability' },
        { name: 'Compliance Tools', type: 'GDPR, HIPAA, SOC2' }
      ]
    },
    {
      category: 'Performance & Scale',
      icon: Gauge,
      description: 'Built for enterprise performance and growth',
      items: [
        { name: 'Load Balancing', type: 'Distributed Processing' },
        { name: 'Auto-Scaling', type: 'Dynamic Resources' },
        { name: 'Monitoring', type: 'Real-time Analytics' },
        { name: 'Optimization', type: 'Cost & Performance' }
      ]
    }
  ]

  const capabilities = [
    {
      icon: Cpu,
      title: 'Autonomous Operations',
      description: 'AI agents that run 24/7 without human intervention'
    },
    {
      icon: Sparkles,
      title: 'Continuous Learning',
      description: 'Systems that improve and adapt over time'
    },
    {
      icon: Network,
      title: 'Cross-Platform Integration',
      description: 'Connect any system, any platform, any data source'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance built-in'
    }
  ]

  return (
    <section id="technology" className="py-24 bg-gray-950">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-blue-300 text-sm font-medium mb-6"
          >
            <Code2 className="h-4 w-4" />
            Living Intelligence Platform
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The Technology Behind Your Second Brain
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            As the aggregator of aggregators, we bring together the best AI technologies 
            and platforms to build living intelligence systems that evolve with your business
          </motion.p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{tech.category}</h3>
                  <p className="text-sm text-gray-400">{tech.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {tech.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
                    <span className="text-sm text-gray-300">{item.name}</span>
                    <span className="text-xs text-gray-500">{item.type}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Living Intelligence Capabilities
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <capability.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{capability.title}</h4>
                <p className="text-sm text-gray-400">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Why We're Different
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6 text-gray-400 text-lg">
            <p>
              <span className="text-white font-semibold">We don't lock you into proprietary systems.</span> As 
              the aggregator of aggregators, we integrate the best technologies available—whether it's OpenAI, 
              Anthropic, Google, or open-source solutions—to build exactly what your business needs.
            </p>
            <p>
              <span className="text-white font-semibold">Your AI evolves with the market.</span> When new models 
              or frameworks emerge, we seamlessly integrate them into your existing systems. You're never stuck 
              with outdated technology.
            </p>
            <p>
              <span className="text-white font-semibold">Built for your reality.</span> Whether you need cloud-based 
              solutions, on-premise deployments, or hybrid architectures, we design systems that fit your 
              security, compliance, and operational requirements.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            See Our Technology in Action
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let us show you how we combine these technologies to build your company's living intelligence
          </p>
          <Button
            size="xl"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg glow-blue"
            rightIcon={<ArrowRight className="h-5 w-5" />}
            href="/consultation"
          >
            Request Technology Demo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologySection 