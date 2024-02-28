import { useCallback, useEffect, useState } from "react";

import axios from "../api/axios";
import styled from "styled-components";

import MovieItem from "./MovieItem.js";

const MovieList = ({
    title,
    id,
    fetchUrl,
}) => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = useCallback (async () => {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
    }, [fetchUrl]);
    
    useEffect(() => {
        fetchMovies();
    }, [fetchMovies])

    return (
        <Movielist>
            <MovieListUl>
                <div className="movieBox">
                    {movies.map((it) => (
                        <MovieItem key={it.id} {...it} />
                    ))}
                </div>
            </MovieListUl>
        </Movielist>
    );
};

export default MovieList;

const Movielist = styled.section``;
const MovieListUl = styled.ul``;