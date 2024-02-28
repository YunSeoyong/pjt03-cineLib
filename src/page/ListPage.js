// ListPage.js
import { useCallback, useEffect, useRef, useState } from "react";

import styled from "styled-components";
import MovieItem from "../component/MovieItem";

import axios from "../api/axios";
import requests from "../api/request";

const ListPage = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const loaderRef = useRef();

    const fetchData = async () => {
        try {
            const apiKey = "1c97eb8d751c4ff940394548eb1e3d56";
            const endpoint = `http://api.themoviedb.org/3/${fetchUrl}`;
            const response = await axios.get(endpoint, {
                params: { api_key: apiKey, language: "ko-KR", page },
            });
            const fetchedMovies = response.data.results || [];
            setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]);
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };

    useEffect(() => {
        setMovies([]);
        setPage(1);
        fetchData();
    }, [fetchUrl]);

    useEffect(() => {
        fetchData();
        const handleObserver = (entries) => {
            const target = entries[0];
            if (target.isIntersecting) {
                setPage((prevPage) => prevPage + 1);
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
        <Listpage>
            <div className="listpage_in">
                <h2>{title}</h2>
                <MovieContent>
                    <ul>
                        {movies &&
                            movies.map((it) => <MovieItem key={it.id} {...it} />)}
                    </ul>
                </MovieContent>
                <div
                    id="observer"
                    style={{ width: "100%", height: "10px", textAlign: "center" }}
                    ref={loaderRef}
                >
                    Loading...
                </div>
            </div>
        </Listpage>
    );
};

export default ListPage;

const Listpage = styled.section`
    width: 100%;
    .listpage_in{
        h2{
            font-size: var(--font-lg);
            line-height: 1em;
            font-weight: 600;
            margin: 0 0 30px 14px;
        }
    }
`;
const MovieContent = styled.div`
    ul {
        display: flex;
        flex-wrap: wrap;
        padding-right: 14px;
    }
`;
