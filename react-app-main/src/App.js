import React from 'react'
import Navbar from './Components/Layout/Navbar'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Home from './Components/Pages/Home'

const App = () => {
    return (
        <>
            <Navbar/>
            <h1>Hello people</h1>
            <Home/>
            <About/>
            <Contact/>
        </>
    )  
}

export default App


