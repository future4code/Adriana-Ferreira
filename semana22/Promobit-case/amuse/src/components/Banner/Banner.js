import React, {useState, useEffect} from 'react';
import axios from "../../services/axios";
import requests from "../../services/requests";
import {Banners, BannerContents, BannerButtons, BannerButton, BannerDescription} from "./styled"

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
       async function fetchData(){
         const request = await axios.get(requests.getOriginals)
         setMovie(
             request.data.results[
                Math.floor(Math(Math.random() * request.data.results.length))
             ]
         );
         return request;
       }
       fetchData();
    }, []);    

    return (
        <Banners>            
            <BannerContents>
               <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
               <BannerButtons>
                  <BannerButton>Play</BannerButton>
                  <BannerButton>My List</BannerButton>
               </BannerButtons>
            </BannerContents> 
            <BannerDescription>{movie?.overview}</BannerDescription>         
        </Banners>
    )
}

export default Banner;


