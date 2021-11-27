import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">
            React Routing
          </Link>
          <Link to="/data" className="navbar-brand">
            Employee Data
          </Link>
          <Link to="/login" className="navbar-brand">
            Login
          </Link>
          <Link to="/registration" className="navbar-brand">
            Registration
          </Link>
          <a href="/contact" className="navbar-brand">
            Contact
          </a>
        </nav>
      </>
    );
  }
}
export default Navbar;