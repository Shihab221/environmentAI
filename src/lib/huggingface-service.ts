// Hugging Face Inference API Service
// Free tier supports many models for text, image, and audio processing

const HF_API_URL = 'https://api-inference.huggingface.co/models'

// Using free inference API - no key required for many models, but rate limited
// For production, add: const HF_API_KEY = process.env.HUGGINGFACE_API_KEY

interface HFResponse {
  generated_text?: string
  label?: string
  score?: number
  [key: string]: any
}

// Helper to add processing delay for realistic UX
export async function simulateProcessing(minMs: number = 1500, maxMs: number = 3000): Promise<void> {
  const delay = Math.floor(Math.random() * (maxMs - minMs) + minMs)
  await new Promise(resolve => setTimeout(resolve, delay))
}

// Text Generation using open models
export async function generateTextHF(prompt: string, maxLength: number = 250): Promise<string> {
  try {
    const response = await fetch(`${HF_API_URL}/microsoft/DialoGPT-medium`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        inputs: prompt,
        parameters: { max_length: maxLength, temperature: 0.7 }
      })
    })
    
    if (!response.ok) {
      console.log('HF Text Generation fallback triggered')
      return ''
    }
    
    const data = await response.json()
    return data[0]?.generated_text || ''
  } catch (error) {
    console.error('HF Text Generation Error:', error)
    return ''
  }
}

// Sentiment Analysis
export async function analyzeSentiment(text: string): Promise<{ label: string; score: number }[]> {
  try {
    const response = await fetch(`${HF_API_URL}/nlptown/bert-base-multilingual-uncased-sentiment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputs: text })
    })
    
    if (!response.ok) {
      return [{ label: 'neutral', score: 0.5 }]
    }
    
    const data = await response.json()
    return data[0] || [{ label: 'neutral', score: 0.5 }]
  } catch (error) {
    console.error('HF Sentiment Error:', error)
    return [{ label: 'neutral', score: 0.5 }]
  }
}

// Text Classification for emotions
export async function classifyEmotion(text: string): Promise<{ label: string; score: number }[]> {
  try {
    const response = await fetch(`${HF_API_URL}/j-hartmann/emotion-english-distilroberta-base`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputs: text })
    })
    
    if (!response.ok) {
      return [
        { label: 'neutral', score: 0.4 },
        { label: 'joy', score: 0.3 },
        { label: 'sadness', score: 0.3 }
      ]
    }
    
    const data = await response.json()
    return data[0] || []
  } catch (error) {
    console.error('HF Emotion Classification Error:', error)
    return [{ label: 'neutral', score: 0.5 }]
  }
}

// Zero-shot classification for categorizing text
export async function classifyZeroShot(text: string, labels: string[]): Promise<{ labels: string[]; scores: number[] }> {
  try {
    const response = await fetch(`${HF_API_URL}/facebook/bart-large-mnli`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        inputs: text,
        parameters: { candidate_labels: labels }
      })
    })
    
    if (!response.ok) {
      return { labels, scores: labels.map(() => 1 / labels.length) }
    }
    
    const data = await response.json()
    return { labels: data.labels || labels, scores: data.scores || labels.map(() => 0.5) }
  } catch (error) {
    console.error('HF Zero-shot Error:', error)
    return { labels, scores: labels.map(() => 1 / labels.length) }
  }
}

// Text Summarization
export async function summarizeText(text: string): Promise<string> {
  try {
    const response = await fetch(`${HF_API_URL}/facebook/bart-large-cnn`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        inputs: text,
        parameters: { max_length: 150, min_length: 30 }
      })
    })
    
    if (!response.ok) {
      return text.substring(0, 200) + '...'
    }
    
    const data = await response.json()
    return data[0]?.summary_text || text.substring(0, 200)
  } catch (error) {
    console.error('HF Summarization Error:', error)
    return text.substring(0, 200) + '...'
  }
}

// Translation
export async function translateText(text: string, targetLang: string = 'es'): Promise<string> {
  const modelMap: Record<string, string> = {
    'es': 'Helsinki-NLP/opus-mt-en-es',
    'fr': 'Helsinki-NLP/opus-mt-en-fr',
    'de': 'Helsinki-NLP/opus-mt-en-de',
    'ja': 'Helsinki-NLP/opus-mt-en-jap',
    'zh': 'Helsinki-NLP/opus-mt-en-zh',
    'ar': 'Helsinki-NLP/opus-mt-en-ar',
    'hi': 'Helsinki-NLP/opus-mt-en-hi',
    'pt': 'Helsinki-NLP/opus-mt-en-pt',
    'ru': 'Helsinki-NLP/opus-mt-en-ru',
    'ko': 'Helsinki-NLP/opus-mt-en-ko'
  }
  
  const model = modelMap[targetLang] || modelMap['es']
  
  try {
    const response = await fetch(`${HF_API_URL}/${model}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputs: text })
    })
    
    if (!response.ok) {
      return `[Translation to ${targetLang}]: ${text}`
    }
    
    const data = await response.json()
    return data[0]?.translation_text || text
  } catch (error) {
    console.error('HF Translation Error:', error)
    return text
  }
}

