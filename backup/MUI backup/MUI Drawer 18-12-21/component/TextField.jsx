import React from "react";
import { TextField } from "@material-ui/core";
const TextFieldEx=()=>{
    const getData=(e)=>{
        console.log(e.target.value)
    }
    return (
        <>
        <h1 style={{color:"green"}}>hello Text Field</h1>
            <TextField
                label="enter name"// work as place holder
                color="secondary"
                // variant="filled"
                // variant="standard"
                variant="outlined"//perfect text box
                onChange={getData}
            />
        </>
    )
}
export default TextFieldEx;
