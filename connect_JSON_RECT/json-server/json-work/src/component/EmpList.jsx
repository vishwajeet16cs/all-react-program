import React,{useState,useEffect} from 'react';
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
        getEmp();
    }, [true])
    //use true to stop server repeated execution
    return(
        <>
        {/* <h5>{JSON.stringify(emplist)}</h5> */}
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Emp No</th>
                    <th>Employee Name</th>
                    <th>Mobile No</th>
                    <th>Department</th>
                    <th>Salary</th>
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