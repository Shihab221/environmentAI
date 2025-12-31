import Link from "next/link"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-zinc-50 dark:bg-zinc-900/50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/slider.jpg')`,
          }}
        />
        {/* Modern overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5 dark:from-slate-900/20 dark:via-transparent dark:to-slate-800/10" />
      </div>

      {/* Modern Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Title */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-lg">
            <span className="block mb-2">Environment</span>
            <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent drop-shadow-sm">
              AI
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-8 text-xl leading-8 sm:text-2xl font-medium drop-shadow-md max-w-3xl mx-auto bg-gradient-to-r from-emerald-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Multimodal AI for Crisis Response, Ecosystem Health & Human-Environment Harmony
          </p>

          {/* CTA Button */}
          <div className="mt-12 flex items-center justify-center">
            <Link href="#features">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-400 hover:from-green-700 hover:to-emerald-500 text-white font-semibold shadow-modern-lg hover:shadow-glow-green transition-all duration-300 transform hover:scale-105 border-0">
                Explore Features
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Modern Floating Elements */}
        <div className="absolute top-1/3 left-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-green-400/15 to-emerald-300/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 h-40 w-40 rounded-full bg-gradient-to-r from-emerald-300/15 to-green-400/15 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-gradient-to-r from-green-400/10 to-emerald-300/10 blur-3xl animate-pulse delay-2000" />

        {/* Additional subtle elements */}
        <div className="absolute top-1/4 right-1/3 h-32 w-32 rounded-full bg-gradient-to-br from-green-300/10 to-transparent blur-2xl animate-pulse delay-500" />
        <div className="absolute bottom-1/4 left-1/3 h-36 w-36 rounded-full bg-gradient-to-tr from-emerald-200/10 to-transparent blur-2xl animate-pulse delay-1500" />
      </div>
    </section>
  )
}

export { Hero }

