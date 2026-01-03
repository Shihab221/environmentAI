"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Feature } from "@/lib/types"
import { getInputDefault, featureDefaults } from "@/lib/input-defaults"
import { Info } from "lucide-react"

// Dynamic form schema based on feature inputs
const createFormSchema = (feature: Feature) => {
  const schema: Record<string, z.ZodType<any>> = {}

  feature.inputs.forEach((input, index) => {
    const inputKey = `input_${index}`

    // Check input type based on keywords
    if (input.toLowerCase().includes('file') || input.toLowerCase().includes('upload') || input.toLowerCase().includes('image') || input.toLowerCase().includes('audio') || input.toLowerCase().includes('video')) {
      schema[inputKey] = z.instanceof(FileList).optional()
    } else if (input.toLowerCase().includes('csv') || input.toLowerCase().includes('dataset')) {
      schema[inputKey] = z.instanceof(FileList).optional()
    } else {
      schema[inputKey] = z.string().optional()
    }
  })

  return z.object(schema)
}

// Get default values for the form
const getDefaultValues = (featureId: number, inputCount: number) => {
  const defaults: Record<string, string> = {}
  for (let i = 0; i < inputCount; i++) {
    const config = getInputDefault(featureId, i)
    defaults[`input_${i}`] = config.defaultValue
  }
  return defaults
}

interface FeatureFormProps {
  feature: Feature
  onSubmit: (data: any) => void
  isLoading?: boolean
}

const FeatureForm: React.FC<FeatureFormProps> = ({ feature, onSubmit, isLoading = false }) => {
  const schema = createFormSchema(feature)
  const defaultValues = getDefaultValues(feature.id, feature.inputs.length)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const handleFormSubmit = (data: any) => {
    // Convert FormData for file uploads
    const submitData = new FormData()
    let filledCount = 0
    let totalTextInputs = 0

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof FileList && value.length > 0) {
        submitData.append(key, value[0])
        filledCount++
      } else if (typeof value === 'string' && value.trim()) {
        submitData.append(key, value)
        filledCount++
        totalTextInputs++
      }
    })

    // Add metadata about input completeness
    submitData.append('_filledInputs', filledCount.toString())
    submitData.append('_totalInputs', feature.inputs.length.toString())

    onSubmit(submitData)
  }

  const renderInput = (input: string, index: number) => {
    const inputKey = `input_${index}`
    const config = getInputDefault(feature.id, index)
    const isFileInput = input.toLowerCase().includes('file') ||
                       input.toLowerCase().includes('upload') ||
                       input.toLowerCase().includes('image') ||
                       input.toLowerCase().includes('audio') ||
                       input.toLowerCase().includes('video') ||
                       input.toLowerCase().includes('csv') ||
                       input.toLowerCase().includes('dataset')

    // Shorten the input label for display
    const shortLabel = input.split(' — ')[0].split(' [')[0].trim()

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
        className="space-y-2"
      >
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          <span className="flex items-start gap-2">
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded text-xs font-bold">
              {index + 1}
            </span>
            <span className="flex-1">
              {shortLabel}
              {config.example && (
                <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-normal italic">
                  {config.example}
                </span>
              )}
            </span>
          </span>
        </label>

        {isFileInput ? (
          <div className="space-y-1">
            <input
              {...register(inputKey)}
              type="file"
              accept={input.toLowerCase().includes('image') ? 'image/*' :
                     input.toLowerCase().includes('audio') ? 'audio/*' :
                     input.toLowerCase().includes('video') ? 'video/*' :
                     input.toLowerCase().includes('csv') ? '.csv' : '*'}
              className="block w-full text-sm text-slate-500 dark:text-slate-400
                file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
                file:text-sm file:font-semibold file:bg-green-50 file:text-green-700
                dark:file:bg-green-900 dark:file:text-green-300
                hover:file:bg-green-100 dark:hover:file:bg-green-800"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Info className="w-3 h-3" />
              Optional - AI will use regional data if not provided
            </p>
          </div>
        ) : (
          <textarea
            {...register(inputKey)}
            placeholder={config.placeholder || "Enter value..."}
            rows={config.defaultValue.length > 100 ? 3 : 2}
            className="block w-full rounded-lg border border-slate-300 dark:border-slate-600
              bg-white dark:bg-slate-800 px-3 py-2 text-sm
              placeholder:text-slate-400 dark:placeholder:text-slate-500
              focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500
              resize-none"
          />
        )}

        {errors[inputKey] && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {errors[inputKey]?.message as string}
          </p>
        )}
      </motion.div>
    )
  }

  return (
    <Card className="w-full bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm border-0 shadow-modern">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span className="text-2xl">{feature.emoji}</span>
          <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent">{feature.title}</span>
        </CardTitle>
        <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
          <p className="text-sm text-emerald-700 dark:text-emerald-300 flex items-start gap-2">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Ready to analyze!</strong> Default values are pre-filled for demo. Modify any field or use as-is.
              AI uses Hugging Face + regional data for region-specific results. All inputs are optional.
            </span>
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {feature.inputs.map((input, index) => renderInput(input, index))}
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <p className="text-xs text-slate-500">
              {feature.inputs.length} inputs • Files are optional
            </p>
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="min-w-[180px] bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold shadow-modern hover:shadow-glow-green transition-all duration-300 border-0"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>AI Processing...</span>
                </div>
              ) : (
                '🚀 Run AI Analysis'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export { FeatureForm }
