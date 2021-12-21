 import React, { useEffect, useState } from 'react'
 import axios from './axios';
 import requests from './request';
//  import "./Banner.css"
 import './Banner.css'
 function Banner() {
     const [movie,setMovie] = useState([]);
     useEffect(()=>{
         console.log("useEffect check")
         async function fetchData(){
                console.log("async function check")
                const request = await axios.get(requests.fetchNetflixOriginals);    
                // console.log("hello check")
                // console.log(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
                setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])  
                // for renodm data selection from api array
                return request;
            }
            fetchData();
     },[]);
     console.log("out of useEffect",movie)
     function truncate(str,n){
         return str?.length>n?str.substr(0,n-1)+"...":str; 
     }
    //  truncate func - display ... after n char EX:- hello how ar...

     return (
         <div>
             <header className='banner'
             style={{
                 backgroungSize:"cover",
                 backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                //  here ? prevent site crash
                 width:"100%",
                 backgroundPosition:"center center"

             }}
             >
                 <div className="banner__contents">
                 {/* title */}
                 <h1 banner__title>{movie?.title || movie?.name || movie?.original_name}</h1>
                 <div className="banner__buttons">
                 {/* button.banner__button*2 -create 2 btn with same className */}
                       <button className="banner__button">Play
                       </button>
                        <button className="banner__button">My List</button>
                 </div>
                 {/* div.banner__button>button.banner__buttons*2-->shortcut for above div $ btn*/}
                 {/* description */}
                 <h1 className='banner__description' style={{color:"white"}}>{truncate(movie?.overview,150)}</h1>
                 </div>
                    <div className='banner--fadeBottom'/>
             </header>
         </div>
     )
 }
 
 export default Banner
 