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

  // estado para añadir productos a sección orden
  const [product, setProduct] = useState([]);

  //para añadir productos
  
 const add = (e) => {
    //se crea variable que representa un producto ya existente en el componente orden
    const productExist = product.find((item) => item.id === e.id); 
    if (productExist) {
      setProduct(
        product.map((item) =>
        // si ya existe un producto   verifico que este producto sea igual al elemento nuevo que quiero agregar
          item.id === e.id
          // si es verdadero se crea un nuevo array con el producto existente que contiene la propiedad quant
            ? { ...productExist, quant: productExist.quant + 1 }
            : item
        )
      );
    } else {  // si no existe el producto  se agrega y defino que su cantidad es igual a 1
      setProduct([...product, { ...e, quant: 1 }]);
    }
  };
  //pregunta: item del ternario? q le esta pidiendo q haga? y por q en ...e no funciona item?
  //restar productos
  const rest  = (e) => {//por que aqui e y en command le doy item de argumento?
    const productExist = product.find((item) => item.id === e.id);
    // si la cantidad de producto existente es igual a 1
    if (productExist.quant === 1) {
      // si existe un producto se elimina del carro.Devolviendo todos los otros productos q no son ese
      setProduct(product.filter((item) => item.id !== e.id));
    } else{ //en caso de que exista más de 1 restale 1
      setProduct(
        product.map((item) =>
          item.id === e.id
            ? { ...productExist, quant: productExist.quant - 1 }
            : item
        )
      );
    }
  };

  //borrar producto
  
  const erase = (id) => {
    setProduct(product.filter((item) => item.id !== id));
}
// total del pedido arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
let priceInitial = 0;
const total = product.reduce((total, item) => total + item.price * item.quant, priceInitial);


const props ={
  name,
  table,
  dataclient,
  product,
  setProduct,
  add,
  rest,
  erase,
  total
}
  
  return <DatosContext.Provider value={props}>{children}</DatosContext.Provider>;
  
    
}

export {DatosContext, ContextProvider}

