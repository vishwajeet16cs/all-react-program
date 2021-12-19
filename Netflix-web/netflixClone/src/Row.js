// it is an component
//rfce - short cut
import React, { useState,useEffect } from 'react';
import axios from './axios'
import requests from './request';
// axios - file is default export so we can change the name from instance to axios


// function Row({title}) {--title is nothing but destructurnig of props we get 
function Row({title,fetchUrl }) {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        console.log("row comp useEffent check")
        // async because data come form TPS don't know exact what time it will take
        async function fetchData(){
            console.log("async check")
            //await - wait for server response then do some thing
            const request = await axios.get(fetchUrl); 
            console.log("hello check",request);
            return requests;
            // fetchUrl -coming from app,js as props 
            //axios.get(fetchUrl);-->axios->https://api.themoviedb.org/3
            // fetchUrl->/discover/tv?api_key=${API_KEY}&with_networks=213
            //axios+fetchUrl=https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213

        }
        fetchData();
    },[]) 
    //[]=> konwns as dependency
    // if[movies] it will run once when code load and it will run every singal time when movies changes 
    // if [], run once when the row loads, and dont run again=>(only run once whene page load)
     console.log("row component check")
    return (
        <div>
            {/* title */}
            <h2>{title}</h2>{/* getting props from app.js */} 


            {/* container-> posters */}
            
        </div>
    )
}

export default Row
