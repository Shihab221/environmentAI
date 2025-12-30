import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 modal-backdrop"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={cn(
          "relative z-10 max-h-[90vh] max-w-[90vw] overflow-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900",
          "animate-scale-in",
          className
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          <X className="h-5 w-5" />
        </button>

        {children}
      </div>
    </div>
  )
}

export { Modal }

