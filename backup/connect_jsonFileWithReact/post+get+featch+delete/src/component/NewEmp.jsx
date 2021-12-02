import React,{useState} from 'react';
import axios from 'axios';
const NewEmp=()=>{
    const [empname,setEmpName]=useState("");
    const [empmobile,setEmpMobile]=useState("");
    const [empDept,setEmpDept]=useState("");
    const [empsalary,setEmpSalary]=useState("");
    const [empmessage,setEmpMessage]=useState("");
    const save=()=>{
        var newemp={

            "name":empname,
            "mobile":empmobile,
            "dept":empDept,
            "salary":empsalary,
        }
        axios.post("http://localhost:3002/employee",newemp)
        .then(response=>{
            setEmpMessage(empname + "save Successfull !")
        })
    }
    return(
        <>
        <div className="container">
            <h5>{empmessage}</h5>
            <div className="row">
                <div className="col">
                    <div className="card">
                      <form action="">
                      <div className="from-group">
                           <input type="text"
                            onChange={obj=>setEmpName(obj.target.value)}
                           className="form-control" 
                           placeholder="Emp Name"/>
                       </div>
                       <div className="from-group">
                           <input type="number"
                           className="form-control my-3 " 
                           onChange={obj=>setEmpMobile(obj.target.value)}
                           placeholder="Emp Number"/>
                       </div>
                       <div className="from-group my-3">
                           <input type="text"
                           className="form-control" 
                           onChange={obj=>setEmpDept(obj.target.value)}
                           placeholder="Emp Department"/>
                       </div>
                       <div className="from-group mt-4">
                           <input type="number"
                           className="form-control" 
                           onChange={obj=>setEmpSalary(obj.target.value)}
                           placeholder="Emp Salary"/>
                       </div>
                       <button  className=" btn btn-danger mt-4"
                                onClick={save}>Save data</button>
                      </form>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}
export default NewEmp;