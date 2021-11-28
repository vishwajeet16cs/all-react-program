import React from "react";
import './Search.css'
class Search extends React.Component{
    render(){
        return(
        <div className="Search__div">
        <h1>Welcome to ibooking - let's get started!</h1>
        <div className="Search__bar">
            <input type="search" className="first__input" placeholder="what would you like to book?"/>
            <input type="search" className="second__input" placeholder="what would you like to book?"/>
            <button className="btn btn-danger" type="submit">Search</button>
        </div>

        </div>
        )
    }
}
export default Search;