import './App.css';
import React from "react";
import Row from "./Row";
import requests from "./requests";

function App() {
    return (
        <div className="App">
            <h1>I am making Netflix Clone</h1>
            <Row title="NETFLIX ORIGINALS" fetchUrl={fetchNetflixOriginal}/>
            <Row title="Trending Now" fetchUrl={fetchTrending}/>
        </div>
    );
}

export default App;
