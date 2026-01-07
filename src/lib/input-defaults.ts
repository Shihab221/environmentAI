// Default values and examples for all feature inputs

export interface InputConfig {
  defaultValue: string
  example: string
  placeholder: string
}

// Feature 1: Multimodal Crisis Predictor & Planner
const feature1Defaults: InputConfig[] = [
  { defaultValue: "New York, USA", example: "e.g. Tokyo, Japan or 40.7128, -74.0060", placeholder: "Enter city name or coordinates" },
  { defaultValue: "cloudy, heavy rain expected", example: "e.g. sunny, 25°C, high humidity", placeholder: "Describe current weather conditions" },
  { defaultValue: "", example: "Optional: Upload satellite image", placeholder: "" },
  { defaultValue: "Reports of flooding in downtown area", example: "e.g. Traffic jam on highway, people evacuating", placeholder: "Enter social media reports or news" },
  { defaultValue: "", example: "Optional: Upload voice emergency report", placeholder: "" },
  { defaultValue: "Air quality: 150 AQI, Water level: 2m above normal", example: "e.g. Temperature: 35°C, PM2.5: 80", placeholder: "Enter sensor readings" },
  { defaultValue: "High traffic towards city center", example: "e.g. People moving to shelters", placeholder: "Describe mobility patterns" },
  { defaultValue: "", example: "Optional: Upload road network data", placeholder: "" },
  { defaultValue: "Rush hour traffic, main roads congested", example: "e.g. Highway closed, alternate routes busy", placeholder: "Describe traffic conditions" },
]

// Feature 2: Multisensory Ecosystem Health Analyzer
const feature2Defaults: InputConfig[] = [
  { defaultValue: "Amazon Rainforest, Brazil", example: "e.g. Yellowstone Park, USA", placeholder: "Enter ecosystem location" },
  { defaultValue: "", example: "Optional: Upload drone/satellite vegetation image", placeholder: "" },
  { defaultValue: "", example: "Optional: Upload bioacoustic recording (bird sounds, etc.)", placeholder: "" },
  { defaultValue: "pH: 6.5, Nitrogen: moderate, Organic matter: high", example: "e.g. Clay soil, low phosphorus", placeholder: "Describe soil conditions" },
  { defaultValue: "Clear water, slight algae presence, pH 7.2", example: "e.g. Turbidity: low, Dissolved oxygen: 8mg/L", placeholder: "Describe water quality" },
  { defaultValue: "Deer, eagles, various songbirds observed", example: "e.g. 15 bird species, 3 mammal species", placeholder: "List observed species" },
  { defaultValue: "Temperature rising 0.5°C per decade", example: "e.g. Rainfall decreased 10% over 5 years", placeholder: "Describe climate trends" },
  { defaultValue: "", example: "Optional: Upload time-lapse ecosystem video", placeholder: "" },
]

// Feature 3: Human Emotion & Environment Resonance Scanner
const feature3Defaults: InputConfig[] = [
  { defaultValue: "", example: "Optional: Upload face video for expression analysis", placeholder: "" },
  { defaultValue: "", example: "Optional: Upload voice recording", placeholder: "" },
  { defaultValue: "Feeling stressed due to work deadlines. The noisy environment makes it harder to concentrate. Taking a walk in the park helped a bit.", example: "e.g. Write how you're feeling today", placeholder: "Enter your journal entry or mood description" },
  { defaultValue: "Heart rate: 75bpm, slightly elevated", example: "e.g. Heart rate: 80bpm, skin conductance: normal", placeholder: "Enter biometric data if available" },
  { defaultValue: "Office environment, moderate noise, artificial lighting", example: "e.g. Traffic noise, construction sounds nearby", placeholder: "Describe ambient sounds around you" },
  { defaultValue: "Bright fluorescent lights, blue-white color", example: "e.g. Warm natural sunlight, dim indoor lighting", placeholder: "Describe lighting conditions" },
  { defaultValue: "New York, USA", example: "e.g. London, UK for weather correlation", placeholder: "Enter your location for weather data" },
]

