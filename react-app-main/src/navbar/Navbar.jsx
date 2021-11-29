import React from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <>
            {/* <div className="container"> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/post" className="navbar-brand"><strong>Post</strong></Link>
            <Link to="/compinfo" className="navbar-brand"><strong>Company Info</strong></Link>
            <Link to="/login" className="navbar-brand" ><strong>Login</strong></Link>
            </nav>
            {/* </div> */}
        </>
    )
}
export default Navbar;