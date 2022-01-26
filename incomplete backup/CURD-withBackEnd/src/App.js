import React from 'react'
import Navbar from './Components/Layout/Navbar'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Home from './Components/Pages/Home'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {BrowserRouter,Routes,Route} from "react-router-dom";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Navbar/>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                </Routes>     
            </BrowserRouter>
        </>
    )  
}

export default App


