import React, { useEffect, useState } from 'react'
const ComponentOnChoice = (props) => {
    // let data=props.selectedData
    // const [data,setData]=useState({})
    const {id,name,color,year}=props.selectedData
   return <><h1>hello check</h1>
   <h6> selected data from app.js{JSON.stringify(props.selectedData)}</h6>
   {/* <h6> selected data from app.js{JSON.stringify(name)}</h6> */}
   <div className="col-md-3"  style={{ backgroundColor:color,margin:"20px", padding:"10px"}} key={id} >
                           <h1 className='hone' style={{textAlign :"center",fontSize:"22px" ,textTransform:"capitalize" ,padding:"22px"}}>{name}</h1>
                           <h2 className='htwo' style={{textAlign :"center",fontSize:"20px",padding:"25px"}}>{year}</h2>
                         </div>
   
   </>
}
export {ComponentOnChoice}