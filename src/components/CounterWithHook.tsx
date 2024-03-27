import { useCounter } from "../hooks/useCounter"



export const CounterWithHook = () => {

    const { count, increase } = useCounter({
        initialValue: 5
    });

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
