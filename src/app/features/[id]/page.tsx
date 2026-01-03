"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeatureForm } from "@/components/feature-form"
import { FeatureOutput } from "@/components/feature-output"
import { features } from "@/lib/mock-data"
import { Feature } from "@/lib/types"

export default function FeaturePage() {
  const params = useParams()
  const router = useRouter()
  const [feature, setFeature] = useState<Feature | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const featureId = parseInt(params.id as string)

  useEffect(() => {
    const foundFeature = features.find(f => f.id === featureId)
    if (foundFeature) {
      setFeature(foundFeature)
    } else {
      router.push('/')
    }
  }, [featureId, router])

  const handleFormSubmit = async (formData: FormData) => {
    setIsLoading(true)
    setResults(null)
    setError(null)

    try {
      // Call the real API endpoint
      const response = await fetch(`/api/features/${featureId}`, {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResults(data.data)
      } else {
        setError(data.message || 'Analysis failed. Please provide valid inputs.')
      }
    } catch (err) {
      console.error('Error processing form:', err)
      setError('Failed to connect to the server. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!feature) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        {/* Animated Bubble Background */}
        <div className="bubble-bg">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>

        <div className="text-center relative z-10">
          <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-medium">Loading feature...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Animated Bubble Background */}
      <div className="bubble-bg">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-4xl">{feature.emoji}</span>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent">
                {feature.title}
              </h1>
            </div>
            <p className="text-lg max-w-2xl mx-auto bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              {feature.description}
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FeatureForm
              feature={feature}
              onSubmit={handleFormSubmit}
              isLoading={isLoading}
            />
          </motion.div>

          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Error Display */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-800 dark:text-red-200">Input Required</h3>
                    <p className="text-sm text-red-600 dark:text-red-300 mt-1">{error}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <FeatureOutput
              featureId={featureId}
              data={results}
              isLoading={isLoading}
            />
          </motion.div>
        </div>

        {/* Architecture Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm rounded-2xl p-8 shadow-modern border-0">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent">
              Machine Learning Architecture
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {feature.architecture.map((arch, index) => (
                <div
                  key={index}
                  className="p-4 bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm rounded-lg border-0 shadow-modern hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Component {index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    {arch}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

