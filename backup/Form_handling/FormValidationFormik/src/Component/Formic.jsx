import React from 'react'
import { Formik,Form } from 'formik'
import TaxtFild from './TaxtFild'
import * as Yup from 'yup'
const Formic = () => {
    const validate=Yup.object({
        firstName:Yup.string()
        .max(15,"Must be 15 characters or less")
        .required('Required'),
        lastName:Yup.string()
        .max(20,"Must be 20 characters or less")
        .required('Required'),
        email:Yup.string()
        .max("Email is invalid")
        .required('Email is required'),
        password:Yup.string()
        .min(6,"Password Must be at least 6 characters  ")
        .required('Password is Required'),
        confirmPassword:Yup.string()
        .min([Yup.ref('password'),null],'password must match')
        .required('confirm password is required '),
    })
    return (
        <>
        {/* <h1>jlelel s</h1> */}
         <Formik
                initialValues={{
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                }}
                validationSchema={ validate }
                onSubmit={value=>{
                    console.log(value)
                }}
         >
             {
                 formik=>(
                     <div>
                          {console.log(formik.values)}
                          <h1 className='my-4 font-weight-bold-dispaly-4'>Sign up</h1>
                          <form action="">
                              <TaxtFild lable="First Name" name="firstName" type="text"/>
                              <TaxtFild lable="Last Name" name="lastName" type="text"/>
                              <TaxtFild lable="Email" name="email" type="email"/>
                              <TaxtFild lable="Password" name="password" type="password"/>
                              <TaxtFild lable="Confirm Password" name="confirm password" type="password"/>
                              <button className='btn btn-dark mt-3 mr-3'>Register</button>
                              <button className="btn btn-danger mt-3 m4-3 " type="reset">Reset</button>
                          </form>
                      </div>
                 )
             }
         </Formik>
        
        </>
    )
}

export default Formic
