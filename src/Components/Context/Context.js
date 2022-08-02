import React, {useState} from 'react'

 const DatosContext = React.createContext('default');


const ContextProvider = ({ children }) =>{

      // creo el estado para los datos nombre y mesa ambos empiezan como string vacio
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  //ahora utilizo setName y setTable para establecer como cambian esos datos

  const dataclient = (e) => {
    console.log('hola')
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'table') {
      setTable(e.target.value);
    }
  };
const props ={
  name,
  table,
  dataclient
}
  
  return <DatosContext.Provider value={props}>{children}</DatosContext.Provider>;
  
    
}

export {DatosContext, ContextProvider}

