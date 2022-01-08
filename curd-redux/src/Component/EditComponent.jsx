import React from 'react'
import { Link,useParams } from 'react-router-dom'

const EditComponent = () => {
    const {id} =useParams();
    return (
        <div>
            <div className="container">
                     <h1 className="dispaly-3 text-center my-4"> Edit Student  </h1>
                 <div className="row my-4">
                     <div className="col-md-6 mx-auto p-5  ">
                     <div className="col-md-6 shadow mx-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="text" placeholder='Name' className='form-control'/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder='Email' className='form-control'/>
                            </div>
                            <div className="form-group">
                                <input type="number" placeholder='Phone Numbar' className='form-control'/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Add Student" className='btn btn-block btn-dark'/>
                                <Link to="/" value="Add Student" className='btn btn-danger ml-3'>Cancle </Link>
                            </div>
                        </form>
                     </div>
                     </div>
                 </div>
            </div>    
        </div>
    )
}

export default EditComponent
