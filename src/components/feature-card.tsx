import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Feature } from "@/lib/types"

interface FeatureCardProps {
  feature: Feature
  onClick: () => void
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className="cursor-pointer group relative overflow-hidden border-2 transition-all duration-300 hover:border-green-300 dark:hover:border-green-500"
        onClick={onClick}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="relative p-6">
          {/* Emoji and Title */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-3xl">{feature.emoji}</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {feature.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {feature.description}
          </p>

          {/* Hover Indicator */}
          <div className="mt-4 flex items-center text-green-600 dark:text-green-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Learn more
            <span className="ml-1">→</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export { FeatureCard }

