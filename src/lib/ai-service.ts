// AI Service using Google Gemini API
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || ''

// Initialize Gemini
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
]

// Get Gemini model - Using gemini-pro which is the stable text model
export function getGeminiModel(modelName: string = 'gemini-pro') {
  return genAI.getGenerativeModel({ model: modelName, safetySettings })
}

// Generic text generation
export async function generateText(prompt: string): Promise<string> {
  try {
    const model = getGeminiModel()
    const result = await model.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Gemini API Error:', error)
    throw new Error('Failed to generate AI response')
  }
}

// Generate structured JSON response
export async function generateJSON<T>(prompt: string, schema?: string): Promise<T> {
  try {
    const model = getGeminiModel()
    const fullPrompt = schema 
      ? `${prompt}\n\nRespond ONLY with valid JSON matching this schema:\n${schema}\n\nNo markdown, no explanation, just the JSON object.`
      : `${prompt}\n\nRespond ONLY with valid JSON. No markdown, no explanation, just the JSON object.`
    
    const result = await model.generateContent(fullPrompt)
    const response = await result.response
    const text = response.text()
    
    // Clean up response - remove markdown code blocks if present
    let cleanedText = text.trim()
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.slice(7)
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.slice(3)
    }
    if (cleanedText.endsWith('```')) {
      cleanedText = cleanedText.slice(0, -3)
    }
    cleanedText = cleanedText.trim()
    
    return JSON.parse(cleanedText) as T
  } catch (error) {
    console.error('Gemini JSON Generation Error:', error)
    throw new Error('Failed to generate structured AI response')
  }
}

// Analyze image with text
export async function analyzeImage(imageBase64: string, mimeType: string, prompt: string): Promise<string> {
  try {
    const model = getGeminiModel('gemini-pro-vision')
    
    const imagePart = {
      inlineData: {
        data: imageBase64,
        mimeType: mimeType,
      },
    }
    
    const result = await model.generateContent([prompt, imagePart])
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Gemini Image Analysis Error:', error)
    throw new Error('Failed to analyze image')
  }
}

// Generate embeddings (simulated since Gemini doesn't have direct embedding API in this version)
export function generateEmbeddings(data: number[][]): number[][] {
  // Simulate dimensionality reduction using random projection
  return data.map(row => {
    const dims = 4
    const result = []
    for (let i = 0; i < dims; i++) {
      let sum = 0
      for (let j = 0; j < row.length; j++) {
        sum += row[j] * Math.sin((i + 1) * (j + 1))
      }
      result.push(parseFloat((sum / row.length).toFixed(4)))
    }
    return result
  })
}

