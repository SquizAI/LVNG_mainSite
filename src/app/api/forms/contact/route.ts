import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    const requiredFields = ['firstName', 'lastName', 'email', 'company']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: 'Missing required fields', 
          missingFields 
        }, 
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' }, 
        { status: 400 }
      )
    }

    // Here you would integrate with your email service (SendGrid, Resend, etc.)
    // For now, we'll simulate processing
    console.log('Processing contact form submission:', {
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      company: body.company,
      timestamp: new Date().toISOString()
    })

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In a real implementation, you would:
    // 1. Send notification email to your team
    // 2. Send confirmation email to the user
    // 3. Store in database/CRM
    // 4. Trigger automated workflows

    const response = {
      success: true,
      message: 'Form submitted successfully',
      data: {
        submissionId: `sub_${Date.now()}`,
        expectedResponseTime: '24 hours',
        nextSteps: [
          'Review of your requirements',
          'Initial consultation scheduling',
          'Custom proposal preparation'
        ]
      }
    }

    return NextResponse.json(response, { status: 200 })

  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to process form submission' 
      }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact form API endpoint',
      methods: ['POST'],
      fields: {
        required: ['firstName', 'lastName', 'email', 'company'],
        optional: ['phone', 'role', 'projectDescription', 'timeline', 'budget']
      }
    }, 
    { status: 200 }
  )
} 