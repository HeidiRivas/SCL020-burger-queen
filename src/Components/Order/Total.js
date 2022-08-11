import React, { useContext } from 'react';
import { DatosContext } from '../Context/Context.js'
import styles from '../Order/total.module.css'

const Total = () => {
    const Context = useContext(DatosContext);
    return(
        <div className={styles.total}>
         <p>TOTAL: ${Context.total}</p></div>
    )
}

export default Total;