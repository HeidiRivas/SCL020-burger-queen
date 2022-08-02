import React from 'react'
import styles from './home.module.css'
import logoC from '../../../src/Images/logo-cafe.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <main className={styles.home}>
      <figure className={styles.logoC}>
        <img src={logoC} alt='logo home' className={styles.imgLogo} />
      </figure>
      <section className={styles.sectionbuttons}>
        <div className={styles.buttons}>
          <Link to="/Order">
            <button className={styles.buttonOrder}> Mesas </button>
          </Link>
          <Link to="/kitchen">
            <button className={styles.buttonKitchen}>Cocina</button>
          </Link>

        </div>
      </section>
    </main>
  );
};

export default Home;


