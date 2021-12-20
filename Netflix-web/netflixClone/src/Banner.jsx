 import React, { useEffect, useState } from 'react'
 import axios from './axios';
 import requests from './request';
 function Banner() {
     const [movie,setMovie] = useState([]);
     useEffect(()=>{
         console.log("useEffect check")
         async function fetchData(){
                console.log("async function check")
                const request = await axios.get(requests.fetchNetflixOriginals);
                // console.log("data is here ",requests )
                setMovie()
            }
            fetchData();
     },[]);
     return (
         <div>
             <header>
                 {/* title */}
                 {/* dic 2 button */}
                 {/* description */}
             </header>
         </div>
     )
 }
 
 export default Banner
 