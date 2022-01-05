import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';//for edit purpous
const EmployeeList=()=>{
    const url="http://localhost:3002/employee"; 
    const [emplist,updateEmp]=useState([]);
    const [removeData,setRemoveData] = useState([])
    const getEmp=()=>{
        fetch(url)
        .then(responce=>responce.json()) 
        .then(allEmp=>updateEmp(allEmp ))
    }
    //useEffect will call function automaticaly or else need to use button
    useEffect(()=>{
       /*  axios.get("").then((responce)=>{
            updateEmp(responce.data)
        }) */
        getEmp();
    }, [true])
    //use true to stop server repeated execution

    //delete  data from json file
    const [message, setMessage] =useState("");
    const deleteEmp=(emp)=>{
        console.log("delete emp is working")
        console.log(emp)
               axios.delete("http://localhost:3002/employee/"+emp.id)
       .then(response=>{
           console.log("inside then block")
        //    if(response.data != null){
        //        alert("book deleted successfully")
        //    }
                console.log(emp)
            setRemoveData(emp)
            getEmp();// to reload the list after delete a record
            setMessage("Employee info Deleted successfully !")
       })
       .catch(error=>{
        setMessage("Error ! Try again later");
       })

    }
    return(
        <>
        {/* <h5>{JSON.stringify(emplist)}</h5> */}
        {/* <h4>{removeData}</h4> */}
        {/* <h4>{message}</h4> */}
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Comment</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    emplist.map((emp,index)=>{
                            return (
                                <tr>
                                    <td>{emp.taskName}</td>
                                    <td>{emp.comment}</td>
                                    <td><Link to={`/${emp.id}editemp`} className='btn btn-info'>Edit</Link></td>
                                    <td>
                                        {/* <h6>{emp.id}</h6> */}
                                        <button className="btn btn-danger"
                                     onClick={deleteEmp.bind(this,emp)}>
                                         Delete</button></td>
                                </tr>
                            )
                    })
                }
               
            </tbody>
        </table>
        <h1>Deleted data </h1>
        {Object.keys(removeData).length != 0 ?<table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {
                    emplist.map((emp,index)=>{
                            return (
                                <tr>
                                    <td>{emp.taskName}</td>
                                    <td>{emp.comment}</td>
                                    <td><Link to={`/${emp.id}editemp`} className='btn btn-info'>Edit</Link></td>
                                    <td>
                                        {/* <h6>{emp.id}</h6> */}
                                        <button className="btn btn-danger"
                                     onClick={deleteEmp.bind(this,emp)}>
                                         Delete</button></td>
                                </tr>
                            )
                    })
                }
               
            </tbody>
        </table>:null}
        
        </>
    )
}
export default EmployeeList;