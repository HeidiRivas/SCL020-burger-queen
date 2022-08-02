import React from'react'
import styles from './kitchen.module.css'
import Header from '../Header/Header.js';



const Kitchen = () => {
  return (
    <section>
        <Header />
        <section className={styles.body}>
        <div className={styles.principalContainer}>
            <p className={styles.titles}>Mesas</p>
            <div className={styles.tables}> 1, 2,3,4 </div>
          </div>
          </section>
    </section>
     
  );
};

export default Kitchen;


