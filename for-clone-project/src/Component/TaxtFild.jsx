import React from 'react'
import { ErrorMessage,useField } from 'formik'
const TaxtFild = ({lable,...props}) => {
    const [field,meta]=useField(props);
    // console.log(field,meta)
    // console.log("lable->",lable)
    return (
        <div className='mb-2 '>
            <label htmlFor={field.name} >{lable}</label>
            <input type="text"
                   className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                   {...field} {...props}
                   autoComplete="off" />
                   <ErrorMessage component="div" className='erro' name={field.name}/>
        </div>
    )
}

export default TaxtFild
