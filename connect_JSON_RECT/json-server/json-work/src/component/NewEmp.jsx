import React,{useState} from 'react';
import axios from 'axios';
const NewEmp=()=>{
    const [taskName,setTaskName]=useState("");
    const [comment,setComment]=useState("");
    // const [empDept,setEmpDept]=useState("");
    // const [empsalary,setEmpSalary]=useState("");
    const [empmessage,setEmpMessage]=useState("");
    const save=()=>{
        var newemp={

            "taskName":taskName,
            "comment":comment, 
        }
        axios.post("http://localhost:3002/employee",newemp)
        .then(response=>{
            // setEmpMessage(empname + "save Successfull !")
        })
    }
    return(
        <>
        <div className="container">
            {/* <h5>datat----{empmessage}</h5> */}
            <div className="row">
                <div className="col">
                    <div className="card">
                      <form action="">
                      <div className="from-group">
                           <input type="text"
                            onChange={obj=>setTaskName(obj.target.value)}
                           className="form-control" 
                           placeholder="Task Name"/>
                       </div>
                       {/* <div className="from-group pt-2">
                           <input type="text"
                           className="form-control my-3 " 
                           onChange={obj=>setComment(obj.target.value)}
                           placeholder="Comment"/>
                       </div> */}
                       <div className="from-group pt-2">
                           <textarea className="form-control my-3 " 
                           onChange={obj=>setComment(obj.target.value)}
                           placeholder="Comment" cols="30" rows="10"></textarea>
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