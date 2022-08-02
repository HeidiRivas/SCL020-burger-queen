import React,{useContext} from 'react'
import styles from '../Order/menu.module.css'
import { DatosContext } from '../Context/Context.js';

const Menu = () => {
  
  const Context = useContext(DatosContext);
    return (
      <section className={styles.menu}>
      <section className={styles.boxclient}>
        <p>Nombre:{Context.name}</p>
        <input
          className={styles.inputmenu}
          name='name'
          type='text'
          value={Context.name}
          onChange={(e)=>Context.dataclient(e)}
        ></input>
        <p>N° mesa:</p>
        <input
          className={styles.inputmenu}
          name='table'
          type='text'
          value={Context.table}
          onChange={(e) =>Context.dataclient(e)}
        ></input>
       
      </section>
      </section>
      
    );
  };

  export default Menu;