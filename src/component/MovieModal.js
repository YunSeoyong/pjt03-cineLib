const MovieModal = ({ id, title, year, photo, ageRestriction, director, cast, plot, runTime, rate, closeDetail }) => {
    const clickClose = () => {
        closeDetail(id);
    }

    return (
        <div className="movieModal">
            <div className="modalBg">
                <img src={photo} />
            </div>
            <div className="movieModal_in">
                <div className="md_photo"><img src={photo} /></div>
                <div className="md_info">
                    <div className="md_title">
                        <p className="md_age"><img src={ageRestriction} /></p>
                        <p className="md_tit">{title}</p>
                    </div>
                    <p className="md_year">{new Date(year).toLocaleDateString()}</p>
                    <div className="md_txt1">
                        <p className="md_runtime">{runTime}분</p>
                        <p className="md_rate">&#9733; {rate} / 10</p>
                    </div>
                    <div className="md_txt2">
                        <p>감독 <span>{director}</span></p>
                        <p>출연진 <span>{cast}</span></p>
                    </div>
                    <p className="md_plot">{plot}</p>
                </div>
            </div>
            <p className="md_cancel" onClick={clickClose}><span className="hide">상세보기창 닫기</span></p>
        </div>
    );
};

export default MovieModal;