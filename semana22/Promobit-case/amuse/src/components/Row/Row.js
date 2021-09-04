import React, {useState, useEffect} from 'react';
import axios from "../../services/axios";
import {base_url} from "../../services/base_url";
import {RowPoster, RowPosters, RowTitle} from "../Row/styled";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({title, getUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl]= useState("");

    useEffect(() => {
       async function fetchData(){
          const request = await axios.get(getUrl);
          setMovies(request.data.results);
          return request;
       }
       fetchData();
    }, [getUrl]);

    const opts = {
       height:"390",
       width:"100%",
       playerVars:{
           //https://developers.google.com/youtube/player_parameters
           autoplay:1,
       },
    };

    const handleClick = (movie) => {
       if(trailerUrl){
           setTrailerUrl("");
       }else{
           movieTrailer(movie?.name || "")
           .then(url => {
               const urlParams = new URLSearchParams (new URL(url).search);
               setTrailerUrl(urlParams.get('v'));
           })
           .catch(error => console.log(error));
       }
    }

    return (
        <Row>
            <RowTitle>{title}</RowTitle>
            <RowPosters>
                {movies.map(movie =>(
                    <RowPoster 
                        key={movie.id} 
                        onClick={()=>handleClick(movie)}
                        src={`${base_url}${
                          isLargeRow? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}/>
                ))}                
            </RowPosters>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </Row>
    )
}

export default Row
