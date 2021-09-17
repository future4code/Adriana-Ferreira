import React, {useContext} from 'react';
import { useHistory } from 'react-router';
import { img_url } from '../../constants/Urls/img_url';
import { goToMovieDetails } from '../../route/coordinator';
import {PosterBoard, Poster, ContainerCard} from './styled';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Link } from 'react-router-dom';

const MovieCard = (props) => {      
    const { filteredMovies } = useContext(GlobalStateContext);
    const history = useHistory();  
    
    const movieFrames = filteredMovies.map((movie) => {       
    return (
        <PosterBoard>
            <Poster             
                key={movie.id}                       
                src={`${img_url}${movie.poster_path}`} 
                alt={movie.title}/>    
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color:'#fcba03', justifyContent:'center', display:'flex'}}>              
                <button>View details</button>                 
            </Link>
        </PosterBoard>       
    )});

    return(
        <ContainerCard>
            {movieFrames}
        </ContainerCard>
    )
};

export default MovieCard;
