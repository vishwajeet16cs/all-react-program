import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="home" className="navbar-brand">Table</Link>
                <Link to="about" className="navbar-brand">Form</Link>
                <Link to="edit" className="navbar-brand">EditEmp</Link>
            </nav>
        </div>
    )
}
