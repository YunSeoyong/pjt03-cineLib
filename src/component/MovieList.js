import MovieItem from "./MovieItem.js";

const MovieList = ({ dummyList, cateYear }) => {
    const filterYearDummy =
        cateYear === 'all' ?
        dummyList
        : dummyList.filter((it) => (new Date(it.year).getFullYear() === cateYear));

    return (
        <section id="movieList">
            <div className="movieList_in">
                <div className="movieBox">
                    {filterYearDummy.map((it) => (
                        <MovieItem key={it.id} {...it} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MovieList;