import React, { useState } from 'react'
import { GlobalStyle } from '../src/GlobalStyles'
import { PageContainer } from '../src/GlobalStyles'
import { Card } from '../src/GlobalStyles'
import HomeScreen from './components/HomeScreen'
import MatchScreen from './components/MatchScreen'
import Header from './components/Header'


function App() {
  const [pagina, setPagina] = useState('matchs');

  const showPage = () => {
    switch (pagina) {
      case 'home':
        return <HomeScreen />
      case 'matchs':
        return <MatchScreen />
      default:
        return <HomeScreen />
    }
  }

  const changePage = () => {
    if (pagina === 'home') {
      setPagina('matchs');
    } else {
      setPagina('home');
    }
  }

  return (
    <PageContainer>
      <GlobalStyle />
      <Card>
        <Header changePage={changePage} />
        {showPage()}
      </Card>
    </PageContainer>
  );
}

export default App;
