import { useState } from "react"


export const Counter = () => {

    const [count, setCount] = useState<number>(10)

    const increase = ( value:number ) => {
        setCount(count + value)

    }
    return (
        <>
            <h3>Contador: <small>{ count }</small></h3>
            
            <div>
                <button onClick = { () => increase(+1)}>+1</button>

                &nbps;

                <button onClick = { () => increase(-1)}>-1</button>
            </div>
        </>
    )
}
