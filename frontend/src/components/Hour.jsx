import React from 'react'
import styles from '../styles/home.module.css'

 const formatHour = (timeString) => {
    return timeString.split(' ')[1].substring(0, 5);
  };

const Hour = ({ forecastData, weatherData }) => {
  return (
 <div className={`${styles.forecastHour} ${styles.type}`}>
      
      
      {/* Wybieramy tylko pierwszy dzień dla przykładu */}
      {forecastData.forecastday[0].hour.map((hour, index) => (
        <div key={index} className={styles.hour}>
          <p className={styles.categoryHour}>Godzina: <span className={styles.numbersHour}>{formatHour(hour.time)}</span></p>
          <p className={styles.categoryHour}>Temperatura: <span className={styles.numbersHour}>{hour.temp_c}°C</span></p>
          <p className={styles.categoryHour}>Odczuwalna: <span className={styles.numbersHour}>{hour.feelslike_c}°C</span></p>
          <p className={styles.categoryHour}>Opady: <span className={styles.numbersHour}>{hour.chance_of_rain}%</span></p>
         
         

          <img 
            className={styles.iconCloud}
            src={`https:${hour.condition.icon}`} 
            alt="Weather icon" 
            style={{ width: '48px' }}
          />
        </div>
      ))}
    </div>
  )
};

export default Hour