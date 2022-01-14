import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Home = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        loadUsers()
    }, [users])
    const loadUsers = async()=>{
        const result = await axios.get("http://localhost:5000/users")
        console.log("result here->",result); 
    }
    return (
        <div className='container'>
            <h6>{JSON.stringify(users)}</h6>
            <h1>Home Coponent</h1>
        </div>
    )
}

export default Home
