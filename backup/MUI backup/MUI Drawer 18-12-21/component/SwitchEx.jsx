import React, { useState } from 'react';
import { Switch } from '@material-ui/core';

export const SwitchEx = () => {
    const [message,setMessage]=useState("");
    const getValue=(e,val)=>{//second parameter contain true and false value of swith
            console.log(val);
            if(val==true){
                setMessage("That's part of the policy: To keep switching gears.")
            }
            else{
                setMessage("plzz switch buddy 😎")
            }
            // console.log(e.target.value)
    }
    return (
        <div>

            {/* switch return true and false */}
            <h1 style={{color:"green"}}>{message}</h1>
            <Switch color="primary"
                size="medium"
                onChange={getValue}/>
        </div>
    )
}
