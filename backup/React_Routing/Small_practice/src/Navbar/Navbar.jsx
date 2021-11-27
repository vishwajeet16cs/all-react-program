import React from "react";
import {Link} from 'react-router-dom';
class Navbar extends React.Component{
    render(){
        return(
            <>
                <nav className="navbar navbar-dark bg-dark">

                     <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                </nav>
               
            </>
        )
    }
}
export default Navbar;