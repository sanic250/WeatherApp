import React from "react";
import styles from "../styles/home.module.css";
const Forecast = ({ forecastData, weatherData }) => {
  if (!forecastData) {
    return <div className={styles.loading}>Loading forecast data...</div>;
  }
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };
  return (
    <div className={`${styles.forecast} ${styles.type}`}>
      {forecastData.forecastday.map((day, index) => (
        <div key={index} className={styles.day}>
          <p className={`${styles.category} ${styles.dayName}`}>
            {getDayName(day.date)}
          </p>
          <p className={styles.category}>{day.date}</p>
          <p className={styles.category}>
            Max: <span className={styles.numbers}>{day.day.maxtemp_c}°C</span>
          </p>
          <p className={styles.category}>
            Min: <span className={styles.numbers}>{day.day.mintemp_c}°C</span>
          </p>
          <p className={styles.category}>
            Chance of rain:{" "}
            <span className={styles.numbers}>
              {day.day.daily_chance_of_rain}%
            </span>
          </p>
          <p className={styles.category}>
            Visibility:{" "}
            <span className={styles.numbers}>{day.day.avgvis_km} km</span>
          </p>
          <p className={styles.category}>
            Condition:{" "}
            <span className={styles.numbers}>{day.day.condition.text}</span>
          </p>

          <img
            className={styles.iconCloud}
            src={`https:${day.day.condition.icon}`}
            alt="Weather icon"
            style={{ width: "64px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Forecast;
