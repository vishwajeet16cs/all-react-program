import React from 'react';
import { Link } from 'react-router-dom';
 const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="signin" className="nav-item nav-link active">SIGN IN</Link>
                <Link to="Login" className="nav-item nav-link active">lOGIN</Link>
                <Link to="home" className="nav-item nav-link active">HOME</Link>
            </nav>
        </div>
    )
}
export default Navbar

//rafc->short cut to create arrow function
{/* <a className="navbar-brand" href="#">Navbar</a>
            
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#">Features</a>
        <a className="nav-item nav-link" href="#">Pricing</a>
        <a className="nav-item nav-link disabled" href="#">Disabled</a>
</div>
</div> */}