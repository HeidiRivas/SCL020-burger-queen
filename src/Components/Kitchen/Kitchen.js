import React from 'react'
import styles from './kitchen.module.css'
import Header from '../Header/Header.js';



const Kitchen = () => {
  return (
    <section className={styles.body}>
      <section><Header /></section>
      
        <section >
        <div className={styles.gridKitchen}>
          <div className={styles.one}>One</div>
          <div className={styles.two}>Two</div>
          <div className={styles.three}>Three</div>
          <div className={styles.four}>Four</div>
          <div className={styles.four}>five</div>
          <div className={styles.five}>six</div>
        </div>
      </section>
    </section>

  );
};

export default Kitchen;


