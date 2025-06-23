'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  TrendingUp, 
  Clock, 
  Users,
  Building2,
  CheckCircle,
  ArrowRight,
  Zap,
  DollarSign,
  Target,
  BarChart3
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 'fintech-automation',
      title: 'FinTech Fraud Detection System',
      company: 'Regional Bank',
      industry: 'Financial Services',
      challenge: 'Manual fraud detection processes were missing 15% of fraudulent transactions while flagging too many legitimate ones.',
      solution: 'Built real-time AI fraud detection system using ensemble models with 99.2% accuracy.',
      results: [
        { metric: 'Fraud Detection Rate', value: '99.2%', improvement: '+15%' },
        { metric: 'False Positives', value: '0.3%', improvement: '-85%' },
        { metric: 'Processing Time', value: '<100ms', improvement: '-99%' },
        { metric: 'Annual Savings', value: '$2.4M', improvement: 'New' }
      ],
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'Redis', 'PostgreSQL'],
      timeline: '4 months',
      teamSize: '6 people',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'healthcare-diagnosis',
      title: 'Medical Image Analysis Platform',
      company: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Radiologists were overwhelmed with increasing scan volumes, leading to delayed diagnoses.',
      solution: 'Developed AI-powered medical imaging system for automated preliminary screening and priority scoring.',
      results: [
        { metric: 'Diagnosis Speed', value: '2 hours', improvement: '-75%' },
        { metric: 'Accuracy Rate', value: '96.8%', improvement: '+12%' },
        { metric: 'Radiologist Workload', value: '40% reduction', improvement: '-40%' },
        { metric: 'Patient Satisfaction', value: '94%', improvement: '+18%' }
      ],
      technologies: ['PyTorch', 'DICOM', 'FastAPI', 'React', 'AWS'],
      timeline: '8 months',
      teamSize: '8 people',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'manufacturing-optimization',
      title: 'Smart Manufacturing Optimization',
      company: 'Industrial Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and unpredictable equipment failures were costing millions annually.',
      solution: 'Implemented IoT-enabled predictive maintenance and production optimization system.',
      results: [
        { metric: 'Equipment Uptime', value: '98.5%', improvement: '+12%' },
        { metric: 'Production Efficiency', value: '34% increase', improvement: '+34%' },
        { metric: 'Maintenance Costs', value: '45% reduction', improvement: '-45%' },
        { metric: 'Unplanned Downtime', value: '2 hours/month', improvement: '-85%' }
      ],
      technologies: ['Python', 'InfluxDB', 'Grafana', 'Apache Spark', 'Docker'],
      timeline: '6 months',
      teamSize: '5 people',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const industries = [
    { name: 'Financial Services', count: 12, icon: DollarSign },
    { name: 'Healthcare', count: 8, icon: Target },
    { name: 'Manufacturing', count: 15, icon: BarChart3 },
    { name: 'Technology', count: 20, icon: Zap },
    { name: 'Retail', count: 7, icon: Building2 },
    { name: 'Energy', count: 5, icon: TrendingUp }
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
                <FileText className="h-4 w-4" />
                Case Studies
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Real AI Success Stories
                <span className="text-gradient block">That Drive Results</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                See how we've helped companies across industries implement AI solutions 
                that deliver measurable business outcomes and competitive advantages.
              </motion.p>
            </div>

            {/* Industry Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
            >
              {industries.map((industry, index) => (
                <div key={industry.name} className="glass-card rounded-xl p-4 text-center">
                  <industry.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{industry.count}</div>
                  <div className="text-sm text-gray-400">{industry.name}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-900">
          <div className="container-width">
            <div className="space-y-20">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass-card rounded-3xl p-8 md:p-12"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center`}>
                          <study.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                          <p className="text-blue-400">{study.company} • {study.industry}</p>
                        </div>
                      </div>

                      <div className="space-y-6 mb-8">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-400">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-400">{study.solution}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                          <Clock className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                          <div className="text-lg font-bold text-white">{study.timeline}</div>
                          <div className="text-sm text-gray-400">Timeline</div>
                        </div>
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                          <Users className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                          <div className="text-lg font-bold text-white">{study.teamSize}</div>
                          <div className="text-sm text-gray-400">Team Size</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-6">Key Results</h4>
                      <div className="space-y-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="glass-card rounded-xl p-4">
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-gray-400 text-sm">{result.metric}</span>
                              <span className="text-green-400 text-sm font-medium">{result.improvement}</span>
                            </div>
                            <div className="text-2xl font-bold text-white">{result.value}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                        <div className="flex items-center gap-3 mb-3">
                          <CheckCircle className="h-6 w-6 text-green-400" />
                          <span className="text-white font-semibold">Project Status: Deployed & Scaling</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                          This AI solution is now running in production, processing thousands of transactions daily 
                          and continues to learn and improve performance over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results with AI solutions 
                tailored to your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  href="/consultation"
                >
                  Discuss Your Project
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  href="/get-started"
                >
                  Get Started
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

export default CaseStudiesPage 