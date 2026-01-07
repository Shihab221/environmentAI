// Regional Environmental Data Store
// Contains realistic data for different regions worldwide
// Used when APIs are unavailable or for features that need local data

export interface RegionalEnvironmentData {
  region: string
  country: string
  continent: string
  climate: string
  avgTemperature: { summer: number; winter: number }
  avgHumidity: number
  avgRainfall: number // mm per year
  airQualityIndex: number // 1-5 scale
  riskFactors: {
    flood: number
    earthquake: number
    hurricane: number
    wildfire: number
    drought: number
    heatwave: number
  }
  ecosystem: {
    biodiversityIndex: number
    dominantSpecies: string[]
    threatenedSpecies: string[]
    vegetationType: string
    waterBodies: string[]
  }
  urban: {
    population: number
    trafficCongestion: number // 1-10
    publicTransit: number // % usage
    greenSpacePercent: number
    noiseLevel: number // dB average
    citizenSatisfaction: number // %
  }
  culturalContext: {
    primaryLanguages: string[]
    greetingStyle: string
    formalityLevel: string
    businessCulture: string
  }
}

export const regionalData: RegionalEnvironmentData[] = [
  // North America
  {
    region: 'New York',
    country: 'USA',
    continent: 'North America',
    climate: 'Humid subtropical',
    avgTemperature: { summer: 28, winter: 2 },
    avgHumidity: 63,
    avgRainfall: 1268,
    airQualityIndex: 2,
    riskFactors: { flood: 45, earthquake: 15, hurricane: 35, wildfire: 10, drought: 20, heatwave: 40 },
    ecosystem: {
      biodiversityIndex: 0.62,
      dominantSpecies: ['White-tailed deer', 'Eastern gray squirrel', 'American robin', 'Red-tailed hawk'],
      threatenedSpecies: ['Atlantic sturgeon', 'Indiana bat', 'Piping plover'],
      vegetationType: 'Temperate deciduous forest',
      waterBodies: ['Hudson River', 'East River', 'Atlantic Ocean']
    },
    urban: {
      population: 8336817,
      trafficCongestion: 9,
      publicTransit: 56,
      greenSpacePercent: 14,
      noiseLevel: 70,
      citizenSatisfaction: 65
    },
    culturalContext: {
      primaryLanguages: ['English', 'Spanish', 'Chinese'],
      greetingStyle: 'Direct handshake',
      formalityLevel: 'Medium',
      businessCulture: 'Fast-paced, direct communication'
    }
  },
  {
    region: 'Los Angeles',
    country: 'USA',
    continent: 'North America',
    climate: 'Mediterranean',
    avgTemperature: { summer: 29, winter: 14 },
    avgHumidity: 50,
    avgRainfall: 378,
    airQualityIndex: 3,
    riskFactors: { flood: 25, earthquake: 75, hurricane: 5, wildfire: 80, drought: 70, heatwave: 60 },
    ecosystem: {
      biodiversityIndex: 0.58,
      dominantSpecies: ['California scrub jay', 'Western fence lizard', 'Coyote', 'Red-tailed hawk'],
      threatenedSpecies: ['California gnatcatcher', 'Desert tortoise', 'Santa Ana sucker'],
      vegetationType: 'Chaparral and coastal sage scrub',
      waterBodies: ['Pacific Ocean', 'Los Angeles River', 'Santa Monica Bay']
    },
    urban: {
      population: 3898747,
      trafficCongestion: 10,
      publicTransit: 12,
      greenSpacePercent: 11,
      noiseLevel: 68,
      citizenSatisfaction: 58
    },
    culturalContext: {
      primaryLanguages: ['English', 'Spanish'],
      greetingStyle: 'Casual wave or handshake',
      formalityLevel: 'Low',
      businessCulture: 'Creative, networking-focused'
    }
  },
  // Europe
  {
    region: 'London',
    country: 'United Kingdom',
    continent: 'Europe',
    climate: 'Oceanic',
    avgTemperature: { summer: 22, winter: 6 },
    avgHumidity: 79,
    avgRainfall: 602,
    airQualityIndex: 2,
    riskFactors: { flood: 55, earthquake: 5, hurricane: 10, wildfire: 5, drought: 15, heatwave: 25 },
    ecosystem: {
      biodiversityIndex: 0.55,
      dominantSpecies: ['European robin', 'Grey squirrel', 'Red fox', 'Common pigeon'],
      threatenedSpecies: ['European eel', 'Water vole', 'Hedgehog'],
      vegetationType: 'Temperate broadleaf forest',
      waterBodies: ['Thames River', 'Regent Canal', 'Serpentine Lake']
    },
    urban: {
      population: 8982000,
      trafficCongestion: 8,
      publicTransit: 45,
      greenSpacePercent: 33,
      noiseLevel: 65,
      citizenSatisfaction: 68
    },
    culturalContext: {
      primaryLanguages: ['English'],
      greetingStyle: 'Polite handshake',
      formalityLevel: 'Medium-High',
      businessCulture: 'Reserved, punctual, formal meetings'
    }
  },
  {
    region: 'Paris',
    country: 'France',
    continent: 'Europe',
    climate: 'Oceanic',
    avgTemperature: { summer: 25, winter: 5 },
    avgHumidity: 75,
    avgRainfall: 641,
    airQualityIndex: 2,
    riskFactors: { flood: 45, earthquake: 10, hurricane: 5, wildfire: 15, drought: 25, heatwave: 35 },
    ecosystem: {
      biodiversityIndex: 0.52,
      dominantSpecies: ['European starling', 'House sparrow', 'Pigeon', 'Common swift'],
      threatenedSpecies: ['European eel', 'Garden dormouse', 'Common toad'],
      vegetationType: 'Urban parkland with temperate species',
      waterBodies: ['Seine River', 'Canal Saint-Martin', 'Bois de Boulogne lakes']
    },
    urban: {
      population: 2161000,
      trafficCongestion: 7,
      publicTransit: 68,
      greenSpacePercent: 21,
      noiseLevel: 64,
      citizenSatisfaction: 62
    },
    culturalContext: {
      primaryLanguages: ['French'],
      greetingStyle: 'La bise (cheek kisses)',
      formalityLevel: 'High',
      businessCulture: 'Relationship-focused, formal dress'
    }
  },
  {
    region: 'Berlin',
    country: 'Germany',
    continent: 'Europe',
    climate: 'Oceanic',
    avgTemperature: { summer: 24, winter: 1 },
    avgHumidity: 72,
    avgRainfall: 570,
    airQualityIndex: 2,
    riskFactors: { flood: 30, earthquake: 5, hurricane: 5, wildfire: 10, drought: 20, heatwave: 30 },
    ecosystem: {
      biodiversityIndex: 0.58,
      dominantSpecies: ['Wild boar', 'Red fox', 'European rabbit', 'Common buzzard'],
      threatenedSpecies: ['European pond turtle', 'Sand lizard', 'Great bustard'],
      vegetationType: 'Urban forest and parkland',
      waterBodies: ['Spree River', 'Havel River', 'Wannsee Lake']
    },
    urban: {
      population: 3645000,
      trafficCongestion: 5,
      publicTransit: 62,
      greenSpacePercent: 30,
      noiseLevel: 58,
      citizenSatisfaction: 74
    },
    culturalContext: {
      primaryLanguages: ['German'],
      greetingStyle: 'Firm handshake',
      formalityLevel: 'High',
      businessCulture: 'Punctual, efficient, direct'
    }
  },
  // Asia
  {
    region: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    climate: 'Humid subtropical',
    avgTemperature: { summer: 30, winter: 6 },
    avgHumidity: 70,
    avgRainfall: 1530,
    airQualityIndex: 2,
    riskFactors: { flood: 50, earthquake: 90, hurricane: 60, wildfire: 10, drought: 15, heatwave: 45 },
    ecosystem: {
      biodiversityIndex: 0.48,
      dominantSpecies: ['Japanese macaque', 'Tanuki', 'Japanese bush warbler', 'Koi'],
      threatenedSpecies: ['Japanese giant salamander', 'Crested ibis', 'Amami rabbit'],
      vegetationType: 'Urban with temple gardens',
      waterBodies: ['Sumida River', 'Tokyo Bay', 'Tama River']
    },
    urban: {
      population: 13960000,
      trafficCongestion: 6,
      publicTransit: 78,
      greenSpacePercent: 8,
      noiseLevel: 62,
      citizenSatisfaction: 72
    },
    culturalContext: {
      primaryLanguages: ['Japanese'],
      greetingStyle: 'Bow (15-30 degrees)',
      formalityLevel: 'Very High',
      businessCulture: 'Hierarchical, consensus-driven, group harmony'
    }
  },
  {
    region: 'Singapore',
    country: 'Singapore',
    continent: 'Asia',
    climate: 'Tropical rainforest',
    avgTemperature: { summer: 31, winter: 27 },
    avgHumidity: 84,
    avgRainfall: 2340,
    airQualityIndex: 2,
    riskFactors: { flood: 40, earthquake: 5, hurricane: 15, wildfire: 5, drought: 10, heatwave: 30 },
    ecosystem: {
      biodiversityIndex: 0.65,
      dominantSpecies: ['Long-tailed macaque', 'Oriental pied hornbill', 'Monitor lizard', 'Smooth-coated otter'],
      threatenedSpecies: ['Sunda pangolin', 'Oriental small-clawed otter', 'Banded leaf monkey'],
      vegetationType: 'Tropical rainforest and urban gardens',
      waterBodies: ['Marina Bay', 'Singapore River', 'MacRitchie Reservoir']
    },
    urban: {
      population: 5686000,
      trafficCongestion: 4,
      publicTransit: 66,
      greenSpacePercent: 47,
      noiseLevel: 55,
      citizenSatisfaction: 82
    },
    culturalContext: {
      primaryLanguages: ['English', 'Mandarin', 'Malay', 'Tamil'],
      greetingStyle: 'Handshake or slight bow',
      formalityLevel: 'Medium-High',
      businessCulture: 'Efficient, multicultural, professional'
    }
  },
  {
    region: 'Mumbai',
    country: 'India',
    continent: 'Asia',
    climate: 'Tropical wet and dry',
    avgTemperature: { summer: 33, winter: 25 },
    avgHumidity: 75,
    avgRainfall: 2422,
    airQualityIndex: 4,
    riskFactors: { flood: 75, earthquake: 40, hurricane: 35, wildfire: 10, drought: 30, heatwave: 55 },
    ecosystem: {
      biodiversityIndex: 0.55,
      dominantSpecies: ['Rhesus macaque', 'Indian flying fox', 'Black kite', 'House crow'],
      threatenedSpecies: ['Indian pangolin', 'Rusty-spotted cat', 'Indian python'],
      vegetationType: 'Tropical coastal with mangroves',
      waterBodies: ['Arabian Sea', 'Mithi River', 'Powai Lake']
    },
    urban: {
      population: 20411000,
      trafficCongestion: 10,
      publicTransit: 38,
      greenSpacePercent: 6,
      noiseLevel: 85,
      citizenSatisfaction: 52
    },
    culturalContext: {
      primaryLanguages: ['Hindi', 'Marathi', 'English'],
      greetingStyle: 'Namaste with folded hands',
      formalityLevel: 'Medium',
      businessCulture: 'Relationship-oriented, flexible timing'
    }
  },
  {
    region: 'Beijing',
    country: 'China',
    continent: 'Asia',
    climate: 'Humid continental',
    avgTemperature: { summer: 31, winter: -2 },
    avgHumidity: 55,
    avgRainfall: 571,
    airQualityIndex: 4,
    riskFactors: { flood: 35, earthquake: 45, hurricane: 10, wildfire: 15, drought: 40, heatwave: 45 },
    ecosystem: {
      biodiversityIndex: 0.45,
      dominantSpecies: ['Eurasian magpie', 'Chinese pond heron', 'Mandarin duck', 'Beijing swift'],
      threatenedSpecies: ['Giant panda (nearby)', 'Chinese alligator', 'Sichuan taimen'],
      vegetationType: 'Temperate with urban parks',
      waterBodies: ['Kunming Lake', 'Houhai Lake', 'Beijing-Hangzhou Canal']
    },
    urban: {
      population: 21540000,
      trafficCongestion: 8,
      publicTransit: 52,
      greenSpacePercent: 45,
      noiseLevel: 72,
      citizenSatisfaction: 64
    },
    culturalContext: {
      primaryLanguages: ['Mandarin'],
      greetingStyle: 'Handshake or slight nod',
      formalityLevel: 'High',
      businessCulture: 'Guanxi (relationships) important, hierarchical'
    }
  },
  // South America
  {
    region: 'São Paulo',
    country: 'Brazil',
    continent: 'South America',
    climate: 'Humid subtropical',
    avgTemperature: { summer: 28, winter: 17 },
    avgHumidity: 78,
    avgRainfall: 1454,
    airQualityIndex: 3,
    riskFactors: { flood: 60, earthquake: 5, hurricane: 5, wildfire: 25, drought: 35, heatwave: 40 },
    ecosystem: {
      biodiversityIndex: 0.72,
      dominantSpecies: ['Tufted capuchin', 'Rufous-bellied thrush', 'Black vulture', 'Common marmoset'],
      threatenedSpecies: ['Black lion tamarin', 'Maned sloth', 'Brazilian merganser'],
      vegetationType: 'Atlantic Forest fragments',
      waterBodies: ['Tietê River', 'Pinheiros River', 'Guarapiranga Reservoir']
    },
    urban: {
      population: 12325000,
      trafficCongestion: 9,
      publicTransit: 35,
      greenSpacePercent: 12,
      noiseLevel: 78,
      citizenSatisfaction: 55
    },
    culturalContext: {
      primaryLanguages: ['Portuguese'],
      greetingStyle: 'Cheek kisses and embrace',
      formalityLevel: 'Low-Medium',
      businessCulture: 'Relationship-focused, flexible schedules'
    }
  },
  // Africa
  {
    region: 'Cairo',
    country: 'Egypt',
    continent: 'Africa',
    climate: 'Hot desert',
    avgTemperature: { summer: 35, winter: 14 },
    avgHumidity: 50,
    avgRainfall: 25,
    airQualityIndex: 4,
    riskFactors: { flood: 15, earthquake: 35, hurricane: 5, wildfire: 10, drought: 85, heatwave: 80 },
    ecosystem: {
      biodiversityIndex: 0.38,
      dominantSpecies: ['Egyptian mongoose', 'Hoopoe', 'White stork (migratory)', 'Nile tilapia'],
      threatenedSpecies: ['Egyptian vulture', 'Slender-horned gazelle', 'Nile crocodile'],
      vegetationType: 'Nile Valley cultivation and desert',
      waterBodies: ['Nile River', 'Lake Nasser (nearby)']
    },
    urban: {
      population: 20901000,
      trafficCongestion: 9,
      publicTransit: 25,
      greenSpacePercent: 4,
      noiseLevel: 82,
      citizenSatisfaction: 48
    },
    culturalContext: {
      primaryLanguages: ['Arabic'],
      greetingStyle: 'Handshake, same-gender cheek kisses',
      formalityLevel: 'Medium-High',
      businessCulture: 'Hospitality important, relationship-based'
    }
  },
  {
    region: 'Nairobi',
    country: 'Kenya',
    continent: 'Africa',
    climate: 'Subtropical highland',
    avgTemperature: { summer: 25, winter: 18 },
    avgHumidity: 65,
    avgRainfall: 869,
    airQualityIndex: 3,
    riskFactors: { flood: 45, earthquake: 25, hurricane: 5, wildfire: 30, drought: 55, heatwave: 35 },
    ecosystem: {
      biodiversityIndex: 0.85,
      dominantSpecies: ['Marabou stork', 'Olive baboon', 'Sykes monkey', 'Cattle egret'],
      threatenedSpecies: ['African elephant', 'Black rhinoceros', 'Grevy zebra'],
      vegetationType: 'Highland savanna and urban parks',
      waterBodies: ['Nairobi River', 'Athi River', 'Nairobi Dam']
    },
    urban: {
      population: 4735000,
      trafficCongestion: 8,
      publicTransit: 45,
      greenSpacePercent: 18,
      noiseLevel: 72,
      citizenSatisfaction: 58
    },
    culturalContext: {
      primaryLanguages: ['English', 'Swahili'],
      greetingStyle: 'Handshake with eye contact',
      formalityLevel: 'Medium',
      businessCulture: 'Building trust important, flexible timing'
    }
  },
  // Oceania
  {
    region: 'Sydney',
    country: 'Australia',
    continent: 'Oceania',
    climate: 'Humid subtropical',
    avgTemperature: { summer: 26, winter: 13 },
    avgHumidity: 65,
    avgRainfall: 1213,
    airQualityIndex: 1,
    riskFactors: { flood: 40, earthquake: 15, hurricane: 25, wildfire: 70, drought: 55, heatwave: 60 },
    ecosystem: {
      biodiversityIndex: 0.78,
      dominantSpecies: ['Sulphur-crested cockatoo', 'Brushtail possum', 'Australian magpie', 'Rainbow lorikeet'],
      threatenedSpecies: ['Koala', 'Eastern quoll', 'Southern corroboree frog'],
      vegetationType: 'Temperate eucalyptus woodland',
      waterBodies: ['Sydney Harbour', 'Parramatta River', 'Hawkesbury River']
    },
    urban: {
      population: 5312000,
      trafficCongestion: 7,
      publicTransit: 28,
      greenSpacePercent: 46,
      noiseLevel: 62,
      citizenSatisfaction: 76
    },
    culturalContext: {
      primaryLanguages: ['English'],
      greetingStyle: 'Casual handshake',
      formalityLevel: 'Low',
      businessCulture: 'Egalitarian, direct, work-life balance valued'
    }
  },
  // Middle East
  {
    region: 'Dubai',
    country: 'UAE',
    continent: 'Asia',
    climate: 'Hot desert',
    avgTemperature: { summer: 41, winter: 20 },
    avgHumidity: 60,
    avgRainfall: 94,
    airQualityIndex: 3,
    riskFactors: { flood: 20, earthquake: 20, hurricane: 15, wildfire: 5, drought: 90, heatwave: 95 },
    ecosystem: {
      biodiversityIndex: 0.35,
      dominantSpecies: ['Arabian oryx (reintroduced)', 'Sand gazelle', 'Greater flamingo', 'Desert monitor'],
      threatenedSpecies: ['Arabian leopard', 'Hawksbill turtle', 'Socotra cormorant'],
      vegetationType: 'Desert with coastal mangroves',
      waterBodies: ['Persian Gulf', 'Dubai Creek', 'Artificial lakes']
    },
    urban: {
      population: 3331000,
      trafficCongestion: 6,
      publicTransit: 18,
      greenSpacePercent: 8,
      noiseLevel: 65,
      citizenSatisfaction: 78
    },
    culturalContext: {
      primaryLanguages: ['Arabic', 'English'],
      greetingStyle: 'Handshake (same gender), hand on heart',
      formalityLevel: 'High',
      businessCulture: 'Relationship-focused, hospitality important'
    }
  },
  // Generic regions for ecosystems
  {
    region: 'Amazon Rainforest',
    country: 'Brazil',
    continent: 'South America',
    climate: 'Tropical rainforest',
    avgTemperature: { summer: 32, winter: 26 },
    avgHumidity: 88,
    avgRainfall: 2300,
    airQualityIndex: 1,
    riskFactors: { flood: 70, earthquake: 5, hurricane: 5, wildfire: 45, drought: 25, heatwave: 20 },
    ecosystem: {
      biodiversityIndex: 0.98,
      dominantSpecies: ['Jaguar', 'Harpy eagle', 'Poison dart frog', 'Anaconda', 'Scarlet macaw', 'Pink river dolphin'],
      threatenedSpecies: ['Giant otter', 'Golden lion tamarin', 'Amazonian manatee', 'Hyacinth macaw'],
      vegetationType: 'Tropical rainforest with multiple canopy layers',
      waterBodies: ['Amazon River', 'Negro River', 'Tapajós River']
    },
    urban: {
      population: 50000,
      trafficCongestion: 1,
      publicTransit: 5,
      greenSpacePercent: 98,
      noiseLevel: 45,
      citizenSatisfaction: 70
    },
    culturalContext: {
      primaryLanguages: ['Portuguese', 'Indigenous languages'],
      greetingStyle: 'Varies by indigenous group',
      formalityLevel: 'Low',
      businessCulture: 'Community-oriented'
    }
  },
  {
    region: 'Yellowstone',
    country: 'USA',
    continent: 'North America',
    climate: 'Semi-arid to continental',
    avgTemperature: { summer: 22, winter: -8 },
    avgHumidity: 45,
    avgRainfall: 490,
    airQualityIndex: 1,
    riskFactors: { flood: 25, earthquake: 55, hurricane: 5, wildfire: 65, drought: 40, heatwave: 25 },
    ecosystem: {
      biodiversityIndex: 0.92,
      dominantSpecies: ['American bison', 'Gray wolf', 'Grizzly bear', 'Elk', 'Trumpeter swan', 'Cutthroat trout'],
      threatenedSpecies: ['Lynx', 'Wolverine', 'Yellowstone cutthroat trout'],
      vegetationType: 'Subalpine coniferous forest and meadows',
      waterBodies: ['Yellowstone Lake', 'Yellowstone River', 'Geothermal features']
    },
    urban: {
      population: 5000,
      trafficCongestion: 2,
      publicTransit: 5,
      greenSpacePercent: 99,
      noiseLevel: 30,
      citizenSatisfaction: 85
    },
    culturalContext: {
      primaryLanguages: ['English'],
      greetingStyle: 'Friendly wave',
      formalityLevel: 'Very Low',
      businessCulture: 'Conservation-focused'
    }
  }
]

