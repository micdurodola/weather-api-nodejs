const express = require("express")
const axios = require("axios")
const dotenv = require("dotenv")

dotenv.config() // Load environment variables from .env

const app = express()
const PORT = process.env.PORT || 3000

// Base URL and API Key for the weather API
const WEATHER_API_BASE = "https://api.openweathermap.org/data/2.5"
const API_KEY = process.env.WEATHER_API_KEY

// Helper function to fetch weather data
const getWeather = async (city) => {
  const url = `${WEATHER_API_BASE}/weather?q=${city}&units=metric&appid=${API_KEY}`
  const response = await axios.get(url)
  return response.data
}

// Route to display weather
app.get("/weather/:city", async (req, res) => {
  const city = req.params.city

  try {
    const data = await getWeather(city)
    res.json({
      city: data.name,
      country: data.sys.country,
      temperature: `${data.main.temp}°C`,
      description: data.weather[0].description,
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: "Unable to fetch weather data. Please try again later." })
  }
})

// Home Route
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Europe Weather App! Use /weather/:city to fetch data."
  )
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
