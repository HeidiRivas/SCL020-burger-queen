import React,{useContext, useState} from 'react'
import styles from '../Order/menu.module.css'
import { DatosContext } from '../Context/Context.js';
import data from '../../../src/Data/data.json'


const Menu = () => {
  const Context = useContext(DatosContext);
  const cartData = data.carta;
  const [product, setProduct] = useState([]);
  
  const filterMenu = (option) =>{
    setProduct(cartData.filter((e) => e.type === option))
  
    };

  
    return (
      <section className={styles.menu}>
      <section className={styles.boxclient}>
        <div></div>
       
        <p>Nombre:     
           <input
          className={styles.inputmenu}
          name='name'
          type='text'
          value={Context.name}
          onChange={(e)=>Context.dataclient(e)}
        ></input></p>
        <p>N° mesa:
        <input
          className={styles.inputmenu}
          name='table'
          type='text'
          value={Context.table}
          onChange={(e) =>Context.dataclient(e)}
        ></input></p>
      </section>
      <section className={styles.buttonContainer}>
      <button
            className={styles.btnBebestible}
            onClick={() => filterMenu('bebestible')}>Bebestibles</button> 
        <button
            className={styles.btnPostres}
            onClick={()=>filterMenu('postre')} >Postres</button>
      </section>
    
      <section className={styles.boxcarta}>
        {product.map((item) => (
          <div key={item.id}>
            <button
              className={styles.productos}
              onClick={() => Context.add(item)} >
              <p className={styles.namecarta}>{item.name} ${item.price}</p>
            </button>
          </div>
        ))}
    
      </section>
      </section>
      
    );
  };

  export default Menu;