import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'EnvironmentAI - Multimodal AI for Crisis Response & Ecosystem Health',
  description: 'Advanced AI solutions for environmental monitoring, crisis response, and human-environment harmony using multimodal machine learning.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

