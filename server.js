import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/weather", async (req, res) => {
  try {
    const { location, q, days, dt } = req.query;
    const searchQuery = location || q;

    if (!searchQuery) {
      return res.status(400).json({ error: "Location parameter is required" });
    }
     const maxDays = Math.min(days || 3, 14);
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json`,
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: searchQuery,
          days: maxDays,
          aqi: "no",
          alerts: "no",
          dt,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Weather API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch weather data",
      details: error.response?.data || error.message });
  }
});
app.get("/api/astronomy", async (req, res) => {
  try {
    const { q, dt } = req.query;
    const response = await axios.get(
      `http://api.weatherapi.com/v1/astronomy.json`,
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q,
          dt,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
