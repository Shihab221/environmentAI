// Environment variables configuration
export const env = {
  GEMINI_API_KEY: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '',
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || '',
}

// Validate required environment variables
export function validateEnv() {
  const missing: string[] = []
  
  if (!env.GEMINI_API_KEY) {
    missing.push('NEXT_PUBLIC_GEMINI_API_KEY')
  }
  
  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(', ')}`)
  }
  
  return missing.length === 0
}

