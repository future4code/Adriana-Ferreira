import React from "react";
import Home from "../pages/Home/Home";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Categories from "../pages/Categories/Categories"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function RouteManager (){
  return (
    <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Home} />          
          <Route path="/movie/:id" component={MovieDetails} /> 
          <Route path="/genre/movie/list" component={Categories}/>
       </Switch>
    </BrowserRouter>
  )
}

export default RouteManager;
