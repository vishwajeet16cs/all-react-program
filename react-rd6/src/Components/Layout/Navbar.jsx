import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const Navbar = (props) => { 
    // console.log(props)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">React</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active ">
        <Link className="nav-NavLink" exact to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-NavLink ml-3" exact to="/about">About</Link>
      </li>
      <li className="nav-item">
        <NavLink className="nav-NavLink ml-3" exact to="/contact">Contact</NavLink>
      </li>
      
    </ul>
    
  </div>
</nav>
        </>
    )
}

export default Navbar
