import { useCallback, useEffect, useRef, useState } from "react";

import axios from "../api/axios";
import styled from "styled-components";

import MovieItem from "./MovieItem.js";

const MovieList = ({
    movies,
    fetchUrl,
    page,
    setPage,
}) => {
    const loaderRef = useRef();

    useEffect(() => {

        const handleObserver = async (entries) => {
            const target = entries[0];
            if (target.isIntersecting) {
                await setPage((prevPage) => prevPage + 1);
            }
        };

        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
        });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [page]);

    return (
        <Movielist>
            <MovieListUl>
                {movies && movies.map((it) => (
                    <MovieItem key={it.id} {...it} />
                ))}
            </MovieListUl>
            <div id="observer" style={{ width: "100%", height: "10px" }} ref={loaderRef}>
                Loading...
            </div>
        </Movielist>
    );
};

export default MovieList;

const Movielist = styled.section`
`;
const MovieListUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-right: 14px;
`;