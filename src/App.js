import './App.css';
import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner"

function App() {
    return (
        <div className="App">
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginal}
                 isLargeRow/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        </div>
    );
}

export default App;
