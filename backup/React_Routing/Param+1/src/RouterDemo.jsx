import React, { Component } from 'react';
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'

class RouterDemo extends Component {

    render() {
        return (
            <div>
                {/* <WebSiteDesigning/> */}
                {/* <h1>hello check</h1> */}
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/contect" component={Contact}/>
                        <Route  component ={PageNotFound}/>  
                        </Switch>    
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
const Header = () =>{
    return (<>
     <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/services">Services</Link></li>
         <li><Link to="/contect">Contect Us</Link></li>
     </ul>
    </>)
}

const  Home =()=>{
    return (
    <>
        <h1>Home page</h1>
        <h1>Welcome to Home page</h1>
    </>
    )
}

const About =()=>{
    return (
    <>
        <h1>About page</h1>
        <p>Siddaganga Institute of Technology is a private college in Tumakuru, Karnataka, India. It is run by the Sri Siddaganga Educational Society. It offers 13 undergraduate, 13 postgraduate and 16 PhD programmes. From 2016, the institute has endulged in lot of malpractices and charging higher fee.</p>
    </>
    )
}
const Services =({match,location,history})=>{
    console.log(match)
    // console.log(location)
    // console.log(history)
    return (
    <>
        <h1>Services page</h1>
        <ul>
            <li><Link to={`${match.path}/website-designing`}>Website Designing</Link></li>
            <li><Link to={`${match.path}/website-development`}>Website Development</Link></li>
            <li><Link to={`${match.path}/seo-services`}>SEO Services</Link></li>
            <li><Link to={`${match.path}/Mobile-App-Development`}>Mobile App Development</Link></li>
        </ul>
        <Switch>
            <Route exact path={`${match.path}/:slug`} component={servicesDone}/>
        </Switch>
            
            
    </>
    )
}
const Contact =()=>{
    return (
    <>
        <h1>Contact page</h1>
        <ul>
            <li>Email:vishwajett@gmail.com</li>
            <li>Contact No: 100</li>
        </ul>
    </>
    )
}
const PageNotFound =()=>{
    return (
    <>
        <h1>404 Error</h1>
        <p>oops page not found</p>
    </>
    )
}
 export default RouterDemo;
 

 const servicesDone =({match})=>{
     console.log(match)
    return (
    <>
        <h1>Services Details</h1>
        <p>Service Name: {match.params.slug}</p>
    </>
    )
}