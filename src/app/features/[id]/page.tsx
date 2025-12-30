"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeatureForm } from "@/components/feature-form"
import { FeatureOutput } from "@/components/feature-output"
import { features, generateMockResponse } from "@/lib/mock-data"
import { Feature } from "@/lib/types"

export default function FeaturePage() {
  const params = useParams()
  const router = useRouter()
  const [feature, setFeature] = useState<Feature | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<any>(null)

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

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Generate mock response based on feature
      const mockResponse = generateMockResponse(featureId, formData)
      setResults(mockResponse)
    } catch (error) {
      console.error('Error processing form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!feature) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading feature...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">
                {feature.title}
              </h1>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
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
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Machine Learning Architecture
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {feature.architecture.map((arch, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-r from-green-50 to-amber-50 dark:from-green-900/20 dark:to-amber-900/20 rounded-lg border border-green-200 dark:border-green-800"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Component {index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
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

