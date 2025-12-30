import { NextRequest, NextResponse } from 'next/server'
import { generateMockResponse } from '@/lib/mock-data'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const featureId = parseInt(params.id)

    if (isNaN(featureId) || featureId < 1 || featureId > 5) {
      return NextResponse.json(
        { error: 'Invalid feature ID' },
        { status: 400 }
      )
    }

    // Parse the FormData from the request
    const formData = await request.formData()

    // Convert FormData to a plain object for processing
    const data: Record<string, any> = {}
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        // In a real app, you'd process the file here
        data[key] = {
          filename: value.name,
          size: value.size,
          type: value.type
        }
      } else {
        data[key] = value
      }
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Generate mock response based on feature
    const result = generateMockResponse(featureId, data)

    return NextResponse.json({
      success: true,
      data: result,
      message: 'Analysis completed successfully'
    })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

