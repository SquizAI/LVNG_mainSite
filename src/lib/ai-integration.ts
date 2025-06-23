// AI Integration Utilities for Enhanced Form Processing
// Configure your API keys in environment variables

interface AIAnalysisResult {
  sentiment: 'positive' | 'neutral' | 'negative'
  urgency: 'low' | 'medium' | 'high' | 'critical'
  categories: string[]
  suggestedActions: string[]
  estimatedBudget?: string
  recommendedConsultationType?: 'strategic' | 'technical' | 'discovery'
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  projectDescription?: string
  currentChallenges?: string[]
  budget?: string
  timeline?: string
}

export class AIFormProcessor {
  private openaiKey: string | undefined
  private anthropicKey: string | undefined
  private geminiKey: string | undefined

  constructor() {
    this.openaiKey = process.env.OPENAI_API_KEY
    this.anthropicKey = process.env.ANTHROPIC_API_KEY
    this.geminiKey = process.env.GOOGLE_GEMINI_API_KEY
  }

  /**
   * Analyze form submission using AI to provide intelligent routing and responses
   */
  async analyzeSubmission(formData: FormData): Promise<AIAnalysisResult> {
    try {
      // Use OpenAI for primary analysis
      if (this.openaiKey) {
        return await this.analyzeWithOpenAI(formData)
      }
      
      // Fallback to Anthropic
      if (this.anthropicKey) {
        return await this.analyzeWithAnthropic(formData)
      }
      
      // Fallback to Gemini
      if (this.geminiKey) {
        return await this.analyzeWithGemini(formData)
      }
      
      // Fallback to rule-based analysis
      return this.analyzeWithRules(formData)
      
    } catch (error) {
      console.error('AI analysis failed, using fallback:', error)
      return this.analyzeWithRules(formData)
    }
  }

  private async analyzeWithOpenAI(formData: FormData): Promise<AIAnalysisResult> {
    const prompt = this.buildAnalysisPrompt(formData)
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.openaiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an AI integration specialist analyzing client inquiries. Provide structured analysis in JSON format.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 500
      })
    })

    const data = await response.json()
    return this.parseAIResponse(data.choices[0].message.content)
  }

  private async analyzeWithAnthropic(formData: FormData): Promise<AIAnalysisResult> {
    const prompt = this.buildAnalysisPrompt(formData)
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': this.anthropicKey!,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 500,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    })

    const data = await response.json()
    return this.parseAIResponse(data.content[0].text)
  }

  private async analyzeWithGemini(formData: FormData): Promise<AIAnalysisResult> {
    const prompt = this.buildAnalysisPrompt(formData)
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.geminiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      })
    })

    const data = await response.json()
    return this.parseAIResponse(data.candidates[0].content.parts[0].text)
  }

  private buildAnalysisPrompt(formData: FormData): string {
    return `
Analyze this AI integration inquiry and provide structured insights:

Company: ${formData.company}
Contact: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Project Description: ${formData.projectDescription || 'Not provided'}
Current Challenges: ${formData.currentChallenges?.join(', ') || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Please analyze and return a JSON object with:
1. sentiment: overall tone (positive/neutral/negative)
2. urgency: priority level (low/medium/high/critical)
3. categories: relevant service categories
4. suggestedActions: recommended next steps
5. estimatedBudget: budget range assessment
6. recommendedConsultationType: best consultation type

Focus on AI integration, enterprise solutions, and technical implementation needs.
`
  }

  private parseAIResponse(response: string): AIAnalysisResult {
    try {
      // Try to extract JSON from the response
      const jsonMatch = response.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0])
      }
    } catch (error) {
      console.error('Failed to parse AI response:', error)
    }

    // Fallback to rule-based analysis
    return this.analyzeWithRules({} as FormData)
  }

  private analyzeWithRules(formData: FormData): AIAnalysisResult {
    // Rule-based fallback analysis
    const urgencyKeywords = ['urgent', 'asap', 'immediately', 'critical', 'emergency']
    const strategicKeywords = ['strategy', 'roadmap', 'planning', 'vision', 'transformation']
    const technicalKeywords = ['architecture', 'integration', 'implementation', 'development', 'api']
    
    const description = (formData.projectDescription || '').toLowerCase()
    const challenges = (formData.currentChallenges || []).join(' ').toLowerCase()
    const fullText = `${description} ${challenges}`

    // Determine urgency
    let urgency: 'low' | 'medium' | 'high' | 'critical' = 'medium'
    if (urgencyKeywords.some(keyword => fullText.includes(keyword))) {
      urgency = 'high'
    }

    // Determine consultation type
    let recommendedConsultationType: 'strategic' | 'technical' | 'discovery' = 'discovery'
    if (strategicKeywords.some(keyword => fullText.includes(keyword))) {
      recommendedConsultationType = 'strategic'
    } else if (technicalKeywords.some(keyword => fullText.includes(keyword))) {
      recommendedConsultationType = 'technical'
    }

    // Determine categories
    const categories = []
    if (fullText.includes('data')) categories.push('Data Infrastructure')
    if (fullText.includes('ai') || fullText.includes('artificial intelligence')) categories.push('AI Development')
    if (fullText.includes('integration')) categories.push('System Integration')
    if (fullText.includes('security') || fullText.includes('compliance')) categories.push('AI Governance')

    return {
      sentiment: 'positive',
      urgency,
      categories: categories.length > 0 ? categories : ['General Consultation'],
      suggestedActions: [
        'Schedule initial consultation',
        'Conduct technical assessment',
        'Prepare custom proposal'
      ],
      recommendedConsultationType
    }
  }

  /**
   * Generate personalized email content based on AI analysis
   */
  generatePersonalizedResponse(formData: FormData, analysis: AIAnalysisResult): {
    subject: string
    content: string
    nextSteps: string[]
  } {
    const { firstName, company } = formData
    const { urgency, categories, recommendedConsultationType } = analysis

    const urgencyMapping = {
      low: 'within 48 hours',
      medium: 'within 24 hours',
      high: 'within 4 hours',
      critical: 'immediately'
    }

    const consultationMapping = {
      strategic: 'AI Strategy Consultation - focused on high-level planning and roadmap development',
      technical: 'Technical Architecture Review - deep-dive into implementation details',
      discovery: 'Discovery Workshop - comprehensive assessment of your current state and needs'
    }

    const consultationType = recommendedConsultationType || 'discovery'
    const followUpTime = urgencyMapping[urgency] || 'within 24 hours'

    return {
      subject: `AI Integration Opportunity - ${company} | ${urgency.toUpperCase()} Priority`,
      content: `
Dear ${firstName},

Thank you for your interest in AI integration services. Based on your inquiry, we've identified this as a ${urgency} priority project focusing on ${categories.join(', ')}.

We recommend starting with our ${consultationMapping[consultationType]}.

Our team will follow up ${followUpTime} to discuss your specific requirements and create a tailored implementation strategy.

Best regards,
The LVNG.ai Team
      `.trim(),
      nextSteps: analysis.suggestedActions
    }
  }
}

