import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

import styled from "styled-components";
import axios from "../api/axios";

const DetailPage = ({
    
}) => {
    let { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchData();
    }, [movieId]);

    const fetchData = async () => {
        const responseInfo = await axios.get(`/movie/${movieId}`);
        const responseCast = await axios.get(`/movie/${movieId}/credits`);
        setMovieInfo(responseInfo.data);
        setCast(responseCast.data.cast);
    };

    useEffect(() => {
        return () => {
            setMovieInfo([]);
            setCast([]);
        }
    })

    return (
        <DetailPageWrap
            style={{
                backgroundImage: movieInfo.backdrop_path ? `url("https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}")` : "none"
            }}
        >
            <div className="detail_in">
                <MovieCon>
                    <Poster>
                        <img 
                            src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}
                            alt={movieInfo.title || movieInfo.original_title}
                        />
                    </Poster>
                    <Info>
                        <div className="title">
                            <h2>{movieInfo.title}</h2>
                            <p>{movieInfo.original_title}</p>
                        </div>
                        <div className="sub">
                            <p>{movieInfo.release_date}</p>
                            <p>{movieInfo.runtime}분</p>
                            <p className="vote">⭐<span>{movieInfo.vote_average} </span>/ 10</p>
                        </div>
                        <div className="genre">
                            {movieInfo.genres && movieInfo.genres.map((it) => (
                                <p key={it.id}>{it.name}</p>
                            ))}
                        </div>
                        <div className="overview">
                            <p>{movieInfo.overview}</p>
                        </div>
                    </Info>
                </MovieCon>
                <Cast>
                    {cast && cast.slice(0, 10).map((it) => (
                        <div key={it.id} className="castbox">
                            <div className="photo"> 
                                {it.profile_path && <img src={`https://image.tmdb.org/t/p/w200/${it.profile_path}`} />}
                            </div>
                            <p className="name">{it.name || it.original_name}</p>
                            <p className="character">({it.character}역)</p>
                        </div>
                    ))}
                </Cast>
            </div>
        </DetailPageWrap>
    );
};

export default DetailPage;

const DetailPageWrap = styled.section`
    position: relative;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .detail_in{
        box-sizing: border-box;
        padding: 16vw 14px 26vw 14px;
        background-color: rgba(0, 0, 0, 0.6);
    }

    @media screen and (min-width:768px) {
        .detail_in{
            padding: 14vw 20px 24vw 20px;
        }
    }
    @media screen and (min-width:1480px) {
        .detail_in{
            padding: 10vw 8vw 20vw 8vw;
        }
    }
`;
const MovieCon = styled.div`
    margin-bottom: 10vw;
    @media screen and (min-width:768px) {
        display: flex;
        margin-bottom: 8vw;
    }
`;
const Poster = styled.div`
    width: 50%;
    margin: 0 auto 5vw auto;
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);

    img{
        width: 100%;
        height: auto;
    }
    @media screen and (min-width:768px) {
        margin: 0;
    }
    @media screen and (min-width:1024px) {
        width: 30%;
    }
    @media screen and (min-width:1480px) {
        width: 25%;
    }
`;
const Info = styled.div`
    .title{
        text-align: center;
        font-weight: 600;
        margin-bottom: 6vw;
        
        h2{
            line-height: 1.4em;
            font-size: var(--font-md);
            margin-bottom: 6px;
        }
        p{
            line-height: 1.4em;
            font-size: var(--font-sm);
            opacity: 0.8;
        }
    }
    .sub, .genre{
        display: flex;
        justify-content: center;
        margin-bottom: 2vw;
        opacity: 0.9;

        p{
            font-size: var(--font-con);
            margin: 0 2vw;
        }
    } 
    .genre p{
        margin: 0 0.8vw;
    }
    .overview{
        margin-top: 10vw;
        p{
            font-size: var(--font-con);
            line-height: 1.5em;
            letter-spacing: -0.3px;
        }
    }

    @media screen and (min-width:768px) {
        box-sizing: border-box;
        width: 50%;
        padding-left: 24px;
        padding-top: 40px;
        .title{
            text-align: left;
            margin-bottom: 30px;
        }
        .sub, .genre{
            justify-content: initial;
            margin-bottom: 20px;

            p{
                margin: 0 14px 0 0;
            }
        }
        .overview{
            margin-top: 40px;
        }
    }
    @media screen and (min-width:1024px) {
        width: 70%;
        padding-left: 34px;
    }
    @media screen and (min-width:1480px) {
        width: 75%;
        padding-left: 40px;
    }
`;
const Cast = styled.div`
    display: flex;
    flex-wrap: wrap;

    .castbox{
        box-sizing: border-box;
        width: 33.33%;
        padding: 0 4px;
        margin-bottom: 4vw;

        .photo{
            margin-bottom: 1.8vw;
            img{
                width: 100%;
                height: auto;
            }
        }
        .name, .character{
            font-size: var(--font-con);
            font-weight: 500;
            line-height: 1.4em;
            letter-spacing: -0.2px;
        }
        .character{
            opacity: 0.8;
            font-weight: 400;
        }
    }
    @media screen and (min-width:768px){
        .castbox{
            width: 25%;
            padding: 0 6px;
            margin-bottom: 40px;
    
            .photo{
                margin-bottom: 20px;
            }
        }
    }
    @media screen and (min-width:1024px){
        .castbox{
            width: 20%;
            padding: 0 8px;
            margin-bottom: 30px;
        }
    }
    @media screen and (min-width:1480px){
        .castbox{
            width: 15%;
            padding: 0 8px;
            margin-bottom: 30px;
        }
    }
`;