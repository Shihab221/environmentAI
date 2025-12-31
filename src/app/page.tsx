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
    <div className="min-h-screen relative">
      {/* Animated Bubble Background */}
      <div className="bubble-bg">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-transparent backdrop-blur-sm relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm border-0 shadow-modern hover:shadow-modern-lg transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                  <p className="text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {stat.label}
                  </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-transparent relative overflow-hidden z-10">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent">
                Powerful AI Features
              </span>
              <span className="text-slate-800 dark:text-white">
                {" "}for Environmental Intelligence
              </span>
            </h2>
            <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed font-medium bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
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
                className="h-full"
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

