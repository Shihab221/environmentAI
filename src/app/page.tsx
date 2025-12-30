"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Hero } from "@/components/hero"
import { FeatureCard } from "@/components/feature-card"
import { FeatureModal } from "@/components/feature-modal"
import { features } from "@/lib/mock-data"
import { Feature } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Globe, Users, Award } from "lucide-react"

const stats = [
  { label: "AI Features", value: "10", icon: Cpu },
  { label: "Global Impact", value: "50M+", icon: Globe },
  { label: "Team Members", value: "25", icon: Users },
  { label: "Awards Won", value: "12", icon: Award }
]

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedFeature(null)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-green-600" />
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Powerful AI Features for Environmental Intelligence
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Discover our comprehensive suite of multimodal AI tools designed to protect,
              understand, and harmonize with our natural environment.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard
                  feature={feature}
                  onClick={() => handleFeatureClick(feature)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Modal */}
      <FeatureModal
        feature={selectedFeature}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

