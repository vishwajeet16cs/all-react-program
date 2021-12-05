import { Radio } from '@material-ui/core'
import React, { useState } from 'react'

export const RadioButton = () => {
    const [gender,setGender]=useState("male");
    const testfunction=(e)=>{
        console.log(e.target.value);
        setGender(e.target.value)
    }
    return (
        <div>
            
            <Radio color="primary"
                    value="male"
                 checked={gender==="male"}
                 onChange={testfunction}/>
                 <span>Male</span>
                 <Radio color="secondary"
                    value="femail"
                 checked={gender==="femail"}
                 onChange={testfunction}/>
                 <span>Femail</span>  
        </div>
    )
}
