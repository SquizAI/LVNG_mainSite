import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    const requiredFields = ['firstName', 'lastName', 'email', 'company', 'consultationType', 'preferredDate', 'preferredTime']
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

    // Date validation
    const selectedDate = new Date(body.preferredDate)
    const now = new Date()
    if (selectedDate < now) {
      return NextResponse.json(
        { error: 'Cannot schedule consultation in the past' }, 
        { status: 400 }
      )
    }

    // Consultation type validation
    const validTypes = ['strategic', 'technical', 'discovery']
    if (!validTypes.includes(body.consultationType)) {
      return NextResponse.json(
        { error: 'Invalid consultation type' }, 
        { status: 400 }
      )
    }

    // Generate meeting details
    const meetingId = `meet_${Date.now()}`
    const consultationTypes = {
      strategic: { duration: 60, title: 'AI Strategy Consultation' },
      technical: { duration: 90, title: 'Technical Architecture Review' },
      discovery: { duration: 120, title: 'Discovery Workshop' }
    }

    const consultation = consultationTypes[body.consultationType as keyof typeof consultationTypes]
    
    // Here you would integrate with calendar services (Google Calendar, Calendly, etc.)
    console.log('Processing consultation booking:', {
      meetingId,
      client: `${body.firstName} ${body.lastName}`,
      email: body.email,
      company: body.company,
      type: body.consultationType,
      date: body.preferredDate,
      time: body.preferredTime,
      duration: consultation.duration,
      timestamp: new Date().toISOString()
    })

    // Simulate calendar booking delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    // In a real implementation, you would:
    // 1. Check calendar availability
    // 2. Create calendar event
    // 3. Send calendar invites
    // 4. Send confirmation emails
    // 5. Store in CRM/database
    // 6. Set up automated reminders

    const response = {
      success: true,
      message: 'Consultation booked successfully',
      data: {
        meetingId,
        consultationType: consultation.title,
        duration: `${consultation.duration} minutes`,
        scheduledDate: body.preferredDate,
        scheduledTime: body.preferredTime,
        meetingType: body.meetingType || 'video',
        calendarLink: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(consultation.title)}&dates=${selectedDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
        nextSteps: [
          'Calendar invitation will be sent within 5 minutes',
          'Meeting preparation materials will be emailed',
          'Pre-consultation questionnaire link provided',
          'Technical requirements and agenda shared'
        ],
        preparationItems: [
          'Current AI/technology stack overview',
          'Key business objectives and challenges',
          'Budget and timeline expectations',
          'Technical team availability'
        ]
      }
    }

    return NextResponse.json(response, { status: 200 })

  } catch (error) {
    console.error('Consultation booking error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to book consultation' 
      }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Consultation booking API endpoint',
      methods: ['POST'],
      consultationTypes: {
        strategic: { duration: 60, description: 'High-level strategic planning and roadmap development' },
        technical: { duration: 90, description: 'Deep-dive into technical requirements and solutions' },
        discovery: { duration: 120, description: 'Comprehensive assessment of your AI readiness' }
      },
      fields: {
        required: ['firstName', 'lastName', 'email', 'company', 'consultationType', 'preferredDate', 'preferredTime'],
        optional: ['phone', 'role', 'projectDescription', 'urgency', 'meetingType']
      }
    }, 
    { status: 200 }
  )
} 