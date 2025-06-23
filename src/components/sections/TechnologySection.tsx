'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Code2,
  GitBranch,
  Shield,
  Zap
} from 'lucide-react'

const TechnologySection: React.FC = () => {
  const techCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'OpenAI GPT-4.1', type: 'LLM' },
        { name: 'Claude 3.5 Sonnet', type: 'LLM' },
        { name: 'Gemini 2.0', type: 'LLM' },
        { name: 'TensorFlow', type: 'Framework' },
        { name: 'PyTorch', type: 'Framework' },
        { name: 'Hugging Face', type: 'Platform' },
        { name: 'LangChain', type: 'Agent Framework' },
        { name: 'CrewAI', type: 'Multi-Agent' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'AWS', type: 'Cloud Provider' },
        { name: 'Google Cloud', type: 'Cloud Provider' },
        { name: 'Microsoft Azure', type: 'Cloud Provider' },
        { name: 'Kubernetes', type: 'Orchestration' },
        { name: 'Docker', type: 'Containerization' },
        { name: 'Terraform', type: 'IaC' },
        { name: 'Pulumi', type: 'IaC' },
        { name: 'Istio', type: 'Service Mesh' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Apache Kafka', type: 'Streaming' },
        { name: 'Apache Spark', type: 'Processing' },
        { name: 'PostgreSQL', type: 'Database' },
        { name: 'MongoDB', type: 'NoSQL' },
        { name: 'Redis', type: 'Cache' },
        { name: 'Elasticsearch', type: 'Search' },
        { name: 'Snowflake', type: 'Warehouse' },
        { name: 'dbt', type: 'Transformation' }
      ]
    },
    {
      title: 'Development & Integration',
      icon: Code2,
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'Python', type: 'Language' },
        { name: 'TypeScript', type: 'Language' },
        { name: 'Go', type: 'Language' },
        { name: 'Rust', type: 'Language' },
        { name: 'FastAPI', type: 'Framework' },
        { name: 'Next.js', type: 'Framework' },
        { name: 'GraphQL', type: 'API' },
        { name: 'gRPC', type: 'RPC' }
      ]
    },
    {
      title: 'DevOps & Monitoring',
      icon: Server,
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        { name: 'GitHub Actions', type: 'CI/CD' },
        { name: 'Jenkins', type: 'CI/CD' },
        { name: 'Prometheus', type: 'Monitoring' },
        { name: 'Grafana', type: 'Visualization' },
        { name: 'Jaeger', type: 'Tracing' },
        { name: 'Helm', type: 'Packaging' },
        { name: 'Ansible', type: 'Automation' },
        { name: 'ArgoCD', type: 'GitOps' }
      ]
    },
    {
      title: 'Security & Governance',
      icon: Shield,
      color: 'from-teal-500 to-blue-500',
      technologies: [
        { name: 'Vault', type: 'Secrets' },
        { name: 'Keycloak', type: 'Identity' },
        { name: 'OPA', type: 'Policy' },
        { name: 'Falco', type: 'Runtime Security' },
        { name: 'Cert-Manager', type: 'TLS' },
        { name: 'SPIFFE/SPIRE', type: 'Identity' },
        { name: 'Cilium', type: 'Network Security' },
        { name: 'Trivy', type: 'Vulnerability Scanning' }
      ]
    }
  ]

  const integrationPartners = [
    'Microsoft', 'OpenAI', 'Google Cloud', 'AWS', 'Anthropic', 'NVIDIA',
    'Databricks', 'Snowflake', 'MongoDB', 'Redis', 'Confluent', 'Elastic'
  ]

  return (
    <section id="technology" className="py-24 bg-gray-950">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-purple-300 text-sm font-medium mb-6"
          >
            <Zap className="h-4 w-4" />
            Technology Stack
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Cutting-Edge Technology Stack
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We leverage the latest AI technologies, enterprise-grade infrastructure, and proven development 
            frameworks to deliver robust, scalable solutions that drive business value.
          </motion.p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Technologies List */}
              <div className="space-y-3">
                {category.technologies.map((tech, idx) => (
                  <div key={tech.name} className="flex items-center justify-between py-2 group-hover:bg-gray-800/50 px-2 rounded transition-colors duration-300">
                    <span className="font-medium text-gray-300">
                      {tech.name}
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-full">
                      {tech.type}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Certified Integration Partners
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Official partnerships and certifications with leading technology providers ensure 
              seamless integration and enterprise-grade support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {integrationPartners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300 group">
                  <div className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors duration-300">
                    {partner}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Certified Partner
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-white font-semibold">Technologies Mastered</div>
              <div className="text-sm text-gray-400">Across all major platforms</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-2">12</div>
              <div className="text-white font-semibold">Certified Partners</div>
              <div className="text-sm text-gray-400">Enterprise-grade support</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-white font-semibold">Uptime SLA</div>
              <div className="text-sm text-gray-400">Enterprise reliability</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologySection 