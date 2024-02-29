import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import styled from "styled-components";
import axios from "../api/axios";
import requests from "../api/request";
import MovieItem from "../component/MovieItem";
import { useDebounce } from "../utillhooks/useDebounce.js"

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    let query = useQuery();
    let searchTerm = query.get('q');
    const debounceSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if(debounceSearchTerm) {
            fetchSearchMovie(debounceSearchTerm);
        }
    }, [debounceSearchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(`/search/movie?include_adult=false&query=${searchTerm}`);
            setSearchResult(request.data.results);
        } catch(error) {
            console.log(error);
        };
    };

    if(searchResult && Number(searchResult.length) > 0) {
        return (
            <SearchPageWrap>
                <div className="searchpage_in">
                    <ul>
                        {searchResult.map((it) => (
                            <MovieItem {...it} />
                        ))}
                    </ul>
                </div>
            </SearchPageWrap>
        );
    } else {
        return (
            <SearchFail>
                <div className="text">{
                    searchTerm.toString().length === 0 ?
                    '검색어를 입력해 주세요.'
                    : `검색어 ${searchTerm}에 맞는 결과가 없습니다.`
                }</div>
            </SearchFail>
        );
    }
};

export default SearchPage;
const SearchFail = styled.section`
    .text{
        padding: 60px 20px;
        text-align: center;
    }
`;
const SearchPageWrap = styled.section`
    position: relative;
    .searchpage_in{
        padding-right: 14px;

        ul{
            display: flex;
            flex-wrap: wrap;
        }
    }
    @media screen and (min-width:768px){
        .searchpage_in{
            padding-right: 20px;
        }
    }
    @media screen and (min-width:1024px){
        .searchpage_in{
            padding-right: 20px;
        }
    }
    @media screen and (min-width:1480px){
        .searchpage_in{
            width: 1440px;
            padding-right: 0;
            margin: 0 auto;
        }
    }
`;
