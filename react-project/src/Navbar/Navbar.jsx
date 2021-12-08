import React from 'react'
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <>
            <nav className="navbar navbar-dark bg-dark">
            <Link to="sighin" className="navbar-brand">Sigh In</Link>
            <Link to="login" className="navbar-brand">Login</Link>
            </nav>
           
        
        </>
    )
}
export default Navbar;