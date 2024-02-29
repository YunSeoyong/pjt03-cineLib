import { useCallback, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import axios from "../api/axios";
import styled from "styled-components";

import { truncate } from "../utillhooks/truncate";
import { useNavigate } from "react-router";

const MovieRow = ({
    title,
    id,
    fetchUrl,
    path,
}) => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    const fetchMovies = useCallback (async () => {
        try{
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
        } catch(error){
            console.error(error);
        };
    }, [fetchUrl]);
    
    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return (
        <MovieRowWrap>
            <h2 onClick={() => {navigate(`${path}`)}}>{title}</h2>
            <Swiper
                className="slideWrap"
                spaceBetween={14}
                slidesPerView={3}
                modules={[Navigation]}
                navigation
                breakpoints={{
                    720: {
                        spaceBetween: 20,
                        slidesPerView: 4,
                    },
                    1024: {
                        spaceBetween: 24,
                        slidesPerView: 4,
                    },
                    1440: {
                        spaceBetween: 20,
                        slidesPerView: 5,
                    },
                }}
            >
                {
                    movies && movies.map((it) => (
                        <SwiperSlide key={it.id} className="slides" onClick={() => {navigate(`/detail/${it.id}`)}}>
                            <p className="poster">
                                <img 
                                    src={`https://image.tmdb.org/t/p/original/${it.poster_path}`}
                                    alt={it.title || it.original_title}
                                />
                            </p>
                            <p className="title">
                                {truncate(it.title || it.name || it.original_title, 20)}
                            </p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </MovieRowWrap>
    );
};

export default MovieRow;

const MovieRowWrap = styled.section`
    padding-left: 14px;
    margin-bottom: 50px;

    h2{
        margin-bottom: 25px;
        font-size: var(--font-md);
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            color: var(--main-color);
        }
    }
    .slideWrap{
        .slides{
            .poster{
                height: 42vw;
                margin-bottom: 14px;
                cursor: pointer;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: 0.3s;
                }
            }
            .title{
                padding: 0 10px;
                font-size: var(--font-sm);
                font-weight: 500;
                line-height: 1.4em;
                cursor: pointer;
                transition: 0.3s;

            }
            &:hover .title{
                color: var(--main-color);
            }
            &:hover img{
                transform: scale(1.1);
            }
        }
    }
    .swiper-button-prev, .swiper-button-next{
        top: 40%;
        color: #fff;
    }
    .swiper-button-prev::after, .swiper-button-next::after{
        font-size: 32px;
    }
    @media screen and (min-width:720px){
        padding-left: 20px;
        margin-bottom: 70px;

        h2{
            margin-bottom: 38px;
        }
        .slideWrap{
            .slides{
                .poster{
                    height: 34vw;
                    margin-bottom: 20px;
                }
                .title{
                    padding: 0 14px;
                }
            }
        }
    }
    @media screen and (min-width:1024px) {
        margin-bottom: 80px;
        h2{
            margin-bottom: 44px;
        }
        .slideWrap{
            .slides{
                .poster{
                    height: 27vw;
                }
            }
        }
    }
    @media screen and (min-width:1480px) {
        width: 1440px;
        margin: 0 auto 80px auto;
        padding: 0;
        h2{
            margin-bottom: 52px;
        }
        .slideWrap{
            .slides{
                .poster{
                    height: 26vw;
                    max-height: 400px;
                }
            }
        }
    }
`;