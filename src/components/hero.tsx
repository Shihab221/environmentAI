import Link from "next/link"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-env-light-bg via-white to-env-light-accent dark:from-env-dark-bg dark:via-slate-950 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Main Title */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            <span className="block">Environment</span>
            <span className="block bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            Multimodal AI for Crisis Response, Ecosystem Health & Human-Environment Harmony
          </p>

          {/* CTA Button */}
          <div className="mt-10 flex items-center justify-center">
            <Link href="#features">
              <Button size="lg" className="text-lg">
                Explore Features
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-green-400/20 to-amber-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-gradient-to-r from-amber-400/20 to-green-400/20 blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  )
}

export { Hero }

