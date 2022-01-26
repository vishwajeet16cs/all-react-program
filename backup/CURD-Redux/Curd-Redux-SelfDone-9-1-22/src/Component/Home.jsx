  import React from 'react'
  import { Link } from 'react-router-dom'
  
  const Home = () => {
      return (
          <>
            <div className="container">
                 <div className="row">
                     <div className="col-md-12 text-right px-5">
                         <Link to='/add' className='btn btn-outline-dark'>Add Contact </Link>
                     </div>
                     <div className="col-md-6 mx-auto">
                        <h1>Welcome to React world</h1>
                     </div>
                 </div>
            </div>  
          </>
      )
  }
  
  export default Home
  