// Find best matching region based on input text
export function findRegion(input: string): RegionalEnvironmentData {
  const lowerInput = input.toLowerCase()
  
  // Direct match
  for (const region of regionalData) {
    if (
      lowerInput.includes(region.region.toLowerCase()) ||
      lowerInput.includes(region.country.toLowerCase())
    ) {
      return region
    }
  }
  
  // Continent match
  const continentKeywords: Record<string, string[]> = {
    'North America': ['usa', 'america', 'canada', 'mexico', 'us', 'united states'],
    'Europe': ['uk', 'england', 'france', 'germany', 'spain', 'italy', 'europe', 'britain'],
    'Asia': ['china', 'japan', 'india', 'korea', 'asia', 'singapore', 'vietnam', 'thailand', 'indonesia'],
    'South America': ['brazil', 'argentina', 'chile', 'peru', 'colombia', 'south america'],
    'Africa': ['egypt', 'kenya', 'nigeria', 'south africa', 'morocco', 'africa'],
    'Oceania': ['australia', 'new zealand', 'pacific', 'oceania']
  }
  
  for (const [continent, keywords] of Object.entries(continentKeywords)) {
    if (keywords.some(k => lowerInput.includes(k))) {
      const regionMatch = regionalData.find(r => r.continent === continent)
      if (regionMatch) return regionMatch
    }
  }
  
  // Climate-based match
  const climateKeywords: Record<string, string[]> = {
    'Tropical rainforest': ['tropical', 'rainforest', 'jungle', 'amazon'],
    'Hot desert': ['desert', 'arid', 'sahara', 'dubai'],
    'Oceanic': ['coastal', 'marine', 'oceanic'],
    'Mediterranean': ['mediterranean', 'california']
  }
  
  for (const [climate, keywords] of Object.entries(climateKeywords)) {
    if (keywords.some(k => lowerInput.includes(k))) {
      const regionMatch = regionalData.find(r => r.climate === climate)
      if (regionMatch) return regionMatch
    }
  }
  
  // Default to New York as most common reference
  return regionalData[0]
}

