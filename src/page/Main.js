import styled from "styled-components";
import MainBn from "../component/MainBn";
import MovieRow from "../component/MovieRow";

import requests from "../api/request";

const Main = () => {


    return (
        <MainWrap>
            <MainBn />
            <MovieRow title="Upcoming" id="UC" fetchUrl={requests.fetchUpcoming} path="/upcoming" />
            <MovieRow title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} path="/toprated" />
            <MovieRow title="Now Playing" id="NP" fetchUrl={requests.fetchNowPlaying} path="/nowplaying" />
        </MainWrap>
    );
};
export default Main;

const MainWrap = styled.main`
    position: relative;
`;