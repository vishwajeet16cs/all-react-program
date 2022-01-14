import React from 'react'
import { useState } from 'react/cjs/react.development'
let formElements = [
    {
        lable:"Name",
        key:'name'
    },
    {
        lable:"phone number",
        key:'phone'
    }
]
const InputBox = () => {
    const [formData,setFormData]=useState({});
    return (
        <div>
             <form>
                 {formElements.map(formElement=>{
                     return <>
                        {formElement.lable}
                        <input type="text" />
                        <br />
                     </>
                 })}
             </form>
        </div>
    )
}

export default InputBox
