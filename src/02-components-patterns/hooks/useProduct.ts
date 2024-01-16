import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";


interface useProductArgs {
  product: Product
  onChange? : (args: onChangeArgs) => void
  value?: number
}

const UseProduct = ({onChange, product, value = 0}: useProductArgs) => {

  const [ counter, setCounter ] = useState( value );


  const isControlled = useRef(!!onChange)


  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
if (isControlled.current){
  return onChange!({count: value, product})
}



    setCounter(newValue);
    onChange && onChange({count: newValue, product});
  };

  useEffect(() => {
      setCounter(value)
  
  }, [value])
  

  return {
    counter,
    increaseBy,
  };
};

export default UseProduct