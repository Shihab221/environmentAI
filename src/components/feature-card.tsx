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
      whileHover={{ scale: 1.02, y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card
        className="cursor-pointer group relative overflow-hidden h-full bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm border-0 shadow-modern hover:shadow-card-hover transition-all duration-500"
        onClick={onClick}
      >
        {/* Modern Gradient Border Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/10 via-emerald-300/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        <CardContent className="relative p-6 h-full flex flex-col">
          {/* Emoji and Title */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-3xl filter drop-shadow-sm">{feature.emoji}</span>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight line-clamp-2">
              {feature.title}
            </h3>
          </div>

          {/* Description - Fixed height container */}
          <div className="flex-1 mb-4">
            <p className="text-sm leading-relaxed line-clamp-3 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              {feature.description}
            </p>
          </div>

          {/* Hover Indicator */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-green-600 dark:text-green-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
              Learn more
              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>

            {/* Modern corner accent */}
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-400 to-emerald-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export { FeatureCard }

