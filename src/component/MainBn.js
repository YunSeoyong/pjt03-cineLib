import { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "../api/axios.js";
import requests from "../api/request.js";

import { truncate } from "../utillhooks/truncate.js"
import { useNavigate } from "react-router";

const MainBn = () => {
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get(requests.fetchNowPlaying);
        const movieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ].id;
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: 'videos' }
        });
        setMovie(movieDetail);
    };

    return (
        <MainBnWrap
            className="mainBn"
            style={{
                backgroundImage: movie.backdrop_path ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` : "none"
            }}
            onClick={() => {navigate(`/detail/${movie.id}`)}}
        >
            <BnContent>
                <h2>{movie.title || movie.original_title || movie.name}</h2>
                <div className="overview">{movie.overview && truncate(movie.overview, 200)}</div>
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
    margin-bottom: 60px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    cursor: pointer;
    @media screen and (min-width:768px){
        margin-bottom: 80px;
    }
    @media screen and (min-width:1024px){
        margin-bottom: 100px;
    }
`;
const BnContent = styled.div`
    position: absolute;
    bottom: 15%;
    left: 0;
    padding: 14px;
    
    h2{
        margin-bottom: 25px;
        font-size: var(--font-lg);
        font-weight: 700;
        line-height: 1.3em;
    }
    .overview{
        font-size: var(--font-con);
        line-height: 1.5em;
    }
    @media screen and (min-width:768px){
        bottom: 20%;
        padding: 20px;
    }
    @media screen and (min-width:1480px){
        bottom: 15%;
        padding: 60px;
    }
    @media screen and (min-width:1920px){
        padding: 100px;
    }
`;