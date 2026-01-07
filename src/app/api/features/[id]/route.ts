import { NextRequest, NextResponse } from 'next/server'
import { processFeature } from '@/lib/feature-processors'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const featureId = parseInt(params.id)

    if (isNaN(featureId) || featureId < 1 || featureId > 10) {
      return NextResponse.json(
        { error: 'Invalid feature ID. Must be between 1 and 10.' },
        { status: 400 }
      )
    }

    // Parse the FormData from the request
    const formData = await request.formData()

    // Convert FormData to a plain object for processing
    const data: Record<string, any> = {}
    let hasAnyInput = false

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        // Handle file uploads
        if (value.size > 0) {
          hasAnyInput = true
          
          // For images, convert to base64 for AI processing
          if (value.type.startsWith('image/')) {
            const buffer = await value.arrayBuffer()
            const base64 = Buffer.from(buffer).toString('base64')
            data[key] = {
              filename: value.name,
              size: value.size,
              type: value.type,
              base64: base64
            }
          } else {
            data[key] = {
              filename: value.name,
              size: value.size,
              type: value.type
            }
          }
        }
      } else if (typeof value === 'string' && value.trim()) {
        hasAnyInput = true
        data[key] = value.trim()
      }
    }

    // Process the feature with real AI/API integration
    const result = await processFeature(featureId, data)

    return NextResponse.json({
      success: true,
      data: result,
      message: 'Analysis completed successfully using real-time AI processing'
    })

  } catch (error) {
    console.error('API Error:', error)
    
    // Provide meaningful error messages
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Processing failed. Please try again.',
        details: errorMessage 
      },
      { status: 500 }
    )
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const featureId = parseInt(params.id)
  
  return NextResponse.json({
    message: 'Use POST method to submit data for analysis',
    featureId: featureId,
    supportedInputs: getFeatureInputDescription(featureId)
  })
}

// Helper function to describe expected inputs
function getFeatureInputDescription(featureId: number): string[] {
  const inputDescriptions: Record<number, string[]> = {
    1: ['Location/City name', 'Weather data', 'Satellite imagery', 'Social media reports'],
    2: ['Location', 'NDVI imagery', 'Bioacoustic recordings', 'Soil/water data'],
    3: ['Text journals', 'Voice recordings', 'Biometric data', 'Environmental context'],
    4: ['Theme description', 'Sketches', 'Audio mood samples', 'Reference images'],
    5: ['Research papers/text', 'Datasets', 'Prior hypotheses', 'Domain specification'],
    6: ['Text to translate', 'Speech audio', 'Target languages', 'Cultural context'],
    7: ['City/location', 'Traffic data', 'Air quality readings', 'Citizen feedback'],
    8: ['Protein sequences', 'Molecular constraints', 'Creative prompts', 'Target properties'],
    9: ['Student profiles', 'Learning goals', 'Performance data', 'Curriculum content'],
    10: ['Numerical datasets', 'Time series', 'Pattern descriptions', 'Analysis goals']
  }
  
  return inputDescriptions[featureId] || ['General text input']
}
