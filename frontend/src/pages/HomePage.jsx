import React from "react";
import { Search } from 'lucide-react';
import styles from "../styles/home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
      <div className={styles.title1}>
        <h1 className={styles.mainTitle}>Weather App</h1>
        <img src="/sunlogo.png" alt="logo" 
          className={styles.logo}
        />
      </div>
        <div className={styles.search}>
       
          <input
            type="text"
            placeholder="Enter a location"
            className={styles.inputSearch}
          />
          <button className={styles.buttonSearch}> <Search 
          className={styles.searchIcon}
        />Search</button>
        </div>
      </div>
      <div className={styles.switch}>
    
        <button className={styles.buttons}>Today</button>
        <button className={styles.buttons}>7 Days</button>
        <button className={styles.buttons}>14 Days</button>
        <button className={styles.buttons}>Historical Data</button>
        <button className={styles.buttons}>Astronomy Data</button>
        <button className={styles.buttons}>Air Condition</button>
      </div>
      <div className={`${styles.content} ${styles.wrapper}`}>
        <div className={styles.temperature}>
        <h3>Temperature</h3>
        <p>Morning</p>
        <p>Afternoon</p>
        <p>Evening</p>
        <p>Night</p>
        </div>
        <div className={styles.humidity}></div>
        <div className={styles.wind}></div>
        <div className={styles.pressure}></div>
        <div className={styles.visibility}></div>
        <div className={styles.cloud}></div>
      </div>
    </div>
  );
};

export default HomePage;
