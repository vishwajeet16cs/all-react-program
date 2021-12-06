import React from "react";
import { TextField } from "@material-ui/core";
const TextField=()=>{
    const getData=(e)=>{
        console.log(e.target.value)
    }
    return (
        <>
            <TextField
                lable="enter name"// work as place holder
                color="primary "
                variant="outlined"
                onChange={getData}
            />
        </>
    )
}
export default TextField;
