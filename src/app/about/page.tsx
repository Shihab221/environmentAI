"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Globe, Heart } from "lucide-react"

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing the boundaries of AI to solve environmental challenges with cutting-edge multimodal machine learning."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to creating AI solutions that promote environmental health and human-environment harmony."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Developing technology that can be deployed worldwide to address climate change and environmental crises."
    }
  ]

  const team = [
    {
      name: "Isha Das",
      role: "LEAD Officer",
      expertise: "Management and Machine Learning",
      image: "👩‍🔬"
    },
    {
      name: "Shihab Ahemed",
      role: "Developer & Engineer",
      expertise: "Development and Machine Learning",
      image: "👨‍🌾"
    },
    // {
    //   name: "Dr. Aisha Patel",
    //   role: "Lead ML Engineer",
    //   expertise: "Computer Vision & NLP",
    //   image: "👩‍💻"
    // },
    // {
    //   name: "Dr. James Wilson",
    //   role: "Research Director",
    //   expertise: "Urban Planning & GIS",
    //   image: "👨‍🏫"
    // }
  ]

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
      <section className="relative min-h-screen flex items-center bg-transparent z-10">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent drop-shadow-sm">
              About EnvironmentAI
            </h1>
            <p className="text-xl md:text-2xl mb-8 bg-gradient-to-r from-emerald-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-sm">
              Pioneering the future of environmental intelligence through advanced multimodal AI
            </p>
            <p className="text-lg max-w-3xl mx-auto bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              We combine cutting-edge artificial intelligence with deep environmental expertise to create
              solutions that protect our planet and enhance human-environment harmony.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-transparent relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              To harness the power of artificial intelligence to create a sustainable future where
              technology works in harmony with nature, protecting ecosystems and enhancing human
              well-being through intelligent environmental monitoring and crisis response.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm border-0 shadow-modern hover:shadow-card-hover transition-all duration-500">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-green-600 dark:text-green-400" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-transparent relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent">
              Our Technology
            </h2>
            <p className="text-lg mb-8 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              We leverage state-of-the-art AI technologies including multimodal transformers,
              spatio-temporal graph neural networks, and physics-informed machine learning
              to solve complex environmental challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <Badge variant="secondary" className="p-4 text-center bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm border-0 shadow-modern hover:shadow-card-hover transition-all duration-300">
              <div className="text-2xl mb-2">🤖</div>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-medium">Multimodal Transformers</span>
            </Badge>
            <Badge variant="secondary" className="p-4 text-center bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm border-0 shadow-modern hover:shadow-card-hover transition-all duration-300">
              <div className="text-2xl mb-2">🕸️</div>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-medium">Graph Neural Networks</span>
            </Badge>
            <Badge variant="secondary" className="p-4 text-center bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm border-0 shadow-modern hover:shadow-card-hover transition-all duration-300">
              <div className="text-2xl mb-2">⚡</div>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-medium">Real-time Processing</span>
            </Badge>
            <Badge variant="secondary" className="p-4 text-center bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm border-0 shadow-modern hover:shadow-card-hover transition-all duration-300">
              <div className="text-2xl mb-2">🌍</div>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-medium">Global Deployment</span>
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-transparent relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-lg bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Meet the experts behind EnvironmentAI - a diverse team of AI researchers,
              environmental scientists, and engineers working together to create
              meaningful impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm border-0 shadow-modern hover:shadow-card-hover transition-all duration-500">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{member.image}</div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-medium">{member.role}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    {member.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-transparent relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl mb-8 bg-gradient-to-r from-emerald-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Help us build the future of environmental intelligence and create
              solutions that matter for our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#features"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold shadow-modern hover:shadow-glow-green transition-all duration-300 transform hover:scale-105 border-0"
              >
                Explore Features
              </a>
              <a
                href="mailto:contact@environmentai.com"
                className="border-2 border-green-600 text-green-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

