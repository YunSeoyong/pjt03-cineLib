import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../api/axios.js";
import requests from "../api/request.js";

const LogInPage = () => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        fetchData();

        return () => {setMovie({})};
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
        <LogIn 
            style={{
                backgroundImage: movie.backdrop_path ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` : "none"
            }}
        >
            <div className="inner">
                로그인 하고 CINE LIB를 즐겨보세요!
            </div>
        </LogIn>
    );
};

export default LogInPage;

const LogIn = styled.section`
    position: relative;
    height: 100dvh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .inner{
        position: absolute;
        top: 40%;
        left: 50%;
        width: 100%;
        font-size: var(--font-md);
        line-height: 1.5em;
        font-weight: 700;
        transform: translate(-50%, -50%);
        text-align: center;
    }
`;