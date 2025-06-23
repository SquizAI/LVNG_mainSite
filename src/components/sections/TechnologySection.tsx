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
      category: 'AI Models & Platforms',
      icon: Brain,
      description: 'We work with all major AI platforms and can build custom solutions',
      items: [
        { name: 'OpenAI GPT-4', type: 'Language & Reasoning' },
        { name: 'Anthropic Claude', type: 'Safe & Reliable AI' },
        { name: 'Google Gemini', type: 'Multimodal Processing' },
        { name: 'Meta LLaMA', type: 'On-Premise Solutions' }
      ]
    },
    {
      category: 'Development Frameworks',
      icon: Code2,
      description: 'Modern frameworks for building production-ready AI applications',
      items: [
        { name: 'LangChain', type: 'AI Orchestration' },
        { name: 'Python/FastAPI', type: 'Backend Development' },
        { name: 'React/Next.js', type: 'Frontend Development' },
        { name: 'TensorFlow/PyTorch', type: 'Custom ML Models' }
      ]
    },
    {
      category: 'Data Infrastructure',
      icon: Database,
      description: 'Scalable data systems designed for AI workloads',
      items: [
        { name: 'Vector Databases', type: 'Pinecone, Weaviate' },
        { name: 'Data Pipelines', type: 'Real-time Processing' },
        { name: 'Cloud Platforms', type: 'AWS, Azure, GCP' },
        { name: 'Data Lakes', type: 'Structured & Unstructured' }
      ]
    },
    {
      category: 'Integration Tools',
      icon: Workflow,
      description: 'Connect AI seamlessly with your existing systems',
      items: [
        { name: 'API Development', type: 'RESTful & GraphQL' },
        { name: 'Enterprise Systems', type: 'SAP, Salesforce, Oracle' },
        { name: 'Workflow Automation', type: 'Process Integration' },
        { name: 'Custom Connectors', type: 'Legacy System Bridge' }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      description: 'Enterprise-grade security for all AI implementations',
      items: [
        { name: 'Data Encryption', type: 'End-to-End Security' },
        { name: 'Access Control', type: 'Role-Based Permissions' },
        { name: 'Audit Trails', type: 'Complete Traceability' },
        { name: 'Compliance', type: 'GDPR, HIPAA, SOC2' }
      ]
    },
    {
      category: 'Monitoring & Optimization',
      icon: Gauge,
      description: 'Tools to ensure your AI performs at its best',
      items: [
        { name: 'Performance Monitoring', type: 'Real-time Metrics' },
        { name: 'Cost Optimization', type: 'Resource Management' },
        { name: 'A/B Testing', type: 'Model Comparison' },
        { name: 'Error Tracking', type: 'Debugging & Logs' }
      ]
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
            Technology Stack
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Built with Best-in-Class Technology
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We're platform-agnostic and use the best tools for each project. 
            From cutting-edge AI models to enterprise-grade infrastructure.
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

        {/* Why Our Tech Stack Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Why Our Technology Approach Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Lock className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">No Vendor Lock-in</h4>
              <p className="text-gray-400">We build with open standards and can integrate any AI platform</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Sparkles className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Future-Proof</h4>
              <p className="text-gray-400">Easy to upgrade as new AI models and tools become available</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Network className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise Ready</h4>
              <p className="text-gray-400">Scalable, secure, and compliant with industry standards</p>
            </div>
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
            Let's Build Something Amazing Together
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Our technology expertise combined with your business knowledge creates powerful AI solutions
          </p>
          <Button
            size="xl"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
            rightIcon={<ArrowRight className="h-5 w-5" />}
            href="/consultation"
          >
            Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologySection 