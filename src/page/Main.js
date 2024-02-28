import styled from "styled-components";
import MainBn from "../component/MainBn";
import MovieRow from "../component/MovieRow";

import requests from "../api/request";
import MovieList from "../component/MovieList";

const Main = () => {


    return (
        <MainWrap>
            <MainBn />
            <MovieRow title="Upcoming" id="UC" fetchUrl={requests.fetchUpcoming} />
            <MovieRow title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
            <MovieList title="Now Playing" id="NP" fetchUrl={requests.fetchNowPlaying} />
        </MainWrap>
    );
};
export default Main;

const MainWrap = styled.main`
    position: relative;
    width: 100%;
    padding-top: 80px;
`;