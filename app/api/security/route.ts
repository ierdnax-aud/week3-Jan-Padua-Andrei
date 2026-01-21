import { NextRequest, NextResponse } from 'next/server'
import { getSecurityEvents, getSecurityMetrics } from '@/lib/security'

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const type = url.searchParams.get('type')

    if (type === 'metrics') {
      const metrics = getSecurityMetrics()
      return NextResponse.json(metrics)
    } else if (type === 'events') {
      const limit = parseInt(url.searchParams.get('limit') || '100')
      const events = getSecurityEvents(limit)
      return NextResponse.json(events)
    } else {
      return NextResponse.json({
        metrics: getSecurityMetrics(),
        recentEvents: getSecurityEvents(10),
      })
    }
  } catch (error) {
    console.error('Security API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch security data' },
      { status: 500 }
    )
  }
}
