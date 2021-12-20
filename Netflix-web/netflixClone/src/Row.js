// it is an component
//rfce - short cut
import React, { useState,useEffect} from 'react';
import axios from './axios'
import requests from './request';
import "./Row.css"
// axios - file is default export so we can change the name from instance to axios

const base_url= "https://image.tmdb.org/t/p/original/"
// function Row({title}) {--title is nothing but destructurnig of props we get 
function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        // console.log("row comp useEffent check")
        // async because data come form TPS don't know exact what time it will take
        async function fetchData(){
            // console.log("async check")
            //await - wait for server response then do some thing
            const request = await axios.get(fetchUrl); 
            // console.log("hello check",request.data.results);
            setMovies(request.data.results);
            return requests;
            // return requests.data.results;
            // fetchUrl -coming from app,js as props 
            //axios.get(fetchUrl);-->axios->https://api.themoviedb.org/3
            // fetchUrl->/discover/tv?api_key=${API_KEY}&with_networks=213
            //axios+fetchUrl=https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213

        }
        fetchData();
    },[fetchUrl]) 
    //[fetchUrl]--> if it change useEffect need to rerender the code 
    // we are getting data from outer source 
    //[]=> konwns as dependency
    // if[movies] it will run once when code load and it will run every singal time when movies changes 
    // if [], run once when the row loads, and dont run again=>(only run once whene page load)
    //  console.log("row component check")
    // console.log("table below check")
    // console.log(isLargeRow)
    // console.table(movies)
    return (
        <div className="row">
            <h2>{title}</h2>{/* getting props from app.js */} 

                <div className='row_posters'>
                        {movies.map((movie)=>{
                            return <>
                            {/* <img src={movie.poster_part} alt={movie.name} key={index}/> */}
                            <img
                            key={movie.id}// key make slightly web faster small optimization   
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                            src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                            alt={movie.name}/>
                            {/* <img
                            key={movie.id}// key make slightly web faster small optimization   
                            className='row__poster' 
                            src={`${base_url}${movie.poster_path}`} 
                            alt={movie.name}/> */}
                            </>
                        })}
                </div>

            {/* container-> posters */}
            
        </div>
    )
}

export default Row
