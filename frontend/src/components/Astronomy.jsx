import React from "react";
import styles from "../styles/home.module.css";
const Astronomy = ({ weatherData }) => {
  return (
    <div className={`${styles.astronomy} ${styles.type}`}>
      <p className={styles.subTitle}>Astronomy</p>
      <p className={`${styles.categoryAstro} ${styles.numberAstro}`}>
        Sunrise: <span className={styles.numberAstro}>{weatherData.forecast.forecastday[0].astro.sunrise}</span>
      </p>
      <p className={styles.categoryAstro}>
        Sunset: <span className={styles.numberAstro}>{weatherData.forecast.forecastday[0].astro.sunset}</span>
      </p>
      <p className={styles.categoryAstro}>
        Moonrise: <span className={styles.numberAstro}>{weatherData.forecast.forecastday[0].astro.moonrise}</span>
      </p>
      <p className={styles.categoryAstro}>
        Moon Illumination:{" "}
        <span className={styles.numberAstro}>{weatherData.forecast.forecastday[0].astro.moon_illumination}</span>
      </p>
      <p className={styles.categoryAstro}>
        Sun is up:{" "}
        <span className={styles.numberAstro}>{weatherData.forecast.forecastday[0].astro.is_sun_up ? "Yes" : "No"}</span>
      </p>
      <p className={styles.categoryAstro}>
        Moon is up:{" "}
        <span className={styles.numberAstro}>{weatherData.forecast.forecastday[0].astro.is_moon_up ? "Yes" : "No"}</span>
      </p>
      <div className={styles.category}>
       <p className={styles.categoryAstro}> Current phase: <span className={styles.numberAstro}>{weatherData.forecast.forecastday[0].astro.moon_phase}</span></p>
      </div>
    </div>
  );
};

export default Astronomy;
