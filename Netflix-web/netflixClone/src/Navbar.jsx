import './Nav.css'
import React, { useEffect } from 'react'

function Navbar() {
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //       if (window.scrollY > 100) {
    //         handleShow(true);
    //       } else handleShow(false);
    //     });
    //     return () => {
    //       window.removeEventListener("scroll");
    //     };
    //   }, []);
    return (
        <div className='nav'>
            <img className='nav__logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix logo" />
            <img className='nav__avatar' src="https://image.similarpng.com/very-thumbnail/2021/01/Netflix-logo-on-transparent-background-PNG.png" alt="Netflix logo" />
            
        </div>
    )
}

export default Navbar
