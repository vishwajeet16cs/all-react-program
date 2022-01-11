import React from 'react'
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom'
const RouterDemo = () => {
    return (
        <>
         <ul>
             <BrowserRouter>
                <LinkPage/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/contact" component={Contact}/>
             </BrowserRouter>
         </ul>   
        </>
    )
}
const LinkPage = () =>{
    return (
    <>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/services">Services</Link></li>
             <li><Link to="/contact">Contact us</Link></li>
    </>
    )
}
const Home = () =>{
    return (
        <>
            <h1>This is Home component</h1>
        </>
    )
}
const About = () =>{
    return (
        <>
            <h1>Siddaganga Institute Of Technology, Tumakuru</h1>
            <p>Siddaganga Institute of Technology is a private college in Tumakuru, Karnataka, India.
               It is run by the Sri Siddaganga Educational Society. It offers 13 undergraduate, 13 postgraduate and 16 PhD programmes. 
               From 2016,the institute has endulged in lot of malpractices and charging higher fee.</p>
        </>
    )
}

const Services = ({match}) =>{
    console.log(match)
    return (
        <>
            <h1>Service</h1>
            <ul>
                <li><Link to={`${match.path}/services1`}>services1</Link></li>
                <li><Link to={`${match.path}/services2`}>services2</Link></li>
                <li><Link to={`${match.path}/services3`}>services3</Link></li>
                <li><Link to={`${match.path}/services4`}>services4</Link></li>
                <li><Link to="/">Go back Home</Link></li>
            </ul>
            <Route path={`${match.path}/services1`} component={Home}/>
            <Route path="/" component={Home}/>
        </>
    )
}

const Contact = () =>{
    return (
        <>
            <h1>Contact us</h1>
            <ul>
                <li>Email:- vishwajeetkumarb438@gmail.com</li>
                <li>Mobile:- 8809774814</li>
            </ul>
            
        </>
    )
}
export default RouterDemo
