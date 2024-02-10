import React from "react";
import { useState,useEffect } from "react";
import './App.css'
import SearchIcon from "./Search.svg"
import MovieCard from "./MovieCard"


//7fa42357

const APi_Url="http://www.omdbapi.com?apikey=7fa42357"
const App=()=>{
    const [movies, setMovies]=useState([])
    const [searchTerm, setSearchTerm]= useState('')
    const [searchValue, setSearchValue]= useState('')


    const searchMovies= async(title)=>{

            const response= await fetch(`${APi_Url}&s=${title}`);
            const data= await response.json();
            setMovies(data.Search);

    }
    useEffect(()=>{
        searchMovies(searchTerm);


    },[searchTerm]);

    return(
        <div className="app">
        <h1>movie land</h1>
        <div className="search">
            <input placeholder="Search for movies"  value={searchValue} onChange={(e)=>setSearchValue(e.target.value)

            }/>
            <img src={SearchIcon} alt="search" onClick={()=> setSearchTerm(searchValue)

            }/>
        </div>
        {movies?.length>0?(
        <div className="container">
            {
                movies.map((movie)=>(<MovieCard movie={movie}/>))
                
            }
        </div>
        ):(
            <div className="empty">
                <h2>there is no movies found!</h2>
            </div>
        )
        
        }
        
        </div>
    );
}
export default App;