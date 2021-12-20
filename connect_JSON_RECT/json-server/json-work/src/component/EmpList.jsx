import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';//for edit purpous
const EmployeeList=()=>{
    const url="http://localhost:3002/employee"; 
    const [emplist,updateEmp]=useState([]);
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
    const deleteEmp=(empid)=>{
        console.log("delete emp is working")
               axios.delete("http://localhost:3002 /employee/"+empid)
       .then(response=>{
        getEmp();// to reload the list after delete a record
            setMessage("Employee info Deleted successfully !")
       })
       /* .catch(error=>{
        setMessage("Error ! Try again later");
       }) */

    }
    return(
        <>
        {/* <h5>{JSON.stringify(emplist)}</h5> */}
        <h4>{message}</h4>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Emp No</th>
                    <th>Employee Name</th>
                    <th>Mobile No</th>
                    <th>Department</th>
                    <th>Salary</th>
                    {/* <th>Emp Image</th> */}
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    emplist.map((emp,index)=>{
                            return (
                                <tr>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.mobile}</td>
                                    <td>{emp.dept}</td>
                                    <td>{emp.salary}</td>
                                    {/* <td><img src={emp.image} width="100px" alt="" /></td> */}
                                    <td><Link to={`/${emp.id}editemp`} className='btn btn-info '>Edit</Link></td>
                                    <td>
                                        <button className="btn btn-danger"
                                     onClick={deleteEmp.bind(this,emp.id)}>
                                         Delete</button></td>
                                </tr>
                            )
                    })
                }
               
            </tbody>
        </table>
        
        </>
    )
}
export default EmployeeList;