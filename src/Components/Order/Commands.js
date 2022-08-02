import React, { useContext } from 'react';
import { DatosContext } from '../Context/Context.js'
import styles from '../Order/commands.module.css'
import Total from  './Total.js'


const Commannds = () =>{
    const Context = useContext(DatosContext);
    {console.log(Context)}
return(
<div className= {styles.Commannds}>
<section className={styles.boxorden}>
      <div className={styles.boxclient}>
        <p>Cliente:</p>
        <p>{Context.name}</p>
        <p>Mesa:</p>
        <p>{Context.table}</p>
      </div>
      </section>
    <div> <Total /></div>

</div>

)

}

export default Commannds;
