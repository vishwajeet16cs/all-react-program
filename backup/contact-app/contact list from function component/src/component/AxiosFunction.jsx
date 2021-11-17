import { useEffect, useState } from "react"
import axios from "axios";

const AxiosFunction=()=>{
    const[contact,setContact]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((responce)=>{
            setContact(responce.data)
        })
    })
    let tabledata=contact.slice(0,5).map((ele)=>{
        return (<tr>
                     <td>{ele.id}</td>
                     <td>{ele.name}</td>
                     <td>{ele.email}</td>
             </tr>)
    })
    return(<>
    <h5>{JSON.stringify(contact.slice(0,3))}</h5>
   <div className="container">
       <div className="col">
           <div className="row">
               <table className="table table-striped table-dark">
                   <thead>
                       <tr>
                           <th>ID</th>
                           <th>NAME</th>
                           <th>EMAIL</th>
                       </tr>
                   </thead>
                   <tbody>{tabledata}</tbody>
               </table>
           </div>
       </div>
   </div>
    
    
    </>)
}
export default AxiosFunction; 