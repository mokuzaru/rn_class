
interface Person {
    firstName: string;
    age: number;
    lastName: string;
    isAlive?: boolean;

    adress: {
        country: string;
        HouseNo: number;
    }
}


export const ObjectLiteral = () => {

    const person: Person = {
        age: 35,
        firstName: "Misael",
        lastName: "Otoya",
        isAlive: true,
        adress: {
            country: 'Peru',
            HouseNo: 1045
        }
    }

    
    return (
        <div>
            
            <h3>Objetos Literal</h3>

            {JSON.stringify(person,null,2)}
        </div>
    )
}
