import { useEffect, useState } from "react";

function UsersComponent() {
    const [users, setUsers] = useState([])
    const items = ['skill','jaze','stick']
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/getusers');
            // const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json()
            console.log('data: ',data);
            console.log({data});
            setUsers(data)
            
            
        } catch (error) {
            console.log(error);
        }
    }

    // ktl6piY5bKmdNFxA
    //mongodb+srv://davisvladimirpb:<password>@firstcluster.fwgemid.mongodb.net/?retryWrites=true&w=majority

    return (
        <>
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.map( user => 
                    <li key={user.id}><b>{user?.name}</b> {user.age}</li>
                )}
            </ul>
        </>

    );
}

export default UsersComponent