import './Nav.css'
import React, { useEffect,useState } from 'react'

function Navbar() {
//   let handleShow
const [show, handleShow] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
        });
        return () => {
          window.removeEventListener("scroll");
        };
      }, []);
    return (
        // <div className={`nav ${show && "nav__black"}`}>
        <div className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix logo" />
            <img className='nav__avatar' src="https://image.similarpng.com/very-thumbnail/2021/01/Netflix-logo-on-transparent-background-PNG.png" alt="Netflix logo" />
            
        </div>
    )
}

export default Navbar

// import React, { useEffect, useState } from "react";
// import "./Nav.css";

// function Nav() {
//   const [show, handleShow] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);

//   return (
//     <div className={`nav ${show && "nav__black"}`}>
//       <img
//         className="nav__logo"
//         src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTExIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDUuMDYyMzMsMTQuMjgwNjI2MSBMMTEwLjk5OTE1NiwzMCBDMTA5LjI0OTIyNywyOS43NDk3NDIyIDEwNy41MDAyMzQsMjkuNDM2Njg1NyAxMDUuNzE4NDM3LDI5LjE1NTQ5NzIgTDEwMi4zNzQxNjgsMjAuNDY4NjQ3NSBMOTguOTM3MTA3NSwyOC40Mzc1MjkzIEM5Ny4yNDk5NzY2LDI4LjE1NjM0MDggOTUuNTkyODM5MSwyOC4wNjE2NzQgOTMuOTA1NzA4MSwyNy44NDMyODQzIEw5OS45MzcyMDEyLDE0LjA5MzE2NzEgTDk0LjQ2ODA4NTEsLTUuNjg0MzQxODllLTE0IEw5OS41MzEzNTI1LC01LjY4NDM0MTg5ZS0xNCBMMTAyLjU5MzQ5NSw3Ljg3NDIxNTAyIEwxMDUuODc0OTY1LC01LjY4NDM0MTg5ZS0xNCBMMTEwLjk5OTE1NiwtNS42ODQzNDE4OWUtMTQgTDEwNS4wNjIzMywxNC4yODA2MjYxIFogTTkwLjQ2ODY0NzUsLTUuNjg0MzQxODllLTE0IEw4NS44NzQ5NjQ5LC01LjY4NDM0MTg5ZS0xNCBMODUuODc0OTY0OSwyNy4yNDk5NzY2IEM4Ny4zNzQ2MzY4LDI3LjM0MzcwNjEgODguOTM3MTA3NSwyNy40MDU1Njc1IDkwLjQ2ODY0NzUsMjcuNTkzMDI2NSBMOTAuNDY4NjQ3NSwtNS42ODQzNDE4OWUtMTQgWiBNODEuOTA1NTIwNywyNi45MzY5MiBDNzcuNzE4NjI0MSwyNi42NTU3MzE2IDczLjUzMDc5MDEsMjYuNDA2NDExMSA2OS4yNTAxNjQsMjYuMzExNzQ0MyBMNjkuMjUwMTY0LC01LjY4NDM0MTg5ZS0xNCBMNzMuOTM2NjM4OSwtNS42ODQzNDE4OWUtMTQgTDczLjkzNjYzODksMjEuODc0NTg5OSBDNzYuNjI0ODAwOCwyMS45MzczODg3IDc5LjMxMjAyNTUsMjIuMTU1Nzc4NCA4MS45MDU1MjA3LDIyLjI4MDQzODcgTDgxLjkwNTUyMDcsMjYuOTM2OTIgWiBNNjQuMjQ5Njk1NCwxMC42NTYxMDY1IEw2NC4yNDk2OTU0LDE1LjM0MzUxODYgTDU3Ljg0NDIyMTYsMTUuMzQzNTE4NiBMNTcuODQ0MjIxNiwyNS45OTk2MjUxIEw1My4yMTg2NzA5LDI1Ljk5OTYyNTEgTDUzLjIxODY3MDksLTUuNjg0MzQxODllLTE0IEw2Ni4zNDM2MTIzLC01LjY4NDM0MTg5ZS0xNCBMNjYuMzQzNjEyMyw0LjY4NzQxMjEzIEw1Ny44NDQyMjE2LDQuNjg3NDEyMTMgTDU3Ljg0NDIyMTYsMTAuNjU2MTA2NSBMNjQuMjQ5Njk1NCwxMC42NTYxMDY1IFogTTQ1LjM0MzUxODYsNC42ODc0MTIxMyBMNDUuMzQzNTE4NiwyNi4yNDk4ODI4IEM0My43ODEwNDc5LDI2LjI0OTg4MjggNDIuMTg3NjQ2NSwyNi4yNDk4ODI4IDQwLjY1NjEwNjUsMjYuMzExNzQ0MyBMNDAuNjU2MTA2NSw0LjY4NzQxMjEzIEwzNS44MTIxNjYxLDQuNjg3NDEyMTMgTDM1LjgxMjE2NjEsLTUuNjg0MzQxODllLTE0IEw1MC4yMTgzODk3LC01LjY4NDM0MTg5ZS0xNCBMNTAuMjE4Mzg5Nyw0LjY4NzQxMjEzIEw0NS4zNDM1MTg2LDQuNjg3NDEyMTMgWiBNMzAuNzQ5ODM2LDE1LjU5MjgzOTEgQzI4LjY4Nzc4NywxNS41OTI4MzkxIDI2LjI0OTg4MjgsMTUuNTkyODM5MSAyNC40OTk5NTMxLDE1LjY4NzUwNTkgTDI0LjQ5OTk1MzEsMjIuNjU2MjkzOSBDMjcuMjQ5OTc2NiwyMi40Njc4OTc2IDMwLDIyLjI0OTUwNzkgMzIuNzgwOTU0MiwyMi4xNTU3Nzg0IEwzMi43ODA5NTQyLDI2LjY1NTczMTYgTDE5LjgxMjU0MSwyNy42ODc2OTMzIEwxOS44MTI1NDEsLTUuNjg0MzQxODllLTE0IEwzMi43ODA5NTQyLC01LjY4NDM0MTg5ZS0xNCBMMzIuNzgwOTU0Miw0LjY4NzQxMjEzIEwyNC40OTk5NTMxLDQuNjg3NDEyMTMgTDI0LjQ5OTk1MzEsMTAuOTk5MTU2NCBDMjYuMzEyNjgxNiwxMC45OTkxNTY0IDI5LjA5MzYzNTgsMTAuOTA1NDI2OSAzMC43NDk4MzYsMTAuOTA1NDI2OSBMMzAuNzQ5ODM2LDE1LjU5MjgzOTEgWiBNNC43ODExNDE2MywxMi45Njg0MTMyIEw0Ljc4MTE0MTYzLDI5LjM0Mjk1NjIgQzMuMDk0MDEwNjksMjkuNTMxMzUyNSAxLjU5MzQwMTQ0LDI5Ljc0OTc0MjIgMCwzMCBMMCwtNS42ODQzNDE4OWUtMTQgTDQuNDY5MDIyNCwtNS42ODQzNDE4OWUtMTQgTDEwLjU2MjM3NywxNy4wMzE1ODY4IEwxMC41NjIzNzcsLTUuNjg0MzQxODllLTE0IEwxNS4yNDk3ODkxLC01LjY4NDM0MTg5ZS0xNCBMMTUuMjQ5Nzg5MSwyOC4wNjE2NzQgQzEzLjU5MzU4ODksMjguMzQzNzk5OCAxMS45MDY0NTgsMjguNDM3NTI5MyAxMC4xMjQ2NjAyLDI4LjY4Njg0OTggTDQuNzgxMTQxNjMsMTIuOTY4NDEzMiBaIiBmaWxsPSIjRTUwOTE1Ii8+PC9zdmc+"
//         alt="NETFLIX CLONE"
//       />
//     </div>
//   );
// }

// export default Nav;

