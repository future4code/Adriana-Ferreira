import React from 'react';
import {HeadContainer, Title, TitleContainer} from './styled';
import SearchBar from '../SearchBar/SearchBar'
import SelectGender from '../SelectGender/SelectGender';

const Header = () => {
    
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
