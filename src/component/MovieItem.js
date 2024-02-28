// MovieItem.js
import { useState } from "react";
import styled from "styled-components";
import { truncate } from "../utillhooks/truncate";

const MovieItem = ({ id, title, original_title, poster_path, release_date, vote_average, vote_count }) => {

    return (
        <MovieLi key={id}>
            <div className="item_photo">
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
            </div>
            <div className="item_text">
                <h4>{title || original_title}</h4>
                <div className="text_bottom">
                    <p className="date">{release_date}</p>
                    <p className="vote">
                        ⭐<span>{vote_average.toFixed(2)}</span> / 10 ({vote_count})
                    </p>
                </div>
            </div>
        </MovieLi>
    );
};

export default MovieItem;

const MovieLi = styled.li`
    box-sizing: border-box;
    width: 50%;
    padding-left: 14px;
    margin-bottom: 12vw;
    cursor: pointer;
    
    .item_photo{
        width: 100%;
        height: 65vw;
        margin-bottom: 3vw;
        overflow: hidden;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.3s;
        }
    }
    .item_text{
        padding: 0 3px;
        
        h4{
            margin-bottom: 2vw;
            font-size: var(--font-sm);
            font-weight: 500;
            line-height: 1.4em;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-break: break-all;
            transition: 0.3s;
        }
        .text_bottom{
            display: flex;
            justify-content: space-between;
            letter-spacing: -0.3px;
            font-size: var(--font-con);
            font-weight: 300;
            opacity: 0.9;

            .vote{
                span{
                    font-weight: 400;
                }
            }
        }
    }
    &:hover .item_text h4{
        color: var(--main-color);
    }
    &:hover .item_photo img{
        transform: scale(1.1);
    }
    @media screen and (min-width:768px){
        width: 33.33%;
        padding-left: 20px;
        margin-bottom: 10vw;
        
        .item_photo{
            height: 45vw;
            margin-bottom: 2.4vw;
        }
        .item_text{
            padding: 0 5px;
            
            h4{
                margin-bottom: 1.5vw;
            }
        }
    }
    @media screen and (min-width:1024px){
        width: 25%;
        padding-left: 20px;
        margin-bottom: 8vw;
        
        .item_photo{
            height: 33vw;
            margin-bottom: 1.5vw;
        }
        .item_text{
            h4{
                margin-bottom: 1.2vw;
            }
        }
    }
    @media screen and (min-width:1440px){
        width: 20%;
        padding: 0 15px;
        margin-bottom: 100px;
        
        .item_photo{
            height: 26vw;
            max-height: 440px;
            margin-bottom: 24px;
        }
        .item_text{
            h4{
                margin-bottom: 18px;
            }
        }
    }
`;