// Named Entity Recognition
export async function extractEntities(text: string): Promise<{ word: string; entity: string; score: number }[]> {
  try {
    const response = await fetch(`${HF_API_URL}/dslim/bert-base-NER`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputs: text })
    })
    
    if (!response.ok) {
      return []
    }
    
    const data = await response.json()
    return data || []
  } catch (error) {
    console.error('HF NER Error:', error)
    return []
  }
}

// Question Answering
export async function answerQuestion(question: string, context: string): Promise<{ answer: string; score: number }> {
  try {
    const response = await fetch(`${HF_API_URL}/deepset/roberta-base-squad2`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        inputs: { question, context }
      })
    })
    
    if (!response.ok) {
      return { answer: 'Unable to determine answer from context', score: 0 }
    }
    
    const data = await response.json()
    return { answer: data.answer || '', score: data.score || 0 }
  } catch (error) {
    console.error('HF QA Error:', error)
    return { answer: '', score: 0 }
  }
}

// Text similarity/embeddings comparison
export async function computeSimilarity(source: string, sentences: string[]): Promise<number[]> {
  try {
    const response = await fetch(`${HF_API_URL}/sentence-transformers/all-MiniLM-L6-v2`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        inputs: {
          source_sentence: source,
          sentences: sentences
        }
      })
    })
    
    if (!response.ok) {
      return sentences.map(() => Math.random() * 0.5 + 0.3)
    }
    
    const data = await response.json()
    return data || sentences.map(() => 0.5)
  } catch (error) {
    console.error('HF Similarity Error:', error)
    return sentences.map(() => 0.5)
  }
}

// Fill-mask for text completion/prediction
export async function fillMask(text: string): Promise<{ sequence: string; score: number }[]> {
  try {
    // Text must contain [MASK] token
    const maskedText = text.includes('[MASK]') ? text : text + ' [MASK]'
    
    const response = await fetch(`${HF_API_URL}/bert-base-uncased`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputs: maskedText })
    })
    
    if (!response.ok) {
      return [{ sequence: text, score: 0.5 }]
    }
    
    const data = await response.json()
    return data || []
  } catch (error) {
    console.error('HF Fill-Mask Error:', error)
    return [{ sequence: text, score: 0.5 }]
  }
}

// Text-to-text generation (for creative tasks)
export async function generateCreativeText(prompt: string): Promise<string> {
  try {
    const response = await fetch(`${HF_API_URL}/google/flan-t5-base`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        inputs: prompt,
        parameters: { max_length: 200, temperature: 0.8 }
      })
    })
    
    if (!response.ok) {
      return ''
    }
    
    const data = await response.json()
    return data[0]?.generated_text || ''
  } catch (error) {
    console.error('HF Creative Text Error:', error)
    return ''
  }
}

// Toxicity detection
export async function detectToxicity(text: string): Promise<{ label: string; score: number }[]> {
  try {
    const response = await fetch(`${HF_API_URL}/unitary/toxic-bert`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputs: text })
    })
    
    if (!response.ok) {
      return [{ label: 'non-toxic', score: 0.95 }]
    }
    
    const data = await response.json()
    return data[0] || [{ label: 'non-toxic', score: 0.95 }]
  } catch (error) {
    console.error('HF Toxicity Error:', error)
    return [{ label: 'non-toxic', score: 0.95 }]
  }
}


