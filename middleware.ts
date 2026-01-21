import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import arcjet, { tokenBucket, shield, detectBot, validateEmail } from '@arcjet/next'
import { NextResponse } from 'next/server'

// Initialize Arcjet with comprehensive security rules
const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ['ip.src'],
  rules: [
    // Shield protection against common attacks (SQL injection, XSS, etc.)
    shield({
      mode: 'LIVE', // Use 'DRY_RUN' for testing
    }),
    // Bot detection and blocking
    detectBot({
      mode: 'LIVE',
      allow: [
        'CATEGORY:SEARCH_ENGINE', // Allow legitimate search engines
      ],
    }),
    // Rate limiting with token bucket algorithm
    tokenBucket({
      mode: 'LIVE',
      refillRate: 10, // Refill 10 tokens per interval
      interval: 60, // 60 seconds
      capacity: 100, // Maximum 100 requests
    }),
  ],
})

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/security(.*)', // Allow access to security dashboard
])

export default clerkMiddleware(async (auth, request) => {
  // Apply Arcjet security rules first
  const decision = await aj.protect(request)
  
  // Log security events
  console.log('🛡️ Arcjet Security Decision:', {
    id: decision.id,
    conclusion: decision.conclusion,
    reason: decision.reason,
    ip: decision.ip,
    timestamp: new Date().toISOString(),
  })

  // Block if Arcjet denies the request
  if (decision.isDenied()) {
    // Log blocked attempt
    console.error('🚨 Security Threat Blocked:', {
      reason: decision.reason,
      ip: decision.ip,
      path: request.nextUrl.pathname,
      timestamp: new Date().toISOString(),
    })

    // Return 403 Forbidden with security message
    return NextResponse.json(
      {
        error: 'Access Denied',
        reason: decision.reason.toString(),
        message: 'Your request has been blocked by our security system.',
      },
      { status: 403 }
    )
  }

  // Then apply Clerk authentication
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
