import { useEffect, useState } from "react";

import axios from "../api/axios.js";
import requests from "../api/request.js";

import MovieTop from '../component/MovieTop.js';
import MovieList from '../component/MovieList.js';


const YearsBest = ({dummyList}) => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get(requests.fetchDiscoverMovies);
        console.log(response);
    };

    return (
        <div>
            
        </div>
    );
};

export default YearsBest;