// Feature 4: AI Creative World Builder
const feature4Defaults: InputConfig[] = [
  { defaultValue: "", example: "Optional: Upload a rough sketch of your world", placeholder: "" },
  { defaultValue: "A mystical floating island kingdom with crystal caves, ancient ruins, and magical forests. The sky has two moons.", example: "e.g. Post-apocalyptic desert with underground cities", placeholder: "Describe your world theme and setting" },
  { defaultValue: "", example: "Optional: Upload mood music for atmosphere", placeholder: "" },
  { defaultValue: "", example: "Optional: Upload reference environment photos", placeholder: "" },
  { defaultValue: "", example: "Optional: Upload historical/fantasy art references", placeholder: "" },
  { defaultValue: "Studio Ghibli meets Lord of the Rings, vibrant colors, detailed architecture", example: "e.g. Cyberpunk, dark fantasy, steampunk", placeholder: "Describe desired art style" },
  { defaultValue: "Mountainous terrain with deep valleys and floating rock formations", example: "e.g. Flat plains with scattered oases", placeholder: "Describe terrain features" },
]

// Feature 5: Cross-Domain Scientific Hypothesis Generator
const feature5Defaults: InputConfig[] = [
  { defaultValue: "Research on how urban green spaces affect air quality and citizen health outcomes. Previous studies show correlation but causation unclear.", example: "e.g. Paste research abstract or describe your study", placeholder: "Enter research context or paste paper abstract" },
  { defaultValue: "", example: "Optional: Upload experimental dataset (CSV)", placeholder: "" },
  { defaultValue: "Variables: tree coverage %, PM2.5 levels, respiratory illness rates, temperature", example: "e.g. List your key variables and relationships", placeholder: "Describe your data relationships" },
  { defaultValue: "", example: "Optional: Upload simulation outputs", placeholder: "" },
  { defaultValue: "", example: "Optional: Upload research diagrams", placeholder: "" },
  { defaultValue: "", example: "Optional: Ask questions via voice", placeholder: "" },
  { defaultValue: "Based on existing literature: green spaces reduce PM2.5 by 10-20%", example: "e.g. Previous model predicted X correlation", placeholder: "Enter prior findings or hypotheses" },
]

// Feature 6: Global Culture & Language Fusion Translator
const feature6Defaults: InputConfig[] = [
  { defaultValue: "", example: "Optional: Upload speech audio for translation", placeholder: "" },
  { defaultValue: "Hello! I hope you're having a wonderful day. I'd like to schedule a meeting to discuss our partnership opportunities.", example: "e.g. Enter text you want to translate", placeholder: "Enter text to translate" },
  { defaultValue: "", example: "Optional: Upload gesture video for analysis", placeholder: "" },
  { defaultValue: "", example: "Optional: Upload facial expression video", placeholder: "" },
  { defaultValue: "Translating for Japanese business context, formal setting", example: "e.g. Casual conversation with friends in Spain", placeholder: "Describe the cultural context" },
  { defaultValue: "", example: "Optional: Upload background audio for context", placeholder: "" },
  { defaultValue: "New York to Tokyo business communication", example: "e.g. USA to France, casual tourism", placeholder: "Describe geographic/cultural journey" },
]

// Feature 7: Urban Dynamics Digital Twin
const feature7Defaults: InputConfig[] = [
  { defaultValue: "", example: "Optional: Upload traffic camera footage", placeholder: "" },
  { defaultValue: "Manhattan, New York City", example: "e.g. Downtown Tokyo, Central London", placeholder: "Enter city or district name" },
  { defaultValue: "Morning rush hour, 8-9 AM, weekday, major intersections congested", example: "e.g. 50,000 vehicles/hour, average speed 15km/h", placeholder: "Describe traffic conditions" },
  { defaultValue: "PM2.5: 45, AQI: 120, slight smog visible", example: "e.g. Good air quality, AQI: 50", placeholder: "Enter air quality readings" },
  { defaultValue: "65 dB average, construction noise on 5th avenue", example: "e.g. 70 dB, heavy traffic noise", placeholder: "Describe noise levels" },
  { defaultValue: "Subway running normally, buses delayed 10 minutes", example: "e.g. Metro: 5 min intervals, buses: 15 min intervals", placeholder: "Describe public transit status" },
  { defaultValue: "Citizens complaining about traffic and air quality on social media", example: "e.g. Positive feedback about new bike lanes", placeholder: "Enter citizen feedback summary" },
  { defaultValue: "Last major event: marathon last weekend caused road closures", example: "e.g. Festival caused 30% traffic increase", placeholder: "Describe recent events affecting city" },
]

