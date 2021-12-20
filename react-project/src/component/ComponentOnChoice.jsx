import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ComponentOnChoice = () => {
   const [data,setData]=useState({});
//    let fetchUrl="https://reqres.in/api/unknown"
    useEffect(()=>{
        axios.get("https://reqres.in/api/unknown")
        .then((respon)=>{
            setData(respon.data)
        })
    },[data])
    return data;
}
// export default ComponentOnChoice;
const Comp1=()=>{
    let data=ComponentOnChoice();
    return(
        <>
        {/* <h6>{JSON.stringify(data.data[0])}</h6> */}
        <h1>hello check compoinent 1</h1>
            <div className="col-md-3"  style={{ backgroundColor:data.data[0].color,margin:"20px", padding:"10px"}} key={data.data[0].id} >
                           <h1 className='hone' style={{textAlign :"center",fontSize:"22px" ,textTransform:"capitalize" ,padding:"22px"}}>{data.data[0].name}</h1>
                           <h2 className='htwo' style={{textAlign :"center",fontSize:"20px",padding:"25px"}}>{data.data[0].year}</h2>
                         </div> 
        </>
    )
}
const Comp2=()=>{
    // let data=ComponentOnChoice();
    // console.log("new data",data)
    return(
        <>
        <h1>hello check component 2</h1>
        {/* <div className="col-md-3"  style={{ backgroundColor:data.data[1].color,margin:"20px", padding:"10px"}} key={data.data[1].id} >
                           <h1 className='hone' style={{textAlign :"center",fontSize:"22px" ,textTransform:"capitalize" ,padding:"22px"}}>{data.data[1].name}</h1>
                           <h2 className='htwo' style={{textAlign :"center",fontSize:"20px",padding:"25px"}}>{data.data[1].year}</h2>
                         </div>  */}
        </>
    )
}
const Comp3=()=>{
    let data=ComponentOnChoice();
    // console.log("new data",data)
    return(
        <>
        <h1>hello check component 3</h1>
        {/* <div className="col-md-3"  style={{ backgroundColor:data.data[2].color,margin:"20px", padding:"10px"}} key={data.data[2].id} >
                           <h1 className='hone' style={{textAlign :"center",fontSize:"22px" ,textTransform:"capitalize" ,padding:"22px"}}>{data.data[3].name}</h1>
                           <h2 className='htwo' style={{textAlign :"center",fontSize:"20px",padding:"25px"}}>{data.data[2].year}</h2>
                         </div>  */}
        </>
    )
}
const Comp4=()=>{
    // let data=ComponentOnChoice();
    // console.log("new data",data)
    return(
        <>
        <h1>hello check component 4</h1>
        {/* <h6>{JSON.stringify(data.data)}</h6> */}
        {/* <div className="col-md-3"  style={{ backgroundColor:data.data[3].color,margin:"20px", padding:"10px"}} key={data.data[3].id} >
                           <h1 className='hone' style={{textAlign :"center",fontSize:"22px" ,textTransform:"capitalize" ,padding:"22px"}}>{data.data[3].name}</h1>
                           <h2 className='htwo' style={{textAlign :"center",fontSize:"20px",padding:"25px"}}>{data.data[3].year}</h2>
                         </div>  */}
        </>
    )
}
const Comp5=()=>{
    // let data=ComponentOnChoice();
    // console.log("new data",data)
    return(
        <>
        <h1>hello check component 5</h1>
        {/* <h6>{JSON.stringify(data.data)}</h6> */}
        {/* <div className="col-md-3"  style={{ backgroundColor:data.data[4].color,margin:"20px", padding:"10px"}} key={data.data[4].id} >
                           <h1 className='hone' style={{textAlign :"center",fontSize:"22px" ,textTransform:"capitalize" ,padding:"22px"}}>{data.data[4].name}</h1>
                           <h2 className='htwo' style={{textAlign :"center",fontSize:"20px",padding:"25px"}}>{data.data[4].year}</h2>
                         </div>  */}
        </>
    )
}
const Comp6=()=>{
    // let data=ComponentOnChoice();
    // console.log("new data",data) 
    return(
        <>
        <h1>hello check component 6</h1>
        {/* <h6>{JSON.stringify(data.data)}</h6> */}
        {/* <div className="col-md-3"  style={{ backgroundColor:data.data[5].color,margin:"20px", padding:"10px"}} key={data.data[5].id} >
                           <h1 className='hone' style={{textAlign :"center",fontSize:"22px" ,textTransform:"capitalize" ,padding:"22px"}}>{data.data[5].name}</h1>
                           <h2 className='htwo' style={{textAlign :"center",fontSize:"20px",padding:"25px"}}>{data.data[5].year}</h2>
                         </div>  */}
        </>
    )
}
// export {Comp1,ComponentOnChoice}
export {Comp1,Comp2,Comp3,Comp4,Comp5,Comp6,ComponentOnChoice}