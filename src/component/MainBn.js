import { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "../api/axios.js";
import requests from "../api/request.js";

import { truncate } from "../utillhooks/truncate.js"

const MainBn = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get(requests.fetchNowPlaying);
        console.log(response);
        const movieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ].id;
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: 'videos' }
        });
        setMovie(movieDetail);
    };
    console.log(movie);

    return (
        <MainBnWrap
            className="mainBn"
            style={{
                backgroundImage: movie.backdrop_path ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` : "none"
            }}
        >
            <BnContent>
                <h2>{movie.title || movie.original_title || movie.name}</h2>
                <div className="overview">{movie.overview && truncate(movie.overview, 100)}</div>
            </BnContent>
        </MainBnWrap>
    );
};

export default MainBn;

const MainBnWrap = styled.div`
    position: relative;
    width: 100%;
    height: calc(100dvh - 80px);
    max-height: 960px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
`;
const BnContent = styled.div`
    position: absolute;
    bottom: 15%;
    left: 0;
    padding: 20px;
    
    h2{
        margin-bottom: 25px;
        font-size: var(--font-lg);
        font-weight: 700;
        line-height: 1.3em;
    }
    .overview{
        font-size: var(--font-sm);
    }
`;