// Feature 8: Bio-Synthetic Creativity Lab
const feature8Defaults: InputConfig[] = [
  { defaultValue: "MKWVTFISLLFLFSSAYSRGVFRRDAHKSEVAHR", example: "e.g. Paste protein sequence in FASTA format", placeholder: "Enter protein sequence" },
  { defaultValue: "Small molecule for binding to carbon dioxide, water-soluble, non-toxic", example: "e.g. Enzyme for plastic degradation", placeholder: "Describe molecular constraints" },
  { defaultValue: "Stable at pH 7-9, temperature resistant up to 60°C", example: "e.g. Must work in marine environment", placeholder: "Enter environmental constraints" },
  { defaultValue: "Design an enzyme that can break down microplastics in ocean water", example: "e.g. Create a bio-luminescent protein", placeholder: "Enter your creative prompt for bio-design" },
  { defaultValue: "", example: "Optional: Upload audio motif for bio-art", placeholder: "" },
  { defaultValue: "Target properties: high catalytic activity, long half-life, easy to produce", example: "e.g. Binding affinity > 10nM, solubility > 1mg/mL", placeholder: "Enter desired chemical properties" },
]

// Feature 9: Adaptive Education & Skill Synthesizer
const feature9Defaults: InputConfig[] = [
  { defaultValue: "", example: "Optional: Upload student video for engagement analysis", placeholder: "" },
  { defaultValue: "", example: "Optional: Upload student speech responses", placeholder: "" },
  { defaultValue: "Math: 75%, Science: 82%, English: 68%, History: 90%", example: "e.g. List recent test scores or grades", placeholder: "Enter test scores or assessment results" },
  { defaultValue: "Good focus in morning, attention drops after lunch, prefers visual learning", example: "e.g. Eye tracking shows high engagement with videos", placeholder: "Describe engagement patterns" },
  { defaultValue: "High school level, preparing for college entrance exams, focus on STEM", example: "e.g. Grade 10, AP courses in Physics and Math", placeholder: "Describe curriculum and learning goals" },
  { defaultValue: "", example: "Optional: Upload code submissions for analysis", placeholder: "" },
  { defaultValue: "Good at problem-solving, needs work on essay writing, collaborative learner", example: "e.g. Excellent in group work, struggles with timed tests", placeholder: "Enter peer feedback or observations" },
]

// Feature 10: Quantum-Inspired Pattern Explorer
const feature10Defaults: InputConfig[] = [
  { defaultValue: "Temperature data: [23.5, 24.1, 23.8, 25.2, 26.0, 24.5]\nHumidity data: [65, 68, 70, 72, 71, 69]", example: "e.g. Paste numerical data arrays", placeholder: "Enter numerical dataset" },
  { defaultValue: "Monthly readings over 2 years: increasing trend with seasonal variations", example: "e.g. Stock prices, sensor readings over time", placeholder: "Describe time-series pattern" },
  { defaultValue: "Nodes: [City A, City B, City C], Edges: [A-B: strong, B-C: weak, A-C: moderate]", example: "e.g. Social network, transportation links", placeholder: "Describe graph/network structure" },
  { defaultValue: "", example: "Optional: Upload images for pattern analysis", placeholder: "" },
  { defaultValue: "Research papers about climate change patterns and predictions", example: "e.g. News articles, research documents", placeholder: "Enter text corpus for analysis" },
  { defaultValue: "", example: "Optional: Upload waveform data (audio, signals)", placeholder: "" },
  { defaultValue: "Looking for anomalies in sensor data, predict future trends, find hidden correlations", example: "e.g. Cluster similar items, detect outliers", placeholder: "Describe your analysis goals" },
]

// Export all defaults by feature ID
export const featureDefaults: Record<number, InputConfig[]> = {
  1: feature1Defaults,
  2: feature2Defaults,
  3: feature3Defaults,
  4: feature4Defaults,
  5: feature5Defaults,
  6: feature6Defaults,
  7: feature7Defaults,
  8: feature8Defaults,
  9: feature9Defaults,
  10: feature10Defaults,
}

// Get default value for a specific input
export function getInputDefault(featureId: number, inputIndex: number): InputConfig {
  const defaults = featureDefaults[featureId] || []
  return defaults[inputIndex] || {
    defaultValue: "",
    example: "Enter value",
    placeholder: "Enter value..."
  }
}



