import React, { useContext } from 'react';
import { DatosContext } from '../Context/Context.js'
import styles from '../Order/commands.module.css'
import Total from './Total.js'


const Commannds = () => {
  const Context = useContext(DatosContext);

  return (
    <section className={styles.Commannds}>
      <section className={styles.boxorden}>
        <div className={styles.boxclient}>
          <p>Cliente:</p>
          <p>{Context.name}</p>
          <p>Mesa:</p>
          <p>{Context.table}</p>
        </div>
      </section>
      <section className={styles.boxproductos}>
        {Context.product.map((item) => (
          <div key={item.id} className={styles.boxorder}>
            <div className={styles.productos}>
              <p className={styles.nameitem}>{item.name}</p>
              <p>$ {item.price}</p>

              <div className={styles.buttons}>
                <button
                  className={styles.symbols}
                  onClick={(e) => Context.rest(item)}
                >
                  {' '}
                  -
                </button>
                <p className={styles.number}>{item.quant}</p>
                <button
                  className={styles.symbols}
                  onClick={() => Context.add(item)}
                >
                  {' '}
                  +
                </button>
                <button
                  className={styles.symbols}
                  onClick={() => Context.erase(item.id)}
                >
                  {' '}
                  x
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <button className={styles.btnSendCommand} type='submit'>Enviar</button> <Total />
    </section>
    

  )

}

export default Commannds;
