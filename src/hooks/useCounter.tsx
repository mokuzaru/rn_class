import { useState } from "react"

interface Options {
  initialValue?: number;
}

export const useCounter = ({initialValue = 5}: Options) => {

  const [count, setCount] = useState<number>(initialValue)

  const increase = ( value:number ) => {
      const newValue = count + value
      if( newValue < 0) return;
      setCount(count + value)

  }



  return {
    //Properties
    count,
    //methods
    increase,
  }
}
