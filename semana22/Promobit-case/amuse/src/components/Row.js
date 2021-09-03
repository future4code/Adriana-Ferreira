import React, {useState, useEffect} from 'react';
import axios from "../services/axios";
import {base_url} from "../services/base_url";

function Row({title, getUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
       async function fetchData(){
          const request = await axios.get(getUrl);
          setMovies(request.data.results);
          return request;
       }
       fetchData();
    }, [getUrl]);

    return (
        <div className="row_posts">
            <h2>{title}</h2>
            <div className="">
                {movies.map(movie =>(
                    <img className="row_poster" src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                ))}                
            </div>
        </div>
    )
}

export default Row
