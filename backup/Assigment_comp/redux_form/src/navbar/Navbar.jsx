import React from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light"
            >
            <Link to="/post">Post</Link>
            <Link to="/compinfo">Company Info</Link>
            <Link to="/login" style={{color:"lightblue"}}>Login</Link>
            </nav>
        </>
    )
}
export default Navbar;