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
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "Multimodal Machine Learning",
      image: "👩‍🔬"
    },
    {
      name: "Dr. Marcus Rodriguez",
      role: "Head of Environmental Science",
      expertise: "Climate Modeling & Ecology",
      image: "👨‍🌾"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Lead ML Engineer",
      expertise: "Computer Vision & NLP",
      image: "👩‍💻"
    },
    {
      name: "Dr. James Wilson",
      role: "Research Director",
      expertise: "Urban Planning & GIS",
      image: "👨‍🏫"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-amber-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About EnvironmentAI
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Pioneering the future of environmental intelligence through advanced multimodal AI
            </p>
            <p className="text-lg text-green-50 max-w-3xl mx-auto">
              We combine cutting-edge artificial intelligence with deep environmental expertise to create
              solutions that protect our planet and enhance human-environment harmony.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
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
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Technology
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
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
            <Badge variant="secondary" className="p-4 text-center">
              <div className="text-2xl mb-2">🤖</div>
              Multimodal Transformers
            </Badge>
            <Badge variant="secondary" className="p-4 text-center">
              <div className="text-2xl mb-2">🕸️</div>
              Graph Neural Networks
            </Badge>
            <Badge variant="secondary" className="p-4 text-center">
              <div className="text-2xl mb-2">⚡</div>
              Real-time Processing
            </Badge>
            <Badge variant="secondary" className="p-4 text-center">
              <div className="text-2xl mb-2">🌍</div>
              Global Deployment
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Team
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
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
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{member.image}</div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-green-600 mb-2">{member.role}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {member.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Help us build the future of environmental intelligence and create
              solutions that matter for our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#features"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Explore Features
              </a>
              <a
                href="mailto:contact@environmentai.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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

