import React, { useContext, useEffect } from 'react';
import { img_url } from '../../constants/Urls/img_url';
import { goToHome } from '../../route/coordinator';
import Arrow from '../../img/arrow.png';
import { useHistory } from 'react-router';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { DetailsButton, InfoBoard, MovieDetailsContainer, PosterBoard} from './styled';

const MovieDetails = ({match}) => {
  const {item, setItem} = useContext(GlobalStateContext); 
  const history = useHistory();    

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=bbb3c5956c9ee54b49b8031bbbffd77b`);
    const item = await fetchItem.json();
    setItem(item);
  }    

  return (
    <div>
      <DetailsButton onClick={()=>goToHome(history)}>
        <input type="image" src={Arrow} />
        </DetailsButton>
      <MovieDetailsContainer>      
        <PosterBoard>
            <img
            src={`${img_url}${item.poster_path}`} 
            alt={item.title}
            />
        </PosterBoard>
        <InfoBoard>
            <h4>{item.title}</h4>
            <p>"{item.tagline}"</p>
            <p>Sinpose: {item.overview} </p>    
            <p>Lançamento: {item.release_date}</p> 
            <p>Classificação: {item.vote_average}</p> 
            <p>Idioma: Inglês</p>    
        </InfoBoard>       
      </MovieDetailsContainer>
    </div>
  )
}

export default MovieDetails;
