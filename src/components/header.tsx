"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ThemeToggle } from "./ui/theme-toggle"

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isFeaturesActive, setIsFeaturesActive] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(href)
  }

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const handleHashChange = () => {
        setIsFeaturesActive(pathname === "/" && window.location.hash === "#features")
      }

      handleHashChange() // Check initial state
      window.addEventListener('hashchange', handleHashChange)

      return () => window.removeEventListener('hashchange', handleHashChange)
    }
  }, [pathname])

  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === "/") {
      // If we're on the homepage, scroll to features section
      const featuresSection = document.getElementById("features")
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" })
        setIsFeaturesActive(true)
      }
    } else {
      // If we're on another page, navigate to homepage with features hash
      router.push("/#features")
    }
  }

  return (
    <header className="fixed top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80 dark:border-slate-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-amber-500">
            <span className="text-lg">🌿</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">
            EnvironmentAI
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400 ${
              isActive("/") && !isActive("/features") && !isActive("/about")
                ? "text-green-600 dark:text-green-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Home
          </Link>
          <button
            onClick={handleFeaturesClick}
            className={`text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400 ${
              isFeaturesActive
                ? "text-green-600 dark:text-green-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Features
          </button>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400 ${
              isActive("/about")
                ? "text-green-600 dark:text-green-400"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  )
}

export { Header }

