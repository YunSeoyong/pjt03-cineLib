import { useState } from "react";

const MovieTop = ({ setCateYear }) => {
    const [selectYear, setSelectYear] = useState('all');

    const clickFilter = (filterYear) => {
        setSelectYear(filterYear);
        setCateYear(filterYear);
    };

    return (
        <section id="movieTop">
            <div className="movieTop_in">
                <h2>YEARS BEST</h2>
                <div className="year_filter">
                    <p
                        onClick={() => (clickFilter('all'))}
                        className={selectYear === 'all' ? 'active' : ''}
                    >
                        전체보기
                    </p>
                    <p
                        onClick={() => (clickFilter(2023))}
                        className={selectYear === 2023 ? 'active' : ''}
                    >
                        2023
                    </p>
                    <p
                        onClick={() => (clickFilter(2022))}
                        className={selectYear === 2022 ? 'active' : ''}
                    >
                        2022
                    </p>
                    <p
                        onClick={() => (clickFilter(2021))}
                        className={selectYear === 2021 ? 'active' : ''}
                    >
                        2021
                    </p>
                    <p
                        onClick={() => (clickFilter(2020))}
                        className={selectYear === 2020 ? 'active' : ''}
                    >
                        2020
                    </p>
                    <p className="filter_arrow"><span className="hide">다음으로</span></p>
                </div>
            </div>
        </section>
    );
};

export default MovieTop;