/**
 * Google Custom Search Integration for enhanced research
 */
export class SearchEnhancer {
  private cseId: string | undefined
  private apiKey: string | undefined

  constructor() {
    this.cseId = process.env.GOOGLE_CSE_ID
    this.apiKey = process.env.GOOGLE_CSE_API_KEY
  }

  /**
   * Research company background for better consultation preparation
   */
  async researchCompany(companyName: string): Promise<{
    industry: string
    size: string
    challenges: string[]
    opportunities: string[]
  }> {
    if (!this.cseId || !this.apiKey) {
      return this.getDefaultCompanyInfo()
    }

    try {
      const query = `${companyName} AI artificial intelligence technology challenges opportunities`
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${this.apiKey}&cx=${this.cseId}&q=${encodeURIComponent(query)}&num=5`
      )
      
      const data = await response.json()
      return this.analyzeSearchResults(data.items || [])
      
    } catch (error) {
      console.error('Company research failed:', error)
      return this.getDefaultCompanyInfo()
    }
  }

  private analyzeSearchResults(items: any[]): {
    industry: string
    size: string
    challenges: string[]
    opportunities: string[]
  } {
    // Analyze search results to extract company insights
    const text = items.map(item => `${item.title} ${item.snippet}`).join(' ').toLowerCase()
    
    // Industry detection
    const industries = ['healthcare', 'finance', 'technology', 'manufacturing', 'retail', 'education']
    const detectedIndustry = industries.find(industry => text.includes(industry)) || 'Technology'
    
    // Size detection
    const sizeIndicators: Record<string, string[]> = {
      'startup': ['startup', 'founding', 'seed', 'series a'],
      'enterprise': ['fortune', 'global', 'multinational', 'enterprise'],
      'mid-market': ['growing', 'expanding', 'scaling']
    }
    
    let detectedSize = 'Mid-market'
    for (const [size, indicators] of Object.entries(sizeIndicators)) {
      if (indicators.some(indicator => text.includes(indicator))) {
        detectedSize = size.charAt(0).toUpperCase() + size.slice(1)
        break
      }
    }

    return {
      industry: detectedIndustry,
      size: detectedSize,
      challenges: ['Digital transformation', 'Operational efficiency', 'Data utilization'],
      opportunities: ['AI automation', 'Predictive analytics', 'Customer experience enhancement']
    }
  }

  private getDefaultCompanyInfo() {
    return {
      industry: 'Technology',
      size: 'Mid-market',
      challenges: ['Digital transformation', 'Operational efficiency'],
      opportunities: ['AI automation', 'Process optimization']
    }
  }
}

// Export singleton instances
export const aiProcessor = new AIFormProcessor()
export const searchEnhancer = new SearchEnhancer() 