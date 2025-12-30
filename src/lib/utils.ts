import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 15)
}

export function downloadFile(data: Blob, filename: string): void {
  const url = URL.createObjectURL(data)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function createMockAudioBlob(): Blob {
  // Create a simple mock audio blob (empty for demo)
  return new Blob(['mock audio data'], { type: 'audio/wav' })
}

export function createMockVideoBlob(): Blob {
  // Create a simple mock video blob (empty for demo)
  return new Blob(['mock video data'], { type: 'video/mp4' })
}

