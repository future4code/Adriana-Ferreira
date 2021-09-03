import React from "react";
import Row from "./components/Row";
import requests from "./services/requests"

function App() {
  return (
    <div>
      <h1>amuse</h1>
        <Row title="Originals" getUrl={requests.getOriginals}></Row>
        <Row title="Trending now" getUrl={requests.getTrending}></Row>
        <Row title="Top Rated" getUrl={requests.getTopRated}></Row>
        <Row title="Comedy Movies" getUrl={requests.getComedyMovies}></Row>
        <Row title="Romance Movies" getUrl={requests.getRomanceMovies}></Row>
        <Row title="Horror Movies" getUrl={requests.getHorrorMovies}></Row>
      <Row title="Documentaries" getUrl={requests.getDocumentaries}></Row>
    </div>
  );
}

export default App;

//Chave da API (v3 auth)  
//bbb3c5956c9ee54b49b8031bbbffd77b

//Exemplo de Requisição de API 
//https://api.themoviedb.org/3/movie/550?api_key=bbb3c5956c9ee54b49b8031bbbffd77b

//https://amuse-812a0.web.app