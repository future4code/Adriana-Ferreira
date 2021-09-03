import React, {useState, useEffect} from 'react';
import axios from "../../services/axios";
import {base_url} from "../../services/base_url";
import {RowPoster, RowPosters, RowTitle} from "../Row/styled"

function Row({title, getUrl, isLargeRow}) {
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
        <Row>
            <RowTitle>{title}</RowTitle>
            <RowPosters>
                {movies.map(movie =>(
                    <RowPoster 
                        key={movie.id} 
                        src={`${base_url}${
                          isLargeRow? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}/>
                ))}                
            </RowPosters>
        </Row>
    )
}

export default Row
