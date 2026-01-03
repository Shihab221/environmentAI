"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Download, Play, FileText, Image, Music, Video, Cloud, Wind, Droplets, Thermometer, AlertTriangle, CheckCircle } from "lucide-react"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'
import { downloadFile, createMockAudioBlob, createMockVideoBlob } from "@/lib/utils"
import { ResourceTableEntry, SpeciesEntry, TimelineEntry, ChartData } from "@/lib/types"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

interface FeatureOutputProps {
  featureId: number
  data: any
  isLoading?: boolean
}

const FeatureOutput: React.FC<FeatureOutputProps> = ({ featureId, data, isLoading = false }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  useEffect(() => {
    // Create mock audio/video URLs
    if (data?.calmingAudioUrl) {
      const audioBlob = createMockAudioBlob()
      setAudioUrl(URL.createObjectURL(audioBlob))
    }
    if (data?.spreadSimulationVideo) {
      const videoBlob = createMockVideoBlob()
      setVideoUrl(URL.createObjectURL(videoBlob))
    }

    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl)
      if (videoUrl) URL.revokeObjectURL(videoUrl)
    }
  }, [data, audioUrl, videoUrl])

  const renderResourceTable = (tableData: ResourceTableEntry[]) => (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-700">
            <th className="text-left py-2">Resource</th>
            <th className="text-left py-2">Priority</th>
            <th className="text-left py-2">Quantity</th>
            <th className="text-left py-2">Location</th>
            <th className="text-left py-2">ETA</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-2">{item.resource}</td>
              <td className="py-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  item.priority === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                  item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}>
                  {item.priority}
                </span>
              </td>
              <td className="py-2">{item.quantity}</td>
              <td className="py-2">{item.location}</td>
              <td className="py-2">{item.eta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderSpeciesList = (speciesData: SpeciesEntry[]) => (
    <div className="space-y-3">
      {speciesData.map((species, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <div>
            <h4 className="font-medium">{species.name}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Status: {species.status}</p>
          </div>
          <div className="text-right">
            <div className="font-semibold">{species.count}</div>
            <div className="text-sm text-slate-500">{species.confidence * 100}% confidence</div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderTimeline = (timelineData: TimelineEntry[]) => (
    <div className="space-y-4">
      {timelineData.map((event, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className={`w-3 h-3 rounded-full mt-1 ${
            event.impact === 'Positive' ? 'bg-green-500' :
            event.impact === 'Negative' ? 'bg-red-500' : 'bg-yellow-500'
          }`} />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{event.event}</h4>
              <span className="text-sm text-slate-500">{event.date}</span>
            </div>
            <div className="mt-1">
              <div className={`inline-block px-2 py-1 rounded text-xs ${
                event.impact === 'Positive' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                event.impact === 'Negative' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {event.impact} (Severity: {event.severity}/10)
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderChart = (chartData: ChartData, type: 'line' | 'bar' = 'line') => {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    }

    return type === 'line' ?
      <Line data={chartData} options={options} /> :
      <Bar data={chartData} options={options} />
  }

  const generatePDF = () => {
    // Mock PDF generation using jsPDF
    const { jsPDF } = require('jspdf')
    const doc = new jsPDF()

    doc.setFontSize(20)
    doc.text('EnvironmentAI Analysis Report', 20, 30)

    doc.setFontSize(12)
    doc.text(`Feature ID: ${featureId}`, 20, 50)
    doc.text(`Generated: ${new Date().toLocaleString()}`, 20, 60)

    // Add some mock content
    doc.text('Analysis Results:', 20, 80)
    doc.text(JSON.stringify(data, null, 2).substring(0, 500) + '...', 20, 90)

    downloadFile(doc.output('blob'), `environmentai-report-${featureId}.pdf`)
  }

  const downloadCSV = (data: any, filename: string) => {
    const csvContent = typeof data === 'string' ? data : JSON.stringify(data, null, 2)
    downloadFile(new Blob([csvContent], { type: 'text/csv' }), filename)
  }

  if (isLoading) {
    return (
      <Card className="w-full bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm border-0 shadow-modern">
        <CardContent className="flex items-center justify-center py-16">
          <div className="text-center max-w-md">
            <div className="relative w-16 h-16 mx-auto mb-6">
              <div className="w-16 h-16 border-4 border-green-200 dark:border-green-900 rounded-full"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute top-2 left-2 w-12 h-12 border-4 border-emerald-400 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <p className="text-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
              AI Analysis in Progress
            </p>
            <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <p className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Querying Hugging Face AI models...
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                Fetching regional environmental data...
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                Generating personalized insights...
              </p>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              This may take 3-5 seconds for comprehensive analysis
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      {data && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent mb-2">
            AI Analysis Results
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-3">
            Powered by Hugging Face AI + Regional Environmental Data
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium">
              🤗 Hugging Face
            </span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
              🌍 Regional Data
            </span>
            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-medium">
              ☁️ Weather API
            </span>
            {data.cityName || data.targetRegion ? (
              <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded text-xs font-medium">
                📍 {data.cityName || data.targetRegion}
              </span>
            ) : null}
          </div>
        </motion.div>
      )}

      {/* Input Completeness Warning Banner */}
      {data && data._inputWarning && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700 rounded-xl"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                Partial Input Detected
              </h3>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                {data._inputWarning}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 bg-amber-200 dark:bg-amber-800 rounded-full h-2">
                  <div 
                    className="bg-amber-500 h-2 rounded-full transition-all" 
                    style={{ width: `${data._inputPercentage || 0}%` }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                  {data._inputPercentage || 0}% complete
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Input Complete Success Banner */}
      {data && !data._inputWarning && data._inputPercentage >= 80 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-800 dark:text-green-200">
                Complete Analysis Generated
              </h3>
              <p className="text-sm text-green-700 dark:text-green-300">
                All required inputs were provided. Results are based on comprehensive data analysis.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Feature-specific outputs */}
      {featureId === 1 && data && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Risk Heatmap */}
          {data.riskHeatmapUrl && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Image className="w-5 h-5" aria-hidden="true" />
                  <span>Disaster Risk Heatmap</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">Risk Heatmap Visualization</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full"
                  onClick={() => downloadFile(new Blob(['mock heatmap data']), 'risk-heatmap.png')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Heatmap
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Resource Allocation Table */}
          {data.resourceTable && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Resource Allocation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {renderResourceTable(data.resourceTable)}
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full"
                  onClick={() => downloadCSV(data.resourceTable, 'resource-allocation.csv')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CSV
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Alert Message */}
          {data.alertMessage && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400">Emergency Alert</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">{data.alertMessage}</p>
              </CardContent>
            </Card>
          )}

          {/* Real-time Weather Data */}
          {data.weatherData && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cloud className="w-5 h-5" />
                  <span>Live Weather Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-red-500" />
                      <span>Temperature</span>
                    </div>
                    <span className="font-semibold">{data.weatherData.temperature}°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <span>Humidity</span>
                    </div>
                    <span className="font-semibold">{data.weatherData.humidity}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-gray-500" />
                      <span>Wind Speed</span>
                    </div>
                    <span className="font-semibold">{data.weatherData.windSpeed} m/s</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {data.weatherData.city}, {data.weatherData.country} - {data.weatherData.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Air Quality Data */}
          {data.airQualityData && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wind className="w-5 h-5" />
                  <span>Air Quality Index</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className={`text-4xl font-bold ${
                    data.airQualityData.aqi <= 2 ? 'text-green-600' :
                    data.airQualityData.aqi <= 3 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {data.airQualityData.qualityLevel}
                  </div>
                  <p className="text-sm text-slate-500">AQI Level: {data.airQualityData.aqi}/5</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span>PM2.5</span>
                    <span>{data.airQualityData.components.pm2_5?.toFixed(1)} µg/m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PM10</span>
                    <span>{data.airQualityData.components.pm10?.toFixed(1)} µg/m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span>O3</span>
                    <span>{data.airQualityData.components.o3?.toFixed(1)} µg/m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span>NO2</span>
                    <span>{data.airQualityData.components.no2?.toFixed(1)} µg/m³</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Risk Analysis */}
          {data.riskAnalysis && (
            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Flood Risk</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${data.riskAnalysis.floodRisk}%` }}></div>
                      </div>
                      <span className="text-sm font-medium">{data.riskAnalysis.floodRisk}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Storm Risk</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${data.riskAnalysis.stormRisk}%` }}></div>
                      </div>
                      <span className="text-sm font-medium">{data.riskAnalysis.stormRisk}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Heatwave Risk</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${data.riskAnalysis.heatwaveRisk}%` }}></div>
                      </div>
                      <span className="text-sm font-medium">{data.riskAnalysis.heatwaveRisk}%</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className={`text-center font-semibold ${
                      data.riskAnalysis.riskLevel === 'Critical' ? 'text-red-600' :
                      data.riskAnalysis.riskLevel === 'High' ? 'text-orange-600' :
                      data.riskAnalysis.riskLevel === 'Moderate' ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      Overall: {data.riskAnalysis.riskLevel} ({data.riskAnalysis.overallRisk}%)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Situation Report PDF */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Situation Report</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={generatePDF} className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Generate PDF Report
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {featureId === 2 && data && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Ecosystem Resilience Score */}
          {data.resilienceScore && (
            <Card>
              <CardHeader>
                <CardTitle>Ecosystem Resilience Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-600 mb-2">{data.resilienceScore}%</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    {data.resilienceScore > 75 ? 'Healthy ecosystem' :
                     data.resilienceScore > 50 ? 'Moderate health' : 'Needs attention'}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Species List */}
          {data.speciesList && (
            <Card>
              <CardHeader>
                <CardTitle>Detected Species</CardTitle>
              </CardHeader>
              <CardContent>
                {renderSpeciesList(data.speciesList)}
              </CardContent>
            </Card>
          )}

          {/* Degradation Timeline */}
          {data.degradationTimeline && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Environmental Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                {renderTimeline(data.degradationTimeline)}
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {featureId === 3 && data && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Emotion Trajectory */}
          {data.emotionTrajectory && (
            <Card>
              <CardHeader>
                <CardTitle>Emotion Trajectory</CardTitle>
              </CardHeader>
              <CardContent>
                {renderChart(data.emotionTrajectory, 'line')}
              </CardContent>
            </Card>
          )}

          {/* Resilience Score */}
          {data.resilienceScore && (
            <Card>
              <CardHeader>
                <CardTitle>Daily Resilience Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-2">{data.resilienceScore}%</div>
                  <p className="text-slate-600 dark:text-slate-400">Mental resilience indicator</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Calming Audio */}
          {audioUrl && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Music className="w-5 h-5" />
                  <span>Generated Calming Soundscape</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <audio controls className="w-full">
                  <source src={audioUrl} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full"
                  onClick={() => downloadFile(createMockAudioBlob(), 'calming-soundscape.wav')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Audio
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {featureId === 4 && data && (
        <div className="grid gap-6">
          {/* 3D World Visualization */}
          <Card>
            <CardHeader>
              <CardTitle>Generated 3D World</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-blue-400 via-green-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">3D World Visualization</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Interactive 3D environment combining your inputs
              </p>
            </CardContent>
          </Card>

          {/* NPC Characters */}
          {data.npcCharacters && (
            <Card>
              <CardHeader>
                <CardTitle>NPC Characters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {data.npcCharacters.map((npc: any, index: number) => (
                    <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold">{npc.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Role: {npc.role}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Behavior: {npc.behavior}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Soundtrack */}
          {data.soundtrackUrl && (
            <Card>
              <CardHeader>
                <CardTitle>Ambient Soundtrack</CardTitle>
              </CardHeader>
              <CardContent>
                <audio controls className="w-full">
                  <source src="/placeholders/soundtrack.mp3" type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {featureId === 5 && data && (
        <div className="grid gap-6">
          {/* Hypotheses */}
          {data.hypotheses && (
            <Card>
              <CardHeader>
                <CardTitle>Generated Hypotheses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.hypotheses.map((hypothesis: any, index: number) => (
                    <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Hypothesis #{hypothesis.rank}</span>
                        <span className="text-sm text-green-600">{hypothesis.confidence}% confidence</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">{hypothesis.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Code Snippets */}
          {data.codeSnippets && (
            <Card>
              <CardHeader>
                <CardTitle>Generated Code</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.codeSnippets.map((snippet: any, index: number) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-2">{snippet.language.toUpperCase()} Code</h4>
                      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{snippet.code}</code>
                      </pre>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => downloadFile(new Blob([snippet.code]), `code-snippet-${index + 1}.${snippet.language}`)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {featureId === 6 && data && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Translated Text */}
          {data.translatedText && (
            <Card>
              <CardHeader>
                <CardTitle>Translated Text</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">{data.translatedText}</p>
                <div className="mt-4 text-sm text-green-600">
                  Confidence: {data.confidenceScore}%
                </div>
              </CardContent>
            </Card>
          )}

          {/* Gesture Subtitles */}
          {data.gestureSubtitles && (
            <Card>
              <CardHeader>
                <CardTitle>Gesture-Aligned Subtitles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {data.gestureSubtitles.map((subtitle: any, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-slate-50 dark:bg-slate-800 rounded">
                      <span className="text-sm font-mono">{subtitle.time}</span>
                      <span className="text-sm">{subtitle.text}</span>
                      <span className="text-xs text-blue-600">({subtitle.gesture})</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Cultural Notes */}
          {data.culturalNotes && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Cultural Context Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">{data.culturalNotes}</p>
              </CardContent>
            </Card>
          )}

          {/* Etiquette Alerts */}
          {data.etiquetteAlerts && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-amber-600">Etiquette & Warning Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {data.etiquetteAlerts.map((alert: string, index: number) => (
                    <div key={index} className="flex items-start space-x-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                      <span className="text-amber-500 mt-0.5">⚠️</span>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{alert}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Bias Assessment */}
          {data.biasAssessment && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Bias & Fairness Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">{data.biasAssessment}</p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {featureId === 7 && data && (
        <div className="grid gap-6">
          {/* Traffic Prediction Chart */}
          {data.trafficPrediction && (
            <Card>
              <CardHeader>
                <CardTitle>Traffic Congestion Prediction</CardTitle>
              </CardHeader>
              <CardContent>
                {renderChart(data.trafficPrediction, 'line')}
              </CardContent>
            </Card>
          )}

          {/* Urban Stress Index */}
          {data.urbanStressIndex && (
            <Card>
              <CardHeader>
                <CardTitle>Urban Stress Index</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-6xl font-bold text-red-600 mb-2">{data.urbanStressIndex}/10</div>
                  <p className="text-slate-600 dark:text-slate-400">Current urban stress level</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Policy Scenarios */}
          {data.policyScenarios && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Policy Impact Scenarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {data.policyScenarios.map((scenario: any, index: number) => (
                    <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">{scenario.name}</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Traffic:</span>
                          <span className={scenario.impact.traffic > 0 ? 'text-red-600' : 'text-green-600'}>
                            {scenario.impact.traffic > 0 ? '+' : ''}{scenario.impact.traffic}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Air Quality:</span>
                          <span className={scenario.impact.airQuality > 0 ? 'text-green-600' : 'text-red-600'}>
                            {scenario.impact.airQuality > 0 ? '+' : ''}{scenario.impact.airQuality}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Noise:</span>
                          <span className={scenario.impact.noise > 0 ? 'text-red-600' : 'text-green-600'}>
                            {scenario.impact.noise > 0 ? '+' : ''}{scenario.impact.noise}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Satisfaction:</span>
                          <span className={scenario.impact.satisfaction > 0 ? 'text-green-600' : 'text-red-600'}>
                            {scenario.impact.satisfaction > 0 ? '+' : ''}{scenario.impact.satisfaction}%
                          </span>
                        </div>
                        <div className="flex justify-between font-medium mt-2 pt-2 border-t">
                          <span>Cost:</span>
                          <span>{scenario.cost}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Citizen Satisfaction */}
          {data.citizenSatisfaction && (
            <Card>
              <CardHeader>
                <CardTitle>Citizen Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-2">{data.citizenSatisfaction}%</div>
                  <p className="text-slate-600 dark:text-slate-400">Overall citizen satisfaction score</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {featureId === 8 && data && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Protein Sequence */}
          {data.proteinSequence && (
            <Card>
              <CardHeader>
                <CardTitle>New Protein Candidate</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                  {data.proteinSequence}
                </pre>
              </CardContent>
            </Card>
          )}

          {/* Property Predictions */}
          {data.propertyPredictions && (
            <Card>
              <CardHeader>
                <CardTitle>Property Predictions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Stability:</span>
                    <span className="font-semibold text-green-600">
                      {(data.propertyPredictions.stability * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Binding Affinity:</span>
                    <span className="font-semibold text-blue-600">
                      {(data.propertyPredictions.bindingAffinity * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Toxicity Risk:</span>
                    <span className="font-semibold text-red-600">
                      {(data.propertyPredictions.toxicity * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Synthesis Pathway */}
          {data.synthesisPathway && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Suggested Synthesis Pathway</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2">
                  {data.synthesisPathway.map((step: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

          {/* Ethical Report */}
          {data.ethicalReport && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Ethical Impact Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">{data.ethicalReport}</p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {featureId === 9 && data && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Engagement Chart */}
          {data.engagementChart && (
            <Card>
              <CardHeader>
                <CardTitle>Engagement Trend</CardTitle>
              </CardHeader>
              <CardContent>
                {renderChart(data.engagementChart, 'line')}
              </CardContent>
            </Card>
          )}

          {/* Skill Predictions */}
          {data.skillPredictions && (
            <Card>
              <CardHeader>
                <CardTitle>Skill Mastery Predictions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.skillPredictions.map((skill: any, index: number) => (
                    <div key={index} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{skill.skill}</span>
                        <span className="text-sm text-green-600">
                          {(skill.mastery * 100).toFixed(0)}% mastery
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Expected timeline: {skill.timeline}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Concept Dependency Graph */}
          {data.skillDependencyGraph && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Skill Dependency Graph</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-center text-slate-600 dark:text-slate-400 mb-4">
                    Interactive skill dependency visualization
                  </p>
                  <div className="flex justify-center space-x-4">
                    {data.skillDependencyGraph.nodes.slice(0, 3).map((node: any, index: number) => (
                      <div key={index} className="text-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          node.mastery > 0.7 ? 'bg-green-500' : node.mastery > 0.5 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}>
                          {(node.mastery * 100).toFixed(0)}%
                        </div>
                        <p className="text-xs mt-1">{node.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Assessment Report */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Assessment Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Button onClick={() => downloadFile(new Blob(['Mock study plan PDF']), 'study-plan.pdf')} className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Study Plan
                </Button>
                <Button onClick={() => downloadFile(new Blob(['Mock assessment PDF']), 'assessment.pdf')} className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Assessment Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {featureId === 10 && data && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Anomaly Timeline */}
          {data.anomalyTimeline && (
            <Card>
              <CardHeader>
                <CardTitle>Anomaly Detection Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                {renderChart(data.anomalyTimeline, 'line')}
              </CardContent>
            </Card>
          )}

          {/* Predictive Trends */}
          {data.predictiveTrends && (
            <Card>
              <CardHeader>
                <CardTitle>Predictive Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.predictiveTrends.map((trend: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <span className="font-semibold">{trend.variable}</span>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Trend: {trend.trend}
                        </p>
                      </div>
                      <span className="text-sm text-green-600 font-medium">
                        {(trend.confidence * 100).toFixed(0)}% confidence
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Embeddings Table */}
          {data.embeddings && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Low-dimensional Embeddings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="text-left py-2">Sample</th>
                        <th className="text-left py-2">Dimension 1</th>
                        <th className="text-left py-2">Dimension 2</th>
                        <th className="text-left py-2">Dimension 3</th>
                        <th className="text-left py-2">Dimension 4</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.embeddings.map((embedding: number[], index: number) => (
                        <tr key={index} className="border-b border-slate-100 dark:border-slate-800">
                          <td className="py-2 font-mono">Sample {index + 1}</td>
                          {embedding.map((value, dimIndex) => (
                            <td key={dimIndex} className="py-2 font-mono text-xs">
                              {value.toFixed(3)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Benchmark Comparison */}
          {data.benchmarkScores && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Benchmark Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.benchmarkScores.map((benchmark: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <span className="font-semibold">{benchmark.method}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${benchmark.score * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">
                          {(benchmark.score * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Reconstruction Accuracy */}
          {data.reconstructionAccuracy && (
            <Card>
              <CardHeader>
                <CardTitle>Reconstruction Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-6xl font-bold text-purple-600 mb-2">
                    {(data.reconstructionAccuracy * 100).toFixed(1)}%
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Data reconstruction fidelity
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* No results state */}
      {!data && !isLoading && (
        <Card className="w-full bg-card-gradient dark:bg-card-gradient-dark backdrop-blur-sm border-0 shadow-modern">
          <CardContent className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                Ready for AI Analysis
              </h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-4">
                Default values are pre-filled. Click &quot;Run AI Analysis&quot; to generate region-specific insights, or modify the inputs first.
              </p>
              <div className="flex items-center justify-center gap-2 flex-wrap text-xs">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded font-medium">🤗 Hugging Face</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-medium">🌍 15+ Regions</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded font-medium">☁️ Weather API</span>
                <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded font-medium">📊 Real Data</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export { FeatureOutput }

