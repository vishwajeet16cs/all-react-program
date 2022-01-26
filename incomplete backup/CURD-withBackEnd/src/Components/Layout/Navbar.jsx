import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                    <a className="navbar-brand" href="#">React user</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/* <a className="nav-link" href="#">Home</a> */}
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        
                        </ul>
                    </div>
                    </div>
            </nav>
        </>
    )
}

export default Navbar
