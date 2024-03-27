import axios from "axios"
import { useEffect, useState } from "react"
import type { ReqResUserListResponse,User } from "../interfaces"

const loadUsers = async (page: number = 1): Promise<User[]> => {
    /* fetch('https://reqres.in/api/users?page=2')
        .then( resp => resp.json())
        .then( data => console.log(data)); */
    try {

        const {data} = await axios.get<ReqResUserListResponse>(`https://reqres.in/api/users&{page}`)
        return data.data
    }
    catch (error) {
        console.log(error)
        return []
    }    
        


}
export const UsersPage = () => {

    const [users, setUsers] = useState<User[]>([])

    const currentPageRef = useRef(1)
    useEffect(() => {
      
        loadUsers(currentPageRef.current)
            .then( setUsers )
    
    }, [])


    const nextPage = async() => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current)
        if( users.length > 0) {
            setUsers(users)
        }else { 
            currentPageRef.current--
        }
    }
    
    const prevPage = () => {
        if( currentPageRef.current < 1) return

        currentPageRef.current--
        loadUsers(currentPageRef.current)
    }
  return (
    <>
        <h3>Usuarios:</h3>

        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map ( user => (
                        <UserRow key={user.id} user = {user}/>
                    ))
                }
                
            </tbody>
        </table>
        <div>
            <button>Prev</button>
            <button>Next</button>
        </div>
        
    </>
  )
}
interface Props {
    user: User;
}


export const UserRow = ({user}: Props) => {

    const {avatar, first_name, last_name, email} = user;

    return (
        <tr key= {user.id}>
            <td><img style= {{width: '50px'}}src={avatar} alt="User Avatar" /></td>
            <td>{first_name}{last_name }</td>
            <td>{email}</td>
        </tr>
    )
}
