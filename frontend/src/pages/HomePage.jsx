import React from "react";
import styles from "../styles/home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Weather App</h1>
        <img src="/sunlogo.png" alt="logo" 
          className={styles.logo}
        />
      </div>
      <div className={styles.switch}>
        <button className={styles.buttons}>Today</button>
        <button className={styles.buttons}>7 Days</button>
        <button className={styles.buttons}>14 Days</button>
        <button className={styles.buttons}>Historical Data</button>
        <button className={styles.buttons}>Astronomy Data</button>
        <button className={styles.buttons}>Air Condition</button>
      </div>
    </div>
  );
};

export default HomePage;
