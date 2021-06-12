import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ListTripsPage } from './pages/ListTripsPage';
import { ApplicationFormPage } from './pages/AplicationFormPage';
import { CreateTripPage } from './pages/CreateTripPage';
import { TripDetailsPage } from './pages/TripDetailsPage';
import { AdminHomePage } from './pages/AdminHomePage';
import { LoginPage } from './pages/LoginPage';
import styled from "styled-components";


const AppContainer = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   padding:16px;
`

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/criar-viagem">
            <CreateTripPage />
          </Route>
          <Route exact path="/detalhes-viagem">
            <TripDetailsPage />
          </Route>
          <Route exact path="/admin">
            <AdminHomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/inscricao">
            <ApplicationFormPage />
          </Route>
          <Route exact path="/viagens/lista">
            <ListTripsPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
