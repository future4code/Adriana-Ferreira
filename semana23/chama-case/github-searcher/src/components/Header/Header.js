import React from 'react';
import logo from "../../image/logo.png";
import { HeaderContainer } from './styles';

const Header = () => {
    return ( 
      <HeaderContainer>
        <img src={logo} alt='Github logo'/>
        <h1>Profile Searcher</h1>  
      </HeaderContainer>  
    )
}

export default Header;
