import Link from "next/link"
import { motion } from "framer-motion"
import { Modal } from "./ui/modal"
import { Button } from "./ui/button"
import { Feature } from "@/lib/types"

interface FeatureModalProps {
  feature: Feature | null
  isOpen: boolean
  onClose: () => void
}

const FeatureModal: React.FC<FeatureModalProps> = ({ feature, isOpen, onClose }) => {
  if (!feature) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl">{feature.emoji}</span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">
              {feature.title}
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {feature.description}
          </p>
        </div>

        {/* Inputs Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            INPUTS
          </h3>
          <ol className="space-y-2 ml-5">
            {feature.inputs.map((input, index) => (
              <li key={index} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="font-medium text-green-600 dark:text-green-400">
                  {index + 1}.
                </span>{" "}
                {input}
              </li>
            ))}
          </ol>
        </div>

        {/* Outputs Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
            OUTPUTS
          </h3>
          <ol className="space-y-2 ml-5">
            {feature.outputs.map((output, index) => (
              <li key={index} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="font-medium text-amber-600 dark:text-amber-400">
                  {index + 1}.
                </span>{" "}
                {output}
              </li>
            ))}
          </ol>
        </div>

        {/* Architecture Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            MACHINE LEARNING ARCHITECTURE
          </h3>
          <ul className="space-y-2 ml-5">
            {feature.architecture.map((arch, index) => (
              <li key={index} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  •
                </span>{" "}
                {arch}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-4">
          <Link href={`/features/${feature.id}`}>
            <Button size="lg" onClick={onClose}>
              Try it now →
            </Button>
          </Link>
        </div>
      </motion.div>
    </Modal>
  )
}

export { FeatureModal }

