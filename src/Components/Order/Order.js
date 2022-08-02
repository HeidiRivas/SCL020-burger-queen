import React from 'react'
import Commannds from '../Order/Commands.js'
import Header from '../Header/Header.js'
import Menu from '../Order/Menu.js'
import styles from '../Order/order.module.css'

const Order = () =>{
    return(
        <section>
        <Header />
        <section className={styles.body}>
          <div className={styles.principalContainer}>
          <div>
            <p className={styles.titles}>Menú</p>
            <Menu />
          </div>
          <div>
            <p className={styles.titles}>Orden</p>
            <Commannds />
          </div>
          </div>
        </section>
      </section>
    );
  };
    


export default Order;
