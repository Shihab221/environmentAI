// Weather and Environmental Data Service using OpenWeather API

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY || '3d8203bfea90ded42fa4299baa2f437f'
const OPENWEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5'

export interface WeatherData {
  temperature: number
  humidity: number
  pressure: number
  windSpeed: number
  description: string
  icon: string
  city: string
  country: string
  feelsLike: number
  visibility: number
  clouds: number
}

export interface AirQualityData {
  aqi: number // 1-5 scale
  components: {
    co: number
    no: number
    no2: number
    o3: number
    so2: number
    pm2_5: number
    pm10: number
    nh3: number
  }
  qualityLevel: string
}

export interface ForecastData {
  date: string
  temperature: number
  humidity: number
  description: string
  precipitation: number
}

// Get current weather by city name or coordinates
export async function getCurrentWeather(location: string): Promise<WeatherData | null> {
  try {
    // Try to parse as coordinates
    const coordMatch = location.match(/^(-?\d+\.?\d*),\s*(-?\d+\.?\d*)$/)
    let url: string
    
    if (coordMatch) {
      const [, lat, lon] = coordMatch
      url = `${OPENWEATHER_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`
    } else {
      url = `${OPENWEATHER_BASE_URL}/weather?q=${encodeURIComponent(location)}&appid=${OPENWEATHER_API_KEY}&units=metric`
    }
    
    const response = await fetch(url)
    
    if (!response.ok) {
      console.error('Weather API Error:', response.status)
      return null
    }
    
    const data = await response.json()
    
    return {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      city: data.name,
      country: data.sys.country,
      feelsLike: data.main.feels_like,
      visibility: data.visibility / 1000, // Convert to km
      clouds: data.clouds.all
    }
  } catch (error) {
    console.error('Weather fetch error:', error)
    return null
  }
}

// Get air quality data
export async function getAirQuality(lat: number, lon: number): Promise<AirQualityData | null> {
  try {
    const url = `${OPENWEATHER_BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`
    const response = await fetch(url)
    
    if (!response.ok) {
      console.error('Air Quality API Error:', response.status)
      return null
    }
    
    const data = await response.json()
    const aqData = data.list[0]
    
    const qualityLevels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor']
    
    return {
      aqi: aqData.main.aqi,
      components: aqData.components,
      qualityLevel: qualityLevels[aqData.main.aqi - 1] || 'Unknown'
    }
  } catch (error) {
    console.error('Air Quality fetch error:', error)
    return null
  }
}

// Get 5-day forecast
export async function getForecast(location: string): Promise<ForecastData[]> {
  try {
    const url = `${OPENWEATHER_BASE_URL}/forecast?q=${encodeURIComponent(location)}&appid=${OPENWEATHER_API_KEY}&units=metric`
    const response = await fetch(url)
    
    if (!response.ok) {
      console.error('Forecast API Error:', response.status)
      return []
    }
    
    const data = await response.json()
    
    // Get daily forecasts (every 8th item = 24 hours)
    const dailyForecasts: ForecastData[] = []
    for (let i = 0; i < data.list.length; i += 8) {
      const item = data.list[i]
      dailyForecasts.push({
        date: item.dt_txt.split(' ')[0],
        temperature: item.main.temp,
        humidity: item.main.humidity,
        description: item.weather[0].description,
        precipitation: item.pop * 100 // Probability of precipitation as percentage
      })
    }
    
    return dailyForecasts
  } catch (error) {
    console.error('Forecast fetch error:', error)
    return []
  }
}

// Get geocoding (city to coordinates)
export async function geocode(location: string): Promise<{ lat: number; lon: number } | null> {
  try {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location)}&limit=1&appid=${OPENWEATHER_API_KEY}`
    const response = await fetch(url)
    
    if (!response.ok) {
      return null
    }
    
    const data = await response.json()
    
    if (data.length === 0) {
      return null
    }
    
    return {
      lat: data[0].lat,
      lon: data[0].lon
    }
  } catch (error) {
    console.error('Geocoding error:', error)
    return null
  }
}

// Calculate disaster risk based on weather conditions
export function calculateDisasterRisk(weather: WeatherData): {
  floodRisk: number
  stormRisk: number
  heatwaveRisk: number
  overallRisk: number
  riskLevel: string
} {
  let floodRisk = 0
  let stormRisk = 0
  let heatwaveRisk = 0
  
  // Flood risk based on humidity and precipitation indicators
  if (weather.humidity > 90) floodRisk = 80
  else if (weather.humidity > 80) floodRisk = 60
  else if (weather.humidity > 70) floodRisk = 40
  else floodRisk = 20
  
  // Storm risk based on wind and pressure
  if (weather.windSpeed > 20) stormRisk = 90
  else if (weather.windSpeed > 15) stormRisk = 70
  else if (weather.windSpeed > 10) stormRisk = 50
  else stormRisk = 20
  
  if (weather.pressure < 1000) stormRisk = Math.min(100, stormRisk + 20)
  
  // Heatwave risk
  if (weather.temperature > 40) heatwaveRisk = 95
  else if (weather.temperature > 35) heatwaveRisk = 70
  else if (weather.temperature > 30) heatwaveRisk = 40
  else heatwaveRisk = 10
  
  const overallRisk = Math.round((floodRisk + stormRisk + heatwaveRisk) / 3)
  
  let riskLevel = 'Low'
  if (overallRisk > 70) riskLevel = 'Critical'
  else if (overallRisk > 50) riskLevel = 'High'
  else if (overallRisk > 30) riskLevel = 'Moderate'
  
  return { floodRisk, stormRisk, heatwaveRisk, overallRisk, riskLevel }
}

