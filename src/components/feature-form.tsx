"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Feature } from "@/lib/types"

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

interface FeatureFormProps {
  feature: Feature
  onSubmit: (data: any) => void
  isLoading?: boolean
}

const FeatureForm: React.FC<FeatureFormProps> = ({ feature, onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const schema = createFormSchema(feature)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const handleFormSubmit = (data: any) => {
    // Convert FormData for file uploads
    const submitData = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof FileList && value.length > 0) {
        submitData.append(key, value[0])
      } else if (typeof value === 'string' && value.trim()) {
        submitData.append(key, value)
      }
    })

    onSubmit(submitData)
  }

  const renderInput = (input: string, index: number) => {
    const inputKey = `input_${index}`
    const isFileInput = input.toLowerCase().includes('file') ||
                       input.toLowerCase().includes('upload') ||
                       input.toLowerCase().includes('image') ||
                       input.toLowerCase().includes('audio') ||
                       input.toLowerCase().includes('video') ||
                       input.toLowerCase().includes('csv') ||
                       input.toLowerCase().includes('dataset')

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="space-y-2"
      >
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          {index + 1}. {input}
        </label>

        {isFileInput ? (
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
        ) : (
          <input
            {...register(inputKey)}
            type="text"
            placeholder="Enter value..."
            className="block w-full rounded-lg border border-slate-300 dark:border-slate-600
              bg-white dark:bg-slate-800 px-3 py-2 text-sm
              placeholder:text-slate-400 dark:placeholder:text-slate-500
              focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span className="text-2xl">{feature.emoji}</span>
          <span>{feature.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="space-y-4">
            {feature.inputs.map((input, index) => renderInput(input, index))}
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="min-w-[150px]"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                'Run Analysis →'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export { FeatureForm }

