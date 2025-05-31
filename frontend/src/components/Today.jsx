import React from 'react'
import styles from '../styles/home.module.css'
const Today = ({weatherData}) => {
  return (
    <div className={styles.temperature} >
        <div className= {styles.type} >
        <div className={styles.todayTemp}>
            <h3 className={styles.subTitle}>
              Weather in {weatherData.location.name}, {weatherData.location.country}
            </h3>
            <p className={styles.category}>Current: <span className={styles.numbers}>{weatherData.current.temp_c}°C</span></p>
            <p className={styles.category}>Feels like:<span className={styles.numbers}> {weatherData.current.feelslike_c}°C</span></p>
            <p className={styles.category}>Condition: <span className={styles.numbers}>{weatherData.current.condition.text}</span>
            </p>
             <img 
            className={styles.iconCloud}
              src={`https:${weatherData.current.condition.icon}`} 
              alt="Weather icon" 
              style={{ width: '64px' }}
            />
           
          </div>
            <div className={styles.details}>
            <h3 className={styles.subTitle}>Details</h3>
                        <p className={styles.category}>Humidity: <span className={styles.numbers}>{weatherData.current.humidity}%</span></p>
                        <p className={styles.category}>Wind: <span className={styles.numbers}>{weatherData.current.wind_kph} km/h</span></p>
                        <p className={styles.category}>Wind Direction: <span className={styles.numbers}>{weatherData.current.wind_dir}</span></p>
                        <p className={styles.category}>Pressure: <span className={styles.numbers}>{weatherData.current.pressure_mb} hPa</span></p>
          </div>
          </div>
          </div>
  )
}

export default Today