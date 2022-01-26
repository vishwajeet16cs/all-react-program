import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import React from 'react'

export const EditEmp = () => {
    const [newtask,setNewTask] = useState("");
    const [newcomment,setNewComment]=useState("");
    useEffect(()=>{
        const newEmp={
            "taskName":newtask,
            "comment":newcomment
        }
        axios.post("http://localhost:3002/employee",newEmp).then((responce)=>{

        }).catch(()=>{})
    })
    const update=()=>{
        
    }
    return (
        <div>
            <h1>hello check Edit emp</h1>
            <div className="container">
            {/* <h5>datat----{empmessage}</h5> */}
            <div className="row">
                <div className="col">
                    <div className="card">
                      <form action="">
                      <div className="from-group">
                           <input type="text"
                            onChange={obj=>setNewTask(obj.target.value)}
                           className="form-control" 
                           placeholder="Task Name"/>
                       </div>
                       <div className="from-group pt-2">
                           <textarea className="form-control my-3 " 
                           onChange={obj=>setNewComment(obj.target.value)}
                           placeholder="Comment" cols="30" rows="10"></textarea>
                       </div>
                       <button  className=" btn btn-danger mt-4"
                                onClick={update}>Save data</button>
                      </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
