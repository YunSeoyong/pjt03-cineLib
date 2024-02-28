import { useCallback, useEffect, useRef, useState } from "react";

import styled from "styled-components";
import MovieList from "../component/MovieList";

import axios from "../api/axios";
import requests from "../api/request";

const ListPage = ({title, id, fetchUrl}) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = useCallback(async () => {
        try {
            const apiKey = '1c97eb8d751c4ff940394548eb1e3d56';
            const endpoint = `http://api.themoviedb.org/3/${fetchUrl}`;
            const response = await axios.get(endpoint, {
                params: { api_key: apiKey, language: "ko-KR", page },
            });
            const fetchedMovies = response.data.results || [];
            setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]);
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    }, [fetchUrl]);

    useEffect(() => {
        fetchData();
    }, [fetchUrl])

    return (
        <Listpage>
            <h2>{title}</h2>
            <MovieList title={title} id={id} fetchUrl={fetchUrl} movies={movies} page={page} setPage={setPage} />
        </Listpage>
    );
};

export default ListPage;

const Listpage = styled.section`
    width: 100%;
`;