// Get all regions for a continent
export function getRegionsByContinent(continent: string): RegionalEnvironmentData[] {
  return regionalData.filter(r => r.continent.toLowerCase() === continent.toLowerCase())
}

// Calculate risk score based on region data
export function calculateRegionalRisk(region: RegionalEnvironmentData): {
  overallRisk: number
  riskLevel: string
  primaryRisks: string[]
} {
  const risks = region.riskFactors
  const riskValues = Object.values(risks)
  const overallRisk = Math.round(riskValues.reduce((a, b) => a + b, 0) / riskValues.length)
  
  const riskLevel = overallRisk > 60 ? 'Critical' : 
                    overallRisk > 45 ? 'High' : 
                    overallRisk > 30 ? 'Moderate' : 'Low'
  
  const sortedRisks = Object.entries(risks)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .map(([name]) => name.charAt(0).toUpperCase() + name.slice(1))
  
  return { overallRisk, riskLevel, primaryRisks: sortedRisks }
}

// Generate species data from region
export function getSpeciesData(region: RegionalEnvironmentData): {
  name: string
  status: string
  confidence: number
  count: number
}[] {
  const result = []
  
  for (const species of region.ecosystem.dominantSpecies.slice(0, 4)) {
    result.push({
      name: species,
      status: 'Stable',
      confidence: 0.85 + Math.random() * 0.14,
      count: Math.floor(Math.random() * 500) + 50
    })
  }
  
  for (const species of region.ecosystem.threatenedSpecies.slice(0, 2)) {
    result.push({
      name: species,
      status: 'Threatened',
      confidence: 0.75 + Math.random() * 0.15,
      count: Math.floor(Math.random() * 50) + 5
    })
  }
  
  return result
}


