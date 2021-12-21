const CompOne=()=>{
    

    // const {data}=data
    return(
        <>
        <h6>{JSON.stringify(data.data[0])}</h6>
        <h1>hello check compoinent 1</h1>
            {/* <div className="col-md-3"  style={{ backgroundColor:data.data[0].color,margin:"20px", padding:"10px"}} key={data.data[0].id} >
                           <h1 className='hone' style={{textAlign :"center",fontSize:"22px" ,textTransform:"capitalize" ,padding:"22px"}}>{data.data[0].name}</h1>
                           <h2 className='htwo' style={{textAlign :"center",fontSize:"20px",padding:"25px"}}>{data.data[0].year}</h2>
                         </div>  */}
        </>
    )
}
export default CompOne;