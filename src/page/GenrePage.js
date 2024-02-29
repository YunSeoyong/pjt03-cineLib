// GenrePage.js
import { useState } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import GenreNav from "../component/GenreNav";
import ListPage from "./ListPage";

import requests from "../api/request";

const genreList = [
    {
        id: 28,
        title: "Action",
        fetchUrl: requests.fetchActionMovies,
    },
    {
        id: 35,
        title: "Comedy",
        fetchUrl: requests.fetchComedyMovies,
    },
    {
        id: 27,
        title: "Horror",
        fetchUrl: requests.fetchHorrorMovies,
    },
    {
        id: 10749,
        title: "Romance",
        fetchUrl: requests.fetchRomanceMovies,
    },
    {
        id: 14,
        title: "Fantasy",
        fetchUrl: requests.fetchFantasyMovies,
    },
    {
        id: 99,
        title: "Documentaries",
        fetchUrl: requests.fetchDocumentaries,
    },
];
const GenrePage = () => {
    const [select, setSelect] = useState('Action');

    return (
        <div className="GenrePage"
        >
            <GenreIn
            >
                <GenreNav genreList={genreList} select={select} setSelect={setSelect} />
                <Routes>
                    <Route index element={<ListPage title={genreList[0].title} fetchUrl={genreList[0].fetchUrl} />} />
                    {genreList.map((it) => (
                        <Route 
                            exact 
                            path={`/${it.title.toLowerCase()}`} 
                            element={<ListPage key={it.id} {...it} />}
                            key={it.id}
                        />
                    ))}
                </Routes>
            </GenreIn>
        </div>
    );
};

export default GenrePage;

const GenreIn = styled.div`
    position: relative;
    @media screen and (min-width:1480px){
        width: 1440px;
        margin: 0 auto;
    }
`;