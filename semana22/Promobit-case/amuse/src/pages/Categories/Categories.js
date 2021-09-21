import axios from 'axios';
import { SelectContainer} from './styled';
import React, { useEffect, useState} from 'react';
import { GlobalStateContext } from "../../global/GlobalStateContext";

const Categories = () => {    
    const [moviesByCategory, setMoviesByCategory] = useState([]);  
    const [currentCategory, setCurrentCategory] = useState([]); 
      
    useEffect(() => {
       getMoviesByCategory()
    },[]);     

    const getMoviesByCategory = async (category) => {   
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=bbb3c5956c9ee54b49b8031bbbffd77b&with_genres=${category}`)
          setMoviesByCategory(res.data.results)     
          //setCurrentCategory(category)  
    }    

    return (
        <SelectContainer>
           <p>jjj</p>
        </SelectContainer>
    )
}

export default Categories;
