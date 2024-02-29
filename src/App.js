// App.js
import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import Main from './page/Main.js';
import styled from 'styled-components';
import ListPage from './page/ListPage.js';
import requests from './api/request.js';
import DetailPage from './page/DetailPage.js';
import SearchPage from './page/SearchPage.js';

const Layout = () => {
    return (
        <Wrapper>
            <Header />
            <Outlet />
            <Footer />
        </Wrapper>
    )
}

function App() {
    const LPList = [
        {
            id: 0,
            name: "Now Playing",
            path: "/nowplaying",
            code: "NP",
            fetchUrl: requests.fetchNowPlaying,
        },
        {
            id: 1,
            name: "Top Rated",
            path: "/toprated",
            code: "TR",
            fetchUrl: requests.fetchTopRated,
        },
        {
            id: 2,
            name: "Upcoming",
            path: "/upcoming",
            code: "UC",
            fetchUrl: requests.fetchUpcoming,
        },
    ];

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        {LPList && LPList.map((it) => (
                            <Route
                                key={it.code} 
                                path={it.path} 
                                element={
                                    <ListPage 
                                        title={it.name}
                                        fetchUrl={it.fetchUrl}
                                    />
                                }
                            />
                        ))}
                        <Route path='/search' element={<SearchPage />} />
                        <Route path='/detail/:movieId' element={<DetailPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

const Wrapper = styled.div`
    box-sizing : border-box;
    min-height : 100vh;
    padding-top : 80px;
`;
