import React from 'react';
import {HeadContainer, Title, TitleContainer} from './styled';
import SearchBar from '../SearchBar/SearchBar';
import SelectGender from '../SelectGender/SelectGender'
import { useHistory } from 'react-router';

const Header = () => {
    const history = useHistory();

    return (
        <HeadContainer>
            <TitleContainer>              
               <Title>Popular Movies</Title>               
            </TitleContainer>
            <SearchBar/>  
            <SelectGender/>                 
        </HeadContainer>
    )
}

export default Header
