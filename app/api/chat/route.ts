import Groq from 'groq-sdk'
import { NextRequest, NextResponse } from 'next/server'
import { portfolioKnowledge, systemPrompt } from '@/lib/portfolio-knowledge'

// Initialize Groq - FREE and FAST!
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || ''
})

// Simple prompt injection detection
function detectPromptInjection(message: string): boolean {
  const injectionPatterns = [
    /ignore (all |previous |above )?instructions/i,
    /forget (all |previous |everything)/i,
    /you are now/i,
    /new (instructions|rules|role)/i,
    /disregard (all |previous )/i,
    /system prompt/i,
    /act as/i,
    /pretend (to be|you are)/i
  ]
  
  return injectionPatterns.some(pattern => pattern.test(message))
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      )
    }

    // Check for prompt injection
    if (detectPromptInjection(message)) {
      return NextResponse.json({
        response: "I'm designed specifically to answer questions about Jan Padua's portfolio and background. How can I help you learn about his skills and experience?"
      })
    }

    // Check API key
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({
        response: "AI chat is currently being configured. Please check back soon!"
      })
    }

    // Use Groq with Llama 3 (FREE and SUPER FAST!)
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: `${systemPrompt}\n\nPORTFOLIO INFORMATION:\n${portfolioKnowledge}` },
        { role: 'user', content: message }
      ],
      max_tokens: 300,
      temperature: 0.7
    })

    const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.'

    return NextResponse.json({ response })

  } catch (error: any) {
    console.error('Chat API error:', error)
    
    // Better error messages
    if (error?.message?.includes('API key')) {
      return NextResponse.json({
        response: "There's an issue with the API configuration. Please contact the administrator."
      })
    }
    
    return NextResponse.json({
      response: 'Sorry, I encountered an error. Please try again in a moment.'
    })
  }
}
