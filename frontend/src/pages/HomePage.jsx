import React from "react";
import { Search, Clock, Sun, Calendar1, Thermometer, MapPin  } from "lucide-react";
import styles from "../styles/home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "../components/Forecast.jsx";
import Today from "../components/Today.jsx";
import Astronomy from "../components/Astronomy.jsx";
import Hour from "../components/Hour.jsx";


const HomePage = () => {
 const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('Warsaw'); 
  const [switches, setSwitches] = useState("today");

  const fetchWeather = async (searchLocation = location) => {
    if (!searchLocation.trim()) {
      setError("Please enter a location");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get('http://localhost:5000/api/weather', {
        params: { 
          q: searchLocation, 
          days: 3 
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      setError(error.response?.data?.error || "Failed to fetch weather data");
      console.error("API Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(); 
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  if (loading) return <div className={styles.loading}>Loading weather data...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.title1}>
          <h1 className={styles.mainTitle}>Weather App</h1>
          <img src="/sunlogo.png" alt="logo" className={styles.logo} />
        </div>
        <div className={styles.search}>
        <form onSubmit={handleSubmit} className={styles.search}>
          <MapPin className={styles.iconMap} />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Enter a location"
            className={styles.inputSearch}
          />
          <button className={styles.buttonSearch}
            type="submit" 
            disabled={!location.trim()}
          >
            
            <Search className={styles.searchIcon} />
            Search
          </button>
        </form>
        </div>
      </div>
      <div className={styles.switch}>
        <button onClick={() => setSwitches("today")} className={styles.buttons}>Today <Thermometer /></button>
        <button onClick={() => setSwitches("3")} className={styles.buttons}>3 Days <Calendar1 /></button>
        <button onClick={() => setSwitches("hour")} className={styles.buttons}>Hourly <Clock /></button>
        <button onClick={() => setSwitches("astronomy")} className={styles.buttons}>Astronomy Data <Sun /></button>
       
      </div>
     {weatherData ? (
        <div className={`${styles.content} ${styles.wrapper}`}>
          
          {switches === "today" && <Today weatherData={weatherData} />}

          {switches === "3" && <Forecast forecastData={weatherData.forecast} />}

                   
         {switches === "astronomy" && <Astronomy weatherData={weatherData} />}

        {switches === "hour" && <Hour forecastData={weatherData.forecast} weatherData={weatherData} />}
          

        </div>
      ) : (
        <div className={styles.noData}>
          No weather data available. Please try another location.
        </div>
      )}
    </div>
  );
};

export default HomePage;
