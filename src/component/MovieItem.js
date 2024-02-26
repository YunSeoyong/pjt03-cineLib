import { useState } from "react";
import MovieModal from "./MovieModal.js";

const MovieItem = ({ id, title, year, photo, ageRestriction, director, cast, plot, runTime, rate }) => {
    const [isModal, setIsModal] = useState(false);
    
    const showDetail = () => {
        setIsModal(true);
    }
    const closeDetail = (i) => {
        setIsModal(false);
    }

    return (
        <div className="movieItem">
            <div className="moviePhoto">
                <img src={photo} />
                <div className="mvOver pc">
                    <button className="btnDetail" onClick={showDetail}>상세보기</button>
                </div>
            </div>
            <div className="movieTxt">
                <div className="mvtTop">
                    <p className="mvAge"><img src={ageRestriction} /></p>
                    <p className="mvTitle">{title}</p>
                </div>
                <div className="mvtBottom">
                    <p>{runTime}분</p>
                    <p className="mvRate">&#9733; {rate} / 10</p>
                </div>
            </div>
            <div className="mvOver mo">
                <button className="btnDetail" onClick={showDetail}>상세보기</button>
            </div>
            <div className={isModal ? 'modalDetail show' : 'modalDetail'}>
                <MovieModal id={id} title={title} year={year} photo={photo} ageRestriction={ageRestriction} director={director} cast={cast} plot={plot} runTime={runTime} rate={rate} closeDetail={closeDetail} />
            </div>
        </div>
    );
};

export default MovieItem;