import React, {useState, useEffect} from 'react';
import axios from "../../services/axios";
import requests from "../../services/requests";
import { base_url } from '../../services/base_url';
import {Banners, BannerContents, BannerButtons, BannerButton, BannerDescription, BannerTitle, BannerFadeBottom} from "./styled"

function Banner() {
    const [movie, setMovie] = useState([]);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

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
        <Banners img={`${base_url}${movie.poster_banner}`}>            
            <BannerContents>
                <BannerTitle>{movie?.title || movie?.name || movie?.original_name}</BannerTitle>
                    <BannerButtons>
                        <BannerButton>Play</BannerButton>
                        <BannerButton>My List</BannerButton>
                    </BannerButtons>           
                <BannerDescription>{truncate (movie?.overview, 150)}</BannerDescription>         
            </BannerContents> 
            <BannerFadeBottom></BannerFadeBottom>
        </Banners>
    )
}

export default Banner;


