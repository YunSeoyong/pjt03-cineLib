const requests = {
    fetchNowPlaying: "movie/now_playing",
    fetchTrending: "/trending/all/week",
    fetchTopRated: "/movie/top_rated",
    fetchUpcoming: "/movie/upcoming",
    fetchActionMovies: "/discover/movie?with_genres=28",
    fetchComedyMovies: "/discover/movie?with_genres=35",
    fetchHorrorMovies: "/discover/movie?with_genres=27",
    fetchRomanceMovies: "/discover/movie?with_genres=10749",
    fetchFantasyMovies: "/discover/movie?with_genres=14",
    fetchScienceFictionMovies: "/discover/movie?with_genres=878",
    fetchDocumentaries: "/discover/movie?with_genres=99",
    fetchDiscoverMovies: "/discover/movie?with_genres=",
}

export default requests;