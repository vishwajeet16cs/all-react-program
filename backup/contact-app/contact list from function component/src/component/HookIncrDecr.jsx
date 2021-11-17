import React from 'react';

function HookIncrDecr(){
   var arr=0;
    const [name, setName] = React.useState(arr);
    const incr=()=>{ 
        setName(name+1)   
    }
    const decr=()=>{
        if(name>=0){
            setName(name-1)
        }
        
    }
    return<>
    
    {/* <h6>{}</h6> */}
    <button onClick={incr}>incr</button>
    <h6>{name}</h6>
    <button onClick={decr}>decr</button> 
    </>
}

export default HookIncrDecr;