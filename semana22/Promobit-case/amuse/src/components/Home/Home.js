import React from "react";
import Row from "../Row/Row";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";
import requests from "../../services/requests";
import {ScreenContainer} from "./styled";

function Home() {
    return (
        <ScreenContainer>   
            <Nav/> 
              <Banner/>     
                <Row title="Originals" getUrl={requests.getOriginals} isLargeRow></Row>
                <Row title="Trending now" getUrl={requests.getTrending}></Row>
                <Row title="Top Rated" getUrl={requests.getTopRated}></Row>
                <Row title="Comedy Movies" getUrl={requests.getComedyMovies}></Row>
                <Row title="Romance Movies" getUrl={requests.getRomanceMovies}></Row>
                <Row title="Horror Movies" getUrl={requests.getHorrorMovies}></Row>
                <Row title="Documentaries" getUrl={requests.getDocumentaries}></Row>           
        </ScreenContainer>
    );
}

export default Home;
