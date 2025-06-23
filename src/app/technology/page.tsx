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
  Gauge,
  CheckCircle,
  Zap,
  Settings
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const TechnologyPage: React.FC = () => {
  const technologies = [
    {
      category: 'AI Models & Platforms',
      icon: Brain,
      description: 'We work with all major AI platforms and can build custom solutions',
      items: [
        { name: 'OpenAI GPT-4', type: 'Language & Reasoning' },
        { name: 'Anthropic Claude', type: 'Safe & Reliable AI' },
        { name: 'Google Gemini', type: 'Multimodal Processing' },
        { name: 'Meta LLaMA', type: 'On-Premise Solutions' },
        { name: 'Custom Models', type: 'Domain-Specific AI' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Development Frameworks',
      icon: Code2,
      description: 'Modern frameworks for rapid AI development and deployment',
      items: [
        { name: 'LangChain', type: 'LLM Applications' },
        { name: 'CrewAI', type: 'Multi-Agent Systems' },
        { name: 'AutoGen', type: 'Conversational AI' },
        { name: 'TensorFlow', type: 'Machine Learning' },
        { name: 'PyTorch', type: 'Deep Learning' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Data Infrastructure',
      icon: Database,
      description: 'Scalable data systems that power intelligent applications',
      items: [
        { name: 'Vector Databases', type: 'Pinecone, Weaviate, Chroma' },
        { name: 'Real-time Processing', type: 'Apache Kafka, Redis' },
        { name: 'Data Warehouses', type: 'Snowflake, BigQuery' },
        { name: 'Graph Databases', type: 'Neo4j, Amazon Neptune' },
        { name: 'Time Series', type: 'InfluxDB, TimescaleDB' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Enterprise-grade cloud infrastructure for AI workloads',
      items: [
        { name: 'AWS', type: 'SageMaker, Bedrock, Lambda' },
        { name: 'Google Cloud', type: 'Vertex AI, Cloud Run' },
        { name: 'Microsoft Azure', type: 'OpenAI Service, ML Studio' },
        { name: 'Kubernetes', type: 'Container Orchestration' },
        { name: 'Docker', type: 'Containerization' }
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Security & Governance',
      icon: Shield,
      description: 'Enterprise security and compliance for AI systems',
      items: [
        { name: 'Data Encryption', type: 'End-to-End Security' },
        { name: 'Access Control', type: 'RBAC, OAuth, SAML' },
        { name: 'Audit Logging', type: 'Compliance Tracking' },
        { name: 'Model Monitoring', type: 'Drift Detection' },
        { name: 'Privacy Controls', type: 'GDPR, CCPA Compliance' }
      ],
      color: 'from-red-500 to-rose-500'
    },
    {
      category: 'Integration & APIs',
      icon: Network,
      description: 'Seamless integration with existing business systems',
      items: [
        { name: 'REST APIs', type: 'Standard Web APIs' },
        { name: 'GraphQL', type: 'Flexible Data Queries' },
        { name: 'Webhooks', type: 'Real-time Events' },
        { name: 'SDK Libraries', type: 'Multiple Languages' },
        { name: 'Enterprise Connectors', type: 'SAP, Salesforce, etc.' }
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const capabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced text understanding, generation, and conversation capabilities',
      features: ['Text Analysis', 'Sentiment Analysis', 'Document Processing', 'Chatbots & Assistants'],
      icon: Brain
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis for automated visual intelligence',
      features: ['Object Detection', 'Facial Recognition', 'OCR & Document Extraction', 'Quality Control'],
      icon: Sparkles
    },
    {
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting and pattern recognition',
      features: ['Demand Forecasting', 'Risk Assessment', 'Anomaly Detection', 'Trend Analysis'],
      icon: Gauge
    },
    {
      title: 'Process Automation',
      description: 'Intelligent automation that adapts and learns from data',
      features: ['Workflow Automation', 'Decision Making', 'Data Processing', 'Task Orchestration'],
      icon: Workflow
    }
  ]

  const integrations = [
    { name: 'Salesforce', category: 'CRM' },
    { name: 'SAP', category: 'ERP' },
    { name: 'Microsoft 365', category: 'Productivity' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Tableau', category: 'Analytics' },
    { name: 'Power BI', category: 'Business Intelligence' },
    { name: 'Jira', category: 'Project Management' },
    { name: 'HubSpot', category: 'Marketing' }
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gray-950">
          <div className="container-width">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-blue-300 text-sm font-medium mb-6"
              >
                <Cpu className="h-4 w-4" />
                Technology Stack
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Cutting-Edge AI Technology
                <span className="text-gradient block">Built for Enterprise</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                We leverage the latest AI technologies and frameworks to build robust, 
                scalable solutions that integrate seamlessly with your existing infrastructure.
              </motion.p>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {[
                { number: '15+', label: 'AI Platforms', icon: Brain },
                { number: '50+', label: 'Integrations', icon: Network },
                { number: '99.9%', label: 'Uptime SLA', icon: Shield },
                { number: '<100ms', label: 'Response Time', icon: Zap }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                    <stat.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technology Categories */}
        <section className="py-20 bg-gray-900">
          <div className="container-width">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Our Technology Stack
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto"
              >
                Platform-agnostic approach using the best tools for each specific use case
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-6`}>
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{tech.category}</h3>
                  <p className="text-gray-400 mb-6">{tech.description}</p>
                  
                  <div className="space-y-3">
                    {tech.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-white font-medium">{item.name}</span>
                        <span className="text-sm text-gray-400">{item.type}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-20 bg-gray-950">
          <div className="container-width">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Core AI Capabilities
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto"
              >
                Advanced AI capabilities that power intelligent business solutions
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <capability.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{capability.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{capability.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-gray-900">
          <div className="container-width">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Enterprise Integrations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto"
              >
                Seamlessly connect with your existing business systems and workflows
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {integrations.map((integration, index) => (
                <div key={integration.name} className="glass-card rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Settings className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">{integration.name}</h4>
                  <p className="text-sm text-gray-400">{integration.category}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mt-12"
            >
              <p className="text-gray-400 mb-6">
                Don't see your system? We build custom integrations for any platform.
              </p>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
                href="/consultation"
              >
                Discuss Custom Integration
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-950">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build with Our Technology?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology stack can power your AI transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  href="/consultation"
                >
                  Schedule Technical Discussion
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  href="/case-studies"
                >
                  View Implementation Examples
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}

export default TechnologyPage 